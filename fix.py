import sys

with open("src/data/articles.js", "r", encoding="utf-8") as f:
    content = f.read()

start_idx = content.find('    {\n        id: "haribhakta-putali-rani"')
end_idx = content.find('    },\n    {\n        id: 1,')

if start_idx != -1 and end_idx != -1:
    article_str = content[start_idx:end_idx + 6]
    content = content[:start_idx] + content[end_idx + 6:]
    last_bracket = content.rfind(']')
    content = content[:last_bracket] + ',\n' + article_str + '\n];\n'
    
    with open("src/data/articles.js", "w", encoding="utf-8") as f:
        f.write(content)
    print("Success")
else:
    print("Failed to find boundaries")
