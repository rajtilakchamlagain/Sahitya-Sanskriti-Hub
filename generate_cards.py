import os
import urllib.request
import subprocess
import sys

# Ensure Pillow is installed
try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("Pillow not found. Installing...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageDraw, ImageFont

# Setup directories
os.makedirs("social_cards/output", exist_ok=True)

# Load Windows System Fonts directly
try:
    # Nirmala UI handles Devanagari beautifully on Windows
    font_nepali = ImageFont.truetype("C:\\Windows\\Fonts\\Nirmala.ttf", 64) 
    # Georgia gives that premium serif look
    font_english = ImageFont.truetype("C:\\Windows\\Fonts\\georgiai.ttf", 54) # Italic Georgia
    # Arial for the UI elements
    font_ui = ImageFont.truetype("C:\\Windows\\Fonts\\arial.ttf", 28)
except Exception as e:
    print("Error loading system fonts:", e)
    font_nepali = ImageFont.load_default()
    font_english = ImageFont.load_default()
    font_ui = ImageFont.load_default()

cards = [
    {
        "id": 1,
        "bg": "#1a1f24", # Slate
        "nepali": "पहाडको छातीमा कोरिएको इतिहास, बतासले कहिल्यै मेट्न सक्दैन।",
        "english": "History carved into the chest of the mountain\ncan never be erased by the wind.",
        "text_color_np": "#e5e5e5",
        "text_color_en": "#d4af37" # Gold
    },
    {
        "id": 2,
        "bg": "#FFFBF5", # Parchment
        "nepali": "खुकुरीको चमकले होइन, मौनताले वीरको कथा भन्छ।",
        "english": "It is not the flash of the blade, but the silence after,\nthat tells the warrior's tale.",
        "text_color_np": "#1c1c1c",
        "text_color_en": "#6e6e6e"
    },
    {
        "id": 3,
        "bg": "#2c3e2e", # Deep Olive
        "nepali": "माटो छुटे पनि, मनको देउराली सधैं आफ्नै गाउँमा हुन्छ।",
        "english": "Even when the soil is left behind, the shrine of the mind\nforever rests in the home village.",
        "text_color_np": "#f0f0c9",
        "text_color_en": "#c4a35a"
    },
    {
        "id": 4,
        "bg": "#FFFBF5", # Parchment
        "nepali": "संस्कृति भनेको लगाउने लुगा होइन, बाँच्ने शैली हो।",
        "english": "Culture is not the garment you wear,\nbut the rhythm by which you live.",
        "text_color_np": "#1e3b2e",
        "text_color_en": "#b58900"
    },
    {
        "id": 5,
        "bg": "#0f070b", # Obsidian (Website Dark Mode color)
        "nepali": "अक्षरहरू कहिल्यै जल्दैनन्, यदि तिनले सत्य बोकेका छन् भने।",
        "english": "Letters never burn,\nprovided they carry the weight of truth.",
        "text_color_np": "#fcf8f9",
        "text_color_en": "#f59e0b"
    }
]

def draw_wrapped_text(draw, text, font, fill, max_width, x_center, y_start):
    # We pre-wrapped standard breaks with \n in english. Let's respect them.
    hard_lines = text.split('\n')
    lines = []
    
    for hline in hard_lines:
        words = hline.split()
        current_line = []
        for word in words:
            current_line.append(word)
            bbox = draw.textbbox((0,0), " ".join(current_line), font=font)
            line_width = bbox[2] - bbox[0]
            if line_width > max_width:
                current_line.pop()
                lines.append(" ".join(current_line))
                current_line = [word]
        if current_line:
            lines.append(" ".join(current_line))
            
    y = y_start
    line_height = font.size * 1.5
    for line in lines:
        bbox = draw.textbbox((0,0), line, font=font)
        line_width = bbox[2] - bbox[0]
        x = x_center - (line_width / 2)
        draw.text((x, y), line, font=font, fill=fill)
        y += line_height
    return y

width, height = 1080, 1920
max_width = width * 0.75 # 75% safe area margin
x_center = width / 2

for card in cards:
    img = Image.new('RGB', (width, height), color=card["bg"])
    draw = ImageDraw.Draw(img)
    
    # Calculate starting Y height dynamically
    start_y = height * 0.35 # Start slightly above center
    
    # Draw Top Logo Watermark
    branding = "S A H I T Y A   S A N S K R I T I"
    branding_bbox = draw.textbbox((0,0), branding, font=font_ui)
    draw.text(((width - (branding_bbox[2]-branding_bbox[0]))/2, 180), branding, font=font_ui, fill=card["text_color_en"])

    # Draw Nepali Text
    next_y = draw_wrapped_text(draw, card["nepali"], font_nepali, card["text_color_np"], max_width, x_center, start_y)
    
    # Draw Elegant Separator
    next_y += 80
    draw.line((x_center - 120, next_y, x_center + 120, next_y), fill=card["text_color_en"], width=2)
    next_y += 80
    
    # Draw English Text
    next_y = draw_wrapped_text(draw, card["english"], font_english, card["text_color_en"], max_width, x_center, next_y)
    
    # Draw URL at Bottom
    url = "sahityasanskriti.online"
    url_bbox = draw.textbbox((0,0), url, font=font_ui)
    draw.text(((width - (url_bbox[2]-url_bbox[0]))/2, height - 200), url, font=font_ui, fill=card["text_color_en"])
    
    # Add subtle border
    draw.rectangle([60, 60, width-60, height-60], outline=card["text_color_en"], width=1)
    
    output_path = f"social_cards/output/card_{card['id']}.png"
    img.save(output_path)
    print(f"Generated {output_path}")

print("✅ All 5 quote cards successfully generated!")
