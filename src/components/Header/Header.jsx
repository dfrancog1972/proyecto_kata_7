import { useProdContext } from '@/hooks/useProdContext'
import './header.css'

const Header = () => {
const { list, selectedProd, setSelectedProd, setSearch } = useProdContext()

const handleSearch = (e) => {
    setSearch(e.target.value)
}

const nextProd = () => {
    const prodIndex = list.findIndex(s => s.id === selectedProd.id)
    list.length > prodIndex + 1
    ? setSelectedProd(list[prodIndex + 1])
    : setSelectedProd(list[0])
}

const prevProd = () => {
    const prodIndex = list.findIndex(s => s.id === selectedProd.id)
    prodIndex > 0
    ? setSelectedProd(list[prodIndex - 1])
    : setSelectedProd(list[list.length - 1])
}

const shuffle = () => {
    const randomIndex = Math.floor(Math.random() * list.length)
    setSelectedProd(list[randomIndex])
}

return (
    <>
    <div className='header__container'>
        {
        list.length > 0
        ? (
            <>
            <input
                className='header__input-search'
                type='search'
                placeholder='Buscar prod...'
                onChange={handleSearch}
            />

            <div className='header__now-playing-container'>
                <span className='header__now-playing'>
                Producto seleccionado:
                </span>
                <span className='header__prod-detail'>
                {selectedProd.product_name} - {selectedProd.brand}
                </span>
            </div>
{/*  
            <div>
                <button
                className='header__button'
                onClick={shuffle}
                > 🔀 Suerte
                </button>

                <button
                className='header__button'
                onClick={prevProd}
                > ◀️ Antes
                </button>

                <button
                className='header__button'
                onClick={nextProd}
                > Despues▶️
                </button>
            </div> */}
            </>
            )
        : <h2>Cargando...</h2>
        }
    </div>
    </>
)
}
export default Header