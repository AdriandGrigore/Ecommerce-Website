import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import manModel from "../assets/manModel.jpg"
import womanModel from "../assets/womanModel.jpg"
import jewelry from "../assets/jewelry.jpg"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { filterCategory } from '../features/productListSlice'

function HeroCarousel() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleCategoryButton = (payload) => {
        dispatch(filterCategory(payload))
        navigate("/shop")
    }

    return (
        <Carousel
            variant='dark'
            fade
        >
            <Carousel.Item
                interval={3000}
                style={
                    {
                        backgroundImage: `url(${manModel})`,
                        height: "70vh",
                        backgroundPosition: "right"
                    }
                }
            >
                <Carousel.Caption
                    className='h-100 d-flex align-items-center justify-content-center justify-content-md-start'
                >
                    <div
                        className='ms-0 ms-md-5 bg-light bg-opacity-75'
                        style={{ padding: "5.5rem", borderRadius: "16% 84% 58% 42% / 44% 44% 56% 56%", border: "1px solid #e1e1e1" }}
                    >
                        <h1
                            style={{ color: "rgb(2, 84, 100)" }}
                            className='display-1'
                        >
                            Men Collection
                        </h1>
                        <h2
                            className='display-6'
                        >
                            New Season 2023
                        </h2>
                        <Button
                            className='mt-3'
                            variant='warning'
                            size='lg'
                            onClick={() => handleCategoryButton("men's clothing")}
                        >
                            Shop now
                        </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
                interval={3000}
                style={
                    {
                        backgroundImage: `url(${womanModel})`,
                        height: "70vh",
                        backgroundPosition: "right"
                    }
                }
            >
                <Carousel.Caption
                    className='h-100 d-flex align-items-center justify-content-center justify-content-md-start'
                >
                    <div
                        className='ms-0 ms-md-5 bg-light bg-opacity-75'
                        style={{ padding: "5.5rem", borderRadius: "16% 84% 58% 42% / 44% 44% 56% 56%", border: "1px solid #e1e1e1" }}
                    >
                        <h1
                            style={{ color: "rgb(2, 84, 100)" }}
                            className='display-1'
                        >
                            Women Collection
                        </h1>
                        <h2
                            className='display-6'
                        >
                            New Season 2023
                        </h2>
                        <Button
                            className='mt-3'
                            variant='warning'
                            size='lg'
                            onClick={() => handleCategoryButton("women's clothing")}
                        >
                            Shop now
                        </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
                style={
                    {
                        backgroundImage: `url(${jewelry})`,
                        height: "70vh",
                        backgroundPosition: "right"
                    }
                }
            >
                <Carousel.Caption
                    className='h-100 d-flex align-items-center justify-content-center justify-content-md-start'
                >
                    <div
                        className='ms-0 ms-md-5 bg-light bg-opacity-75'
                        style={{
                            padding: "5.5rem", borderRadius: "22% 78% 63% 37% / 45% 46% 54% 55%", border: "1px solid #e1e1e1"
                        }}
                    >
                        <h1
                            style={{ color: "rgb(2, 84, 100)" }}
                            className='display-1'
                        >
                            Jewelry Collection
                        </h1>
                        <h2
                            className='display-6'
                        >
                            New Season 2023
                        </h2>
                        <Button
                            className='mt-3'
                            variant='warning'
                            size='lg'
                            onClick={() => handleCategoryButton("jewelery")}
                        >
                            Shop now
                        </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HeroCarousel