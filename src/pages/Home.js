import React from 'react'
import Navbar from "../components/Navbar"
import HeroCarousel from '../components/HeroCarousel'
import CategoryGrid from '../components/CategoryGrid'

function Home() {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            <CategoryGrid />
        </>
    )
}

export default Home