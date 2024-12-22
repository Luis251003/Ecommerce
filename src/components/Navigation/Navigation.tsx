import image from '../../assets/images/logo.svg';
import './Navigation.css';
import avatar from '../../assets/images/image-avatar.png'
import IconCart from '../Icons/IconCart';
import { useState } from 'react';

const Navigation = () =>{

    const [isHovered, setIsHovered] = useState(false);
    const [isCart, setIsCart] = useState(false);

    return(
        <nav>
            <div className="nav__content">
                <div className="nav__logo">
                    <img src={image} alt="logo" />
                </div>
                <ul className="nav__enlaces">
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="nav__buttons">
                    <button type='button' className='button__cart' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <IconCart color={isHovered ? '#000000' : '#69707D'}/>
                    </button>
                    <div className="avatar__container" onClick={() => setIsCart(!isCart)}>
                        <img src={avatar} alt="" />
                    </div>
                    <div className={`cart__container ${isCart ? 'active':''}`}>
                        <div className="cart__header">
                            <h2 className='cart__title'>Cart</h2>
                        </div>
                        <div className="cart__body">
                            <p className='cart__message'>Your cart is empty.</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;