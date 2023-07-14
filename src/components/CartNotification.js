import React from 'react'
import { Toast } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { hideCartNotification } from '../features/cartNotificationSlice'

function CartNotification() {
    const { cartNotification } = useSelector(state => state.cartNotifications)
    const dispatch = useDispatch()
    return (
        <>
            <Toast
                bg={cartNotification.type}
                show={cartNotification.status}
                onClose={() => dispatch(hideCartNotification())}
                autohide
                animation={true}
                delay={1300}
                style={{
                    width: '400px',
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: "2000"
                }}
            >
                <Toast.Body
                    className='text-white fs-5 px-2 py-3 text-uppercase display-5'
                >
                    {cartNotification.type === "danger"
                        ? "Item removed from shoping cart"
                        : "Item added to shoping cart"
                    }
                </Toast.Body>
            </Toast >
        </>
    )
}

export default CartNotification