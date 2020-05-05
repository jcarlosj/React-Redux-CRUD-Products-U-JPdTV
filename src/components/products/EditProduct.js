import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const EditProduct = () => {

    /** Accede al State 'products' del Store */
    const 
        history = useHistory(),
        selectedProduct = useSelector( state => state .products .selectedProduct );    // para la propiedad selectedProduct

    /** Valida si hay un producto Seleccionado */
    console .log( selectedProduct );
    if( ! selectedProduct ) {
        history .push( '/' );
        return null;
    }

    const { id, name, price } = selectedProduct;  

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2>Edita Producto</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    placeholder="Nombre del producto" 
                                    value={ name }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Precio</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="price" 
                                    value={ price }
                                />
                            </div>  
                            <button
                                type="button"
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