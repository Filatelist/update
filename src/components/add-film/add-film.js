import React from 'react';
import './add-film.css'
import {withFilmService} from '../hoc-components';

class AddFilm extends React.Component{

    state={
        id:0,
        title:'',
        year:'',
        format:'DVD',
        cast:'',
        notAllInput:false
    };
    componentDidMount() {
        const {filmListService} = this.props;
        filmListService.getAllFilms().then(
            body=>{
                this.setState({
                    id: body.length+1
                })
            }
        )
    }

    onSubmit = (event) =>{
        event.preventDefault();
        const {title,year,format, cast} = this.state;
        if (title===''||year===''||format===''||cast===''||parseInt(year,2)>=1850||parseInt(year,2)<=2020){
            this.setState({notAllInput:true});
            return;
        }
        let formData = {
            title,
            year,
            format,
            cast:cast.split(',')
        };
        const {filmListService} = this.props;
        filmListService.postData(formData);
        window.location.replace('/')

    };

    fileGet = (event) =>{
        this.setState({hasFile: true});
        const url = event.target;
        const reader = new FileReader();
        const {filmListService} = this.props;
        reader.onload = ()=>{
            let text = JSON.parse(reader.result);
            const {title,year,format,cast} = text;
            let formData = {
                title,
                year,
                format,
                cast
            };
            filmListService.postData(formData);
        };
        reader.readAsText(url.files[0]);
        window.location.replace('/')
    };
    render() {
         return(
            <div className="container align-content-center">
                <div className="import bg-light p-2 ">
                    <form action="submit" className="d-block">
                        <hr/>
                        <input type="text" className="inp" value={this.state.title} onChange={event=>{this.setState({title:event.target.value})}} placeholder="Input the name of film"/><br/>
                        <input type="text" className="inp" value={this.state.year} onChange={event=>{this.setState({year:event.target.value})}} placeholder="Its` year"/><br/>
                        <select className="inp" value={this.state.format} placeholder="Format (DVD, VHS, Blu-Ray)" onChange={event=>{this.setState({format:event.target.value})}} name="format" id="format">
                            <option value="DVD">DVD</option>
                            <option value="VHS">VHS</option>
                            <option value="Blu-Ray">Blu-Ray</option>
                        </select>
                        <br/>
                        <input type="text" className="inp w-100" value={this.state.cast} onChange={event=>{this.setState({cast:event.target.value})}} placeholder="the cast (Example: John Smith, Edie Murphy)"/><br/>
                        <br/>
                        <button type="submit m-2" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                        <hr/>
                        <p>OR</p>
                        <input type="file" onChange={this.fileGet}/>
                        <hr/>
                        {this.state.notAllInput?<p>Not all data correct</p>:<p></p>}

                    </form>
                </div>
            </div>
        );
    }
};
export default withFilmService()(AddFilm);
