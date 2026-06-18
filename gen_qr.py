import qrcode
from PIL import Image, ImageDraw, ImageFont
import os

# Create base QR Code
qr = qrcode.QRCode(
    version=4, # adjust for size
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=2,
)
qr.add_data('upi://pay?pa=gokulsanth33010@okicici&pn=Gokul&am=0')
qr.make(fit=True)

img_qr = qr.make_image(fill_color="black", back_color="white").get_image().convert('RGBA')

# Create a white circle background for the logo
circle_size = 120
circle_bg = Image.new('RGBA', (circle_size, circle_size), (255, 255, 255, 0))
draw_circle = ImageDraw.Draw(circle_bg)
draw_circle.ellipse((0, 0, circle_size, circle_size), fill=(255, 255, 255, 255))
# Add border to circle
draw_circle.ellipse((0, 0, circle_size, circle_size), outline=(230, 230, 230, 255), width=2)

# Draw a dummy GPay icon inside the circle using overlapping colored pie slices
draw_circle.pieslice((20, 20, 100, 100), start=30, end=150, fill=(234, 67, 53, 255)) # Red
draw_circle.pieslice((20, 20, 100, 100), start=150, end=270, fill=(251, 188, 5, 255)) # Yellow
draw_circle.pieslice((20, 20, 100, 100), start=270, end=390, fill=(52, 168, 83, 255)) # Green
draw_circle.ellipse((35, 35, 85, 85), fill=(66, 133, 244, 255)) # Blue center

pos = ((img_qr.size[0] - circle_size) // 2, (img_qr.size[1] - circle_size) // 2)
img_qr.paste(circle_bg, pos, circle_bg)

# Add Text below QR
final_width = img_qr.size[0]
final_height = img_qr.size[1] + 60
final_img = Image.new('RGBA', (final_width, final_height), (245, 245, 250, 255))

# Fill background with a very light tint
f_draw = ImageDraw.Draw(final_img)
f_draw.rectangle([0,0,final_width,final_height], fill=(247, 249, 252, 255))

# Paste QR
pos_x = (final_width - img_qr.size[0]) // 2
final_img.paste(img_qr, (pos_x, 10))

draw_text = ImageDraw.Draw(final_img)
text = "Scan to pay with any UPI app"

# Try to load a generic font
try:
    font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 20)
except:
    font = ImageFont.load_default()

text_bbox = draw_text.textbbox((0, 0), text, font=font)
text_width = text_bbox[2] - text_bbox[0]

text_pos = ((final_width - text_width) // 2, img_qr.size[1] + 20)
draw_text.text(text_pos, text, font=font, fill=(60, 64, 67, 255))

# Save to public
os.makedirs("public", exist_ok=True)
final_img.save("public/my_qr_code.png")
print("QR Code successfully generated at public/my_qr_code.png!")
