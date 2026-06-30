import sys

file_path = "C:/Users/rajti/Downloads/Projects/Dad/sahitya-hub/src/data/articles.js"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the logo.png specifically for the haribhakta article.
# Since it is the only one using logo.png, we can safely replace the last occurrence or just replace them all if it's the only one.
# Let's replace the first occurrence of `image: "/logo.png"` after `id: "haribhakta-putali-rani"`

start_idx = content.find('id: "haribhakta-putali-rani"')
if start_idx != -1:
    logo_idx = content.find('image: "/logo.png"', start_idx)
    if logo_idx != -1:
        content = content[:logo_idx] + 'image: "/putali-rani.png"' + content[logo_idx + len('image: "/logo.png"'):]
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Success")
    else:
        print("Could not find /logo.png after article id")
else:
    print("Could not find haribhakta article id")
