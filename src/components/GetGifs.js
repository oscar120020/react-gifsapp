import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GetGifs = ({ category }) => {

    const {data:gifs, loading} = useFetchGifs(category)

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash animate__repeat-3">Cargando...</p>}
            <div className="card-grid">
                {gifs.map(img => <GifItem key={img.id} img={img} />)}
            </div>
        </>
    )
}
