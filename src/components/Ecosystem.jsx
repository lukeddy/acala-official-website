import React from 'react';
import classes from './Ecosystem.module.css';
import { Container } from '../ui-components/Container';
import { Button } from '../ui-components/Button';
import ecosystemImg from '../assets/ecosystem.svg';
import chainlink from '../assets/chainlink.svg';
import chainx from '../assets/chainx.svg';
import dipole from '../assets/dipole.svg';
import plasm from '../assets/plasm.svg';
import polkaWorld from '../assets/polka-world.svg';
import isubsocial from '../assets/isubsocial.svg';
import anpool from '../assets/anpool.svg';
import phala from '../assets/phala-long.svg';
import purestake from '../assets/purestake.png';
import centrifuge from '../assets/centrifuge.svg'
import { ShowAnimation } from '../ui-components/ShowAnimation';

const Item = React.forwardRef(({ name, img, link, onClick }, ref) => (
    <li className={classes.ecosystemItem} onClick={() => onClick(link)} ref={ref}>
        <img src={img} alt={name} />
    </li>
))
const List = ({ list }) => {
    list = list.sort(() => 0.5 - Math.random());
    const onClick = link => window.open(link);
    return (
        <ul className={classes.ecosystemList}>
            {
                list.map((item, index) => (
                    <ShowAnimation delay={index} key={`ecosystem-${index}`}>
                        <Item {...item} onClick={onClick} />
                    </ShowAnimation>
                ))
            }
        </ul>
    );
}
export const Ecosystem = () => {
    const list = [
        { name: 'chainlink', img: chainlink, link: 'https://chain.link' },
        { name: 'chainx', img: chainx, link: 'https://chainx.org/' },
        { name: 'dipole', img: dipole, link: 'https://www.dipole.tech' },
        { name: 'plasm', img: plasm, link: 'https://www.plasmnet.io' },
        { name: 'polka-world', img: polkaWorld, link: 'https://www.polkaworld.org' },
        { name: 'isubsocial', img: isubsocial, link: 'http://subsocial.network' },
        { name: 'anpool', img: anpool, link: 'https://xanpool.com' },
        { name: 'phala', img: phala, link: 'https://phala.network' },
        { name: 'purestake', img: purestake, link: 'https://www.purestake.com', },
        { name: 'centrifuge', img: centrifuge, link: 'https://centrifuge.io', }
    ];
    return (
        <section className={classes.root}>
            <Container>
                <p className={classes.title}>Ecosystem Projects</p>
                <div className={classes.content}>
                    <ShowAnimation>
                        <div className={classes.detail}>
                            <p>
                                This program identifies and supports projects that integrate with Acala’s technologies (aUSD stablecoine, L-DOT staking liquidity, Decentralized Exchange etc). Ecosystem projects will have opportunities for technical and marketing collaborations and beyond.
                            </p>
                            <Button c className={classes.appyLink} link={'https://forms.gle/iYPUrNzSWGmyvPUp6'}>Apply</Button>
                        </div>
                    </ShowAnimation>
                    <ShowAnimation delay={4}>
                        <img src={ecosystemImg} className={classes.image} alt="ecosystem" />
                    </ShowAnimation>
                </div>
                <List list={list} />
            </Container>
        </section>
    );
}