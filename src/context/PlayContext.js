import { createContext, useState } from "react";

export const PlayContext = createContext({
    playlist: []
})

export const PlayProvider = ({ children }) => {
    const [play , setPlay] = useState([])

    console.log (play)

    const AddItem = (item, quantity) => {
        if(!isInPlay(item.id)) {
            setPlay(prev => [...prev, {...item, quantity}])
        } else {
            console.error('La canción ya fue agregada')
        }
    }

    const RemoveItem = (itemId) => {
        const playUpdated = play.filter(prod => prod.id !== itemId)
        setPlay(playUpdated)

    }

    const clearPlaylist = () => {
        setPlay([])
    }

    const isInPlay = (itemId) => {
        return play.some(prod => prod.id === itemId)
    }

    return(
        <PlayContext.Provider value={{play, AddItem, RemoveItem, clearPlaylist}}>
            {children}
        </PlayContext.Provider>

    )
}