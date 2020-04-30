import React, { Fragment } from 'react';

const Products = () => {
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