---
sidebar_position: 0
---

# Introduction
Modifiers are pack files transformation passes, which transforms pack contents. Modifiers can be applied to your pack contents, without affecting files on your pack folder.

## Declaring modifiers
Modifiers can be declared inside ``packFolder/multipacks.modifiers.json``, with JSON array as content:

```json
[]
```

The JSON code above is actually a valid modifiers declaration, but it won't do anything because there's no modifiers to apply. To actually declare a new modifier, you have to add an object inside that array:

```json
[
    {
        "type": "namespace:modifier_id",
        "config": ...
    }
    ...
]
```

- ``type``: Modifier type, which follows the ``namespace:modifier_id`` syntax.
- ``config``: Modifier configuration. Some modifiers may accepts both array and object, others may accepts object only.

## Get more modifiers
Multipacks comes with some default modifiers, but sometimes that's not enough. Extra modifiers can be added to Multipacks through the use of plugins. See Plugins section for more information.
