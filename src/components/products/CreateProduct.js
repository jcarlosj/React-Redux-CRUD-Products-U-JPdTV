import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

/** Actions (Redux) */
import { actionCreateProduct } from '../../actions/products-actions';

const CreateProduct = () => {

    /** Define Component State */
    const [ dataForm, setDataForm ] = useState({
        name: '',
        price: 0
    });

    const { name, price } = dataForm;   // Destructuring Data Form
 
    /** Update State when you change the value of the field in the form  */
    const updateState = event => {

        setDataForm({
            ...dataForm,
            [ event .target .name ]: ( event .target .name == 'price' )         /** Valida si el campo es price */
                                        ?   Number( event .target .value )      /** Si se cumple, convierte la entrada en un Number */
                                        :   event .target .value                /** Si no lo mantiene como viene */
        });

    }

    const dispatch = useDispatch();     // Retorna y crea una funcion dispatch

    const addProduct = ( product ) => dispatch( actionCreateProduct( product ) );    // Dispatch se comunica, llama o ejecuta las funciones de los actions
 
    const onSubmitFormData = event => {
        event .preventDefault();

        // TODO: Valida campos del formulario
        // TODO: Validar que no hay errores
        /** Agrega nuevo producto */
        addProduct({
            name,
            price
        });
        
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
                                <input 
                                    name="name"
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    placeholder="Nombre del producto" 
                                    value={ name }
                                    onChange={ updateState }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Precio</label>
                                <input 
                                    name="price"
                                    type="number" 
                                    className="form-control" 
                                    id="price" 
                                    value={ price }
                                    onChange={ updateState }
                                />
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