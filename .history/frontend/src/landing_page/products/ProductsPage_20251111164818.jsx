import React from 'react'
import Hero from '../pricing/Hero.jsx'
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";




const ProductsPage = () => {
    return (
        <>
            <Hero />
            <LeftSection />
            <RightSection />
            <LeftSection />
            <RightSection />
            <LeftSection />
            <Universe />
        </>    
    )
}

export default ProductsPage;