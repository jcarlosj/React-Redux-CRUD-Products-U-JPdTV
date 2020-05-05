import React from 'react';

/** Dependencies */
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';             

/** Actions (Redux) */
import { actionDeleteProduct, actionEditProduct } from '../../actions/products-actions';

const Product = ({ product }) => {

    const 
        { id, name, price } = product,
    /** Accede a los actions y lo comunica al Componente  */
        dispatch = useDispatch(),
        history = useHistory();

    const confirmDelete = id => {

        /** Verifica confirmación de borrado */ 
        Swal .fire({
            title: '¿Esta seguro?',
            text: "Esta acción no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Eliminalo!',
            cancelButtonText: "Cancelar"
          }) .then( ( result ) => {

            if ( result .value ) {
                dispatch( actionDeleteProduct( id ) );      // Ejecuta el action
            }

        });

    }

    /** Redireccionar de forma programada */
    const scheduledRedirect = product => {
        dispatch( actionEditProduct( product ) );
        history .push( `/product/edit/${ product .id }` );
    }

    return(
        <tr>
            <td>{ id }</td>
            <td>{ name }</td>
            <td>{ price }</td>
            <td>
                <button 
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={ () => scheduledRedirect( product ) } 
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={ () => confirmDelete( id ) }
                >Eliminar</button>
            </td>
        </tr>
    );
}

export default Product;