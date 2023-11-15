import { useState, useEffect } from "react";
import {getProductById} from "../../asyncMock"
import DetailedSongCard from "../DetailedSongCard/etailedSongCard";
import { useParams } from "react-router-dom";

const SongDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect (() => {
        getProductById(itemId)
            .then(response => { setProduct (response)
            })
            .catch(error   => {console.error(error)
            })
    }, [itemId])

    return(
        <div className="SongDetailContainer">
            <DetailedSongCard {...product} />
        </div>
    )
}

export default SongDetailContainer