---
sidebar_position: 1
---

# Introduction

## Basic knowledge
Grimoire enchantments behave like any other vanilla enchantments:
- An enchantment is applicable for a specific set of items
- An enchantment may conflict with another
- There is maximum level defined
- It can be obtained by trading with villager and wandering trader
- Grimoire enchanted book can be applied to an item using anvil

## Constraint & difference
Grimoire is designed to be a fully server-side mod. Therefore, the lack of client module is a big barrier to add customized stuffs.

### 1. Reliance on custom lore
Because there is no "enchantments" synchronization, when displayed on client, the enchantment is hidden from the item's tooltip. Grimoire overcomes this by defining lore for every custom enchantments.<br/>
Since item lore is manipulated, it likely breaks compatibility with other mods. Besides that, game-masters can no longer define lore like normal. Instead, they have to use a custom "lore" field supported by Grimoire.<br/>
To illustrate:
```
Item tooltip to display:
- Vanilla/Client-side enchantments
- Lore
--+ Grimoire enchantments
--+ Grimoire custom lore
--+ ...
- ...
```

### 2. The lack of suggestion for /enchant
Because there is no "enchantments" synchronization, none of Grimoire enchantments is suggested when using /enchant. When typing the enchantment identifier, it will turn red indicating the "not found" error. <br/>
**However, the command can work since the execution happens on the server**

### 3. Feature addition
Any enchantment must follow the vanilla server implementation, there is no modded stuff. Something cool may be achieved using tricks (which likely to impact the server performance)

### 4. No enchantment table support
There are two reasons:
1. The lack of "enchantments" synchronization as aforementioned
2. It will change the random distribution of vanilla enchantments

### 5. No looting support
Will be supported in near future.

## How to obtain an enchantment?
- Besides using commands (for game masters), normal players can obtain "common" and "uncommon" Grimoire enchantments by trading which requires emeralds and books<br/>
- "rare" and "very rare" enchantments are obtainable via a different method which will soon be implemented.

## Trading cost
Unlike vanilla enchantments, the trading cost from Grimoire is fixed for any enchantments in the same rarity group. To precise, the cost is determined by two factors: the rarity and the enchantment level.<br/>

Current implementation of original trading cost:
```
k = 1 for common
k = 2 for uncommon
k = 5 for rare
k = 10 for very rare
Emeralds = min(64, k * 2 + enchantLevel * 3 + randomInt(5 + enchantLevel * 5 * k))
Book = 1
```

Despite the calculation support for "rare" and "very rare" enchantments, trading is currently disabled for these rarity groups.<br/>
The actual trading cost may be different due to the discount. For further information, check out https://minecraft.fandom.com/wiki/Trading 
