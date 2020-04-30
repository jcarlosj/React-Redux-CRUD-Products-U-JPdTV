import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Actions (Redux) */
import { actionCreateProduct } from '../../actions/products-actions';

const CreateProduct = ({ history }) => {

    const 
    /** Define Component State */
        [ dataForm, setDataForm ] = useState({
            name: '',
            price: 0
        }),
    /** Accede al State 'products' del Store */
        loading = useSelector( state => state .products .loading ),     // para la propiedad loading   
        error = useSelector( state => state .products .error ),         // para la propiedad error
    /** Accede a los actions y lo comunica al Componente  */
        dispatch = useDispatch(),                                                  // Retorna y crea una funcion dispatch
        addProduct = ( product ) => dispatch( actionCreateProduct( product ) ),    // Dispatch ejecuta las funciones de los actions
    /** Destructuring el State del Componente */
        { name, price } = dataForm;                                     
 
    /** Update State when you change the value of the field in the form  */
    const updateState = event => {

        setDataForm({
            ...dataForm,
            [ event .target .name ]: ( event .target .name == 'price' )         /** Valida si el campo es price */
                                        ?   Number( event .target .value )      /** Si se cumple, convierte la entrada en un Number */
                                        :   event .target .value                /** Si no lo mantiene como viene */
        });

    }
 
    const onSubmitFormData = event => {
        event .preventDefault();

        // TODO: Valida campos del formulario
        // TODO: Validar que no hay errores
        /** Agrega nuevo producto */
        addProduct({
            name,
            price
        });

        history .push( '/' );   // Redirecciona a listado de productos
        
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
                            { loading 
                                ?   <p>Cargando</p>
                                :   null
                            }
                            { error 
                                ?   <p className="alert alert-danger mt-2 p-2 text-center">Hubo un error</p>
                                :   null
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProduct;