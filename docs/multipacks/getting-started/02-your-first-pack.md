# Your First Pack
## Prerequisites
- Multipacks CLI (see [Getting Multipacks](./getting-multipacks) for more infomation)
- Plain text editor
  + You can use any plain text editor that can edits ``.txt`` files, such as Windows Notepad, ``vim`` or Visual Studio Code. Rich text editors like WordPad might not works with Multipacks.

## Creating pack folder
Create a folder that stores all your files related to your pack. We'll name the folder ``hello-multipacks``, but you can choose any name you want.

## Creating pack index file
Creating a folder alone is not enough, simply because Multipacks doesn't know if that folder contains packs data or it's just an ordinary folder. Therefore, you'll have to create ``multipacks.index.json`` inside your pack folder:

```json
{
	"name": "hello-multipacks",
	"packVersion": "1.0.0",
	"author": "Your name!",
    "description": "Describe what made this pack special...",
	"sourceGameVersion": "1.19.3"
}
```

- ``name``: Name (or ID) of your pack. Your pack name must only contains alphanumeric characters (``[A-Za-z0-9]``), underscores (``_``) and dashes (``-``). This value doesn't have to be the same as folder name.
- ``packVersion``: Version of your pack. This is mainly used for repositories, more about this at Repositories section.
- ``author`` (Optional): Author of this pack.
- ``description`` (Optional): Description of this pack.
- ``sourceGameVersion``: The game version that this pack was originally targeted. At this moment, Multipacks doesn't use this value for anything other than "automatically fill in target game version", but in the future, this value might be used for remapping assets to newer game version.

You can learn more about [pack index in Packs section](../packs/index-file).

Once that was done, your pack folder structure should look like this:

```
hello-multipacks/
  multipacks.index.json
```

:::note
Line with ``/`` suffix means that "file" is a folder. We'll use this suffix for the rest of Multipacks documentations.
:::

## Adding files
Files can be added normally, just like what you would do with normal resources/data packs:

```
hello-multipacks/
  multipacks.index.json
  assets/minecraft/textures/item/diamond_sword.png
  data/mynamespace/recipes/my_recipe.json
  ...
```

Please note that Multipacks only copy files from subfolders (such as ``hello-multipacks/assets/`` or ``hello-multipacks/whateverFolderThisIs/``). Files that's outside subfolders will not be copied. Some files like ``LICENSE`` will be copied to separate folder. Learn more about this in Packs section.

## Bundle your pack
We are almost there! Open your terminal and type ``multipacks-cli build hello-multipacks/.`` and let Multipacks handles the packaging step.

:::note
Replace ``hello-multipacks/.`` with path to your pack folder if you store your pack folder in different location.
:::note

If everything is fine, you should see ``hello-multipacks-v1.0.0.zip`` inside your current working folder (the folder that terminal is currently on).

Type ``cp hello-multipacks-v1.0.0.zip ~/.minecraft/resourcepacks/`` (or ``copy hello-multipacks-v1.0.0.zip %APPDATA%\.minecraft\resourcepacks`` if you are on Windows), open your game and see your newly baked pack inside Resources Packs menu.

---
Congratulations! You just made a pack with Multipacks. A single pack itself is enough to prove that Multipacks is powerful, but with the use of dependencies and modifiers, you can have a nice Multipacks experience.
