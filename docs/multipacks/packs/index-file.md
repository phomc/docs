---
sidebar_position: 0
---

# Index File
Multipacks requires an index file to understand the pack name, pack version, its source game version and dependencies. The index file (multipacks.index.json) is placed inside pack folder's root:

```
pack folder/
  multipacks.index.json
```

## Full index file
```json
{
    "name": "pack-name",
    "packVersion": "1.0.0",
    "author": "Author's name",
    "description": "This pack is really cool!",
    "sourceGameVersion": "1.19.3",
    "dependencies": [
        "name 'dependency-name'; version >= 1.0.1",
        ...
    ],
    "features": [
        "update_1_20", "bundle"
    ]
}
```

- ``name``: Name (or ID) of your pack. Your pack name must only contains alphanumeric characters (``[A-Za-z0-9]``), underscores (``_``) and dashes (``-``). This value doesn't have to be the same as folder name.
- ``packVersion``: Version of your pack. This is mainly used for repositories, more about this at Repositories section.
- ``author`` (Optional): Author of this pack.
- ``description`` (Optional): Description of this pack.
- ``sourceGameVersion``: The game version that this pack was originally targeted. At this moment, Multipacks doesn't use this value for anything other than "automatically fill in target game version", but in the future, this value might be used for remapping assets to newer game version.
- ``dependencies`` (Optional): A list of [pack queries][1].
- ``features`` (Optional): A list of feature flags. Only useful if you are creating data packs.
  + ``update_1_20``: Update 1.20 features preview.
  + ``bundle``: Bundle item preview.

[1]: ../repositories/query-string
