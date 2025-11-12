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
                imageURL="media/images/console.png"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <LeftSection
                imageURL="media/images/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            
            
            <RightSection
            
            
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
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
            
            
            <Universe />
        </>    
    )
}

export default ProductsPage;