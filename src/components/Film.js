import React from 'react';

const Film = ({title, children}) => {

    return (
        <>
        <li>
            <a href={children} target="_blank">{title}</a>
        </li>
        </>

    );


};

export default Film;