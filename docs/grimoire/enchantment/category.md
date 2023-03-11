---
sidebar_position: 2
---

# Category
There are different ways to group enchantments. The following list taken from the code implementation:

## By item target
1. Melee: sword and axe
2. Ranged: bow, crossbow and trident
3. Armor: helmet, chest-plate, leggings, boots
4. Digger: pickaxe, shovel, hoe, axe

Some enchantments are only usable for a specific item in the set. For example, Digger can only be used for pickaxe.

## By family
1. Attack enchantment
   - A "hybrid" enchantment which can work for melee & ranged weapons
   - For melee, the execution is handled on hitting opponent directly
   - For ranged, the execution is handled when the projectile hits something
2. Effect enchantment: related to mob effects
   1. Proactive: a variant of attack enchantment
   2. Passive: armor-only enchantments
