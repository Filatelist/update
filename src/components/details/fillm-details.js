import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withFilmService} from '../hoc-components';
import {choseFilm} from "../../actions";
import './film-component.css'

class FilmDetails extends Component{


    render(){

        if (this.props.film === null){
            return(
                <div className="right border p-3">
                    <h4>Chose film</h4>
                </div>
            );
        } else{
            const {title, year, format, cast} = this.props.film;
            return(
                <div className="right p-3 margin col-lg-5 border">
                    <h3>{title}</h3><br/>
                    <hr/>
                    <span >Year: {year}</span><br/>

                    <span>Format: {format}</span><br/>

                    <span>Cast: {cast.map(item=><span>{item +', '}</span>)}</span><br/>
                    <hr/>
                </div>);
        }
    }
}
const mapStateToProps = ({film}) =>{return{film}};
const mapDispatchToProps = {
    choseFilm
};

export default withFilmService()(connect(mapStateToProps, mapDispatchToProps)(FilmDetails));
