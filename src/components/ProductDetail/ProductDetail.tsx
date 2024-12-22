import './ProductDetail.css'
import icon__plus from '../../assets/images/icon-plus.svg'
import icon__minus from '../../assets/images/icon-minus.svg'
import {IconCart} from '../Icons/Index'; 
import { useMemo, useState } from 'react'
import Carrusel from '../Carrusel/Carrusel';

const ProductDetail = () =>{

    const images = useMemo(
        () => Array.from({ length: 4 }, (_, i) => `/src/assets/images/image-product-${i + 1}.jpg`),
        []
    );

    const thumbnail = useMemo(
        () => Array.from({length: 4},(_,i) => `/src/assets/images/image-product-${i + 1}-thumbnail.jpg`),
        []
    );

    const [count,setCount] = useState(1);
    const [selectedImage,setSelectedImage] = useState(images[0]);
    const [isCarrusel,setIsCarrusel] = useState(false);

    //Método que agrega o disminuye el contador
    const handleCount = (action: 'increment'|'decrement')=>{
        setCount((prev)=>{
            if(action === 'decrement' && prev>1) return prev - 1;
            if(action === 'increment' && prev<10) return prev + 1;
            return prev;
        })
    }

    return(
        <section className="section__detail">
            <div className="detail__content">

                <Carrusel images={images} thumbnail={thumbnail} isCarrusel={isCarrusel} setIsCarrusel={setIsCarrusel}/>

                <div className="detail__images">
                    <div className="detail__images__content">
                        <img className='detail__main__image' src={selectedImage} alt="" onClick={()=>setIsCarrusel(true)}/>
                        <ul className="detail__thumbnails">
                            {thumbnail.map((thumb,index) => ( 
                                <li
                                    key={index}
                                    className={`detail__thumbnail ${selectedImage === images[index] ? 'active' : ''}`}
                                    onClick={() => setSelectedImage(images[index])}
                                >
                                    <img src={thumb} alt={`Thumbnail ${index + 1}`} />     
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                
                <div className="detail__info">
                    <div className="detail__info__content">
                        <p className='detail__company'>sneaker company</p>
                        <h1 className='detail__title'>Fall limited edition sneakers</h1>
                        <p className='detail__text'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                        <div className="price__container">
                            <p className='detail__price'>$125.00</p>
                            <p className='detail__discount'>50%</p>
                        </div>
                        <p className='detail__price--before'>$250.00</p>
                        <div className="detail__buttons__container">
                            <div className="button__count">
                                <button className={count == 1 ? 'disable':''}type='button' onClick={() => handleCount('decrement')}>
                                    <img src={icon__minus} alt="" />
                                </button>
                                <p>{count}</p>
                                <button className={count == 10 ? 'disable':''}type='button' onClick={() => handleCount('increment')}>
                                    <img src={icon__plus} alt="" />
                                </button>
                            </div>
                            <button className='detail__button--add'>
                                <IconCart color='#000000'/>
                                <p>Add to cart</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductDetail;