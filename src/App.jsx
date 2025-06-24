import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import VerListaModal from './components/Verlistamodal'
import ListaPelicula from './components/ListaPelicula'

function App() {
const [isModalOpen, setisModalOpen] = useState(false)
//const [verLista, setverLista] = useState([])

const [verLista, setverLista] = useState(() => {
  const storedList = localStorage.getItem('verLista');
  return storedList ? JSON.parse(storedList) : [];
})

  return (
    <>
      <div>
        <Header setisModalOpen={setisModalOpen} />

        <VerListaModal
        isModalOpen={isModalOpen}
        setisModalOpen={setisModalOpen}
        verLista={verLista}
        setverLista={setverLista} 
        />

        <ListaPelicula
        verLista={verLista}
        setverLista={setverLista}
        />
      </div>
        
    </>
  )
}

export default App
