import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { id, name, price } = product;

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
                >Eliminar</button>
            </td>
        </tr>
    );
}

export default Product;