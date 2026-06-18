from PIL import Image, ImageDraw, ImageFont

img = Image.new('RGBA', (100, 100))
draw = ImageDraw.Draw(img)
font = ImageFont.load_default()
try:
    bbox = draw.textbbox((0, 0), "test", font=font)
    print("textbbox success:", bbox)
except Exception as e:
    print("textbbox error:", e)

try:
    draw.chord((20, 20, 100, 100), start=270, end=390, fill=(52, 168, 83, 255))
    print("chord success")
except Exception as e:
    print("chord error:", e)

