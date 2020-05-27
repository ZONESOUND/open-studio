import React, {Component} from 'react';
import Tone from 'tone';
import {OneEuroFilter} from '../usages/filter.js';
import {soundFiles, soundFadeOut, soundFadeIn, soundFileNum} from '../usages/assetList';
import Fade from './Fade';
import ProgressBar from './ProgressBar';
import '../css/MusicBox.css'

const soundPreload = () => {
	//console.log('soundPreload');
	var meter = new Tone.Meter('level');
	var fft = new Tone.Analyser('fft', 64);
	var waveform = new Tone.Analyser('waveform', 32);
	var soundPlayer = [];
	
	for (const [key, value] of Object.entries(soundFiles)) {
		//console.log(key, value);
		var temp = new Tone.Player({
			"url": value,
			"fadeOut": soundFadeOut[key],
			"fadeIn": soundFadeIn[key]
			}).connect(meter).connect(waveform).connect(fft).toMaster();
		soundPlayer.push(temp);
	}

	return {meter: meter, fft: fft, waveform: waveform, soundPlayer:soundPlayer};
}


class MusicBox extends Component {
	constructor() {
		super();
		this.state = Object.assign({
			nowOrder: 0,
			euro: null,
			soundInterval: null,
			loading: true,
			loadPercentage: 0,
			//timeoutFunc: null,
			},soundPreload());
		Tone.Buffer.on('load', this.loadFinish);
	}

	loadFinish = () => {
		//console.log('load Finished!');
		this.setState({
			buttonTxt: "START", 
			style:{},
			loading: false,
		});
		this.clickButton();
	}
	
	componentDidMount() {
		this.calcLoadingPercentage();
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		if ("stop" in nextProps.data) {
			//console.log(`<stop> stop music`);
			this.stopAll();
			return false;
		}
		if (nextProps.show && !this.props.show) {
			let data = {order:0, mode:0, volume:0};
			this.playSound(data);
		}
		//console.log(this.props.data);
		return (nextProps.refresh !== this.props.refresh) ||
				(nextState.style !== this.state.style) || 
				(nextProps.show && !this.props.show) || 
				(nextState.loadPercentage !== this.state.loadPercentage);
	}

	render() {
		let {loading, loadPercentage} = this.state;
		let {data} = this.props;
		let {soundPlayer, nowOrder} = this.state;
		//console.log(`<render sound Data> ${JSON.stringify(data)}`);
		//console.log(`<render> animBOX`);
		//soundPlayer[nowOrder].stop();
		if (this.props.show) {

			if ("order" in data) {
				if (data.delay > 0) {
					setTimeout(() => {
						this.playSound(data);
					}, data.delay);
				} else {
					this.playSound(data);
				}
			}
			else if ("volume" in data) {
				//console.log(`<volume> ${data.volume}`);
				//this.state.soundPlayer[nowOrder].volume.value = data.volume;
				if (soundPlayer[nowOrder] !== undefined) {
					if (soundPlayer[nowOrder].loaded)
						soundPlayer[nowOrder].volume.value = data.volume;
				}
			}
		}
		
		return (<div>
			{this.props.show && 
			<Fade show={loading}>
				<div> 
					Loading {loadPercentage+'%'}
					<ProgressBar percentage={loadPercentage}/>
					
				</div>
			</Fade>}
		</div>);

		
	}

	calcLoadingPercentage = () => {
		if (this.state.loadPercentage === 1.) return;
		let loaded = 0;
		this.state.soundPlayer.forEach((e) => {
			if (e.loaded) loaded++;
		});
		this.setState({loadPercentage: Math.floor(100*loaded/soundFileNum)});
		setTimeout(this.calcLoadingPercentage, 200);
	}

	clickButton = () => {
		if (this.state.buttonTxt !== "START") {
			return;
		}

		let data = {order:0, mode:0, volume:0};
		this.setState({style: {display: "none"}});
		this.playSound(data);
	}

	stopAll = () => {
		this.state.soundPlayer.forEach((e) => {
			if (e !== undefined) {
				if (e.loaded && e.state !== 'stopped') {
					//console.log('stop!')
					e.stop();
				}
			} 
		}) 
	}

	playSound(data) {
		let {order, mode, volume} = data;

		let {soundPlayer} = this.state;
		
		if (soundPlayer[order] !== undefined) {
			if (soundPlayer[order].loaded) {
				if (volume !== undefined)
					soundPlayer[order].volume.value = volume;
				//alert(order+' played!');
				//console.log(order, 'played!');
				soundPlayer[order].start();
			} else {
				//alert(order+' not loaded!');
				//console.log(order+' not loaded!');
			}
		}
		//this.setState({nowOrder: order});
		this.state.nowOrder = order;
		//console.log(`this.state.nowOrder ${this.state.nowOrder}`);
		if (mode === "follow") 
		//DEBUG: uncomment!
			this.genAlphaFromSound(order);
		//this.state.nowOrder ++;
		//this.setState({nowOrder: order});
	}

	genAlphaFromSound() {
		//console.log("genAlphaFromSound");
		//console.log(`<v> ${this.state.soundPlayer[order].volume.value}`);
		//this.setState({euro: new OneEuroFilter(200)});
		this.state.euro = new OneEuroFilter(200);
		//let {euro, waveform, soundInterval} = this.state;
		//let euroOut = 0;
		//euro = new OneEuroFilter(200);
		if (this.state.soundInterval != null) clearInterval(this.state.soundInterval);
		//TODO: setState

		this.state.soundInterval = setInterval(this.calculateEuro, 100, this);
		
	}

	calculateEuro = () => {
		var multi = 7;
		//console.log(JSON.stringify(t.state));
		let {nowOrder, waveform, euro} = this.state;
		let euroOut = 0;
		if (this.state.soundPlayer[nowOrder] === undefined) {
			return;
		}
		if (this.state.soundPlayer[nowOrder].state === 'stopped') {
			//TODO: toblack
			clearInterval(this.state.soundInterval);
			//TODO: setState
		} else {
			var waveData = waveform.getValue();
			//console.log(`${waveData}`);
            var max = Math.max.apply(Math, waveData);
            var min = Math.min.apply(Math, waveData)*-1;
            var r = Math.max(max, min);
            r *= multi;
            if (r > 1) {
                r = 1.;
            } else if (r < 0.2 && r !== 0) {
                r = 0.2;
            }
            //console.log(`r: ${r*1000}`);
            euroOut = 1.0*euro.filter(r);
            //console.log(`euro: ${euroOut}`);
		}
		this.props.onChange(euroOut, this.props.parent);
		//this.state.soundPlayer[nowOrder].volume.value = this.props.v;
		//console.log(`<volume>: ${this.state.soundPlayer[nowOrder].volume.value}`);
	}
}

export default MusicBox;