import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import OpenAccount from '../../OpenAccount.jsx';
import Education from './Education'


const HomePage = () => {
    return (
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education/>
            <OpenAccount />
        </>
    )
}

export default HomePage