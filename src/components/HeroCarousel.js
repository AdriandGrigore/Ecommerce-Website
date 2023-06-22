import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import manModel from "../assets/manModel.jpg"
import womanModel from "../assets/womanModel.jpg"
import jewelry from "../assets/jewelry.jpg"

function HeroCarousel() {
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