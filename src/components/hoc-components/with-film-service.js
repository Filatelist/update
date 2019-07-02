import React from 'react';
import {FilmServiceConsumer} from '../film-service-context';

const withFilmService = () =>(Wrapped) =>{
    return (props) =>{
        return(
            <FilmServiceConsumer>
                {
                    (filmListService)=>{
                       return <Wrapped {...props} filmListService={filmListService} />
                    }
                }
            </FilmServiceConsumer>
        )
    }
};
export default withFilmService;
