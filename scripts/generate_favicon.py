from pathlib import Path
from PIL import Image, ImageDraw

SIZES = [16, 32, 48, 64, 128, 192, 256, 512]
FAVICON_SIZES = [16, 32, 48]
APPLE_SIZES = [180]
PUBLIC_DIR = Path(__file__).resolve().parents[1] / "public"

def draw_heart(draw, center_x, center_y, size, fill_color):
    """Draw a heart shape at the given center position"""
    x, y = center_x, center_y
    # Heart shape using two circles and a triangle
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

def create_icon(size, output_path):
    """Create an icon of the specified size"""
    # Create image with brand dark background
    img = Image.new("RGB", (size, size), "#050814")
    draw = ImageDraw.Draw(img)
    
    # Draw the heart in gold
    heart_size = size * 0.6  # Heart takes 60% of the icon size
    heart_x = size // 2
    heart_y = size // 2
    
    # Add subtle glow around heart
    if size >= 64:
        glow_overlay = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        glow_draw = ImageDraw.Draw(glow_overlay)
        for i in range(4):
            glow_size = heart_size + 3 + i * 2
            alpha = 30 - i * 7
            if alpha > 0:
                glow_draw.ellipse(
                    [heart_x - glow_size // 2, heart_y - glow_size // 2, 
                     heart_x + glow_size // 2, heart_y + glow_size // 2],
                    fill=(229, 168, 85, alpha)
                )
        img = Image.alpha_composite(img.convert("RGBA"), glow_overlay).convert("RGB")
        draw = ImageDraw.Draw(img)
    
    # Draw the heart
    draw_heart(draw, heart_x, heart_y, heart_size, "#E5A855")
    
    # Save the icon
    output_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(output_path, "PNG", optimize=True)
    print(f"Created {output_path.name} ({size}x{size})")

def main():
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    
    # Generate favicon.ico (save as PNG first, then convert)
    # Next.js prefers PNG favicons, but we'll create an ICO with proper RGBA format
    favicon_size = 32  # Standard favicon size
    img = Image.new("RGBA", (favicon_size, favicon_size), (5, 8, 20, 255))
    draw = ImageDraw.Draw(img)
    heart_size = favicon_size * 0.6
    heart_x = favicon_size // 2
    heart_y = favicon_size // 2
    draw_heart(draw, heart_x, heart_y, heart_size, "#E5A855")
    
    # Save as PNG for Next.js (favicon.png) - Next.js works better with PNG
    favicon_png_path = PUBLIC_DIR / "favicon.png"
    img.save(str(favicon_png_path), "PNG", optimize=True)
    print(f"Created favicon.png ({favicon_size}x{favicon_size})")
    
    # Note: Not generating favicon.ico to avoid Next.js image processing errors
    # Browsers will use favicon.png automatically
    
    # Generate PWA icons
    for size in [192, 512]:
        create_icon(size, PUBLIC_DIR / f"icon-{size}.png")
    
    # Generate Apple touch icon
    create_icon(180, PUBLIC_DIR / "apple-touch-icon.png")
    
    print("\nAll favicons and icons generated successfully!")

if __name__ == "__main__":
    main()

