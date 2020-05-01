import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/** Actions (Redux) */
import { actionDeleteProduct } from '../../actions/products-actions';

const Product = ({ product }) => {

    const 
        { id, name, price } = product,
    /** Accede a los actions y lo comunica al Componente  */
        dispatch = useDispatch();

    const confirmDelete = id => {
        // TODO: Verificar la confirmación de borrado
        dispatch( actionDeleteProduct( id ) );
    }

    return(
        <tr>
            <td>{ id }</td>
            <td>{ name }</td>
            <td>{ price }</td>
            <td>
                <Link 
                    to={`/product/edit/${ id }`}
                    className="btn btn-primary mr-2"
                >Editar</Link>
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