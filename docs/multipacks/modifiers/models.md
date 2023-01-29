---
description: Models modifiers are used to add custom item models without having to declare ``custom_model_data`` predicate manually.
---

# Models
- Type ID: ``multipacks:builtin/models``
- This is built-in modifier. See [this page](./builtin-modifiers) for more information.

Models modifiers are used to add custom item models without having to declare ``custom_model_data`` predicate manually.

## Prerequisites
- A valid model JSON file for base item and custom item.

## Configuration
```json
{
    "id": "namespace:custom_item_id",
    "model": "namespace:item/custom_item_model",
    "item": "minecraft:item_id"
}
```

- ``id``: ID for this custom item model. Mainly used by Spigot plugins to obtain custom model numerical ID.
- ``model``: Location to custom model.
- ``item``: Item model to inject ``custom_model_data`` predicate. This item model must be present in your pack.
