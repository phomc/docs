---
sidebar_position: 3
---

import EffectEnchantmentTable from '@site/src/components/grimoire/EffectEnchantmentTable';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Effect enchantment

Effect enchantments relate to the use of mob effects (potion effects)
- Proactive: Executes by the player for every hit on the target
- Passive: Executes automatically by the armor

### Applicable items
- "Proactive" is a hybrid enchantment, which can applies to melee and ranged weapon
- "Passive" enchantments are for armor only

### Rarity
- "Proactive" enchantment is in common rarity group
- "Passive" enchantment is in **uncommon** rarity group

<hr/>

<Tabs>
  <TabItem value="proactive" label="Proactive" default>
    <EffectEnchantmentTable type="proactive"/>
  </TabItem>
  <TabItem value="passive" label="Passive">
    <EffectEnchantmentTable type="passive"/>
  </TabItem>
</Tabs>
