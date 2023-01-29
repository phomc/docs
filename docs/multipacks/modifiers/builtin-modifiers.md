---
sidebar_position: 1
---

# Built-in Modifiers
Built-in modifiers allows you to include configuration from other files and add multiple configurations for a single modifier pass.

## Include configurations from other files
You can include configurations from other files by using ``include``:

```json
{
    ...
    "config": {"include": "assets/namespace/my_modifier_config.json"}
}
```

Included configuration files will be filtered when bundling.

## Multiple configurations
``config`` for this modifier supports JSON array, which allows you to add multiple configurations:

```json
{
    ...
    "config": [
        {"include": "..."},
        {"configData": "..."}
        ...
    ]
}
```
