

export const Table = () => {
  return (
    <> 
    <table className="table table-success table-striped-columns">
        <thead>
            <th>Codigo de Barras</th>
            <th>Descripción</th>
            <th>Marca</th>
            <th>Costo</th>
            <th>Precio</th>
            <th>Caducidad</th>
            <th>Existencias</th>
            <th colSpan={2}>Operaciónes</th>
            
        </thead>
  ...
</table>
    
    </>
  )
}
