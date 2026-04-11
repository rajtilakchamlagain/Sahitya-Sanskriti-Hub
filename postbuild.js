import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');

// Define the SEO configuration for each route
const SEO_CONFIG = {
    '/nepali-sahitya': {
        title: 'नेपाली साहित्य | विस्तृत परिचय र विश्लेषण | Sahitya Sanskriti Hub',
        description: 'नेपाली साहित्यको इतिहास, विकासक्रम र आधुनिक प्रवृत्तिहरूको विस्तृत अध्ययन। नेपाली कविता, कथा र नाटकहरूको गहन विश्लेषण र समालोचना।',
        keywords: 'नेपाली साहित्य, नेपाली कविता, नेपाली कविता संग्रह, नेपाली कविताको अर्थ, नेपाली कविताको व्याख्या',
        schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "नेपाली साहित्य: एक विस्तृत परिचय",
            "description": "नेपाली साहित्यको इतिहास, विकासक्रम र आधुनिक प्रवृत्तिहरूको विस्तृत अध्ययन।",
            "author": { "@type": "Person", "name": "Sahitya Sanskriti Hub" },
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "नेपाली साहित्यका आदिकवि को हुन्?",
                    "acceptedAnswer": { "@type": "Answer", "text": "नेपाली साहित्यका आदिकवि भानुभक्त आचार्य हुन्। उनले रामायणलाई नेपाली भाषामा अनुवाद गरेर ठूलो योगदान दिए。" }
                },
                {
                    "@type": "Question",
                    "name": "'मुनामदन' कसको कृति हो?",
                    "acceptedAnswer": { "@type": "Answer", "text": "'मुनामदन' महाकवि लक्ष्मीप्रसाद देवकोटा द्वारा रचित खण्डकाव्य हो, जुन नेपाली साहित्यको सबैभन्दा लोकप्रिय कृति मानिन्छ。" }
                },
                {
                    "@type": "Question",
                    "name": "गद्य र पद्य साहित्यमा के फरक छ?",
                    "acceptedAnswer": { "@type": "Answer", "text": "लय र छन्दमा लेखिएको साहित्य 'पद्य' हो भने, व्याकरणिक संरचना र स्वतन्त्र प्रवाहमा लेखिएको साहित्य 'गद्य' हो。" }
                },
                {
                    "@type": "Question",
                    "name": "आधुनिक नेपाली कथाका प्रवर्तक को हुन्?",
                    "acceptedAnswer": { "@type": "Answer", "text": "आधुनिक नेपाली कथाका प्रवर्तक गुरुप्रसाद मैनाली हुन्। उनको 'नासो' कथासंग्रह अत्यन्त चर्चित छ。" }
                },
                {
                    "@type": "Question",
                    "name": "नेपाली साहित्यको अध्ययन कसरी सुरु गर्ने?",
                    "acceptedAnswer": { "@type": "Answer", "text": "सुरुवात गर्नका लागि मुनामदन, घुम्ने मेचमाथि अन्धो मान्छे, र नासो जस्ता सरल र उत्कृष्ट कृतिहरू पढ्नुहोस्。" }
                }
            ]
        }
    },
    '/nepali-kavita': {
        title: 'नेपाली कविता | आधुनिक र शास्त्रीय संग्रह | Nepali Poetry',
        description: 'नेपाली कविताको भण्डार। आधुनिक, शास्त्रीय र समकालीन नेपाली कविताहरूको संग्रह र विश्लेषण।',
        keywords: 'नेपाली कविता, नेपाली साहित्य, कविता संग्रह',
        schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "नेपाली कविता: सिद्धान्त र सिर्जना",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "कवितामा 'विम्ब' भनेको के हो?",
                    "acceptedAnswer": { "@type": "Answer", "text": "विम्ब (Image) भनेको शब्दहरू मार्फत पाठकको मनमा चित्र कोर्ने कला हो। जस्तै: 'घामको झुल्का' ले आशाको विम्ब दिन्छ।" }
                },
                {
                    "@type": "Question",
                    "name": "गजल र कवितामा के फरक छ?",
                    "acceptedAnswer": { "@type": "Answer", "text": "गजलमा 'रदिफ' र 'काफिया' को नियम हुन्छ र यो शेरहरूमा लेखिन्छ। कविता स्वतन्त्र हुन्छ वा छन्दमा हुन्छ।" }
                },
                {
                    "@type": "Question",
                    "name": "नेपाली साहित्यका प्रमुख महिला कविहरू को हुन्?",
                    "acceptedAnswer": { "@type": "Answer", "text": "पारिजात (विष्णु कुमारी वाइवा), कुन्ता शर्मा, तोया गुरुङ, र वानिरा गिरी प्रमुख महिला हस्ताक्षर हुन्।" }
                },
                {
                    "@type": "Question",
                    "name": "छन्द कविता कसरी लेख्ने?",
                    "acceptedAnswer": { "@type": "Answer", "text": "छन्द कविता लेख्न गण, मात्रा, र यतिको ज्ञान हुनुपर्छ। यो पिंगल शास्त्रको नियममा आधारित हुन्छ।" }
                },
                {
                    "@type": "Question",
                    "name": "कविता विश्लेषणका आधारहरू के हुन्?",
                    "acceptedAnswer": { "@type": "Answer", "text": "मूल भाव, भाषा शैली, अलङ्कार, विम्ब, र लय विधानको आधारमा कविताको विश्लेषण गरिन्छ।" }
                }
            ]
        }
    },
    '/nepali-kavita-arth': {
        title: 'नेपाली कविताको अर्थ र व्याख्या | Poem Analysis',
        description: 'कविताको अर्थ कसरी लेख्ने? सप्रसंग व्याख्या गर्ने सरल तरिका र नमूना विश्लेषण।',
        keywords: 'नेपाली कविताको अर्थ, नेपाली कविताको व्याख्या, विश्लेषण',
        schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "नेपाली कविताको अर्थ र व्याख्या",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "भाव विस्तार र सप्रसंग व्याख्यामा के फरक छ?",
                    "acceptedAnswer": { "@type": "Answer", "text": "भाव विस्तारमा केवल अर्थ र सन्देशमा जोड दिइन्छ, तर सप्रसंग व्याख्यामा 'कुन पाठबाट लिइएको हो' भन्ने सन्दर्भ खुलाउनु अनिवार्य हुन्छ।" }
                },
                {
                    "@type": "Question",
                    "name": "कविताको 'मूल भाव' कसरी पत्ता लगाउने?",
                    "acceptedAnswer": { "@type": "Answer", "text": "कविता पूरै पढेपछि कविले दिन खोजेको मुख्य सन्देश वा केन्द्रीय विचार नै मूल भाव हो।" }
                },
                {
                    "@type": "Question",
                    "name": "परीक्षामा कति लामो व्याख्या लेख्ने?",
                    "acceptedAnswer": { "@type": "Answer", "text": "सामान्यतया ५ अंकको प्रश्नका लागि १५०-२०० शब्दको व्याख्या उपयुक्त हुन्छ।" }
                },
                {
                    "@type": "Question",
                    "name": "प्रतीक (Symbol) भनेको के हो?",
                    "acceptedAnswer": { "@type": "Answer", "text": "कुनै अमूर्त कुरालाई बुझाउन प्रयोग गरिने मूर्त वस्तु नै प्रतीक हो। जस्तै: 'बाघ' क्रुरताको प्रतीक हुन सक्छ।" }
                },
                {
                    "@type": "Question",
                    "name": "शब्द चयनको महत्व के छ?",
                    "acceptedAnswer": { "@type": "Answer", "text": "सहि शब्द चयनले भावनालाई शशक्त बनाउँछ। 'मृत्यु' र 'देहावसान' उस्तै अर्थ लागे पनि प्रयोगको सन्दर्भ फरक हुन्छ।" }
                }
            ]
        }
    },
    '/culture': {
        title: 'नेपाली संस्कृति र परम्परा | Culture & Heritage',
        description: 'नेपाली संस्कृति, चाडपर्व, र मौलिक परम्पराहरूको खोजी। भाषा, भेषभूषा र सामाजिक मूल्यमान्यताहरूको विस्तृत अध्ययन।',
        keywords: 'नेपाली संस्कृति, Nepali Culture, चाडपर्व, रीतिरिवाज',
        schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "नेपाली संस्कृति र परम्परा",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "नेपाललाई किन 'चाडपर्वहरूको देश' भनिन्छ?",
                    "acceptedAnswer": { "@type": "Answer", "text": "किनभने यहाँ विभिन्न जातजाति र धर्मका मानिसहरूले वर्षैभरी ५० भन्दा बढी चाडपर्वहरू हर्षोल्लासका साथ मनाउँछन्।" }
                },
                {
                    "@type": "Question",
                    "name": "'वसुधैव कुटुम्बकम्' को अर्थ के हो?",
                    "acceptedAnswer": { "@type": "Answer", "text": "यसको अर्थ 'सारा संसार नै मेरो परिवार हो' भन्ने हुन्छ, जुन नेपाली संस्कृतिको मूल दर्शन हो।" }
                },
                {
                    "@type": "Question",
                    "name": "देउडा गीत कहाँ प्रचलित छ?",
                    "acceptedAnswer": { "@type": "Answer", "text": "देउडा गीत र नाच नेपालको सुदूरपश्चिम र मध्यपश्चिम क्षेत्रमा अत्यन्त प्रचलित छ।" }
                },
                {
                    "@type": "Question",
                    "name": "कुमारी प्रथा भनेको के हो?",
                    "acceptedAnswer": { "@type": "Answer", "text": "कुमारी प्रथा नेवारी संस्कृतिमा जीवित देवीको रूपमा बालिकालाई पुज्ने परम्परा हो। यो विश्वकै अनौठो परम्परा मानिन्छ।" }
                },
                {
                    "@type": "Question",
                    "name": "हाम्रो संस्कृति कसरी जोगाउन सकिन्छ?",
                    "acceptedAnswer": { "@type": "Answer", "text": "आफ्नो भाषा बोल्ने, चाडपर्व मनाउने, र नयाँ पुस्तालाई यसबारे जानकारी दिने गरेमा संस्कृति जिवित रहन्छ।" }
                }
            ]
        }
    },
    '/author/dr-tilak-sarmah': {
        title: 'Dr. Tilak Sarmah | Biography & Works | Sahitya Sanskriti Hub',
        description: 'Biography, literary contributions, and research works of Dr. Tilak Sarmah. Explore his Nepali poems, cultural essays, and philosophical writings.',
        keywords: 'डॉ तिलक सरमाह, Dr Tilak Sarmah, Tilak Sarmah works, Nepali Literature',
        schema: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dr. Tilak Sarmah",
            "datePublished": "2026-02-16",
            "description": "Scholar, Poet, and Cultural Historian specializing in Nepali Literature.",
            "image": "https://sahityasanskriti.online/profile.jpg",
            "jobTitle": "Professor & Author",
            "url": "https://sahityasanskriti.online/author/dr-tilak-sarmah",
            "sameAs": [
                "https://youtube.com/@purbanchalkiawaz9384?si=JRemSKAE4NqrJgNr",
                "https://sahityasanskriti.online"
            ],
            "worksFor": {
                "@type": "Organization",
                "name": "Sahitya Sanskriti Hub"
            }
        }
    },
    '/modern-nepali-kavita': {
        title: 'आधुनिक नेपाली कविता | Modern Nepali Poetry Trends',
        description: 'आधुनिक नेपाली कविताका विशेषताहरू, प्रयोगवादी धारा, र समकालीन कविहरूको योगदान। भूपि शेरचन देखि विप्लव ढकाल सम्मको यात्रा।',
        keywords: 'आधुनिक नेपाली कविता, Modern Nepali Poetry, भूपि शेरचन, प्रयोगवाद'
    },
    '/classical-nepali-sahitya': {
        title: 'शास्त्रीय नेपाली साहित्य | Classical Nepali Literature',
        description: 'भानुभक्त, मोतीराम र लेखनाथ पौड्यालको योगदान। संस्कृत छन्द, वीर गाथा र भक्ति धाराको विस्तृत चर्चा।',
        keywords: 'शास्त्रीय नेपाली साहित्य, Classical Nepali Literature, भानुभक्त आचार्य, लेखनाथ पौड्याल'
    },
    '/nepali-poets-overview': {
        title: 'प्रमुख नेपाली कविहरू | Famous Nepali Poets Biography',
        description: 'भानुभक्त, देवकोटा, लेखनाथ, पारिजात र अन्य महान नेपाली कविहरूको संक्षिप्त जीवनी र मुख्य कृतिहरूको सङ्ग्रह।',
        keywords: 'नेपाली कविहरू, Nepali Poets, भानुभक्त आचार्य, लक्ष्मीप्रसाद देवकोटा, पारिजात'
    },
    '/nepali-literary-movements': {
        title: 'नेपाली साहित्यिक आन्दोलनहरू | Literary Movements in Nepal',
        description: 'तेस्रो आयाम, झर्रोवादी आन्दोलन, र राल्फा आन्दोलन। नेपाली साहित्यलाई परिवर्तन गर्ने ऐतिहासिक अभियानहरूको जानकारी।',
        keywords: 'नेपाली साहित्यिक आन्दोलन, Tesro Aayam, Ralfa Movement, Boot Polish Movement'
    },
    '/hi/nepali-sahitya': {
        title: 'नेपाली साहित्य और कविता: एक परिचय | Dr. Tilak Sarmah',
        description: 'नेपाली साहित्य और संस्कृति का विस्तृत परिचय। आधुनिक नेपाली कविता का अर्थ और डॉ. तिलक सरमाह की रचनाओं का विश्लेषण।',
        keywords: 'नेपाली साहित्य, नेपाली कविता, नेपाली कविता का अर्थ, साहित्य और संस्कृति, आधुनिक नेपाली साहित्य, Nepali Sahitya in Hindi',
        schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "नेपाली साहित्य और कविता: एक परिचय",
            "inLanguage": "hi",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "क्या नेपाली और हिंदी साहित्य में समानता है?",
                    "acceptedAnswer": { "@type": "Answer", "text": "जी हाँ, दोनों भाषाओं की लिपि देवनागरी है और व्याकरण में भी काफी समानता है। प्रेमचंद और समकालीन नेपाली साहित्यकारों के लेखन में सामाजिक यथार्थवाद का समान प्रभाव देखा जा सकता है。" }
                },
                {
                    "@type": "Question",
                    "name": "हिंदी पाठकों के लिए सर्वश्रेष्ठ नेपाली पुस्तक कौन सी है?",
                    "acceptedAnswer": { "@type": "Answer", "text": "महाकवि देवकोटा की 'मुनामदन' सबसे लोकप्रिय है। इसका हिंदी अनुवाद आसानी से उपलब्ध है और यह प्रेम और त्याग की एक अद्भुत गाथा है。" }
                },
                {
                    "@type": "Question",
                    "name": "नेपाली साहित्य के 'शेक्सपियर' किसे कहा जाता है?",
                    "acceptedAnswer": { "@type": "Answer", "text": "लक्ष्मीप्रसाद देवकोटा को उनकी बहुमुखी प्रतिभा के कारण अक्सर यह उपाधि दी जाती है। उन्होंने महाकाव्य, खंडकाव्य, निबंध और नाटक सभी विधाओं में उत्कृष्ट रचनाएँ की हैं。" }
                },
                {
                    "@type": "Question",
                    "name": "भारत में नेपाली साहित्य की क्या स्थिति है?",
                    "acceptedAnswer": { "@type": "Answer", "text": "नेपाली भारत की आठवीं अनुसूची में शामिल 22 भाषाओं में से एक है। दार्जिलिंग, सिक्किम और असम में नेपाली साहित्य का एक बहुत बड़ा और समृद्ध इतिहास रहा है。" }
                },
                {
                    "@type": "Question",
                    "name": "डॉ. तिलक सरमाह का मुख्य शोध कार्य क्या है?",
                    "acceptedAnswer": { "@type": "Answer", "text": "डॉ. सरमाह ने असमिया और नेपाली लोक-संस्कृति के तुलनात्मक अध्ययन पर काम किया है। उनकी कविताएँ पूर्वोत्तर भारत की साझी विरासत को दर्शाती हैं。" }
                }
            ]
        }
    },
    '/as/nepali-sahitya': {
        title: 'নেপালী সাহিত্য আৰু সংস্কৃতি | Dr. Tilak Sarmah',
        description: 'নেপালী সাহিত্যৰ ইতিহাস আৰু আধুনিক কবিতাৰ বিশ্লেষণ। ড° তিলক শৰ্মাৰ ৰচনা আৰু নেপালী সংস্কৃতিৰ ওপৰত এক দৃষ্টিপাত।',
        keywords: 'নেপালী সাহিত্য, নেপালী কবিতা, নেপালী কবিতাৰ অৰ্থ, সাহিত্য আৰু সংস্কৃতি, ড° তিলক শৰ্মা, Assamese Nepali Literature',
        schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "নেপালী সাহিত্য আৰু সংস্কৃতি",
            "inLanguage": "as",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "অসমীয়া আৰু নেপালী সাহিত্যৰ মাজত কি সাদৃশ্য আছে?",
                    "acceptedAnswer": { "@type": "Answer", "text": "দুয়োটা ভাষাৰেই মূল উৎস সংস্কৃত। শংকৰদেৱ আৰু ভানুভক্তৰ ভক্তি ধাৰাৰ কবিতাত যথেষ্ট মিল দেখা যায়। অসমৰ মাটিত ৰচিত নেপালী সাহিত্যত ব্ৰহ্মপুত্ৰ আৰু পাহাৰৰ কথা একেলগে পোৱা যায়।" }
                },
                {
                    "@type": "Question",
                    "name": "অসমৰ প্ৰখ্যাত নেপালী সাহিত্যিক কোনসকল?",
                    "acceptedAnswer": { "@type": "Answer", "text": "হৰিভক্ত কটুৱাল, লীলা বাহাদুৰ ছেত্ৰী, আৰু ড° তিলক শৰ্মা অন্যতম। তেখেতসকলৰ ৰচনাই অসমীয়া সাহিত্যৰ ভঁৰালো চহকী কৰিছে।" }
                },
                {
                    "@type": "Question",
                    "name": "নেপালী সাহিত্য পঢ়িবলৈ কোনখন কিতাপ ভাল?",
                    "acceptedAnswer": { "@type": "Answer", "text": "'মনামদন' আৰু 'বঁসাই' (উপন্যাস) পঢ়িবলৈ অতি সহজ আৰু জনপ্ৰিয়। এইবোৰৰ অসমীয়া অনুবাদো বজাৰত উপলব্ধ হৈছে।" }
                },
                {
                    "@type": "Question",
                    "name": "ড° তিলক শৰ্মাৰ কবিতাত কি বিশেষত্ব আছে?",
                    "acceptedAnswer": { "@type": "Answer", "text": "তেখেতৰ কবিতাত প্ৰকৃতি প্ৰেম, মানৱতা আৰু আধ্যাত্মিকতাৰ ত্ৰিবেনী সংগম ঘটিছে। তেখেতে শব্দৰ জৰিয়তে শান্তিৰ বাৰ্তা বিলাই দিয়ে।" }
                },
                {
                    "@type": "Question",
                    "name": "নেপালী ভাষা অসমৰ শিক্ষা ব্যৱস্থাত আছেনে?",
                    "acceptedAnswer": { "@type": "Answer", "text": "হয়, অসমৰ বহুতো বিদ্যালয় আৰু মহাবিদ্যালয়ত নেপালী ভাষাক এটা ঐচ্ছিক বিষয় বা মেজৰ বিষয় হিচাপে পঢ়ুৱা হয়। গুৱাহাটী বিশ্ববিদ্যালয়তো ইয়াৰ পাঠ্যক্ৰম আছে।" }
                }
            ]
        }
    },
    '/en/nepali-literature': {
        title: 'Nepali Literature & Poetry: An Overview | Dr. Tilak Sarmah',
        description: 'Explore the rich history of Nepali Literature (Sahitya) and Poetry (Kavita). An analysis of Himalayan poetry and modern cultural trends.',
        keywords: 'Nepali Poetry, Nepali Literature, Nepali Poem Meaning, Himalayan Poetry',
        schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Nepali Literature & Poetry: An Overview",
            "inLanguage": "en",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the most famous Nepali literary work?",
                    "acceptedAnswer": { "@type": "Answer", "text": "'Muna Madan' by Laxmi Prasad Devkota is arguably the most famous. It is a heartbreaking ballad about migration, love, and sacrifice that resonates with every Nepali." }
                },
                {
                    "@type": "Question",
                    "name": "Is Nepali literature available in English?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes, many classic and modern works have been translated. 'The Blue Mimosa' (Shirishko Phool) by Parijat and works by Manjushree Thapa are widely available in English." }
                },
                {
                    "@type": "Question",
                    "name": "Who is known as the 'Wordsworth of Nepal'?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Lekhnath Paudyal is often compared to Wordsworth due to his profound love for nature and his ability to weave natural imagery into his classical verses." }
                },
                {
                    "@type": "Question",
                    "name": "What are the main themes of Nepali poetry?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Nature, patriotism (Bir Ras), social injustice, and existentialism are common themes. Modern poetry often explores the complexities of Identity and Diaspora life." }
                },
                {
                    "@type": "Question",
                    "name": "Where can I read Dr. Tilak Sarmah's poems?",
                    "acceptedAnswer": { "@type": "Answer", "text": "You can read selected poems of Dr. Tilak Sarmah right here on Sahitya Sanskriti Hub. We feature his key works along with analysis and translations." }
                }
            ]
        }
    }
};

async function injectSEO() {
    if (!fs.existsSync(DIST_DIR)) {
        console.error("❌ DIST directory not found. Run 'npm run build' first.");
        process.exit(1);
    }

    const template = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');

    for (const [route, config] of Object.entries(SEO_CONFIG)) {
        console.log(`Processing ${route}...`);

        // Prepare Directory
        const routeDir = path.join(DIST_DIR, route.substring(1)); // remove leading slash
        // Handle nested paths (e.g. /hi/nepali-sahitya)
        fs.mkdirSync(routeDir, { recursive: true });

        // Inject Metadata
        let html = template;

        // 1. Replace Title
        html = html.replace(/<title>.*?<\/title>/, `<title>${config.title}</title>`);

        // 2. Replace Description (if exists, or inject)
        if (html.includes('<meta name="description"')) {
            html = html.replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${config.description}"`);
        } else {
            html = html.replace('</head>', `<meta name="description" content="${config.description}">\n</head>`);
        }

        // 3. Inject JSON-LD Schema
        if (config.schema) {
            const schemaScript = `<script type="application/ld+json">${JSON.stringify(config.schema)}</script>`;
            html = html.replace('</head>', `${schemaScript}\n</head>`);
        }

        // 4. Inject Canonical
        const canonicalTag = `<link rel="canonical" href="https://sahityasanskriti.online${route}" />`;
        html = html.replace('</head>', `${canonicalTag}\n</head>`);

        // 5. Inject Hreflang Tags (Multilingual SEO)
        // Set of alternates for the main literature pages
        const alternates = [
            { lang: "ne", href: "https://sahityasanskriti.online/nepali-sahitya" },
            { lang: "hi", href: "https://sahityasanskriti.online/hi/nepali-sahitya" },
            { lang: "as", href: "https://sahityasanskriti.online/as/nepali-sahitya" },
            { lang: "en", href: "https://sahityasanskriti.online/en/nepali-literature" },
            { lang: "x-default", href: "https://sahityasanskriti.online/nepali-sahitya" }
        ];

        // Only inject alternates for relevant pages (the main pillar group)
        if (['/nepali-sahitya', '/hi/nepali-sahitya', '/as/nepali-sahitya', '/en/nepali-literature'].includes(route)) {
            const hreflangTags = alternates.map(alt =>
                `<link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`
            ).join('\n');
            html = html.replace('</head>', `${hreflangTags}\n</head>`);
        }

        // Write index.html for this route
        fs.writeFileSync(path.join(routeDir, 'index.html'), html);
        console.log(`✅ Generated static HTML for ${route}`);
    }
}

injectSEO();
