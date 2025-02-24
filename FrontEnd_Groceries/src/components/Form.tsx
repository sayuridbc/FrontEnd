
export const Form = () => {
  return (
    <>
    <div className="card">
        <div className="card-header">
            <h3>Registro de productos</h3>
        </div>
        <div className="card-body">
            <form action="">
                <div className="row">
                    <div className="col-lg-6">
                        <label htmlFor="txtBarcode" className="form-label">Código de Barras</label>
                        <input type="text"id="txtBarcode" className="form-control" name="barcode"/>
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="txtDescription" className="form-label">Descripción</label>
                        <input type="text" id="txtDescription" className="form-control" name="description" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="txtBrand" className="form-label">Marca</label>
                        <input type="text" id="txtBrand" className="form-control" name="brand" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="txtPrice" className="form-label">Precio compra</label>
                        <input type="Number" id="txtprice" className="form-control" name="price" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="txtCost" className="form-label">Precio Venta</label>
                        <input type="Number" id="txtcost" className="form-control" name="cost" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="txtStock" className="form-label">Stock</label>
                        <input type="Number" id="txtstock" className="form-control" name="stock" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="txtexpireDate" className="form-label">Fecha de expiración</label>
                        <input type="Date" id="txtdate" className="form-control" name="date" />
                    </div>

                </div>
            </form>

        </div>
    </div>
    </>
  )
}
