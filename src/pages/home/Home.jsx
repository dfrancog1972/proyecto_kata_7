import Header from '@/components/Header/Header'
import Productos from '@/components/Productos/Productos.jsx'
import DetallesProductos from '@/components/DetallesProductos/DetallesProductos.jsx'
import { ProdProvider } from '@/context/ProdContext'

import './home.css'

const Home = () => {
return (
    <ProdProvider>
    <Header />
    <div className='home-container'>
        <Productos/>
    </div>
    </ProdProvider>
)
}

export default Home