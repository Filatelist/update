const initialState ={
    film:null,
    films:[],
    items:[]
};

const reducer = (state = initialState, action) =>{

    switch (action.type) {
        case 'FILMS_LOADED':
            return{
                ...state,
                films: action.payload,
                items: action.payload
            };

        case 'GET_CHOSEN_FILM':
            return{
                ...state,
                film: action.payload
            };
        case 'FILMS_SEARCHING':
            return{
                ...state,
                items: action.payload
            };
        default:return state;
    }

};

export default reducer;
