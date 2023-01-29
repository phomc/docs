---
description: Atlases modifiers are used to add atlas sources to targeted atlas file.
---

# Atlases
- Type ID: ``multipacks:builtin/atlases``
- This is built-in modifier. See [this page](./builtin-modifiers) for more information.
- This modifier is only present in Java Edition 1.19.3+.

Atlases modifiers are used to add atlas sources to targeted atlas file. [Java Edition 1.19.3](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-19-3) introduces texture atlas files, which improves the textures load performance. [Java Edition Snapshot 23w04a](https://www.minecraft.net/en-us/article/minecraft-snapshot-23w04a) introduces a way to permutates textures using atlases.

## Configuration
```json
{
    "atlas": "minecraft:atlas_id",
    "sourceType": "...",
    ...
}
```

- ``atlas``: Atlas file to modify.
- ``sourceType``: Type of atlas sources.
  + ``directory``: Add sprites from directory.
  + ``single``: Add a single sprite from given file path.
  + ``filter``: Filters all sprite names using Java Pattern.
  + ``paletted_permutations``: Permutations with color palette.

### ``directory``
```json
{
    ...
    "sourceType": "directory",
    "sourceDir": "namespace:my_textures_dir",
    "prefix": "cool_prefix/"
}
```

Assuming a folder have this structure:
```
assets/namespace/
  atlases/
  textures/
    my_textures_dir/
      filename_inside_dir.png
```

- ``sourceDir``: Namespaced path to folder. The actual path will be ``assets/namespace/textures/my_textures_dir``
- ``prefix``: Prefix that will be appended at the start of file names. The result namespaced path to sprite will be ``namespace:cool_prefix/filename_inside_dir``.

### ``single``
```json
{
    ...
    "sourceType": "single",
    "resource": "assets/namespace/textures/cool_texture",
    "sprite": "namespace:new_sprite_name"
}
```

- ``resource``: Path to texture.
- ``sprite``: The sprite ID for this texture. The default value is from ``resource`` field.

### ``filter``
```json
{
    "sourceType": "filter",
    "namespacePattern": "[A-Za-z0-9]*",
    "pathPattern": "prefix_(.*)_suffix"
}
```

- ``namespacePattern``: Pattern to check namespaces.
- ``pathPattern``: Pattern to check paths.

### ``paletted_permutations``
:::info New Feature (23w04a)
This atlas source type is only available in Snapshot 23w04a.
:::

```json
{
    "sourceType": "paletted_permutations",
    "textures": [
        "namespace:trims/models/armor/custom_trim",
        "namespace:trims/models/armor/custom_trim_leggings"
    ],
    "paletteKey": "minecraft:trims/color_palettes/trim_palette",
    "permutations": {
        "quartz": "minecraft:trims/color_palettes/quartz",
        "iron": "minecraft:trims/color_palettes/iron",
        "gold": "minecraft:trims/color_palettes/gold",
        "diamond": "minecraft:trims/color_palettes/diamond",
        "netherite": "minecraft:trims/color_palettes/netherite",
        "redstone": "minecraft:trims/color_palettes/redstone",
        "copper": "minecraft:trims/color_palettes/copper",
        "emerald": "minecraft:trims/color_palettes/emerald",
        "lapis": "minecraft:trims/color_palettes/lapis",
        "amethyst": "minecraft:trims/color_palettes/amethyst"
	}
}
```

- ``paletteKey``: The palette keys bitmap (More info about this in subsection).
- ``permutations``: A list of color palettes, combines with palette keys bitmap creates a key-color pair. The object key is the suffix for sprites in ``textures``, with underscore (``_``) appended before that suffix.
- ``textures``: A list of textures with palette keys in it.

#### Palette keys and color palettes
!["Palette Permutations" by @nahkd123](@site/static/img/multipacks/palette_permutation.png)

**Key colors** are defined in palette keys bitmap, which maps colors from color palettes to that key color.

Assume the palette keys and color palette looks like this:

```
paletteKey.png, 4x1:
[#000000][#000001][#000002][#000003]

colorPalette.png, 4x1:
[#000000][#551732][#AA7856][#FFCEDF]
```

The atlas source will maps ``#000000`` to ``#000000``, ``#000001`` to ``#551732``, ``#000002`` to ``#AA7856`` and ``#000003`` to ``#FFCEDF``.

You then use those key colors inside your textures:

```
my_texture.png, 4x4:
[#000000][#000001][#000001][#000000]
[#000001][#000002][#000003][#000001]
[#000001][#000003][#000002][#000001]
[#000000][#000001][#000001][#000000]
```

The atlas source will create a new ``my_texture_suffix`` sprite (assuming you have ``permutations.suffix``), which looks like this:

```
my_texture_suffix.png, 4x4:
[#000000][#551732][#551732][#000000]
[#551732][#AA7856][#FFCEDF][#551732]
[#551732][#FFCEDF][#AA7856][#000001]
[#000000][#551732][#551732][#000000]
```
