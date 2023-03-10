import React from 'react';
import intToRoman from "@site/src/utility/NumberUtils";

type EffectLevel = {
    effect: string;
    params: Array<number>;
};

const EnchantmentList: Map<string, EffectLevel> = new Map<string, EffectLevel>();
EnchantmentList.set("proactive|grimoire:wither", { effect: "Wither", params: [0.2,0,60,0.3,1,80,0.4,2,80,0.5,3,100,0.5,4,100] })
EnchantmentList.set("proactive|grimoire:poison", { effect: "Poison", params: [0.2,0,60,0.3,1,60,0.4,2,80,0.4,3,100,0.5,4,100] })
EnchantmentList.set("proactive|grimoire:nausea", { effect: "Nausea", params: [0.2,0,60,0.3,1,80,0.4,1,100] })
EnchantmentList.set("proactive|grimoire:frozen", { effect: "Slowness", params: [0.2,0,40,0.2,1,60,0.3,2,80,0.3,3,120,0.4,4,120] })
EnchantmentList.set("proactive|grimoire:blindness", { effect: "Blindness", params: [0.15,0,60,0.3,0,100] })
EnchantmentList.set("proactive|grimoire:levitation", { effect: "Levitation", params: [0.2,0,60,0.2,1,100,0.35,1,150] })
EnchantmentList.set("passive|grimoire:decay", { effect: "Wither", params: [0.3,1,80,0.4,2,80,0.5,3,100,0.6,4,120] })
EnchantmentList.set("passive|grimoire:petrified", { effect: "Slowness", params: [0.2,1,60,0.3,2,80,0.3,3,120,0.4,4,120,0.5,5,150] })
EnchantmentList.set("passive|grimoire:venom", { effect: "Poison", params: [0.3,1,60,0.4,2,80,0.4,3,100,0.5,4,100] })

function EnchantmentEntry({index, data}): JSX.Element {
    const chance = data.params[index * 3];
    const amplifier = data.params[index * 3 + 1];
    const amplifierStr = amplifier == 0 ? "" : " " + intToRoman(amplifier);
    const duration = data.params[index * 3 + 2];

    return (
        <tr>
            <td>Level {index + 1}</td>
            <td>{chance * 100}% chance to affect the target {data.effect}{amplifierStr} for {duration/20.0}s</td>
        </tr>
    );
}

function EffectEnchantment({id}): JSX.Element {
    const entries = [];
    const val = EnchantmentList.get(id);

    for (let i = 0; i < val.params.length / 3; i++) {
        entries.push(<EnchantmentEntry index={i} data={val} />);
    }

    const identifier = id.slice(id.indexOf('|') + 1);
    const name = identifier.slice(identifier.indexOf(':') + 1);

    return (
        <div style={{marginTop: "3rem"}}>
            <h2 style={{textTransform: "capitalize"}}>{name}</h2>
            <table>
                <tr>
                    <th>Level</th>
                    <th>Description</th>
                </tr>
                {entries}
            </table>
        </div>
    );
}

export default function EffectEnchantmentTable({type}): JSX.Element {
    return (
        <div>
            {Array.from(EnchantmentList.keys()).filter((v) => v.startsWith(type)).map((v) => <EffectEnchantment id={v} />)}
        </div>
    );
}
