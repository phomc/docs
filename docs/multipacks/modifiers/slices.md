---
description: Slices modifiers are used to slices big spritesheets into smaller sprites.
---

# Slices
- Type ID: ``multipacks:builtin/slices``
- This is built-in modifier. See [this page](./builtin-modifiers) for more information.

Slices modifiers are used to slices big spritesheets into smaller sprites.

## Configuration
```json
{
    "file": "assets/namespace/textures/my_spritesheet.png",
    "template": ...
}
```

- ``file``: Path to image.
- ``template``: Image slicing template.

### Include template from other file
You can write slicing template to separate file if you want to use this template multiple times:

```json
{
    ...
    "template": {"include": "assets/namespace/textures/my_slicing_template.json"}
}
```

### Template configuration
```json
{
    ...
    "template": {
        "scale": 1,
        "parts": [
            {"storeAt": "./", "name": "prefix_${basename}_suffix.png", "region": {"from": [0, 0], "to": [16, 16]}},
            ...
        ]
    }
}
```

- ``scale`` (Optional): Set the scale of template parts. Default is ``1``.
- ``parts``: A list of template parts.
  + ``storeAt``: Relative location to store sliced sprite. Eg: ``./`` stores the sliced sprite right inside spritesheet folder.
  + ``name``: Name of sliced sprite file (as template string). Assuming ``file`` is ``assets/namespace/textures/cool_spritesheet.png``:
    + ``${basename} == 'cool_spritesheet'``: The name of the file (excluding file extension name).
    + ``${extname} == 'png'``: The extension name of the file.
    + ``${dirname} == 'assets/namespace/textures'``: Path to folder that stores this ``file``.
  + ``region``: The area that this template part will slices. Scales with ``scale`` value.
