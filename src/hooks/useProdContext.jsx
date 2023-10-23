import { useContext } from 'react'
import { ProdContext } from '@/context/ProdContext'

// Paso 3. Crear al consumidor del contexto
export const useProdContext = () => {
    const context = useContext(ProdContext)
    if (!context) {
        throw new Error('useSongContext debe estar dentro del proveedor SongProvider')
    }
    return context
}