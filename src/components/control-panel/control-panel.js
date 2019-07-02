import React, {Component} from 'react';
import './control-panel.css'

class ControlPanel extends Component{


    render(){
        const {butt} = this.props;
        return(
            <div className="control-panel p-3 col-lg-6">
                <hr/>
                    <input type="text" placeholder={'search'} onChange={(event)=>this.props.onChangingInput(event)} />
                    <br/>
                    <button onClick={(event)=>this.props.onUsingButton(event)} className="btn m-2 btn-primary first">{butt}</button>
                    <button className="btn btn-primary m-2 padding" onClick={(event)=>this.props.onSort(event)}>Sort</button>

            </div>
        );
    }
};
    export default ControlPanel
