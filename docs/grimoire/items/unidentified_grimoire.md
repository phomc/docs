---
sidebar_position: 5
---

# Unidentified Grimoire

Unidentified Grimoire can be obtained using Scriptorium.

![Scriptorium](https://i.imgur.com/rzRXalc.png)

Every Grimoire has intrinsic element which is the gemstone associated. In other words, the type of inkwell will determinate the type of Unidentified Grimoire.<br/>
Intrinsic element is used to determine the output when players reveal the item.

## Reveal Unidentified Grimoire
To identify a Grimoire, right-clicks it with a campfire. The item will turn into an enchanted book with random enchantment and level.

![Campfire](https://i.imgur.com/5j426Sj.png)

## Enchantment randomization algorithm
Enchantment and level is both chosen using roulette selection.<br/>
The important factor in the process is gemstone. Better gemstone gains more advantage.

### Enchantment
First, a pool of Grimoire enchantment is determined from gemstone:
1. Topaz: up to Uncommon enchantments
2. Sapphire: up to Rare enchantments
3. Jade: up to Rare enchantments
4. Musgravite: up to Very Rare enchantments

Then do roulette selection over the pool to pick a candidate. The weight used is the enchantment's rarity weight.

## Level
With the candidate from previous step, we will find its enchantment level. Level determination is a bit more complex.<br/>
First, we find the rarity difference `order(Gemstone's rarity) - order(Enchantment's rarity)`, with rarity order is:
1. order(Common) = 0
2. order(Uncommon) = 1
3. order(Rare) = 2
4. order(Very Rare) = 3

Then, given a is the maximum level and b is the rarity difference, the weight of enchantment level n is `max(0, 1 - (n - 1)/a + b * 0.1) * 100`<br/>
This means that: 
- A better gemstone not only allows rarer enchantments but also better chance to obtain high enchantment levels. For example: We can obtain Poison with any gemstone because Poison is in common rarity group, so for economic reason, Topaz is enough. However, using Sapphire, Jade or even Musgravite allows better chance in reaching maximum level.
- We can not gain advantage with a few enchantments. For example, Rift is a very rare enchantment which is only obtainable using Musgravite. There is no higher gemstone than Musgravite to gain rarity difference.

```
PROBABILITY PER ENCHANTMENT LEVEL
If maximum level = 1
- and rarity diff = 0, then chances per level = 100.00%
- and rarity diff = 1, then chances per level = 100.00%
- and rarity diff = 2, then chances per level = 100.00%
- and rarity diff = 3, then chances per level = 100.00%
If maximum level = 2
- and rarity diff = 0, then chances per level = 66.67%, 33.33%
- and rarity diff = 1, then chances per level = 64.71%, 35.29%
- and rarity diff = 2, then chances per level = 63.16%, 36.84%
- and rarity diff = 3, then chances per level = 61.90%, 38.10%
If maximum level = 3
- and rarity diff = 0, then chances per level = 50.00%, 33.33%, 16.67%
- and rarity diff = 1, then chances per level = 47.83%, 33.33%, 18.84%
- and rarity diff = 2, then chances per level = 46.15%, 33.33%, 20.51%
- and rarity diff = 3, then chances per level = 44.83%, 33.33%, 21.84%
If maximum level = 4
- and rarity diff = 0, then chances per level = 40.00%, 30.00%, 20.00%, 10.00%
- and rarity diff = 1, then chances per level = 37.93%, 29.31%, 20.69%, 12.07%
- and rarity diff = 2, then chances per level = 36.36%, 28.79%, 21.21%, 13.64%
- and rarity diff = 3, then chances per level = 35.14%, 28.38%, 21.62%, 14.86%
If maximum level = 5
- and rarity diff = 0, then chances per level = 33.33%, 26.67%, 20.00%, 13.33%, 6.67%
- and rarity diff = 1, then chances per level = 31.43%, 25.71%, 20.00%, 14.29%, 8.57%
- and rarity diff = 2, then chances per level = 30.00%, 25.00%, 20.00%, 15.00%, 10.00%
- and rarity diff = 3, then chances per level = 28.89%, 24.44%, 20.00%, 15.56%, 11.11%
If maximum level = 6
- and rarity diff = 0, then chances per level = 28.57%, 23.81%, 19.05%, 14.29%, 9.52%, 4.76%
- and rarity diff = 1, then chances per level = 26.83%, 22.76%, 18.70%, 14.63%, 10.57%, 6.50%
- and rarity diff = 2, then chances per level = 25.53%, 21.99%, 18.44%, 14.89%, 11.35%, 7.80%
- and rarity diff = 3, then chances per level = 24.53%, 21.38%, 18.24%, 15.09%, 11.95%, 8.81%
```
