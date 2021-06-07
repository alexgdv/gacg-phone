import React, { useState } from 'react';
import Products from './Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus } from '@fortawesome/free-solid-svg-icons';
import AddProduct from './AddProduct';

export default function OrderList({ orders }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='row m-0 mt-5'>
            <p className='p-1 d-flex justify-content-center fs-3'>Ordenes</p>
            {
                orders.map(
                    order => (
                        <div key={order.number} className='row m-0 p-0 d-flex justify-content-center align-items-center'>
                            <div className='col-md-10 m-0 p-0'>
                                <div className='card border-light my-2 mx-5'>
                                    <div className='card-body'>
                                        <p className=' m-0 fw-bold d-flex justify-content-end'>{order.name}</p>
                                        <Products products={order.items} />
                                        <div className='d-flex justify-content-end'>
                                            <button onClick={() => setIsOpen(true)} type='button' className='btn btn-outline-dark mx-2'>
                                                <FontAwesomeIcon icon={faPlus} /> Agregar Producto
                                            </button>
                                            <AddProduct open={isOpen} onClose={() => setIsOpen(false)} onAdd={() => {
                                                const nombre = document.getElementById('nombre-producto')
                                                const sku = document.getElementById('sku-producto')
                                                const cantidad = document.getElementById('cantidad-producto')
                                                const precio = document.getElementById('precio-producto')
                                                let errores = 0

                                                if (nombre.value.length <= 0 || empty(nombre.value)) {
                                                    addError(nombre)
                                                    errores++
                                                } else {
                                                    removeError(nombre)
                                                }
                                                if (sku.value.length <= 0 || empty(sku.value)) {
                                                    addError(sku)
                                                    errores++
                                                } else {
                                                    removeError(sku)
                                                }
                                                if (cantidad.value <= 0 || empty(cantidad.value)) {
                                                    addError(cantidad)
                                                    errores++
                                                } else {
                                                    removeError(cantidad)
                                                }
                                                if (precio.value <= 0 || empty(precio.value)) {
                                                    addError(precio)
                                                    errores++
                                                } else {
                                                    removeError(precio)
                                                }

                                                if (errores === 0) setIsOpen(false)
                                            }}>
                                            </AddProduct>
                                            <button type='button' className='btn btn-outline-dark'>
                                                <FontAwesomeIcon icon={faShoppingCart} /> Pagar Orden
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

function addError(input) {
    input.classList.add('error')
}
function removeError(input) {
    input.classList.add('error')
}

function empty(value) {
    return value === '' || value === undefined || value === null
}