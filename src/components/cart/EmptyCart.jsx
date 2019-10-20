import React from 'react'
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../Button'

export default function EmptyCart() {
    return (
        <div className='container mt-5'>
          <div className="row">
              <div className="col-10 mx-auto text-center text-title">
                  <h1>Tu carrito está vacío</h1>
                <Link to='/productos'>
                    <ButtonContainer>Volver a productos</ButtonContainer>
                </Link>
              </div>
            </div>  
        </div>
    )
}
