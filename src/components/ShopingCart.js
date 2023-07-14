import React, { useState } from 'react'
import { Breadcrumb, Button, ButtonGroup, Col, Collapse, Container, Form, Image, Row, Table } from 'react-bootstrap'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCartItemQt, increaseCartItemQt, removeCartItem } from '../features/cartSlice'
import { CiCircleRemove } from 'react-icons/ci'
import { BsCartX } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { showCartNotification } from '../features/cartNotificationSlice'

function ShopingCart() {
    const { cartItems } = useSelector((state) => state.cart)
    const [inputValue, setInputValue] = useState({ country: "", city: "" })
    const [updateTotalErr, setUpdateTotalErr] = useState(false)
    const [shippingTax, setShippingTax] = useState(0)
    const dispatch = useDispatch()

    const getSubtotal = () => {
        var subtotal = 0
        cartItems.forEach(item => {
            subtotal += item.quantity * item.price
        })
        return subtotal
    }

    const updateTotals = () => {
        if (inputValue.country === "" || inputValue.city === "") {
            setShippingTax(0)
            return setUpdateTotalErr(true)
        } else {
            setUpdateTotalErr(false)
            setInputValue({ country: "", city: "" })
            return setShippingTax(Math.random().toFixed(2) * 100)
        }
    }

    const removeItemFromCart = (id) => {
        dispatch(removeCartItem(id))
        dispatch(showCartNotification("danger"))
    }

    return (
        <Container
            fluid
            as="section"
            className='min-vh-100'
        >
            <Container>
                <Breadcrumb
                    className='py-5'
                >
                    <Breadcrumb.Item
                        linkAs={Link}
                        linkProps={{ to: "/" }}
                    >
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        ShopingCart
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Container>
            <Container
                style={{ maxWidth: "1500px" }}
            >
                {cartItems.length === 0 ?
                    <div
                        className='d-flex flex-column align-items-center justify-content-center my-5'
                    >
                        <BsCartX
                            className='display-1 text-danger mb-4'
                        />
                        <h1
                            className='display-5 text-uppercase'
                        >
                            No items in cart
                        </h1>
                    </div>
                    :
                    <Row
                        className='justify-content-evenly'
                    >
                        <Col
                            lg={7}
                        >

                            <Table
                                responsive
                                className='align-middle'
                                bordered
                            >
                                <thead
                                    className='text-uppercase fs-5'
                                >
                                    <tr>
                                        <th></th>
                                        <th className='p-3'>Product</th>
                                        <th className='p-3'>Price</th>
                                        <th className='p-3'>Quantity</th>
                                        <th className='p-3'>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map(item => {
                                        return (
                                            <tr
                                                key={item.id}
                                            >
                                                <td style={{ width: '40px' }}>
                                                    <div>
                                                        <Button
                                                            variant='none'
                                                            size='sm'
                                                            onClick={() => removeItemFromCart(item.id)}
                                                        >
                                                            <CiCircleRemove
                                                                className='display-6 text-danger'
                                                            />
                                                        </Button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Image
                                                        src={item.image}
                                                        alt='productImage'
                                                        className='object-fit-contain'
                                                        style={{ height: "90px", width: "95px" }}
                                                    />
                                                </td>
                                                <td
                                                    className='fs-5'
                                                >
                                                    ${item.price}
                                                </td>
                                                <td>
                                                    <ButtonGroup
                                                        aria-label="quantity-buttons"
                                                        size='md'
                                                    >
                                                        <Button
                                                            variant="light"
                                                            className='px-3'
                                                            disabled={item.quantity === 1}
                                                            onClick={() => dispatch(decreaseCartItemQt(item.id))}
                                                        >
                                                            <AiOutlineMinus />
                                                        </Button>
                                                        <span
                                                            className='mx-4 fs-5 d-flex align-items-center'
                                                        >
                                                            {item.quantity}
                                                        </span>
                                                        <Button
                                                            variant="light"
                                                            className='px-3'
                                                            onClick={() => dispatch(increaseCartItemQt({ id: item.id, amount: 1 }))}
                                                        >
                                                            <AiOutlinePlus />
                                                        </Button>
                                                    </ButtonGroup>
                                                </td>
                                                <td
                                                    className='fs-5'
                                                >
                                                    ${(item.quantity * item.price).toFixed(2)}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                        <Col
                            lg={4}
                            className='pb-3'
                        >
                            <Container
                                fluid
                                className='px-5 py-4 border fs-5'
                            >
                                <h1
                                    className='text-uppercase text-start fs-3 pt-2'
                                >
                                    Cart totals
                                </h1>
                                <div
                                    className='d-flex justify-content-start pt-4'
                                >
                                    <p
                                        className='pe-5'
                                    >
                                        Subtotal:
                                    </p>
                                    <p>
                                        ${getSubtotal().toFixed(2)}
                                    </p>
                                </div>
                                <div
                                    className='d-flex flex-column justify-content-start flex-wrap text-start border-bottom border-top py-4'
                                >
                                    <p
                                        className='pe-5'
                                    >
                                        Shipping:
                                    </p>
                                    <div>
                                        <Collapse
                                            in={updateTotalErr}
                                        >
                                            <p
                                                className='text-danger fs-6'
                                            >
                                                There are no shipping methods available. Please double check your address, or contact us if you need any help.
                                            </p>
                                        </Collapse>
                                        <p
                                            className='pt-2 text-uppercase'
                                            style={{ fontSize: "1rem", letterSpacing: "0.5px" }}
                                        >
                                            Calculate shipping:
                                        </p>
                                        <Form.Control
                                            aria-label="Country"
                                            placeholder='Country'
                                            className='py-2'
                                            style={{ maxWidth: "200px" }}
                                            value={inputValue.country}
                                            onChange={(e) => setInputValue({ ...inputValue, country: e.target.value })}
                                        />
                                        <Form.Control
                                            aria-label="City"
                                            placeholder='City'
                                            className='py-2 my-2'
                                            style={{ maxWidth: "200px" }}
                                            value={inputValue.city}
                                            onChange={(e) => setInputValue({ ...inputValue, city: e.target.value })}
                                        />
                                        <Button
                                            variant='secondary'
                                            className='text-uppercase py-2 mt-3'
                                            onClick={updateTotals}
                                        >
                                            Update totals
                                        </Button>
                                    </div>
                                </div>
                                <div
                                    className='d-flex flex-column align-items-start pt-3'
                                >
                                    <div
                                        className='d-flex fs-6 pt-3'
                                    >
                                        <p
                                            className='pe-4'
                                            style={{ fontWeight: "500" }}
                                        >
                                            Shipping Tax:
                                        </p>
                                        <p>
                                            ${shippingTax.toFixed(2)}
                                        </p>

                                    </div>
                                    <div
                                        className='d-flex py-2'
                                    >
                                        <h1
                                            className='fs-4 text-start pe-5 mb-0'
                                        >
                                            Total:
                                        </h1>
                                        <p className='mb-0 fs-5'>
                                            ${(getSubtotal() + shippingTax).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant='warning'
                                    className='mt-4 text-uppercase p-3 fs-5'
                                    size='md'
                                    style={{ borderRadius: "15px", fontWeight: "500" }}
                                >
                                    Proceed to checkout
                                </Button>
                            </Container>
                        </Col>
                    </Row>
                }
            </Container>
        </ Container >
    )
}

export default ShopingCart