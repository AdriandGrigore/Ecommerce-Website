import React from 'react'
import { Image, Stack } from 'react-bootstrap'
import category1 from "../assets/category1.jpg"
import category2 from "../assets/category2.jpg"
import category3 from "../assets/category3.jpg"
import "../css/CategoryGrid.css"

function CategoryGrid() {
    return (
        <Stack
            direction='horizontal'
            className='flex-wrap justify-content-center my-5 mx-2'
            gap={4}
        >
            <div
                className='position-relative card'
            >
                <Image
                    fluid
                    src={category1}
                    alt='category1'
                    style={{ maxWidth: "470px" }}
                    className='object-fit-cover border rounded'
                />
                <div
                    className='position-absolute top-0 ms-4 pt-3 text-start h-100'
                >
                    <h2
                        className='fw-bold fs-3'
                    >
                        Men
                    </h2>
                    <p
                        className='text-start mt-2 fs-5 text-secondary'
                    >
                        Season 2023
                    </p>
                </div>
            </div>
            <div
                className='position-relative card'
            >
                <Image
                    fluid
                    src={category2}
                    alt='category2'
                    style={{ maxWidth: "470px" }}
                    className='object-fit-cover border rounded'
                />
                <div
                    className='position-absolute top-0 ms-4 mt-3 text-start'
                >
                    <h2
                        className='fw-bold fs-3'
                    >
                        Women
                    </h2>
                    <p
                        className='text-start mt-2 fs-5 text-secondary'
                    >
                        Season 2023
                    </p>
                </div>
            </div>
            <div
                className='position-relative card'
            >
                <Image
                    fluid
                    src={category3}
                    alt='category3'
                    style={{ maxWidth: "470px" }}
                    className='object-fit-cover border rounded'
                />
                <div
                    className='position-absolute top-0 ms-4 mt-3 text-start'
                >
                    <h2
                        className='fw-bold fs-3'
                    >
                        Jewelry
                    </h2>
                    <p
                        className='text-start mt-2 fs-5 text-secondary'
                    >
                        Season 2023
                    </p>
                </div>
            </div>
        </Stack>
    )
}

export default CategoryGrid