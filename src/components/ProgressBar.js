import React from 'react';
import '../css/ProgressBar.css'

function ProgressBar(props) {

    return (<div className="progressBar">
        <Filler percentage={props.percentage}/>
    </div>);

}

function Filler(props) {
    let style = {width: `${props.percentage}%`}
    return (<div className="filler" style={style}></div>);
}

export default ProgressBar;