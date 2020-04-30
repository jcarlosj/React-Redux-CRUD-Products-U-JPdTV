import React from 'react';
import { useDispatch } from 'react-redux';

/** Actions (Redux) */
import { actionCreateProduct } from '../../actions/products-actions';

const CreateProduct = () => {

    const dispatch = useDispatch();     // Retorna y crea una funcion dispatch

    const addProduct = () => dispatch( actionCreateProduct() );    // Dispatch se comunica, llama o ejecuta las funciones de los actions
 
    const onSubmitFormData = event => {
        event .preventDefault();

        // TODO: Validar campos del formulario
        // TODO: Validar que no hay errores
        /** Agrega nuevo producto */
        addProduct();
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2>Crea Producto</h2>
                        <form
                            onSubmit={ onSubmitFormData }
                        >
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" className="form-control" id="name" placeholder="Nombre del producto" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Precio</label>
                                <input type="number" className="form-control" id="price" />
                            </div>  
                            <button
                                type="submit"
                                className="btn btn-primary d-block w-100"
                            >Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProduct;