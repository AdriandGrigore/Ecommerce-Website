import React from 'react'
import Navbar from "../components/Navbar"
import HeroCarousel from '../components/HeroCarousel'
import CategoryGrid from '../components/CategoryGrid'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import { Container } from 'react-bootstrap'

function Home() {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            <CategoryGrid />
            <Container
                fluid
                style={{ backgroundColor: "whitesmoke" }}
            >
                <Container>
                    <h1
                        className='display-5 mb-0'
                        style={{ fontWeight: "500" }}
                    >
                        PRODUCT OVERVIEW
                    </h1>
                </Container>
            </Container>
            <ProductList />
            <Footer />
        </>
    )
}

export default Home