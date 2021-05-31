import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GetGifs } from './components/GetGifs'

export const GifExpertApp = () => {
    const [category, setCategory] = useState([])

    const sendCategory = (data) => {
        setCategory([data, ...category])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory sendCategory={sendCategory}/>
            <hr/>
            <ol>
                {category.map(catg => <GetGifs key={Math.random().toString(36).substring(2)} category={catg}/>)}
            </ol>

        </>
    )
}
