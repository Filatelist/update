import React, {Fragment, Component} from "react";
import FilmList from '../film-list';
import FilmDetails from '../details';
import {filmsLoaded, choseFilm, searchFilm} from '../../actions';
import {connect} from 'react-redux';
import './film-page.css';
import ControlPanel from '../control-panel';
import {withFilmService} from "../hoc-components";



class FilmPage extends Component{

    state={
        id:1,
        valu:'',
        butt:'by title'
    };

    onItemSelected = (id)=>{
        this.setState({id});

        const {filmListService, choseFilm} = this.props;
        filmListService.getFilm(id)
            .then((body) => {
                choseFilm(body)});
    };

    filterSearch = (list, param, val) => {
        if (param === 'by title'){
            return list.filter(function(item){
                return item.title.toLowerCase().search(
                    val.toLowerCase()) !== -1;
            });
        } if (param === 'by artists') {
            return list.filter(function(item){
                const artists = item.cast.join(' ');
                return artists.toLowerCase().search(
                    val.toLowerCase()) !== -1;
            });
        }
    };

    onChangingInput = (event) => {
        let updateList = this.props.films, val = event.target.value;
        updateList = this.filterSearch(updateList, this.state.butt, val);
        this.props.searchFilm(updateList);
    };

    onSort = (event) => {
        event.preventDefault();
        const {filmListService} = this.props;
        filmListService.getAllFilms().then(body=>{
            let sortedBody = body.sort((item_1,item_2)=>{
                if (item_1.title.toLowerCase() > item_2.title.toLowerCase())return 1;
                if (item_1.title.toLowerCase() < item_2.title.toLowerCase())return -1;
                return 0;
            });
            this.props.filmsLoaded(sortedBody)
        });
    };
    componentDidMount() {
        const {filmListService} = this.props;
        filmListService.getAllFilms().then(body=>{
            this.props.filmsLoaded(body)
        });

    };
    usingButton = (event) =>{
        event.preventDefault();
        if (this.state.butt === 'by title'){
            this.setState({butt:'by artists'})
        }else{
            this.setState({butt:'by title'})
        }
    };
    render(){
        return(
            <Fragment>
                <ControlPanel onChangingInput={this.onChangingInput} butt={this.state.butt} onUsingButton={this.usingButton} val={this.state.valu} onSort={this.onSort} />
                <div className="container-fluid row p-3">
                    <FilmDetails id={this.state.id} film={this.props.film} />
                    <FilmList onItemSelected={this.onItemSelected} films={this.props.items} />
                </div>
            </Fragment>

        );
    }
};

const mapStateToProps = ({films, items}) => {
    return {films, items}
};

const mapDispatchToProps = {
    filmsLoaded,
    choseFilm,
    searchFilm
};
export default connect(mapStateToProps, mapDispatchToProps)(withFilmService()(FilmPage));
