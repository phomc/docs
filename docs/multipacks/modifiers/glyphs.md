---
description: Glyphs modifiers are used to add custom glyphs to fonts.
---

# Glyphs
- Type ID: ``multipacks:builtin/glyphs``
- This is built-in modifier. See [this page](./builtin-modifiers) for more information.

Glyphs modifiers are used to add custom glyphs to fonts. This modifier allows you to, for example, put an image of structure inside your book or create a custom graphical user interface with custom button textures.

## Allocating character spaces
Before this modifier can be applied, it needs a space to store data for glyphs.

```json
{
    "allocate": [
        {"font": "namespace:font_id", "start": "startCharacter", "end": "endCharacter"},
        ...
    ]
}
```

- ``font``: Font that will be used to allocate new glyphs by this modifier.
- ``start``: Start character (Eg: ``\u0000``).
- ``end``: End character (Eg: ``\uFFFF``).

## Space glyph
```json
{
    "id": "namespace:glyph_id",
    "space": 123
}
```

- ``id``: Glyph ID. This will be used by Spigot plugins to obtain character that is linked to this glyph.
- ``space``: Number of game pixels for that this character will be used. Negative values are allowed.

## Bitmap glyph
```json
{
    "id": "namespace:glyph_id",
    "bitmap": "relative/location/to/bitmap.png",
    "ascent": 7,
    "height": 8
}
```

- ``id``: Glyph ID. This will be used by Spigot plugins to obtain character that is linked to this glyph.
- ``bitmap``: Relative location to bitmap image (relatives to current configuration location).
- ``ascent``: Number of pixels to move this glyph vertically.
- ``height``: Height of this glyph.
