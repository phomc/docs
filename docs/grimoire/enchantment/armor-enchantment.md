---
sidebar_position: 7
---

# Armor enchantment
Armor enchantment is exclusive to armor.

<hr/>

# Uncommon

### 1. Aftershock
Damage nearby mobs in the radius of 5x5 when taking fall damage.<br/>
The damage dealt to surroundings is based on the following formula:<br/>
`aftershock damage = fall damage * coefficient`

| Level | Coefficient |
|-------|-------------|
| 1     | 25%         |
| 2     | 50%         |
| 3     | 75%         |
| 4     | 100-125%    |

For any successful trigger, the durability cost equals to `aftershock damage / 4`, rounded down to the nearest integer. Amount of damaged mobs does not matter.

:::caution
Aftershock is for boots only.
:::

<hr/>

# Rare

### 1. Antidote
Every second, there is a chance to degrade a random harmful effects. Degradation will reduce the effect amplifier by 1. For any successful attempt, the item durability will reduce by 1.<br/>
For level 2 and 3, it also removes neutral effects such as bad omen and glowing.

| Level | Chance |
|-------|--------|
| 1     | 10%    |
| 2     | 15%    |
| 3     | 20%    |

### 2. Refill
If the health is below a certain critical level, food will be consumed automatically and instantly! The food is chosen by order, and food with effects will be skipped (except enchanted golden apple)

| Level | Critical level        |
|-------|-----------------------|
| 1     | 20% of maximum health |
| 2     | 40% of maximum health |

:::caution
Refill is for helmet only.
:::
