import React, {useState, useEffect} from 'react';
import {useInterval} from '../usages/tool';
import '../css/LandPage.css';
import ReactHtmlParser from 'react-html-parser'; 

//import sketch from '../usages/landPageSketch'

function LandPage(props) {
    const buttonTime = [0, 10];
    const txt = 'Your device is the channel between cyberspace and meatspace.</br></br>How do you want to be connected?';
    // const txt = `Your device is the channel between cyberspace and meatspace. Bits organized into code now consitute the powerful means we have for expressing intentions and translating then into actions.
    // How do you want to be connected?`;
    const [displayTxt, setDisplayTxt] = useState('');
    const [index, setIndex] = useState(0);
    const [buttonAppear, setButtonAppear] = useState(0);
    useInterval(() => {
        if (index >= txt.length) {
            if (buttonAppear === -1) return;
            setButtonAppear(buttonAppear+1);
            return;
        }
        let plus = 1;
        if (txt[index] === '<') plus = 4;
        
        setDisplayTxt(txt.substring(0, index+plus));
        setIndex(index+plus);

    }, 100);
    const [translateClass, setTranslateClass] = useState(''); 
    
    useEffect(()=> {

        if (buttonAppear > buttonTime[0]) setTranslateClass('translate');
        if (buttonAppear > buttonTime[1]) setTranslateClass('translate2');
    })
    // let getPos = useRef((el)=> {
    //     console.log(el.getBoundingClientRect());
    // });
    let select = (mode) => {
        //setButtonAppear(-1);
        props.select(mode);
    }

    return (
        <div id='LandpageWrapper' className={translateClass}>
            <div id='LandpageTxt'>
            {ReactHtmlParser (displayTxt)}
            </div>
            {buttonAppear>buttonTime[0] && 
                <button className='selectBtn' onClick={()=>{select(0)}}>Transmitter</button>}
            {buttonAppear>buttonTime[1] && 
                <button className='selectBtn' onClick={()=>{select(1)}}>Receiver</button>}
        </div>
    );
}

// refs={ el => 
//     this.setState( state => ({
//       pos: {
//         ...state.pos, 
//         [el.name]: el.getBoundingClientRect()
//     }))
//   }
// class LandPage extends Component {

//     constructor() {
//         super();
//         this.state = {
//             displayTxt: '',
//             allTxt: 'Which one do you want to be ?',
//         }
//     }

//     componentDidMount() {
//         if (!window.requestAnimationFrame) { 
//             requestAnimationFrame = function(fn) { 
//                 setTimeout(fn, 17); 
//             }; 
//         }
//         requestAnimationFrame();
//     }

//     typing = () => {
//         count++;
//     }

//     render() {
//         return (
//             <div>
//                 <div>
//                     {this.state.displayTxt}
//                 </div>
//                 <button></button>
//                 <button></button>
//             </div>
//         );
//     }
// }
export default LandPage;