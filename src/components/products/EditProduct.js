import React, { useState, useEffect } from 'react';

/** Dependencies */
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/** Actions (Redux) */
import { actionEditProduct } from '../../actions/products-actions';
import { actionShowAlert, actionHideAlert } from '../../actions/alert-actions';

const EditProduct = () => {

    const 
    /** Define Component State */
        [ dataForm, setDataForm ] = useState({
            name: '',
            price: 0
        }),
    /** Accede al State 'products' del Store */
        selectedProduct = useSelector( state => state .products .selectedProduct ),     // Dispatch ejecuta las funciones de los actions
        alert = useSelector( state => state .alerts .alert ),
    /** Accede a los actions y lo comunica al Componente  */
        dispatch = useDispatch(),                                                       // Retorna y crea una funcion dispatch
    /** Hook del Router para Redireccion */
        history = useHistory();      

    useEffect( () => {

        console .log( selectedProduct );
        /** Valida si hay un producto Seleccionado */        
        if( ! selectedProduct ) {
            history .push( '/' );
            return;
        }
        /** Update State 'setDataForm' */
        setDataForm( selectedProduct );     // Actualiza State
        // eslint-disable-next-line
    }, [ selectedProduct ] );

    /** Get form values when they change */
    const onChangeFormValues = event => {
        
        setDataForm({
            ...dataForm,
            [ event .target .name ]: ( event .target .name === 'price' )         /** Valida si el campo es price */
                                        ?   Number( event .target .value )      /** Si se cumple, convierte la entrada en un Number */
                                        :   event .target .value                /** Si no lo mantiene como viene */
        });
    }

    /** Submit form data */
    const onSubmitFormData = event => {
        event .preventDefault();

        /** Valida campos del formulario */
        if( name .trim() === '' || price <= 0 ) {

            const response = {
                message: 'Todos los campos son obligatorios',
                classes: 'alert alert-danger text-center p-3'
            }

            dispatch( actionShowAlert( response ) );

            return;
        }
        dispatch( actionHideAlert() );      // Execute action for update state

        /** Edita producto */
        dispatch( actionEditProduct( dataForm ) );

        history .push( '/' );   // Redirecciona a listado de productos
        
    }

    /** Destructuring el State del Componente */
    const { name, price } = dataForm;

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2>Edita Producto</h2>
                        <form
                            onSubmit={ onSubmitFormData }
                        >
                            { alert 
                                ?   <p className={ alert .classes }>{ alert .message }</p>
                                :   null
                            }
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    placeholder="Nombre del producto" 
                                    name='name'
                                    onChange={ onChangeFormValues }
                                    value={ name }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Precio</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="price" 
                                    name='price'
                                    onChange={ onChangeFormValues }
                                    value={ price }
                                />
                            </div>  
                            <button
                                type="submit"
                                className="btn btn-primary d-block w-100"
                            >Guardar cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;