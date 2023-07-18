import { Button, Image, Offcanvas } from 'react-bootstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsCartX } from 'react-icons/bs'
import { getSubtotal } from './ShopingCart'
import { CiCircleRemove } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { removeCartItem } from '../features/cartSlice'

function CartOffcanvas({ show, hide }) {
    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return (
        <Offcanvas
            show={show}
            onHide={hide}
            placement='end'
        >
            <Offcanvas.Header
                closeButton
                className='fs-4'
            >
                <Offcanvas.Title
                    className='text-uppercase fw-bold fs-3'
                    style={{ color: "rgb(2, 84, 100)" }}
                >
                    Your Cart
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cartItems.length === 0 ?
                    <div
                        className='h-100 d-flex flex-column align-items-center justify-content-center'
                    >
                        <BsCartX
                            className='display-3 text-danger mb-4'
                        />
                        <p
                            className='display-6 text-uppercase text-center fs-4'
                        >
                            No items in cart
                        </p>
                    </div>
                    :
                    cartItems.map(item => {
                        return (
                            <div
                                key={item.id}
                                className='d-flex align-items-center py-3 border-bottom'
                            >
                                <Button
                                    variant='none'
                                    className='fs-2'
                                    onClick={() => dispatch(removeCartItem(item.id))}
                                >
                                    <CiCircleRemove
                                        className='text-danger'
                                    />
                                </Button>
                                <Image
                                    src={item.image}
                                    alt='cartItem'
                                    className='object-fit-contain'
                                    style={{ width: "75px", height: "85px" }}
                                />
                                <div
                                    className='ms-3'
                                    style={{ maxWidth: "200px", minWidth: "50px" }}
                                >
                                    <p
                                        style={{ color: "rgb(2, 84, 100)" }}
                                        className='text-truncate'
                                    >
                                        {item.title}
                                    </p>
                                    <p
                                        className='fw-bold text-secondary'
                                    >
                                        {item.quantity} x ${item.price}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </Offcanvas.Body>
            <h1
                className='fs-4 text-uppercase ps-3 pb-5 pt-3 border-top'
                style={{ color: "rgb(2, 84, 100)", letterSpacing: "2px" }}
            >
                Total:
                <span className='text-dark ps-3'>
                    ${getSubtotal(cartItems).toFixed(2)}
                </span>
            </h1>
            <Button
                as={Link}
                to="/features"
                variant='dark text-uppercase'
                size='lg'
                style={{ maxWidth: "fit-content", borderRadius: "50px", backgroundColor: "rgb(2, 84, 100)" }}
                className='mx-auto mb-5 px-5 py-2'
            >
                View cart
            </Button>
        </Offcanvas>
    )
}

export default CartOffcanvas