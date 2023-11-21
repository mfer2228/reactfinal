import React, { useContext } from 'react';
import { PlayContext } from '../../context/PlayContext'; 

const PlayItem = ({ item }) => {
    const { id, nombre, duracion, quantity } = item;
    const { removeItem } = useContext(PlayContext);

    const handleRemove = () => {
        removeItem(id);  
    };

    return (
        <div className="CardContenedor">
            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHeader">{nombre}</h2>
                </header>
                <section>
                    <p className="Info">Duración: {duracion}</p>
                </section>
                <section>
                    <p className="Info">Repeticiones: {quantity}</p>
                </section>
                <footer className="ItemFooter">
                    <button className="" onClick={handleRemove}>
                        X
                    </button>
                </footer>
            </article>
        </div>
    );
};

export default PlayItem;