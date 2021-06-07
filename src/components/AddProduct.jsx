import React from 'react'
import ReactDom from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const MODAL_STYLES = {
    position: 'fixed',
    overflow: 'scroll',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f5f7fb',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb(242, 242, 242)',
    zIndex: 1000
}

export default function AddProduct({ open, onClose, onAdd }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <div className='row d-flex justify-content-end mb-4'>
                    <div className='col-4 mx-2 d-flex justify-content-end'>
                        <button className='btn btn-outline-dark' onClick={onClose}>Cerrar</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className="row g-3 align-items-center">
                            <div className="col-md-3">
                                <label htmlFor="nombre-producto" className="col-form-label">Producto</label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" id="nombre-producto" />
                            </div>
                            <div className="col-md-3">
                                <span id="passwordHelpInline" className="form-text">
                                    Campo Obligatorio.
                                </span>
                            </div>
                        </div>
                        <div className="row g-3 align-items-center">
                            <div className="col-md-3">
                                <label htmlFor="sku-producto" className="col-form-label">sku Producto</label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" id="sku-producto" />
                            </div>
                            <div className="col-md-3">
                                <span id="passwordHelpInline" className="form-text">
                                    Campo Obligatorio.
                                </span>
                            </div>
                        </div>
                        <div className="row g-3 align-items-center">
                            <div className="col-md-3">
                                <label htmlFor="cantidad-producto" className="col-form-label">Cantidad</label>
                            </div>
                            <div className="col-md-6">
                                <input type="number" id="cantidad-producto" min="1" />
                            </div>
                            <div className="col-md-3">
                                <span id="passwordHelpInline" className="form-text">
                                    Debe ser mayor a cero.
                                </span>
                            </div>
                        </div>
                        <div className="row g-3 align-items-center">
                            <div className="col-md-3">
                                <label htmlFor="precio-producto" className="col-form-label">Precio</label>
                            </div>
                            <div className="col-md-6">
                                <input type="number" id="precio-producto" min="1" />
                            </div>
                            <div className="col-md-3">
                                <span id="passwordHelpInline" className="form-text">
                                    Debe ser mayor a cero.
                                </span>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-end mt-4'>
                            <div className='col-6 d-flex justify-content-end'>
                                <button onClick={onAdd} type='button' className='btn btn-outline-dark'>
                                    <FontAwesomeIcon icon={faPlus} /> Agregar Producto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}