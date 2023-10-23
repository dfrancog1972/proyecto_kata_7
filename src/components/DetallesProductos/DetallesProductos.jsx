import { useProdContext } from '@/hooks/useProdContext'
import '@/components/DetallesProductos/detallesproductos.css'

const ProdDetails = () => {
const { selectedProd } = useProdContext()

console.log(selectedProd)

return (
    <>
    {
        selectedProd.product_name
        ? (
            <div>
                <img src={selectedProd.image} alt={selectedProd.product_name} />
                <h2>Producto: {selectedProd.product_name}</h2>
                <p>Descripción: {selectedProd.description}</p>
                <h3>Categoria: {selectedProd.category}</h3>
                <h3>Marca: {selectedProd.brand}</h3>
                <h3>Creado en:  {selectedProd.createdAt}</h3>
                <h3>Actualizado: {selectedProd.updatedAt}</h3>
                <h3>Precio: <strong>{selectedProd.price}</strong></h3>
            </div>
            )
        : <h1>Selecciona un producto</h1>
        }
    </>
)
}
export default ProdDetails