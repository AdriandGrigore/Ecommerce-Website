import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaCcPaypal, FaCcVisa, FaCcMastercard, FaCcDiscover } from "react-icons/fa"
import "../css/Footer.css"

function Footer() {
    return (
        <Container
            fluid
            as="footer"
            className='bg-dark text-white pt-5 pb-3'
        >
            <Container>
                <Row className='text-start py-4'>
                    <Col
                        lg={3}
                        md={6}
                        sm={12}
                        className='column'
                    >
                        <h5
                            className='text-white fw-bold text-uppercase'
                        >
                            Categories
                        </h5>
                        <ul>
                            <li>
                                <a href='/#'>
                                    Women
                                </a>
                            </li>
                            <li>
                                <a href='/#'>
                                    Men
                                </a>
                            </li>
                            <li>
                                <a href='/#'>
                                    Jewelry
                                </a>
                            </li>
                            <li>
                                <a href='/#'>
                                    Electronics
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col
                        lg={3}
                        md={6}
                        sm={12}
                        className='column'
                    >
                        <h5
                            className='text-white fw-bold text-uppercase'
                        >
                            Help
                        </h5>
                        <ul>
                            <li>
                                <a href="/#">
                                    Track Order
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    Returns
                                </a>
                            </li>
                            <li>
                                <a href='/#'>
                                    Shipping
                                </a>
                            </li>
                            <li>
                                <a href='/#'>
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col
                        lg={3}
                        md={6}
                        sm={12}
                        className='column pe-4'
                    >
                        <h5
                            className='text-white fw-bold text-uppercase'
                        >
                            Get in touch
                        </h5>
                        <p>
                            Any questions? Let us know in store at xth floor, number Hudson St, New York, NY or call us on 1234566544
                        </p>
                        <div className='fs-3 pt-2'>
                            <a
                                href='https://www.facebook.com/'
                                target='_blank'
                                rel="noreferrer"
                            >
                                <AiFillFacebook />
                            </a>
                            <a
                                href='https://www.instagram.com/'
                                target='_blank'
                                rel="noreferrer"
                                className='mx-2'
                            >
                                <AiFillInstagram />
                            </a>
                            <a
                                href='https://www.linkedin.com/'
                                target='_blank'
                                rel="noreferrer"
                            >
                                <AiFillLinkedin />
                            </a>
                        </div>
                    </Col>
                    <Col
                        lg={3}
                        md={6}
                        sm={12}
                        className='column'
                    >
                        <h5
                            className='text-white fw-bold text-uppercase'
                        >
                            Newsletter
                        </h5>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="email@example.com"
                                />
                            </Form.Group>
                            <Button type='submit'>
                                Subscribe
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className='justify-content-center pb-4'>
                    <Col
                        lg={4}
                        md={6}
                        xs={12}
                        className='fs-1 d-flex justify-content-evenly'
                    >
                        <FaCcPaypal />
                        <FaCcVisa />
                        <FaCcMastercard />
                        <FaCcDiscover />
                    </Col>
                </Row>
                <Row className='pb-3 pb-md-2'>
                    <Col>
                        <small className='text-secondary'>
                            © Copyright ECommerce Website-Grigore Adrian. All rights reserved
                        </small>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}

export default Footer