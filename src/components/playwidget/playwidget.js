import './playwidget.css' 
import { useContext } from 'react'
import { PlayContext} from '../../context/PlayContext'
import { Link } from 'react-router-dom'

const Playwidget = () => {

    const{totalQuantity} = useContext(PlayContext)

    return (
        
            <Link to='/playlist' className='PlayWidget' style={{ display:totalQuantity > 0? 'block' : 'none'}}>
            🎵
            {totalQuantity}
            </Link>
    )
}

export default Playwidget