import React, { useState } from 'react';

const FilmForm = ({onFilmSubmit}) => {

    const [title, setTitle] = useState ("");
    const [url, setUrl] = useState ("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const titleToSubmit = title.trim();
        const urlToSubmit = url.trim();

        if(!titleToSubmit || !urlToSubmit) {
            return
        };

        onFilmSubmit({
            name: titleToSubmit,
            url: urlToSubmit
        });

        setTitle("");
        setUrl("");
    };


    return (
        <form className="film-form" onSubmit={handleFormSubmit}>
            <input
            type="text"
            placeholder="Film title"
            value={title}
            onChange={handleTitleChange}
            />
            <input
            type="text"
            placeholder="Enter film link here"
            value={url}
            onChange={handleUrlChange}
            />
            <input
            type="submit"
            value="Post"
            />
        </form>
    );
};

export default FilmForm;