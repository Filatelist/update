import React from 'react';
import './film-list.css'


const FilmList = ({onItemSelected, films}) =>{
    return(
        <div className="col-lg-6">

            <ul className="list-group">
                {
                    films.map(film=>{
                        const {title, id} = film;
                        return <li key={id} type="button" onClick={()=>onItemSelected(film.id)} className="list-group-item">{title}</li>
                    })
                }
            </ul>
        </div>
    );
};


export default FilmList;
