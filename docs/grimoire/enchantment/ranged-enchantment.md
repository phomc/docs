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

### 2. Arrow Rain
Able to shoot multiple arrows at once. Additional arrows have the following properties:
- Its power is always 1.0
- Its damage equals to the first arrow's damage multiplied by `damage percentage`
- Knock-back and fire ability is inherited from the first arrow
- Can be crit arrow if the first arrow is crit and the enchantment is maximized
- Can not be pickup

| Level | Damage Percentage |
|-------|-------------------|
| 1     | 70%               |
| 2     | 80%               |
| 3     | 90%               |
| 4     | 100%              |

The number of additional arrows is `level * 2`, which is also the durability cost of the item. Arrows are arranged in circular facing the position where player is looking at.

:::caution
Arrow Rain is for bow only.
:::

:::warning
Arrow Rain is **not compatible** with rift and exchange.
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

:::warning
Rift is **not compatible** with infinity, multishot, riptide, exchange, telekinesis and arrow rain.
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

:::warning
Exchange is **not compatible** with infinity, multishot, riptide, rift, telekinesis and arrow rain.
:::

### 3. Telekinesis
Moves victim to the shooter. The durability cost uses Rift's as reference.

| Level | Coefficient |
|-------|-------------|
| 1     | 0.8         |
| 2     | 0.6         |
| 3     | 0.4         |
| 4     | 0.2         |

The projectile is discarded once reaching the victim, so using Telekinesis does not damage any entity.

:::warning
Telekinesis is **not compatible** with infinity, riptide, exchange and rift.
:::
