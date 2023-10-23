import { createContext, useState, useEffect } from 'react'
import productos from '@/assets/db.json'
const ProdContext = createContext()
function ProdProvider ({ children }) {
  const [list, setList] = useState([]) // lista de canciones
  const [loading, setLoading] = useState(true) // ¿esta cargando la lista?
  const [selectedProd, setSelectedProd] = useState({}) // canción seleccionada
  const [search, setSearch] = useState('') // Identifica la palabra que pongo en el buscador

  // Simulo mi llamada a la API
useEffect(() => {
    setTimeout(() => {
    setList(productos)
    setLoading(false)
    }, 2000)
}, [])

const data = {
    list,
    loading,
    selectedProd,
    setSelectedProd,
    search,
    setSearch
}

return (
    <ProdContext.Provider value={data}>
    {children}
    </ProdContext.Provider>
)
}

// Exportar las funciones del Provider y el Contexto para hacerlos accesibles.
export {
    ProdProvider,
    ProdContext
}