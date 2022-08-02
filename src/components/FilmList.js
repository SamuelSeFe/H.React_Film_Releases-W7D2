import React from 'react';
import Film from "./Film"

const FilmList = ({films}) => {

    const filmNodes = films.map( film => {
        return(
            <>
                <Film title={film.name} key={film.id}>{film.url}</Film>
            </>
        );
    });


    return (
        <>
            {filmNodes}
        </>
    );

};

export default FilmList;