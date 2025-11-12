import React from 'react'
import Hero from './Hero.jsx'
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";




const ProductsPage = () => {
    return (
        <>
            <Hero />



            <LeftSection
                imageURL="media/images/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />








            <RightSection
            
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            
            
            
            <LeftSection
            
            
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            
            />
            
            
            <RightSection
            
            
            
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            
            />
            
            
            <LeftSection
            
            
            
            
            
            />
            
            
            <Universe />
        </>    
    )
}

export default ProductsPage;