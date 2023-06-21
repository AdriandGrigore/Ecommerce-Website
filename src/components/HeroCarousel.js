import React from 'react'
import { Button, Carousel, Image } from 'react-bootstrap'
import manModel from "../assets/manModel.jpg"
import womanModel from "../assets/womanModel.jpg"
import jewelry from "../assets/jewelry.jpg"

function HeroCarousel() {
    return (
        <Carousel
            variant='dark'
        >
            <Carousel.Item interval={1000}>
                <Image
                    fluid
                    style={{ minHeight: "91vh", maxWidth: "100vw" }}
                    src={manModel}
                    className='w-100 object-fit-cover carousel-images'
                    alt="First slide"
                />
                <Carousel.Caption
                    className='h-100 d-flex align-items-center justify-content-center justify-content-md-start'
                >
                    <div
                        className='ms-0 ms-md-5'
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
            <Carousel.Item interval={1000}>
                <Image
                    fluid
                    src={womanModel}
                    className='w-100 object-fit-cover carousel-images'
                    style={{ minHeight: "91vh", maxWidth: "100vw" }}
                    alt="Second slide"
                />
                <Carousel.Caption
                    className='h-100 d-flex align-items-center justify-content-center justify-content-md-start'
                >
                    <div
                        className='ms-0 ms-md-5'
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
            <Carousel.Item>
                <Image
                    fluid
                    src={jewelry}
                    className='w-100 object-fit-cover carousel-images'
                    style={{ minHeight: "91vh", maxWidth: "100vw" }}
                    alt="Third slide"
                />
                <Carousel.Caption
                    className='h-100 d-flex align-items-center justify-content-center justify-content-md-start'
                >
                    <div
                        className='ms-0 ms-md-5'
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