
const filmsLoaded = (newFilms) =>{
    return{
        type:'FILMS_LOADED',
        payload: newFilms
    }
};

const choseFilm = (film) =>{
    return{
        type: 'GET_CHOSEN_FILM',
        payload: film
    }
};

const searchFilm = (films)=>{
    return{
        type:'FILMS_SEARCHING',
        payload: films
    }
}

export {
    filmsLoaded,
    choseFilm,
    searchFilm
};
