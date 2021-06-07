import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function Products({ products }) {
    return (
        products.map(
            product => (
                <div key={product.id} className='row m-0 my-1 p-0'>
                    <div className='col-12 m-0 p-0'>
                        <div className='card m-0 p-0 border-light'>
                            <div className='card-body'>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-4 m-0 p-0 d-flex justify-content-center align-items-center'>
                                        <img src='phone.png' alt='phone.png' height='120px' className='product-img-fluid' />
                                    </div>
                                    <div className='col-md-8'>
                                        <div className='row m-0 p-0 my-3'>
                                            <div className='col-lg-6'>
                                                <h4 className='card-title d-flex justify-content-center text-center'>{product.name}</h4>
                                            </div>
                                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                                <FontAwesomeIcon icon={faStar} className='rating-checked' />
                                                <FontAwesomeIcon icon={faStar} className='rating-checked' />
                                                <FontAwesomeIcon icon={faStar} className='rating-checked' />
                                                <FontAwesomeIcon icon={faStar} className='rating-checked' />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                        </div>
                                        <div className='row m-0 mb-3 p-0'>
                                            <div className='col-md-6 d-flex align-items-center justify-content-center'>
                                                <p className='fw-lighter fs-6 p-0 m-0 d-flex justify-content-center'>sku: {product.sku}</p>
                                            </div>
                                            <div className='col-md-6'>
                                                <p className='fw-bold fs-4 p-0 m-0 d-flex justify-content-center'>${product.price}</p>
                                            </div>
                                        </div>
                                        <div className='row m-0 p-0  d-flex justify-content-end'>
                                            <div className='m-0 p-0 col-md-6 d-flex align-items-center justify-content-center'>
                                                <button type='button' className='btn btn-outline-dark m-0 d-flex align-items-center rounded-circle'
                                                style={{padding:"3px 4px"}}>
                                                    <FontAwesomeIcon icon={faMinus} className='fs-6' />
                                                </button>
                                                <p className='m-0 mx-4 p-0 fw-bold fs-5'>{product.quantity}</p>
                                                <button type='button' className='btn btn-outline-dark m-0 d-flex align-items-center rounded-circle'
                                                style={{padding:"3px 4px"}}>
                                                    <FontAwesomeIcon icon={faPlus} className='fs-6' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    )
}
