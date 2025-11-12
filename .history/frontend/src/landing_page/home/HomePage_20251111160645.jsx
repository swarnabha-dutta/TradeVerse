import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats.jsx'
import Pricing from './Pricing.jsx'
import Education from './Education.jsx'
import OpenAccount from '../../OpenAccount.jsx';



const HomePage = () => {
    return (
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    )
}

export default HomePage