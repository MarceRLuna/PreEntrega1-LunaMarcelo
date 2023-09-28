
import "./ItemListContainer.css"

export const ItemListContainer = ({comunicado}) =>{

    return (
        
        <div className="catalogoContenedor">
            <h2>Item List Container</h2>
            <hr />            
            <p className="mensaje">{comunicado}</p>
        </div>
    )
}