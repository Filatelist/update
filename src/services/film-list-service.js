

export default class filmListService {

    base = 'http://localhost:3001/films';

    getFilm = async (id) =>{
        const res = await fetch(this.base + '/' + id);
        const body = await res.json();
        return body
    };

    getAllFilms = async () => {
        const res = await fetch(this.base);
        const body = await res.json();

        return body
    };
    postData = ( data = {})=> {
        return fetch(this.base, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data),
        })
            .then(response => response.json());
    };
    importFilms = (film) =>{
        this.dummyFile.push(film);
    }
}
