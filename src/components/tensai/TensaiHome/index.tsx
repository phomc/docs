import React from 'react';
import styles from './styles.module.css';
import clsx from "clsx";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Keybinding API",
        Svg: require('@site/static/img/keyboard-one.svg').default,
        description: (
            <>
                Advances game control with customizable keybinding API.
            </>
        ),
    },
    {
        title: "VFX API",
        Svg: require('@site/static/img/effects.svg').default,
        description: (
            <>
                Advanced VFX API.<br/>
                From simple to complex effects.
            </>
        ),
    },
    {
        title: "GUI API",
        Svg: require('@site/static/img/platte.svg').default,
        description: (
            <>
                Client-sided GUI for servers.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function TensaiHome(): JSX.Element {
    return (
        <section>
            <div>
                <div className="row">
                    <div className={clsx('col col--8')}>
                        <p>Tensai (天際 / てんさい / Horizon) is a Fabric mod that aims to bridge the gap between client and server. It provides extra APIs for server-side modding, allows developers to create superior plugins, and facilitates a better online gaming experience.</p>
                        <p>The Tensai project includes the following modules:</p>
                        <ul>
                            <li>Fabric mod for client-side</li>
                            <li>Fabric mod for server-side</li>
                            <li>Spigot plugin for server-side</li>
                        </ul>
                    </div>
                    <div className={clsx('col col--4')}>
                        <img src={require('@site/static/img/tensai-bg.jpg').default}/>
                        <p>Photo by <a href="https://unsplash.com/@xcrap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">César Couto</a> on <a href="https://unsplash.com/photos/i3KvdtGLOYs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    </div>
                </div>
            </div>

            <div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
