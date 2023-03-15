---
sidebar_position: 6
---

# Ranged enchantment
Ranged enchantment is exclusive to ranged weapon.

<hr/>

# Rare

### 1. Explosive
Has a chance to create an explosion at the target destination. If the maximum level is reached, fire will also occur.<br/>
For any successful attempt, the item durability reduces by 3.

| Level | Chance | Radius |
|-------|--------|--------|
| 1     | 50%    | 1.0    |
| 2     | 60%    | 1.5    |
| 3     | 70%    | 2.0    |

:::warning
Explosive is **not compatible** with multishot.
:::

<hr/>

# Very Rare

### 1. Rift
Allows teleporting to the target position. The durability cost is based on the shortest distance from the old to the new locations:<br/> 
`cost = distance * coefficient`

| Level | Coefficient |
|-------|-------------|
| 1     | 0.8         |
| 2     | 0.6         |
| 3     | 0.4         |
| 4     | 0.2         |

:::tip
Rift is a powerful enchantment but costly. Only use it to escape in critical situations.
:::

:::warning
Rift is **not compatible** with infinity, multishot, riptide and exchange.
:::

### 2. Exchange
Exchange position of the shooter and the victim. The durability cost uses Rift's as reference: <br/>
`Exchange cost = Rift cost * 1.75 = distance * coefficient`

| Level | Coefficient |
|-------|-------------|
| 1     | 1.4         |
| 2     | 1.05        |
| 3     | 0.7         |
| 4     | 0.35        |

The projectile is discarded once reaching the victim, so using Exchange does not damage any entity.

:::tip
Exchange is a powerful enchantment but costly, let use it wisely!
:::

:::warning
Exchange is **not compatible** with infinity, multishot, riptide and rift.
:::
