import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ sendCategory }) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue) {
            sendCategory(inputValue)
            setInputValue("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search your Gifs</label>
            <input id="search" type='text' value={inputValue} onChange={handleInputChange} />
        </form>
        
    )
}

AddCategory.propTypes = {
    sendCategory: PropTypes.func.isRequired
}
