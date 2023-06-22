import React from 'react'
import Navbar from "../components/Navbar"
import HeroCarousel from '../components/HeroCarousel'
import CategoryGrid from '../components/CategoryGrid'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            <CategoryGrid />
            <Footer />
        </>
    )
}

export default Home