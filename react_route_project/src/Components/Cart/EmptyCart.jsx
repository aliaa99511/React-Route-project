import React from 'react'
import emptyCart from '../../assets/images/empty-cart.png'

const EmptyCart = () => {
    return (
        <div className='emptyCart'>
            <img src={emptyCart} alt="" srcset="" />
        </div>
    )
}

export default EmptyCart