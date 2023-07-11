import React from 'react'
import { Button, Container, Image, Nav } from 'react-bootstrap'
import NavBar from 'react-bootstrap/Navbar'
import logo from '../assets/MangataLogo.png'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"

function Navbar() {

    const navbarLinks = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Shop",
            href: "/shop"
        },
        {
            name: "Features",
            href: "/features"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Contact",
            href: "/contact"
        }
    ]

    return (
        <NavBar
            style={{ backgroundColor: "white" }}
            expand="md"
            sticky='top'
            className='pb-0 border border-start-0 border-end-0 border-top-0'
        >
            <Container
                className='py-2 flex-wrap'
            >
                <NavBar.Brand
                    href="/#"
                >
                    <Image
                        src={logo}
                        alt='logo'
                        style={{ width: "100px" }}
                    />
                </NavBar.Brand>
                <NavBar.Toggle aria-controls="responsive-navbar-nav" />
                <NavBar.Collapse
                    id="responsive-navbar-nav"
                >
                    <Nav
                        className="ms-0 ms-md-3 fs-5"
                    >
                        {
                            navbarLinks.map((link, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to={link.href}
                                        className='px-3 py-3 py-md-2 navbar-links fs-5 me-0 me-md-2'
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })
                        }
                    </Nav>
                </NavBar.Collapse>
                <div
                    className='col-12 col-md-auto mx-auto mt-3'
                >
                    <Button
                        variant='ligth'
                        className='position-relative'
                    >
                        <AiOutlineShoppingCart
                            className='text-secondary fs-3'
                        />
                        <span
                            className='position-absolute top-25 start-75 translate-middle text-white bg-primary px-2 rounded-circle'
                        >
                            0
                        </span>
                    </Button>
                    <Button
                        variant='ligth'
                        className='mx-4 mx-md-3 position-relative'
                    >
                        <AiOutlineHeart
                            className='text-secondary fs-3'
                        />
                        <span
                            className='position-absolute top-25 start-75 translate-middle text-white bg-primary px-2 rounded-circle'
                        >
                            0
                        </span>
                    </Button>
                    <Button
                        variant='ligth'
                    >
                        <CgProfile
                            className='text-secondary fs-3'
                        />
                    </Button>
                </div>
            </Container>
        </NavBar>
    )
}

export default Navbar