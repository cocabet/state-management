import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props =>{
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 2346
        },
        {
            name: 'Game of  Thrones',
            price: '$20',
            id: 4567
        },
        {
            name: 'Inception',
            price: '$15',
            id: 2348
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]} >
            {props.children}
        </MovieContext.Provider>);
};