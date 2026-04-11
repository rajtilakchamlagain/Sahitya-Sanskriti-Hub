import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, BookOpen, User, GraduationCap, ChevronLeft, Languages, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AIProfessorWidget = ({ contextText = "", pageTitle = "" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'ai', text: `नमस्ते! म तपाईँको भर्चुअल प्रोफेसर हुँ। मलाई साहित्य, व्याकरण, वा "${pageTitle}" सम्बन्धी कुनै पनि प्रश्न सोध्न सक्नुहुन्छ। (Hello! I am your virtual professor. Ask me any doubt.)` }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isTranslating, setIsTranslating] = useState(false);
    const [chatMode, setChatMode] = useState(null); // 'context' or 'random'
    const [chatLanguage, setChatLanguage] = useState('Nepali'); // Nepali -> English -> Assamese -> Hindi
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            // Use exact scrollTop instead of scrollIntoView to strictly prevent global viewport jumps
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async (forcedText = null, modeOverride = null) => {
        const userText = forcedText || input.trim();
        if (!userText) return;

        const currentMode = modeOverride || chatMode || 'random';
        if (!chatMode) setChatMode(currentMode);

        // Add user message immediately
        const newMessages = [...messages, { role: 'user', text: userText }];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        if (!apiKey) {
            setTimeout(() => {
                setMessages([...newMessages, { 
                    role: 'ai', 
                    text: '⚠️ **सिस्टम अलर्ट (System Alert)**: मेरो एआई मष्तिष्क अहिले अफलाइन छ। मलाई सक्रिय गर्न वातावरणीय फाइल (.env.local) मा `VITE_GEMINI_API_KEY` राख्नुपर्छ।\n\n*(Admin: Please add your Gemini API Key to enable the live Professor).*' 
                }]);
                setIsLoading(false);
            }, 1000);
            return;
        }

        try {
            // Construct System Instruction - Intellectual & Impressive Professor Style
            let systemInstruction = `You are an incredibly knowledgeable, highly respected Professor of Literature. 
You teach with immense passion, deep intellect, and a welcoming, supportive tone. You are friendly (you can occasionally use 'dost' or 'bhai') but you maintain a sophisticated, academic standard.
Do NOT be overly enthusiatic, "sugarcoated", or use too many emojis. Keep your tone grounded, wise, and highly insightful.
Your goal is to provide deeply impressive, thought-provoking answers that make the student appreciate literature, history, and the art of writing. Break down complex concepts brilliantly using great analogies.

CRITICAL CONSTRAINT: Write clear, highly engaging, and well-structured responses. You do not need to be overly short; be as detailed as necessary to provide an IMPRESSIVE, high-quality academic answer without being boring.
CRITICAL LANGUAGE DEMAND: You MUST respond perfectly in ${chatLanguage}! Do not use any other language to reply.`;

            if (currentMode === 'context') {
                systemInstruction += `\n\nCONTEXT: The student is currently reading an article titled "${pageTitle}". Here is the raw text of the article for you to reference: """${contextText.substring(0, 1500)}""".`;
            }

            // Init Official Google Native SDK
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-2.5-flash",
                systemInstruction: systemInstruction 
            });

            // Construct alternating Chat History 
            const history = messages.slice(1).map(msg => ({
                role: msg.role === 'ai' ? 'model' : 'user',
                parts: [{ text: msg.text }]
            }));

            const chat = model.startChat({
                history: history,
                generationConfig: {
                    temperature: 0.8,
                    maxOutputTokens: 500,
                }
            });

            // Stream beautifully via SDK
            const result = await chat.sendMessageStream(userText);
            let streamedText = "";

            for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                streamedText += chunkText;
                setMessages(prev => {
                    const updated = [...prev];
                    updated[updated.length - 1].text = streamedText;
                    return updated;
                });
            }

        } catch (error) {
            console.error("Professor AI Error Lifecycle:", error);
            // Replace the generic error with a hyper-polite, graceful apology.
            setMessages(prev => {
                const resetMsgs = [...prev];
                // If it crashed during streaming, replace the last appended AI message.
                // If it crashed before stream initiated, push a new one.
                if (resetMsgs[resetMsgs.length - 1].role === 'ai' && resetMsgs[resetMsgs.length - 1].text === '') {
                    resetMsgs[resetMsgs.length - 1].text = 'अरे भाइ! अलिकति प्राविधिक गडबडी भयो (Server Tired)। मलाई एक सेकेन्ड देऊ, अनि फेरि सोध ल? 😅🙏';
                } else if (resetMsgs[resetMsgs.length - 1].role === 'user') {
                     resetMsgs.push({ role: 'ai', text: 'अरे भाइ! अलिकति प्राविधिक गडबडी भयो (Server Tired)। मलाई एक सेकेन्ड देऊ, अनि फेरि सोध ल? 😅🙏' });
                } else {
                     resetMsgs[resetMsgs.length - 1].text += '\n\n [सहजतामा बाधा पुगेकोमा क्षमा चाहन्छु। - Signal Dropped 🙏]';
                }
                return resetMsgs;
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Cycle Chat Language and Overwrite History History Translate
    const toggleLanguage = async () => {
        if (isTranslating || messages.length <= 1) return; 
        
        const languages = ['Nepali', 'English', 'Assamese', 'Hindi'];
        const currentIndex = languages.indexOf(chatLanguage);
        const nextLanguage = languages[(currentIndex + 1) % languages.length];
        
        setChatLanguage(nextLanguage);
        setIsTranslating(true);
        
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (!apiKey) {
            setIsTranslating(false);
            return;
        }

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            // ENFORCE Strict JSON generation to bypass all conversation / markdown format blocks
            const model = genAI.getGenerativeModel({ 
                model: "gemini-2.5-flash",
                generationConfig: { responseMimeType: "application/json" }
            });

            const messagesToTranslate = messages.map((m, i) => ({ ...m, originalIndex: i }))
                                                .filter(m => m.role === 'ai');

            const textArray = messagesToTranslate.map(m => m.text);
            
            const prompt = `Translate this exact JSON array of strings into ${nextLanguage}. Return NOTHING ELSE but the structured JSON array. Array: ${JSON.stringify(textArray)}`;

            const result = await model.generateContent(prompt);
            let rawResponse = result.response.text().trim();
            
            // Bulletproof JSON extractor just in case Gemini hallucinates outside the MIME type
            const match = rawResponse.match(/\[.*\]/s);
            if (match) {
                rawResponse = match[0];
            }

            const translatedArray = JSON.parse(rawResponse);

            if (Array.isArray(translatedArray) && translatedArray.length === messagesToTranslate.length) {
                setMessages(prev => {
                    const newMessages = [...prev];
                    messagesToTranslate.forEach((msg, idx) => {
                        // CRITICAL: Deep clone the specific object to force React to reconcile the DOM difference natively
                        if (translatedArray[idx]) {
                            newMessages[msg.originalIndex] = { 
                                ...newMessages[msg.originalIndex], 
                                text: translatedArray[idx] 
                            };
                        }
                    });
                    return newMessages;
                });
            } else {
                setChatLanguage(chatLanguage); // length mismatch abort
            }

        } catch (error) {
            console.error("Translation Engine Failed:", error);
            setChatLanguage(chatLanguage); // Revert UI
        } finally {
            setIsTranslating(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Action Button - Anime Avatar Style */}
            {!isOpen && (
                <div className="boss-anime-widget" style={{ 
                    position: 'fixed', top: '120px', right: '15px', zIndex: 9999, 
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
                }}>
                    
                    {/* Explicit "Ask a Doubt" Speech Bubble */}
                    <div className="boss-speech-bubble" style={{
                        background: '#ffffff', color: '#8B0000', padding: '6px 12px', borderRadius: '16px',
                        boxShadow: '0 8px 24px rgba(139, 0, 0, 0.15)', border: '1px solid rgba(212, 175, 55, 0.5)',
                        fontWeight: 'bold', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px',
                        animation: 'bubbleFloat 3s infinite ease-in-out', cursor: 'pointer',
                        whiteSpace: 'nowrap', position: 'relative'
                    }} onClick={() => setIsOpen(true)}>
                        <Sparkles className="boss-sparkles-icon" size={14} color="#D4AF37" />
                        <span className="boss-bubble-text">Ask a Doubt?</span>
                        {/* Triangle pointer for bubble (Dynamic via CSS) */}
                        <div className="bubble-pointer-inner" style={{ position: 'absolute' }}></div>
                        <div className="bubble-pointer-outer" style={{ position: 'absolute', zIndex: -1 }}></div>
                    </div>

                    {/* The Boomerang / Anime Animated Avatar Button */}
                    <button
                        className="boss-anime-avatar"
                        onClick={() => setIsOpen(true)}
                        style={{
                            width: '56px', height: '56px', borderRadius: '50%', border: 'none', cursor: 'pointer',
                            background: 'linear-gradient(135deg, #1b263b 0%, #0d1b2a 100%)',
                            boxShadow: '0 8px 24px rgba(13, 27, 42, 0.4), inset 0 0 0 2px rgba(212, 175, 55, 0.6)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
                            animation: 'animeAvatarFloat 2.5s infinite ease-in-out',
                            flexShrink: 0
                        }}
                        aria-label="Ask Professor AI"
                    >
                        {/* Avatar Core */}
                        <div className="boss-anime-core" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <GraduationCap className="boss-cap-icon" size={28} color="#D4AF37" style={{ marginBottom: '-4px' }} />
                            {/* Anime Eyes */}
                            <div className="boss-anime-eyes" style={{ display: 'flex', gap: '6px', background: '#fff', padding: '2px 5px', borderRadius: '10px' }}>
                                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#8B0000', animation: 'animeBlink 4s infinite' }}></div>
                                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#8B0000', animation: 'animeBlink 4s infinite' }}></div>
                            </div>
                        </div>

                        {/* Orbital Magic Rings */}
                        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', 
                                     border: '1px dashed rgba(212, 175, 55, 0.4)', borderRadius: '50%', animation: 'spinRing 10s infinite linear' }}></div>
                        <div style={{ position: 'absolute', top: '-20%', left: '-20%', width: '140%', height: '140%', 
                                     border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '50%', animation: 'spinRing 15s infinite linear reverse' }}></div>
                    </button>

                    <style>
                        {`
                        @media (max-width: 768px) {
                            .boss-anime-widget {
                                top: 12px !important;
                                right: 65px !important; /* Nests perfectly to the left of the mobile Hamburger menu */
                                flex-direction: column-reverse !important; /* Bubble hangs BELOW the Avatar */
                                gap: 6px !important;
                            }
                            .boss-speech-bubble {
                                padding: 2px 8px !important;
                                font-size: 10px !important;
                                border-radius: 8px !important;
                                gap: 2px !important;
                            }
                            .boss-sparkles-icon {
                                width: 10px !important;
                                height: 10px !important;
                            }
                            .bubble-pointer-inner {
                                right: 50% !important; top: -5px !important; bottom: auto !important; transform: translateX(50%) !important;
                                border-left: 5px solid transparent !important; border-right: 5px solid transparent !important;
                                border-bottom: 5px solid #ffffff !important; border-top: none !important;
                            }
                            .bubble-pointer-outer {
                                right: 50% !important; top: -6px !important; bottom: auto !important; transform: translateX(50%) !important;
                                border-left: 6px solid transparent !important; border-right: 6px solid transparent !important;
                                border-bottom: 6px solid rgba(212, 175, 55, 0.5) !important; border-top: none !important;
                            }
                            .boss-anime-avatar {
                                width: 42px !important;
                                height: 42px !important;
                            }
                            .boss-cap-icon {
                                width: 22px !important;
                                height: 22px !important;
                                margin-bottom: -2px !important;
                            }
                            .boss-anime-eyes {
                                padding: 1px 4px !important;
                                gap: 4px !important;
                            }
                            .boss-chat-window {
                                top: 75px !important;
                                right: 10px !important;
                                width: calc(100vw - 20px) !important;
                                height: calc(100vh - 165px) !important; /* Leaves room for bottom nav */
                                max-height: 80vh !important;
                            }
                        }
                        @media (min-width: 769px) {
                            .bubble-pointer-inner {
                                right: 50%; bottom: -6px; top: auto; transform: translateX(50%);
                                border-left: 6px solid transparent; border-right: 6px solid transparent;
                                border-top: 6px solid #ffffff; border-bottom: none;
                            }
                            .bubble-pointer-outer {
                                right: 50%; bottom: -8px; top: auto; transform: translateX(50%);
                                border-left: 7px solid transparent; border-right: 7px solid transparent;
                                border-top: 7px solid rgba(212, 175, 55, 0.5); border-bottom: none;
                            }
                        }
                        @keyframes animeAvatarFloat {
                            0% { transform: translateY(0) scale(1); box-shadow: 0 8px 24px rgba(13, 27, 42, 0.4); }
                            50% { transform: translateY(-8px) scale(1.05); box-shadow: 0 16px 32px rgba(212, 175, 55, 0.3); }
                            100% { transform: translateY(0) scale(1); box-shadow: 0 8px 24px rgba(13, 27, 42, 0.4); }
                        }
                        @keyframes bubbleFloat {
                            0% { transform: translateY(0) rotate(0deg); }
                            50% { transform: translateY(-4px) rotate(-1deg); }
                            100% { transform: translateY(0) rotate(0deg); }
                        }
                        @keyframes animeBlink {
                            0%, 90%, 100% { transform: scaleY(1); }
                            95% { transform: scaleY(0.1); }
                        }
                        @keyframes spinRing {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                        `}
                    </style>
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="boss-chat-window" style={{
                    position: 'fixed',
                    top: '120px', // Drop it nicely from Top Right on Desktop
                    right: '15px',
                    width: 'min(380px, calc(100vw - 30px))', 
                    height: 'max(500px, 70vh)', 
                    maxHeight: 'calc(100vh - 140px)',
                    backgroundColor: 'var(--bg-surface)',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(212,175,55,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 10000,
                    overflow: 'hidden',
                    animation: 'luxFadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                    {/* Header */}
                    <div style={{
                        padding: '20px',
                        background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)',
                        borderBottom: '1px solid rgba(212,175,55,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: '#f0e6d2'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {chatMode && (
                                <button 
                                    onClick={() => {
                                        setChatMode(null);
                                        setMessages([{ role: 'ai', text: `नमस्ते! म तपाईँको भर्चुअल प्रोफेसर हुँ। मलाई साहित्य, व्याकरण, वा "${pageTitle}" सम्बन्धी कुनै पनि प्रश्न सोध्न सक्नुहुन्छ। (Hello! I am your virtual professor. Ask me any doubt.)` }]);
                                        setInput('');
                                    }}
                                    style={{ background: 'transparent', border: 'none', color: '#D4AF37', cursor: 'pointer', padding: 0, marginRight: '4px', opacity: 0.8 }}
                                    title="Go back to options"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                            )}
                            <div style={{ 
                                width: '40px', height: '40px', borderRadius: '50%', 
                                background: 'rgba(212,175,55,0.2)', display: 'flex', 
                                alignItems: 'center', justifyContent: 'center',
                                border: '1px solid #D4AF37'
                            }}>
                                <GraduationCap size={20} color="#D4AF37" />
                            </div>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#D4AF37', fontFamily: 'serif' }}>Professor AI</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#a0aec0', marginTop: '2px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#48bb78' }}></div>
                                    Online & Ready
                                </div>
                            </div>
                        </div>

                        {/* Top Right Action Area */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {/* Translator Toggle */}
                            <button 
                                onClick={toggleLanguage}
                                disabled={isTranslating || messages.length <= 1}
                                style={{ 
                                    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(212,175,55,0.3)', 
                                    color: '#f0e6d2', cursor: (isTranslating || messages.length <= 1) ? 'not-allowed' : 'pointer', 
                                    padding: '4px 8px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '6px',
                                    fontSize: '11px', fontWeight: 'bold', opacity: (isTranslating || messages.length <= 1) ? 0.5 : 1, transition: 'all 0.2s'
                                }}
                                title="Translate entire chat"
                            >
                                {isTranslating ? <Loader2 size={14} className="spin-anim" /> : <Languages size={14} />}
                                {chatLanguage}
                            </button>
                            <style>{`@keyframes spin-anim { 100% { transform: rotate(360deg); } } .spin-anim { animation: spin-anim 1s linear infinite; }`}</style>
                            
                            <button 
                                onClick={() => setIsOpen(false)}
                                style={{ background: 'transparent', border: 'none', color: '#f0e6d2', cursor: 'pointer', opacity: 0.7 }}
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Pre-Chat Selection (If no mode selected and no user messages yet) */}
                    {!chatMode && messages.length === 1 && (
                        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <p style={{ fontSize: '14px', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '8px' }}>
                                What would you like to ask about?
                            </p>
                            <button
                                onClick={() => handleSend(`Please explain a concept from this article: ${pageTitle}`, 'context')}
                                style={{
                                    padding: '16px', borderRadius: '12px', background: 'rgba(212,175,55,0.1)',
                                    border: '1px solid rgba(212,175,55,0.3)', color: 'var(--primary-maroon)',
                                    display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer',
                                    fontWeight: 'bold', transition: 'all 0.2s', textAlign: 'left'
                                }}
                            >
                                <BookOpen size={20} />
                                <div>
                                    <div style={{ fontSize: '14px' }}>Doubt from this Section</div>
                                    <div style={{ fontSize: '11px', opacity: 0.7, fontWeight: 'normal', marginTop: '2px' }}>Contextual help for "{pageTitle}"</div>
                                </div>
                            </button>
                            <button
                                onClick={() => setChatMode('random')}
                                style={{
                                    padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.03)',
                                    border: '1px solid rgba(0,0,0,0.1)', color: 'var(--text-main)',
                                    display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer',
                                    fontWeight: 'bold', transition: 'all 0.2s', textAlign: 'left'
                                }}
                            >
                                <Sparkles size={20} />
                                <div>
                                    <div style={{ fontSize: '14px' }}>Random Doubt</div>
                                    <div style={{ fontSize: '11px', opacity: 0.7, fontWeight: 'normal', marginTop: '2px' }}>Ask any general literary question</div>
                                </div>
                            </button>
                        </div>
                    )}

                    {/* Chat Area */}
                    <div ref={chatContainerRef} style={{
                        flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px',
                        background: 'var(--bg-core)', opacity: (!chatMode && messages.length === 1) ? 0.3 : 1, transition: 'opacity 0.3s'
                    }}>
                        {messages.map((msg, idx) => (
                            <div key={idx} style={{
                                display: 'flex', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row', gap: '12px',
                                alignItems: 'flex-end', animation: 'luxFadeInUp 0.3s ease forwards'
                            }}>
                                <div style={{
                                    width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                                    background: msg.role === 'user' ? 'var(--primary-glow)' : '#1b263b', 
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'
                                }}>
                                    {msg.role === 'user' ? <User size={14} /> : <GraduationCap size={16} color="#D4AF37" />}
                                </div>
                                <div style={{
                                    maxWidth: '75%', padding: '12px 16px', fontSize: '14px', lineHeight: '1.5',
                                    backgroundColor: msg.role === 'user' ? 'var(--primary-maroon)' : 'var(--bg-glass-heavy)',
                                    color: msg.role === 'user' ? '#ffffff' : 'var(--text-main)',
                                    borderRadius: msg.role === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                                    border: msg.role === 'ai' ? '1px solid rgba(212,175,55,0.15)' : 'none',
                                    whiteSpace: 'pre-wrap'
                                }}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        
                        {isLoading && (
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#1b263b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <GraduationCap size={16} color="#D4AF37" />
                                </div>
                                <div style={{
                                    padding: '12px 20px', backgroundColor: 'var(--bg-glass-heavy)',
                                    borderRadius: '20px 20px 20px 4px', border: '1px solid rgba(212,175,55,0.15)',
                                    display: 'flex', gap: '4px'
                                }}>
                                    <div className="typing-dot" style={{ width: 6, height: 6, background: '#D4AF37', borderRadius: '50%', animation: 'blink 1.4s infinite both' }}></div>
                                    <div className="typing-dot" style={{ width: 6, height: 6, background: '#D4AF37', borderRadius: '50%', animation: 'blink 1.4s infinite both 0.2s' }}></div>
                                    <div className="typing-dot" style={{ width: 6, height: 6, background: '#D4AF37', borderRadius: '50%', animation: 'blink 1.4s infinite both 0.4s' }}></div>
                                </div>
                            </div>
                        )}
                        <style>{`@keyframes blink { 0% { opacity: .2; } 20% { opacity: 1; } 100% { opacity: .2; } }`}</style>
                    </div>

                    {/* Input Area */}
                    <div style={{
                        padding: '16px', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)',
                        display: 'flex', gap: '12px', alignItems: 'center', pointerEvents: (!chatMode && messages.length === 1) ? 'none' : 'auto'
                    }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Ask your professor..."
                            disabled={isLoading}
                            style={{
                                flex: 1, padding: '12px 16px', borderRadius: '24px', backgroundColor: 'var(--bg-core)',
                                border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                        <button
                            onClick={() => handleSend()}
                            disabled={!input.trim() || isLoading}
                            style={{
                                width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
                                background: input.trim() ? 'var(--primary-maroon)' : 'rgba(0,0,0,0.05)',
                                color: input.trim() ? '#fff' : 'var(--text-muted)', border: 'none',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: input.trim() ? 'pointer' : 'not-allowed', transition: 'all 0.2s'
                            }}
                        >
                            <Send size={18} style={{ transform: 'translateX(-1px)' }} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIProfessorWidget;
