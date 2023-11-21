import {useState, useEffect} from 'react'
import {getProducts, getProductsByCategory} from '../../asyncMock'
import ItemList from '../SongList/SongList'
import { useParams } from 'react-router-dom'
import { Row } from 'react-bootstrap'

// esta funcion se encarga de que las cards aparezcan en el sitio

const SongListContainer = ( {epale} ) => {
   const [products, setProducts] = useState([])
   
   const {categoryId} = useParams()

   useEffect ( () => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts 

      asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
      }, [categoryId])
   
    return (
    <div>
        <h3> {epale} </h3>
        <Row xs={1} md={2} className="g-4">
        <div style={{width:'200px', margin:'20px'}}>
          <ItemList products={products}/>
        </div>
        </Row>
    </div>
    )  
}

export default SongListContainer 