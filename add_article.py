import sys

new_entry = '''    {
        id: 1786545516000,
        title: "वर्षदिन तिमी बि: जुबिन गर्गलाई श्रद्धाञ्जली",
        excerpt: "भारतीय संगीत जगतका अमर तारा जुबिन गर्गको पहिलो पुण्यतिथिमा भावपूर्ण श्रद्धाञ्जली। ३८,०००+ गीत, ४०+ भाषा, र करोडौं हृदयलाई छोएको एक महान् स्वर।",
        englishSummary: "A heartfelt tribute on the first death anniversary of Zubeen Garg, the legendary Assamese singer, composer, and humanitarian. Known for over 38,000 songs in 40+ languages including 'Ya Ali', he was a cultural icon, philanthropist, and voice of a generation. He passed away on September 19, 2025.",
        content: `<p>भारतीय संगीत जगतका जुबिन यस्ता तारा हुन, जसले आफ्नो उज्यालोले केवल एक भूभागलाई मात्र नभई सम्पूर्ण सांगीतिक संसारलाई आलोकित पारेका छन्।</p><p><em>"जिनियस सधैँ जिनियस — जिनियस कहिल्यै मरेर जाँदैन।" — जुबिन गर्ग</em></p>`,
        author: "कपिल बरठाकुर",
        date: "September 19, 2025",
        readTime: "8 min read",
        image: "/zubeen_varshadin.jpg",
        link: "/shradhanjali/zubeen-garg",
        tags: ["श्रद्धाञ्जली", "Tribute", "Music"]
    },
'''

with open('src/data/articles.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert after the opening bracket line
insert_marker = 'export const articles = ['
idx = content.index(insert_marker) + len(insert_marker)

new_content = content[:idx] + '\r\n\r\n' + new_entry + content[idx:]

with open('src/data/articles.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Done! Articles.js updated.')
