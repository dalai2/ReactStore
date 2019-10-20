import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import{ButtonContainer} from './Button';

export default class details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                const {id,img,info, price, title, inCart} =
                value.detailProduct;
                return(
                    // title 
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blu
                            my-5">
                               <h1> {title} </h1>
                            </div>
                        </div>
                    {/* info producto */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 
                        my-3 ">
                            <img src={img} className='img-fluid' alt="producto"/>
                        </div>
                        {/* product text */}
                        <div className='col-10 mx-auto col-md-6 
                        my-3 text-capitalize'>
                            <h2>modelo : {title}</h2>
                            <h4 className="text-blue">
                                <strong>
                                    precio : $
                                    {price}
                                </strong>
                            </h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                Información del Producto:
                            </p>
                            <p className="text-muted lead">
                                {info}
                            </p>
                            <div>
                                <Link to='/productos'>
                                    <ButtonContainer>Volver a productos</ButtonContainer>
                                </Link>
                                
                                    <ButtonContainer
                                    cart
                                    disabled={inCart?true:false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }

                                    }
                                    >
                                        {inCart ? 'En el carrito' :'Añadir al Carrito'}
                                    </ButtonContainer>
                                                                
                            </div>
                        </div>
                    </div>
                    </div>
                )
                }}
            </ProductConsumer>
        )
    }
}
