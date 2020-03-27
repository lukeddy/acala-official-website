import React from 'react';
import classes from './Information.module.css';
import { Button } from '../ui-components/Button';
import { Container } from '../ui-components/Container';
import stableCurrencyIcon from '../assets/stable-currency.svg';
import stakingLiquidityIcon from '../assets/staking-liquidity.svg';
import powerPolkadotIcon from '../assets/power-polkadot.svg';
import InfluenceOwnershipIcon from '../assets/influence-ownership.svg';
import borrowIcon from '../assets/borrow.svg';
import earnIcon from '../assets/earn.svg';
import tradeIcon from '../assets/trade.svg';
import governIcon from '../assets/govern.svg';
import screenshotImg from '../assets/apps-screenshot.svg';
import { Anchor } from '../ui-components/Anchor';
import { ShowAnimation } from '../ui-components/ShowAnimation';

const Token = () => {
    return (
        <div className={classes.token}>
            <p className={classes.tokenDetail}>1 Acala Dollar  =  1 US Dollar</p>
            <p className={classes.tokenExtra}>Ticker : aUSD</p>
            <Button className={classes.tokenBtn} link="https://apps.acala.network/">
                Get Acala Dollar
                <span className={classes.testnet}>(Testnet)</span>
            </Button>
        </div>
    );
};

const DescribeItem = React.forwardRef(({ icon, title, detail }, ref) => {
    return (
        <li className={classes.describeItem} ref={ref}>
            <img src={icon} className={classes.describeIcon} alt={title} />
            <p className={classes.describeTitle}>{title}</p>
            <p className={classes.describeDetail}>{detail}</p>
        </li>
    );
})

const DescribeAcala = ({ describes }) => {
    return (
        <ul className={classes.describe}>
            {
                describes.map((item , index) => (
                    <ShowAnimation delay={index + 1} key={`describe-${index}`}>
                        <DescribeItem {...item} />
                    </ShowAnimation>
                ))
            }
        </ul>
    );
}

const WhatIsAcala = () => {
    const describes = [
        {
            icon: stableCurrencyIcon,
            title: 'Stable Currency',
            detail: 'Multiple-asset-backed decentralized digital currency without volatility. Stable by design, aUSD enables borderless and low-cost value transfer globally across all connected blockchains.'
        },
        {
            icon: stakingLiquidityIcon,
            title: 'Staking Liquidity',
            detail: 'Release staked assets (DOTs) as fungible & liquid assets (L-DOTs), extracting the derivative value of staked assets to fuel DeFi without sacrificing the security of the whole network.'
        },
        {
            icon: powerPolkadotIcon,
            title: 'Powered by Polkadot',
            detail: "Acala Network is secured under Polkadot's shared security model, ensuring high resilience and forkless upgradability."
        },
        {
            icon: InfluenceOwnershipIcon,
            title: 'Influence by Ownership',
            detail: 'A decentralized network governed entirely by Acala Network Token (ACA) holders to achieve a transparent future: a future based on more truth and less trust.'
        }
    ];
    return (
        <div>
            <p className={classes.acalaTitle}>What is Acala？</p>
            <p className={classes.acalaDescribe}>
                Acala Dollar (aUSD) is a decentralized stablecoin that allows users to send and receive USD across any blockchains connected to the Polkadot network.
            </p>
            <DescribeAcala describes={describes} />
        </div>
    );
};

const AcalaFeatures = React.forwardRef((_, ref) => {
    const features = [
        {
            icon: borrowIcon,
            title: 'Borrow',
            detail: 'Borrow aUSD and manage outstanding loans'
        },
        {
            icon: earnIcon,
            title: 'Earn',
            detail: 'Earn interest on aUSD'
        },
        {
            icon: tradeIcon,
            title: 'Trade',
            detail: 'Trade tokens on Decentralized Exchange'
        },
        {
            icon: governIcon,
            title: 'Govern',
            detail: 'Participate in governance by ACA holders'
        }
    ];
    return (
        <div className={classes.features} ref={ref}>
            <ul className={classes.featureList}>
                {
                    features.map(({ icon, title, detail }, index) => (
                        <li className={classes.featureItem} key={`features-${index}`}>
                            <img src={icon} className={classes.featureIcon} alt={title} />
                            <div className={classes.featureContent}>
                                <p className={classes.featureTitle}>{title}</p>
                                <p className={classes.featureDetail}>{detail}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <Button className={classes.goToAppsBtn} suffix={'right-arrow'} link="https://apps.acala.network/">
                <div>
                    GO to App
                    <p className={classes.testnet}>(Testnet)</p>
                </div>
            </Button>
        </div>
    );
});

const AcalaApps = () => {
    return (
        <div>
            <p className={classes.acalaTitle}>Acala Apps</p>
            <p className={classes.acalaDescribe}>An all-in-one DeFi service center</p>
            <div className={classes.acalaAppsContent}>
                <ShowAnimation>
                    <AcalaFeatures />
                </ShowAnimation>
                <ShowAnimation delay={1}>
                    <div className={classes.screenshot} style={{ backgroundImage: `url(${screenshotImg})` }} />
                </ShowAnimation>
            </div>
        </div>
    );
}

export const Infromation = () => {
    return (
        <section className={classes.root}>
            <Container>
                <Token />
                <Anchor id="what-is-acala" />
                <WhatIsAcala />
                <Anchor id="acala-apps" />
                <AcalaApps />
            </Container>
        </section>
    );
}