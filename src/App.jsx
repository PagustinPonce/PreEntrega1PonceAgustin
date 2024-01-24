import './App.css'
import NavBar from "./components/NavBar/NavBar/NavBar"
import ItemListContainer from './componentes/NavBar/Contenedor/ItemListContainer/ItemListContainer'

function App() {  

  return (
    <>
    <NavBar/>

    <Contenedor persona={"Agustin Ponce"} />

    <ItemListContainer greeting ={"Bienvenidos a mi e-commerce"} />
    </>
    
  )
} 

export default App