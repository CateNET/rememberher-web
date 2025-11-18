from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1200, 630
OUTPUT = Path(__file__).resolve().parents[1] / "public" / "og-image.png"

# Safe padding to prevent cutoff
PADDING = 80

def draw_heart(draw, center_x, center_y, size, fill_color):
    """Draw a heart shape at the given center position"""
    x, y = center_x, center_y
    # Heart shape using two circles and a triangle
    radius = size * 0.35
    # Left circle
    draw.ellipse([x - size * 0.5, y - size * 0.3, x, y + size * 0.2], fill=fill_color)
    # Right circle
    draw.ellipse([x, y - size * 0.3, x + size * 0.5, y + size * 0.2], fill=fill_color)
    # Bottom triangle (pointed bottom)
    points = [
        (x - size * 0.5, y),
        (x + size * 0.5, y),
        (x, y + size * 0.6),
    ]
    draw.polygon(points, fill=fill_color)

def main():
    # Create image with brand dark background
    img = Image.new("RGB", (WIDTH, HEIGHT), "#0a0d1a")
    draw = ImageDraw.Draw(img)
    
    # Add subtle gradient background (dark indigo to purple)
    for i in range(HEIGHT):
        ratio = i / HEIGHT
        # Gradient from #0a0d1a to #1a1b2e
        r = int(10 + ratio * (26 - 10))
        g = int(13 + ratio * (27 - 13))
        b = int(26 + ratio * (46 - 26))
        draw.line([(0, i), (WIDTH, i)], fill=(r, g, b))
    
    # Add subtle radial gradient overlay (pink/purple glow in center)
    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    center_x, center_y = WIDTH // 2, HEIGHT // 2
    
    # Create radial glow
    for radius in range(500, 0, -20):
        alpha = int(8 * (1 - radius / 500))
        if alpha > 0:
            overlay_draw.ellipse(
                [center_x - radius, center_y - radius, center_x + radius, center_y + radius],
                fill=(255, 128, 181, alpha)  # Pink glow
            )
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    draw = ImageDraw.Draw(img)
    
    # Text content
    title_part1 = "Remember"
    title_part2 = "Her"
    subtitle = "Never forget the moments that matter"
    
    # Try to load fonts
    title_font = None
    subtitle_font = None
    
    # Try different font paths
    font_paths = [
        "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/calibri.ttf",
        "arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    
    for font_path in font_paths:
        try:
            title_font = ImageFont.truetype(font_path, 90)  # Slightly smaller for safety
            subtitle_font = ImageFont.truetype(font_path, 40)  # Slightly smaller
            break
        except (OSError, IOError):
            continue
    
    if title_font is None:
        # Fallback to default
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # Calculate text dimensions with proper bbox
    title1_bbox = draw.textbbox((0, 0), title_part1, font=title_font)
    title2_bbox = draw.textbbox((0, 0), title_part2, font=title_font)
    subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    
    title1_width = title1_bbox[2] - title1_bbox[0]
    title1_height = title1_bbox[3] - title1_bbox[1]
    title2_width = title2_bbox[2] - title2_bbox[0]
    title2_height = title2_bbox[3] - title2_bbox[1]
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    subtitle_height = subtitle_bbox[3] - subtitle_bbox[1]
    
    # Calculate total content width (heart + spacing + text)
    heart_size = 160  # Smaller heart for better balance
    heart_spacing = 60  # Space between heart and text
    total_text_width = title1_width + title2_width + 10  # 10px spacing between words
    total_content_width = heart_size + heart_spacing + total_text_width
    
    # Center everything horizontally
    content_start_x = (WIDTH - total_content_width) // 2
    
    # Heart position (left side of centered content)
    heart_x = content_start_x + heart_size // 2
    heart_y = HEIGHT // 2
    
    # Add glow around heart first
    glow_overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_overlay)
    for i in range(8):
        glow_size = heart_size + 15 + i * 8
        alpha = 25 - i * 3
        if alpha > 0:
            glow_draw.ellipse(
                [heart_x - glow_size // 2, heart_y - glow_size // 2, 
                 heart_x + glow_size // 2, heart_y + glow_size // 2],
                fill=(255, 23, 68, alpha)
            )
    img = Image.alpha_composite(img.convert("RGBA"), glow_overlay).convert("RGB")
    draw = ImageDraw.Draw(img)
    
    # Draw the heart
    draw_heart(draw, heart_x, heart_y, heart_size, "#ff1744")  # Vibrant red
    
    # Add highlight on heart
    highlight_overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    highlight_draw = ImageDraw.Draw(highlight_overlay)
    highlight_draw.ellipse(
        [heart_x - heart_size * 0.25, heart_y - heart_size * 0.4,
         heart_x - heart_size * 0.05, heart_y - heart_size * 0.2],
        fill=(255, 255, 255, 60)
    )
    img = Image.alpha_composite(img.convert("RGBA"), highlight_overlay).convert("RGB")
    draw = ImageDraw.Draw(img)
    
    # Text position (right side of centered content)
    text_start_x = content_start_x + heart_size + heart_spacing
    
    # Calculate total text block height
    text_block_height = title1_height + 35 + subtitle_height  # 35px spacing between title and subtitle
    
    # Center text block vertically
    text_block_y = (HEIGHT - text_block_height) // 2
    
    # Title Y position
    title_y = text_block_y
    
    # Ensure text fits within bounds
    max_text_x = WIDTH - PADDING
    if text_start_x + total_text_width > max_text_x:
        # Scale down if needed
        scale = (max_text_x - text_start_x) / total_text_width
        text_start_x = max_text_x - (total_text_width * scale)
    
    # Draw "Remember" in white
    draw.text((text_start_x, title_y), title_part1, fill="white", font=title_font)
    
    # Draw "Her" in on-brand pink to match site accents
    her_x = text_start_x + title1_width + 10  # 10px spacing
    her_color = "#ff80b5"  # Brand pink
    draw.text((her_x, title_y), title_part2, fill=her_color, font=title_font)
    
    # Draw subtitle - centered under the title
    subtitle_x = text_start_x
    subtitle_y = title_y + title1_height + 35
    
    # Ensure subtitle fits
    if subtitle_x + subtitle_width > WIDTH - PADDING:
        subtitle_x = WIDTH - PADDING - subtitle_width
    
    draw.text(
        (subtitle_x, subtitle_y), subtitle, fill="#b3b3b3", font=subtitle_font
    )
    
    # Add subtle decorative gradient lines at the bottom (within safe zone)
    for i in range(2):
        y_pos = HEIGHT - 60 + i * 15
        for x in range(PADDING, WIDTH - PADDING, 2):
            ratio = ((x - PADDING) / (WIDTH - 2 * PADDING)) * 2 - 1  # -1 to 1
            intensity = max(0, 1 - abs(ratio))
            alpha = int(12 * intensity)
            if alpha > 0:
                color = (
                    int(255 * intensity),
                    int(128 * intensity),
                    int(181 * intensity)
                )
                draw.line([(x, y_pos), (x + 1, y_pos)], fill=color)
    
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUTPUT, "PNG", optimize=True)
    print(f"OG image saved to {OUTPUT}")
    print(f"Image dimensions: {WIDTH}x{HEIGHT}")
    print(f"Safe padding: {PADDING}px on all sides")

if __name__ == "__main__":
    main()
