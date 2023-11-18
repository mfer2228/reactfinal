import { useContext } from "react";
import { PlayContext} from '../../context/PlayContext'
import { PlayItem} from '../PlayItem/PlayItem'
import { Link } from "react-router-dom";

const Playlist = () => {
    const { playlist, clearPlaylist, totalQuantity, total} = useContext(PlayContext)

    if (totalQuantity === 0) {
        return (
        <h1>
           <div>'Nada aún :C '</div> 
           <Link to='/' className='Option'>Solucionar eso</Link>
        </h1>
        )
    } 

    return (
        <div>
            {playlist.map(p => <PlayItem key={p.id} {...p}/>)}
            <h3>total: {total} min</h3>
            <button onClick={() => clearPlaylist()} className='Button'>Limpiar playlist</button> 
            <Link to='/checkout' className="Option">Listo el pollo </Link> 
        </div>
    )
}