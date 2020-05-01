import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Actions (Redux) */
import { actionGetProducts } from '../../actions/products-actions';

const Products = () => {
    /** Accede a los actions y lo comunica al Componente  */
    const dispatch = useDispatch();                                   // Retorna y crea una funcion dispatch

    useEffect( () => {
        /** Consultar API cuando el componente cargue */
        const getProducts = () => dispatch( actionGetProducts() );    // Dispatch ejecuta las funciones de los actions
        getProducts();                                                // Ejecuta la consulta
    }, [] );


    return (
        <Fragment>
            <h2 className="text-center mt-5">Productos</h2>
            <table className="table mt-4">
                <thead className="thead-light">    
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Laptop</td>
                        <td>300</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
}

export default Products;