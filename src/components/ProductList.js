import React, { useEffect, useState } from 'react'
import { Button, Container, Image, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, filterCategory } from '../features/productListSlice'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { TbFaceIdError } from 'react-icons/tb'
import { openViewProductModal } from '../features/viewProductModalSlice'
import "../css/ProductList.css"

function ProductList() {
    const dispatch = useDispatch()
    const {
        productListLoading,
        productListError,
        filteredList,
        categoryButton,
        productList
    } = useSelector((state) => state.productList)
    const [favoriteBtn, setFavoriteBtn] = useState([])

    useEffect(() => {
        const fetchProduct = () => {
            dispatch(fetchProducts())
        }
        if (productList.length === 0) {
            return fetchProduct()
        }
    }, [dispatch, productList.length])

    const handleClick = (e) => {
        dispatch(filterCategory(e.target.id))
    }

    const handleFavoriteClick = (productId) => {
        if (favoriteBtn.includes(productId)) {
            setFavoriteBtn(favoriteBtn.filter((btn) => btn !== productId));
        } else {
            setFavoriteBtn([...favoriteBtn, productId]);
        }
    };

    const categoryButtons = [
        {
            id: "All Products",
            variant: 'link',
            class: 'category-buttons',
            style: {
                color: "black",
                textDecoration: 'underline',
                textUnderlineOffset: '5px',
            },
            onClick: handleClick,
            innerText: 'All Products',
        },
        {
            id: "men's clothing",
            variant: 'link',
            class: 'category-buttons',
            style: {
                color: "black",
                textDecoration: 'underline',
                textUnderlineOffset: '5px',
            },
            onClick: handleClick,
            innerText: 'Men',
        },
        {
            id: "women's clothing",
            variant: 'link',
            class: 'category-buttons',
            style: {
                color: "black",
                textDecoration: 'underline',
                textUnderlineOffset: '5px',
            },
            onClick: handleClick,
            innerText: 'Women',
        },
        {
            id: "jewelery",
            variant: 'link',
            class: 'category-buttons',
            style: {
                color: "black",
                textDecoration: 'underline',
                textUnderlineOffset: '5px',
            },
            onClick: handleClick,
            innerText: 'Jewelry',
        },
        {
            id: "electronics",
            variant: 'link',
            class: 'category-buttons',
            style: {
                color: "black",
                textDecoration: 'underline',
                textUnderlineOffset: '5px',
            },
            onClick: handleClick,
            innerText: 'Electronics'
        }
    ]

    return (
        <Container
            fluid
            as={"section"}
            style={
                {
                    minHeight: "50vh",
                    backgroundColor: "whitesmoke",
                    paddingTop: "2rem"
                }
            }
        >
            <Container
                className='pt-3 text-center text-md-start'
            >
                {categoryButtons.map((button, index) => {
                    return (
                        <Button
                            key={index}
                            id={button.id}
                            variant={button.variant}
                            className={button.class}
                            style={categoryButton === button.id ? button.style : null}
                            onClick={button.onClick}
                        >
                            {button.innerText}
                        </Button>
                    )
                })}
            </Container>
            {
                productListError
                    ?
                    <div
                        className='d-flex flex-column justify-content-center align-items-center'
                        style={{ minHeight: "inherit" }}
                    >
                        <TbFaceIdError
                            style={{ fontSize: "6rem" }}
                            className='text-danger'
                        />
                        <h1
                            className='pt-4 display-6 text-danger'
                        >
                            Something went wrong.
                            <br />
                            Please try again
                        </h1>
                    </div>
                    :
                    productListLoading
                        ?
                        <div
                            className='d-flex flex-column justify-content-center align-items-center'
                            style={{ minHeight: "inherit" }}
                        >
                            <Spinner
                                animation="border"
                                role="status"
                                variant='primary'
                            />
                            <p
                                className='pt-4 text-dark fs-4 fw-light'
                            >
                                Loading data. Please wait
                            </p>
                        </div>
                        :
                        <Container
                            className='product-container'
                        >
                            {filteredList.map((product) => {
                                return (
                                    <div
                                        key={product.id}
                                        className='product-card'
                                    >
                                        <div
                                            className='position-relative w-100 card-image'
                                        >
                                            <Image
                                                loading='lazy'
                                                src={product.image}
                                                alt='productImage'
                                                className='object-fit-contain'
                                            />
                                            <Button
                                                variant='dark'
                                                className='quick-view-button'
                                                onClick={() => dispatch(openViewProductModal(product))}
                                            >
                                                Quick View
                                            </Button>
                                        </div>
                                        <p
                                            className='pt-4 ps-3 text-start mb-0'
                                            title={product.title}
                                        >
                                            {product.title}
                                        </p>
                                        <div
                                            className='d-flex justify-content-between align-items-center'
                                        >
                                            <p
                                                className='ps-3 text-start fw-bold text-secondary fs-5 m-0'
                                            >
                                                ${product.price}
                                            </p>
                                            <Button
                                                id={product.id}
                                                variant='ligth'
                                                className='fs-3'
                                                onClick={() => handleFavoriteClick(product.id)}
                                            >
                                                {
                                                    favoriteBtn.includes(product.id)
                                                        ? <AiFillHeart className='text-danger' />
                                                        : <AiOutlineHeart />
                                                }

                                            </Button>
                                        </div>
                                    </div>
                                )
                            })}
                        </Container>
            }
        </Container >
    )
}

export default ProductList