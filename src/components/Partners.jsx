import React from 'react';
import classes from './Partners.module.css';
import polychain from '../assets/polychain.svg';
import kr1 from '../assets/kr1.svg';
import p2pCaptital from '../assets/p2p-capital.svg';
import hashkey from '../assets/hashkey.svg';
import snz from '../assets/snz.svg';
import stakeZone from '../assets/stakeZone.svg';
import w3 from '../assets/w.svg';
import goodmore from '../assets/goodmore.svg';
import web3Foundation from '../assets/web3-foundation.svg';
import p2pValidator from '../assets/p-2-p-validator.svg';
import hypersphere from '../assets/hypersphere.svg';
import berkeley from '../assets/berkeley.svg';
import digitalRenaissance from '../assets/digitalRenaissance.svg';
import { Container } from '../ui-components/Container';
import { ShowAnimation } from '../ui-components/ShowAnimation';

const ListItem = React.forwardRef(({ name, img, link, onClick }, ref) => (
    <li className={classes.item} ref={ref} onClick={() => { onClick(link) }}>
        <img src={img} alt={name} />
    </li>
));
const List = ({ list }) => {
    list = list.sort(() => 0.5 - Math.random());
    const onClick = link => link && window.open(link);
    return (
        <ul className={classes.list}>
            {
                list.map((item, index) => (
                    <ShowAnimation delay={index} key={`partners-${index}`}>
                        <ListItem {...item} onClick={onClick} />
                    </ShowAnimation>
                ))
            }
        </ul>
    );
}

export const Partners = () => {
    const list = [
        { name: 'polychain', img: polychain, link: 'https://polychain.capital' },
        { name: 'kr1', img: kr1, link: 'https://kr1.io' },
        { name: 'p2pCaptital', img: p2pCaptital, link: 'https://www.p2pcap.com' },
        { name: 'hashkey', img: hashkey, link: 'https://www.hashkey.com' },
        { name: 'snz', img: snz, link: 'https://snzholding.com' },
        { name: 'web3Capital', img: w3, link: 'https://web3.capital' },
        { name: 'stakeZone', img: stakeZone, link: 'http://stake.zone' },
        { name: 'goodmore', img: goodmore, link: 'https://goodmore.capital' },
        { name: 'web3Foundation', img: web3Foundation, link: 'https://web3.foundation' },
        { name: 'berkeley', img: berkeley, link: 'https://www.xcelerator.berkeley.edu' },
        { name: 'drf', img: digitalRenaissance, link: 'https://drf.ee' },
        { name: 'p2pValidator', img: p2pValidator, link: 'https://p2p.org' },
        { name: 'hypersphere', img: hypersphere, link: 'https://www.hypersphere.ventures' },
    ];

    return (
        <section>
            <Container>
                <div className={classes.title}>Partners</div>
                <List list={list} />
            </Container>
        </section>
    );
}