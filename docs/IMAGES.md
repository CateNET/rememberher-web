# Adding App Screenshots to RememberHer Website

This guide explains how to add your app screenshots to the Hero and Screenshots sections.

## 📁 Directory Structure

```
public/
├── hero/                    # Hero section screenshots
│   ├── hero-1.png          # Front phone (main screen)
│   ├── hero-2.png          # Behind phone (secondary feature)
│   └── hero-3.png          # Furthest phone (tertiary feature)
└── screenshots/            # Screenshots section images
    ├── screenshot-1.png    # Partner management
    ├── screenshot-2.png    # Smart reminders
    ├── screenshot-3.png    # AI gift suggestions
    └── screenshot-4.png    # LoveAI chat
```

## 🎨 Image Specifications

### Recommended Settings:
- **Aspect Ratio**: 9:19.5 (portrait, iPhone-like proportions)
- **Resolution**: 810×1755px minimum (for retina displays)
- **Format**: PNG (with transparency) or JPG
- **File Size**: Optimize before upload (aim for <500KB per image)

### Content Guidelines:
- Show actual app screenshots, not mockups
- Ensure screenshots showcase your best features
- Maintain consistency in style and colors
- Remove any sensitive or personal information

## 📝 Step-by-Step Instructions

### 1. Prepare Your Screenshots

1. Take screenshots from your RememberHer app (iPhone or Android)
2. Edit them to remove sensitive data if needed
3. Resize to match the aspect ratio (9:19.5)
4. Save as PNG or JPG with descriptive filenames

### 2. Add Hero Section Images

1. Place your screenshots in `public/hero/`:
   - `hero-1.png` - Main app screen (will be displayed in front)
   - `hero-2.png` - Secondary feature (displayed behind, tilted)
   - `hero-3.png` - Tertiary feature (displayed furthest, more tilted)

2. The images will automatically appear in the hero section's stacked phone mockups.

### 3. Add Screenshots Section Images

1. Place your screenshots in `public/screenshots/`:
   - `screenshot-1.png` - Partner management screen
   - `screenshot-2.png` - Smart reminders and notifications
   - `screenshot-3.png` - AI-powered gift suggestions
   - `screenshot-4.png` - LoveAI chat assistant

2. The images will automatically appear in the screenshots grid section.

### 4. Verify Your Images

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000` and check:
   - Hero section shows your screenshots in stacked phones
   - Screenshots section displays your images in a grid

3. If images don't appear, check:
   - File names match exactly (case-sensitive)
   - Images are in the correct directories
   - File extensions are `.png` or `.jpg`
   - Browser console for any errors

## 🔄 Fallback Behavior

If images are missing or fail to load, the components will automatically show:
- A phone emoji (📱) placeholder
- The placeholder appears in the phone frame mockup

This ensures the site always looks good, even without images.

## 🚀 Next.js Image Optimization

The components use Next.js `Image` component which automatically:
- Optimizes images for different screen sizes
- Lazy loads images (except hero priority images)
- Serves WebP format when supported
- Resizes images appropriately

## 📱 Taking Good Screenshots

### Tips for Best Results:

1. **Use Real Device Screenshots**: Capture from actual iPhone/Android devices
2. **Remove Status Bar**: Consider removing the status bar for cleaner look
3. **Show Features**: Highlight key features in each screenshot
4. **Consistent Style**: Use similar screen states for consistency
5. **Remove Personal Data**: Ensure no personal information is visible

### Tools for Preparing Screenshots:

- **Figma**: Create mockups or edit screenshots
- **Photoshop/GIMP**: Edit and resize images
- **Screely/Device Frames**: Add device frames (not needed - we provide frames)
- **ImageOptim/TinyPNG**: Compress images for web

## 🎯 Customizing Screenshot Descriptions

To update alt text and descriptions, edit:

- `src/components/marketing/Hero.tsx` - Hero screenshot alt texts
- `src/components/marketing/Screenshots.tsx` - Screenshot alt texts and configuration

## ❓ Troubleshooting

### Images Not Showing

1. **Check file paths**: Ensure images are in `public/hero/` and `public/screenshots/`
2. **Verify filenames**: Names must match exactly (case-sensitive)
3. **Check file extensions**: Use `.png` or `.jpg`
4. **Restart dev server**: Sometimes needed after adding new files
5. **Clear browser cache**: Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Images Look Blurry

1. **Use higher resolution**: Provide images at least 810×1755px
2. **Check compression**: Don't over-compress images
3. **Verify format**: PNG or JPG (not WebP in source)

### Want to Use Different Images

1. Update the file paths in the component files
2. Or rename your image files to match the expected names
3. You can add more screenshots by updating the `screenshots` array

## 📚 Additional Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/api-reference/components/image)
- [Web Image Best Practices](https://web.dev/fast/#optimize-your-images)

