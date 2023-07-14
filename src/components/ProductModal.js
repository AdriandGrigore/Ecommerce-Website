import React from 'react'
import { Button, ButtonGroup, Col, Form, Image, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { closeViewProductModal, decreaseQuantity, increaseQuantity } from '../features/viewProductModalSlice'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { addItemToCart, increaseCartItemQt } from '../features/cartSlice'
import { showCartNotification } from '../features/cartNotificationSlice'
import "../css/ProductModal.css"

function ProductModal() {
    const { productSelected } = useSelector(state => state.viewProductModal)
    const { cartItems } = useSelector(state => state.cart)
    const { modalStatus } = useSelector(state => state.viewProductModal)
    const dispatch = useDispatch()

    const addItemToShoppingCart = (product, amount) => {
        const productAlreadyInCart = cartItems.find(pr => pr.id === product.id)
        if (productAlreadyInCart === undefined) {
            dispatch(addItemToCart(product))
        } else {
            dispatch(increaseCartItemQt({ id: product.id, amount: Number(amount) }))
        }
        dispatch(closeViewProductModal())
        dispatch(showCartNotification("success"))
    }

    return (
        <Modal
            show={modalStatus}
            onHide={() => dispatch(closeViewProductModal())}
            className='px-0 px-sm-3'
            centered
            fullscreen="sm-down"
            keyboard
        >
            <Modal.Header
                closeButton
                className='border-bottom-0 pb-0 fs-4'
            />
            <Modal.Body>
                <Row
                    className='justify-content-evenly gap-5 pb-3'
                    style={{ minHeight: "600px" }}
                >
                    <Col
                        lg={5}
                        className='align-self-center'
                    >
                        <Image
                            src={productSelected.image}
                            alt='productImage'
                            className='d-block mx-auto w-100 object-fit-contain'
                            style={{ maxHeight: "500px", maxWidth: "500px" }}
                        />
                    </Col>
                    <Col
                        lg={6}
                    >
                        <h1
                            className='display-6'
                            style={{ color: "rgb(2, 84, 100)", fontWeight: "500" }}
                        >
                            {productSelected.title}
                        </h1>
                        <p
                            className='fs-3 pt-3'
                        >
                            ${productSelected.price}
                        </p>
                        <p
                            className='fs-5 text-secondary'
                        >
                            {productSelected.description}
                        </p>
                        {productSelected.category === "jewelery" || productSelected.category === "electronics"
                            ? null
                            :
                            <div>
                                <div
                                    style={{ maxWidth: "300px" }}
                                    className='d-flex align-items-center justify-content-between gap-3 flex-wrap me-auto'
                                >
                                    <label
                                        htmlFor="sizes"
                                        className='fs-5'
                                    >
                                        Size:
                                    </label>
                                    <Form.Select
                                        id="sizes"
                                        className='fs-5 text-dark text-center'
                                        style={{ width: "fit-content" }}
                                    >
                                        <option value="Choose a size">Choose a size</option>
                                        <option value="Size S">Size S</option>
                                        <option value="Size M">Size M</option>
                                        <option value="Size L">Size L</option>
                                        <option value="Size XL">Size XL</option>
                                    </Form.Select>
                                </div>
                                <div
                                    style={{ maxWidth: "300px" }}
                                    className='d-flex align-items-center justify-content-between gap-3 flex-wrap me-auto my-3'
                                >
                                    <label
                                        htmlFor="colors"
                                        className='fs-5'
                                    >
                                        Color:
                                    </label>
                                    <Form.Select
                                        id="colors"
                                        className='fs-5 text-dark text-center text-truncate'
                                        style={{ width: "171px" }}
                                    >
                                        <option value="Choose a color">Choose a color</option>
                                        <option value="Red">Red</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Black">Black</option>
                                        <option value="White">White</option>
                                    </Form.Select>
                                </div>
                            </div>
                        }
                        <div
                            style={{ maxWidth: "300px" }}
                            className='d-flex align-items-center justify-content-between gap-3 flex-wrap me-auto'
                        >
                            <p
                                className='mb-0 fs-5'
                            >
                                Quantity:
                            </p>
                            <ButtonGroup
                                aria-label="quantity-buttons"
                                size='lg'
                            >
                                <Button
                                    variant="light"
                                    className='px-3'
                                    disabled={productSelected.quantity === 1}
                                    onClick={() => dispatch(decreaseQuantity())}
                                >
                                    <AiOutlineMinus />
                                </Button>
                                <span
                                    className='mx-4 fs-4 d-flex align-items-center'
                                >
                                    {productSelected.quantity}
                                </span>
                                <Button
                                    variant="light"
                                    className='px-3'
                                    onClick={() => dispatch(increaseQuantity())}
                                >
                                    <AiOutlinePlus />
                                </Button>
                            </ButtonGroup>
                        </div>
                        <Button
                            variant='warning'
                            size='lg'
                            className='fs-5 d-block mx-auto mt-5'
                            onClick={() => addItemToShoppingCart(productSelected, productSelected.quantity)}
                        >
                            ADD TO CART
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal >
    )
}

export default ProductModal