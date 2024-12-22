import './Carrusel.css'
import { useState } from "react";
import {IconExit,IconLeft,IconRight} from '../Icons/Index'; 

interface Props{
    images:string[];
    thumbnail:string[];
    isCarrusel:boolean;
    setIsCarrusel:(value:boolean)=>void;
}

const Carrusel = ({images,thumbnail,isCarrusel,setIsCarrusel}:Props) =>{

    const [carruselIndex,setCarruselIndex] = useState(0);

    //Método del carrusel
    const handleCarrusel = (action: 'left' | 'right') => {
        setCarruselIndex((prev) => {
            if (action === 'left') {
                return (prev - 1 + images.length) % images.length; // Movimiento circular hacia la izquierda
            } else if (action === 'right') {
                return (prev + 1) % images.length; // Movimiento circular hacia la derecha
            }
            return prev; // Caso por defecto (no debería suceder)
        });
    };

    return (
        <div className={`carrusel__bg ${isCarrusel ? 'active':''}`}>
            <div className="carrusel__container">
                <div className="icon__exit" onClick={() => setIsCarrusel(false)}>
                    <IconExit/>
                </div>
                <div className="carrusel__main__image--container">
                    <div className="icon__arrow--left" onClick={()=>handleCarrusel('left')}>
                        <IconLeft/>
                    </div>
                    <div className="icon__arrow--right" onClick={()=>handleCarrusel('right')}>
                        <IconRight/>
                    </div>
                    <img className='carrusel__main__image' src={images[carruselIndex]} alt="" />
                </div>
                <ul className='carrusel__thumbnails'>
                    {thumbnail.map((thumb,index)=>(
                        <li
                            key={index}
                            className={`carrusel__thumbnail ${images[carruselIndex] === images[index] ? 'active' : ''}`}
                            onClick={() => setCarruselIndex(index)}
                        >
                            <img src={thumb} alt={`Thumbnail ${index + 1}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}
export default Carrusel;