import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Actions (Redux) */
import { actionGetProducts } from '../../actions/products-actions';

/** Components */
import Product from './Product';

/* Component */
const Products = () => {
    /** Accede a los actions y lo comunica al Componente  */
    const dispatch = useDispatch();                                   // Retorna y crea una funcion dispatch

    useEffect( () => {
        /** Consultar API cuando el componente cargue */
        const getProducts = () => dispatch( actionGetProducts() );    // Dispatch ejecuta las funciones de los actions
        getProducts();                                                // Ejecuta la consulta
    }, [] );

    /** Accede al State 'products' del Store */
    const 
        products = useSelector( state => state .products .products ),    // para la propiedad products
        loading = useSelector( state => state .products .loading ),      // para la propiedad loading
        error = useSelector( state => state .products .error );          // para la propiedad error

    return (
        <Fragment>
            <h2 className="text-center mt-5">Productos</h2>
            { loading
                ?   <p className="text-center">Cargando...</p>
                :   null
            }
            { error
                ?   <p className="alert alert-danger text-center mt-4">Error: No se obtuvo datos de respuesta</p>
                :   null
            }
            <table className="table mt-4">
                <thead className="thead-light">    
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { products .length === 0 
                        ?   <tr>
                                <td scope="col" colSpan="4" className="text-center mt-2">No hay productos</td>
                            </tr>
                        :   products .map( product => (
                            <Product 
                                key={ product .id } 
                                product={ product }
                            />
                        ))
                    }
                </tbody>
            </table>
        </Fragment>
    );
}

export default Products;