from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1200, 630
OUTPUT = Path(__file__).resolve().parents[1] / "public" / "og-image.png"

def main():
  img = Image.new("RGB", (WIDTH, HEIGHT), "#08040f")
  draw = ImageDraw.Draw(img)

  for i in range(HEIGHT):
    ratio = i / HEIGHT
    r = int(8 + ratio * (255 - 8))
    g = int(4 + ratio * (128 - 4))
    b = int(15 + ratio * (181 - 15))
    draw.line([(0, i), (WIDTH, i)], fill=(r, g, b))

  title = "RememberHer"
  subtitle = "Never forget the moments that matter"

  try:
    title_font = ImageFont.truetype("arial.ttf", 96)
    subtitle_font = ImageFont.truetype("arial.ttf", 44)
  except OSError:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()

  title_bbox = draw.textbbox((0, 0), title, font=title_font)
  subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)

  title_width = title_bbox[2] - title_bbox[0]
  title_height = title_bbox[3] - title_bbox[1]
  subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
  subtitle_height = subtitle_bbox[3] - subtitle_bbox[1]

  title_x = (WIDTH - title_width) / 2
  title_y = HEIGHT / 2 - title_height
  subtitle_x = (WIDTH - subtitle_width) / 2
  subtitle_y = title_y + title_height + 20

  draw.text((title_x, title_y), title, fill="white", font=title_font)
  draw.text(
    (subtitle_x, subtitle_y), subtitle, fill="#fbc2eb", font=subtitle_font
  )

  OUTPUT.parent.mkdir(parents=True, exist_ok=True)
  img.save(OUTPUT)
  print(f"OG image saved to {OUTPUT}")


if __name__ == "__main__":
  main()

