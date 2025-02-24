
import { Form } from "./components/Form"
import { Navbar } from "./components/Navbar"
import { Table } from "./components/Table"

function App() {
  return (
    <>
     <div className="container">
      <div className="row mb-3">
       {/* Aqui va la llamada al componente de la Navbar */}
       <Navbar/>
        </div>
        <div className="row">
          <div className="col-lg-5">
            {/* Aqui va la llamada al componente del form */}
            <Form/>
          </div>
          <div className="col-lg-7">
            {/* Aqui va la llamada al componente de la tabla */}
            <Table/>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
