(this["webpackJsonpopen-studio"]=this["webpackJsonpopen-studio"]||[]).push([[0],Array(66).concat([function(e,a){e.exports.hsvToRgb=function(e,a,t){var n,i,s,o=Math.floor(6*e),r=6*e-o,c=t*(1-a),_=t*(1-r*a),p=t*(1-(1-r)*a);switch(o%6){case 0:n=t,i=p,s=c;break;case 1:n=_,i=t,s=c;break;case 2:n=c,i=t,s=p;break;case 3:n=c,i=_,s=t;break;case 4:n=p,i=c,s=t;break;case 5:n=t,i=c,s=_}return{r:255*n,g:255*i,b:255*s}},e.exports.rgbToHsv=function(e,a,t){e/=255,a/=255,t/=255;var n,i,s=Math.max(e,a,t),o=Math.min(e,a,t),r=s,c=s-o;if(i=0===s?0:c/s,s===o)n=0;else{switch(s){case e:n=(a-t)/c+(a<t?6:0);break;case a:n=(t-e)/c+2;break;case t:n=(e-a)/c+4}n/=6}return{h:n,s:i,v:r}},e.exports.hslToRgb=function(e,a,t){var n,i,s;if(0==a)n=i=s=t;else{var o=function(e,a,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(a-e)*t:t<.5?a:t<2/3?e+(a-e)*(2/3-t)*6:e},r=t<.5?t*(1+a):t+a-t*a,c=2*t-r;n=o(c,r,e+1/3),i=o(c,r,e),s=o(c,r,e-1/3)}return{r:255*n,g:255*i,b:255*s}},e.exports.rgbToHsl=function(e,a,t){e/=255,a/=255,t/=255;var n,i,s=Math.max(e,a,t),o=Math.min(e,a,t),r=(s+o)/2;if(s===o)n=i=0;else{var c=s-o;switch(i=r>.5?c/(2-s-o):c/(s+o),s){case e:n=(a-t)/c+(a<t?6:0);break;case a:n=(t-e)/c+2;break;case t:n=(e-a)/c+4}n/=6}return{h:n,s:i,l:r}}},function(e,a,t){e.exports=t(252)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,,,,,,,,,,,,,function(e,a){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a){},,,function(e,a,t){var n={"./Mixed_Fx_Sounds/90 Realm.mp3":147,"./Mixed_Fx_Sounds/91 Twisted.mp3":148,"./Mixed_Fx_Sounds/92 Ghosts.mp3":149,"./Mixed_Fx_Sounds_1/90 Realm.wav":150,"./Mixed_Fx_Sounds_1/91 Twisted.wav":151,"./Mixed_Fx_Sounds_1/92 Ghosts.wav":152,"./Noises/Analogue Hiss Mid Boost.mp3":153,"./Noises/Crackle Pops.mp3":154,"./Noises/Crunchy Crackle.mp3":155,"./Noises/Fake Vinyl 1.mp3":156,"./Noises/Fake Vinyl 2.mp3":157,"./Noises/FizzPop.mp3":158,"./Noises/FizzPopper2.mp3":159,"./Noises_1/Analogue Hiss Lo Boost.aif":160,"./Noises_1/Analogue Hiss Lo Cut.aif":161,"./Noises_1/Analogue Hiss Mid Boost.aif":162,"./Noises_1/Crackle Pops.aif":163,"./Noises_1/Crunchy Crackle.aif":164,"./Noises_1/Fake Vinyl 1.aif":165,"./Noises_1/Fake Vinyl 2.aif":166,"./Noises_1/FizzPop.aif":167,"./Noises_1/FizzPopper2.aif":168,"./ORGANIC_LPS_135_BPM/ZS_Organic_01_Louis_135.wav":169,"./ORGANIC_LPS_135_BPM/ZS_Organic_02_Water_Drops_135.wav":170,"./ORGANIC_LPS_135_BPM/ZS_Organic_03_Hammer_135.wav":171,"./ORGANIC_LPS_135_BPM/ZS_Organic_04_Drips_in_the_House_135.wav":172,"./ORGANIC_LPS_135_BPM/ZS_Organic_05_Juve_135.wav":173,"./ORGANIC_LPS_135_BPM/ZS_Organic_06_Birdsong_135.wav":174,"./ORGANIC_LPS_135_BPM/ZS_Organic_07_Bardi_135.wav":175,"./ORGANIC_LPS_135_BPM/ZS_Organic_08_Broken_Glass_135.wav":176,"./ORGANIC_LPS_135_BPM/ZS_Organic_09_Back_Yard_Rain_135.wav":177,"./ORGANIC_LPS_135_BPM/ZS_Organic_10_Bubbling_135.wav":178,"./ORGANIC_LPS_90_BPM/TDDC_Organic_01_Distorted_Drip_Sirens_90.wav":179,"./ORGANIC_LPS_90_BPM/TDDC_Organic_02_Water_Drops_90.wav":180,"./ORGANIC_LPS_90_BPM/TDDC_Organic_03_Italian_Animals_90.wav":181,"./ORGANIC_LPS_90_BPM/TDDC_Organic_04_Rain_and_Road_Noise_90.wav":182,"./ORGANIC_LPS_90_BPM/TDDC_Organic_06_Rain_and_Drain_90.wav":183,"./ORGANIC_LPS_90_BPM/TDDC_Organic_06_Thunder_Storm_90.wav":184,"./ORGANIC_LPS_90_BPM/TDDC_Organic_07_Seagulls_90.wav":185,"./ORGANIC_LPS_90_BPM/TDDC_Organic_08_Street_Echoes_90.wav":186,"./ORGANIC_LPS_90_BPM/TDDC_Organic_09_Surf_90.wav":187,"./ORGANIC_LPS_90_BPM/TDDC_Organic_10_Street_Life_90.wav":188,"./S7_recordings/S7_1.mp3":189,"./S7_recordings/S7_2.mp3":190,"./S7_recordings/S7_3.mp3":191,"./S7_recordings/S7_4.mp3":192,"./S7_recordings_1/S7_1.m4a":193,"./S7_recordings_1/S7_2.m4a":194,"./S7_recordings_1/S7_3.m4a":195,"./S7_recordings_1/S7_4.m4a":196,"./iPad_FX_Samples/sample_1-1.mp3":197,"./iPad_FX_Samples/sample_1-2.mp3":198,"./iPad_FX_Samples/sample_1-3.mp3":199,"./iPad_FX_Samples/sample_1-4.mp3":200,"./iPad_FX_Samples/sample_1-5.mp3":201,"./iPad_FX_Samples/sample_2-1.mp3":202,"./iPad_FX_Samples/sample_2-2.mp3":203,"./iPad_FX_Samples/sample_2-3.mp3":204,"./iPad_FX_Samples/sample_2-4.mp3":205,"./iPad_FX_Samples/sample_2-5.mp3":206,"./iPad_FX_Samples/sample_3-1.mp3":207,"./iPad_FX_Samples/sample_3-2.mp3":208,"./iPad_FX_Samples/sample_3-3.mp3":209,"./iPad_FX_Samples/sample_3-4.mp3":210,"./iPad_FX_Samples/sample_3-5.mp3":211,"./iPad_FX_Samples/sample_4-1.mp3":212,"./iPad_FX_Samples/sample_4-2.mp3":213,"./iPad_FX_Samples/sample_4-3.mp3":214,"./iPad_FX_Samples/sample_4-4.mp3":215,"./iPad_FX_Samples/sample_4-5.mp3":216,"./iPad_FX_Samples_1/sample_1-1.wav":217,"./iPad_FX_Samples_1/sample_1-2.wav":218,"./iPad_FX_Samples_1/sample_1-3.wav":219,"./iPad_FX_Samples_1/sample_1-4.wav":220,"./iPad_FX_Samples_1/sample_1-5.wav":221,"./iPad_FX_Samples_1/sample_2-1.wav":222,"./iPad_FX_Samples_1/sample_2-2.wav":223,"./iPad_FX_Samples_1/sample_2-3.wav":224,"./iPad_FX_Samples_1/sample_2-4.wav":225,"./iPad_FX_Samples_1/sample_2-5.wav":226,"./iPad_FX_Samples_1/sample_3-1.wav":227,"./iPad_FX_Samples_1/sample_3-2.wav":228,"./iPad_FX_Samples_1/sample_3-3.wav":229,"./iPad_FX_Samples_1/sample_3-4.wav":230,"./iPad_FX_Samples_1/sample_3-5.wav":231,"./iPad_FX_Samples_1/sample_4-1.wav":232,"./iPad_FX_Samples_1/sample_4-2.wav":233,"./iPad_FX_Samples_1/sample_4-3.wav":234,"./iPad_FX_Samples_1/sample_4-4.wav":235,"./iPad_FX_Samples_1/sample_4-5.wav":236};function i(e){var a=s(e);return t(a)}function s(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=146},function(e,a,t){e.exports=t.p+"static/media/90 Realm.2fc429c7.mp3"},function(e,a,t){e.exports=t.p+"static/media/91 Twisted.41b7e873.mp3"},function(e,a,t){e.exports=t.p+"static/media/92 Ghosts.af57eaca.mp3"},function(e,a,t){e.exports=t.p+"static/media/90 Realm.aaa23448.wav"},function(e,a,t){e.exports=t.p+"static/media/91 Twisted.5106b983.wav"},function(e,a,t){e.exports=t.p+"static/media/92 Ghosts.197f0c90.wav"},function(e,a,t){e.exports=t.p+"static/media/Analogue Hiss Mid Boost.07f1478e.mp3"},function(e,a,t){e.exports=t.p+"static/media/Crackle Pops.f0c095aa.mp3"},function(e,a,t){e.exports=t.p+"static/media/Crunchy Crackle.404d39dc.mp3"},function(e,a,t){e.exports=t.p+"static/media/Fake Vinyl 1.9c20ac9f.mp3"},function(e,a,t){e.exports=t.p+"static/media/Fake Vinyl 2.adca2250.mp3"},function(e,a,t){e.exports=t.p+"static/media/FizzPop.43a87ffc.mp3"},function(e,a,t){e.exports=t.p+"static/media/FizzPopper2.bfa6fc43.mp3"},function(e,a,t){e.exports=t.p+"static/media/Analogue Hiss Lo Boost.332e560a.aif"},function(e,a,t){e.exports=t.p+"static/media/Analogue Hiss Lo Cut.952afa17.aif"},function(e,a,t){e.exports=t.p+"static/media/Analogue Hiss Mid Boost.4cd487d1.aif"},function(e,a,t){e.exports=t.p+"static/media/Crackle Pops.c7977529.aif"},function(e,a,t){e.exports=t.p+"static/media/Crunchy Crackle.5bf5313e.aif"},function(e,a,t){e.exports=t.p+"static/media/Fake Vinyl 1.d7b01358.aif"},function(e,a,t){e.exports=t.p+"static/media/Fake Vinyl 2.253f0fd1.aif"},function(e,a,t){e.exports=t.p+"static/media/FizzPop.bbb2cfde.aif"},function(e,a,t){e.exports=t.p+"static/media/FizzPopper2.0079c45c.aif"},function(e,a,t){e.exports=t.p+"static/media/ZS_Organic_01_Louis_135.ae41b6e6.wav"},function(e,a,t){e.exports=t.p+"static/media/ZS_Organic_02_Water_Drops_135.a72f1db0.wav"},function(e,a,t){e.exports=t.p+"static/media/ZS_Organic_03_Hammer_135.1653486c.wav"},function(e,a,t){e.exports=t.p+"static/media/ZS_Organic_04_Drips_in_the_House_135.47ec382a.wav"},function(e,a,t){e.exports=t.p+"static/media/ZS_Organic_05_Juve_135.f2a386d5.wav"},function(e,a,t){e.exports=t.p+"static/media/ZS_Organic_06_Birdsong_135.d1ac4294.wav"},function(e,a,t){e.exports=t.p+"static/media/ZS_Organic_07_Bardi_135.0c5c29db.wav"},function(e,a,t){e.exports=t.p+"static/media/ZS_Organic_08_Broken_Glass_135.6b76d413.wav"},function(e,a,t){e.exports=t.p+"static/media/ZS_Organic_09_Back_Yard_Rain_135.a93f003e.wav"},function(e,a,t){e.exports=t.p+"static/media/ZS_Organic_10_Bubbling_135.63c27678.wav"},function(e,a,t){e.exports=t.p+"static/media/TDDC_Organic_01_Distorted_Drip_Sirens_90.313dff12.wav"},function(e,a,t){e.exports=t.p+"static/media/TDDC_Organic_02_Water_Drops_90.877a7a3b.wav"},function(e,a,t){e.exports=t.p+"static/media/TDDC_Organic_03_Italian_Animals_90.31840086.wav"},function(e,a,t){e.exports=t.p+"static/media/TDDC_Organic_04_Rain_and_Road_Noise_90.5de1106c.wav"},function(e,a,t){e.exports=t.p+"static/media/TDDC_Organic_06_Rain_and_Drain_90.5b300a38.wav"},function(e,a,t){e.exports=t.p+"static/media/TDDC_Organic_06_Thunder_Storm_90.09c67016.wav"},function(e,a,t){e.exports=t.p+"static/media/TDDC_Organic_07_Seagulls_90.1e44d7d6.wav"},function(e,a,t){e.exports=t.p+"static/media/TDDC_Organic_08_Street_Echoes_90.e7ed272b.wav"},function(e,a,t){e.exports=t.p+"static/media/TDDC_Organic_09_Surf_90.2c343240.wav"},function(e,a,t){e.exports=t.p+"static/media/TDDC_Organic_10_Street_Life_90.d478bb20.wav"},function(e,a,t){e.exports=t.p+"static/media/S7_1.aa55acac.mp3"},function(e,a,t){e.exports=t.p+"static/media/S7_2.1f793c6d.mp3"},function(e,a,t){e.exports=t.p+"static/media/S7_3.13190e8a.mp3"},function(e,a,t){e.exports=t.p+"static/media/S7_4.1290501f.mp3"},function(e,a,t){e.exports=t.p+"static/media/S7_1.f320a9ac.m4a"},function(e,a,t){e.exports=t.p+"static/media/S7_2.cfd2f9df.m4a"},function(e,a,t){e.exports=t.p+"static/media/S7_3.3143dd66.m4a"},function(e,a,t){e.exports=t.p+"static/media/S7_4.4e939f3c.m4a"},function(e,a,t){e.exports=t.p+"static/media/sample_1-1.13028553.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_1-2.7650b135.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_1-3.8790d909.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_1-4.f9bb29ba.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_1-5.342b425b.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_2-1.a54a1452.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_2-2.91e0a60f.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_2-3.cbac8904.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_2-4.563c08ed.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_2-5.6922cc24.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_3-1.18b54204.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_3-2.90f252e1.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_3-3.dda1bb14.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_3-4.315616b2.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_3-5.884eb07c.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_4-1.79d80ca9.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_4-2.264a18ca.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_4-3.0725ed3e.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_4-4.0b7d69a2.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_4-5.c58b4052.mp3"},function(e,a,t){e.exports=t.p+"static/media/sample_1-1.8e6341be.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_1-2.6c60e8c3.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_1-3.e15b3f63.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_1-4.01880ee2.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_1-5.07b7069b.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_2-1.e1be8bc7.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_2-2.2f9c9e15.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_2-3.9b5e44f6.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_2-4.1fb6d5e0.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_2-5.d0cf3356.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_3-1.84339a05.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_3-2.908333bc.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_3-3.1e96fc54.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_3-4.a305e468.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_3-5.7fcb4950.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_4-1.61dd2193.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_4-2.20c20d96.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_4-3.291c8085.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_4-4.06a7ff8b.wav"},function(e,a,t){e.exports=t.p+"static/media/sample_4-5.9da318bd.wav"},,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(61),o=t.n(s),r=(t(72),t(1));t(73);t(74);var c=t(62),_=t.n(c);var p,l=function(e){var a=Object(n.useState)(""),t=Object(r.a)(a,2),s=t[0],o=t[1],c=Object(n.useState)(0),p=Object(r.a)(c,2),l=p[0],d=p[1],u=Object(n.useState)(0),m=Object(r.a)(u,2),f=m[0],h=m[1];!function(e,a){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e})),Object(n.useEffect)((function(){if(null!==a){var e=setInterval((function(){t.current()}),a);return function(){return clearInterval(e)}}}),[a])}((function(){if(l>="".length){if(-1===f)return;h(f+1)}else{var e=1;"<"===""[l]&&(e=4),o("".substring(0,l+e)),d(l+e)}}),100);var v=Object(n.useState)(""),S=Object(r.a)(v,2),g=S[0];return S[1],Object(n.useEffect)((function(){})),i.a.createElement("div",{id:"LandpageWrapper",className:g},i.a.createElement("div",{id:"LandpageTxt"},_()(s)),i.a.createElement("button",{className:"selectBtn",onClick:function(){var a;a=1,e.select(a)}},"Start"))},d=function(e){var a=e.show,t=e.children,s=Object(n.useState)(a),o=Object(r.a)(s,2),c=o[0],_=o[1];Object(n.useEffect)((function(){a&&_(!0)}),[a]);return c&&i.a.createElement("div",{style:{animation:"".concat(a?"fadeIn":"fadeOut"," 0.5s")},onAnimationEnd:function(){a||_(!1)}},t)},u=t(2),m=t(3),f=t(7),h=t(6),v=t(8),S=t(63),g=t.n(S),w=t(32),O=t(64),x=t.n(O),b="https://stage-effect-server.herokuapp.com",P=function(){!0,console.log("socket connect to server")},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P,t=x()(b+e);return void 0===p&&(p=t),t.on("connect",a),t},D=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p;t.emit("osc",{address:e,args:[a]})};function C(e){var a,t,n=0,i=[],s=[],o=[255,255,255];function r(a,n){for(var s,o=32*Math.PI/t,r=0,c=0;c<t;c+=16){for(var _=0,p=0,l=c;l<c+16&&l<t;l++)_+=i[l],p++;var d=(_/=p)/128*n,u=(a+d)*Math.sin(r),m=(a+d)*Math.cos(r);e.curveVertex(u,m),0===c&&(s=[u,m]),r+=o}e.vertex(s[0],s[1]),e.endShape()}e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.frameRate(30)},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)},e.myCustomRedrawAccordingToNewPropsHandler=function(e){if(e.bufferLength&&(t=e.bufferLength),e.analyser){if(null==e.analyser)return;a=e.analyser,i=new Uint8Array(a.fftSize),s=new Uint8Array(a.fftSize)}e.btnClick&&e.btnClick},e.draw=function(){if(n++,void 0!==a&&(a.getByteFrequencyData(s),a.getByteTimeDomainData(i)),e.background(o[0],o[1],o[2],50),!(i.length<=0)){var c=function(e){var a=Math.max.apply(Math,Object(w.a)(s)),n=44100*s.indexOf(a)/(2*t);return a>e?Math.floor(n):0}(50),_=Math.max.apply(Math,Object(w.a)(s))/256;_>50/255&&n%10===0&&D("/sound",{f:c,d:_}),function(a,t){e.push(),e.translate(e.windowWidth/2,e.windowHeight/2);var n=e.map(a,0,1,40,50),i=e.map(a,0,1,30,70),s=Math.floor(e.map(t,100,2e3,0,360,!0)),c=Math.floor(e.map(a,.2,1,0,50,!0));console.log(s,c),e.stroke("hsl(".concat(s,", ").concat(c,"%, 50%)")),e.fill(o[0],o[1],o[2]),e.beginShape(),r(i,n),e.endShape(e.CLOSE),e.fill("hsla(".concat(s,", ").concat(c,"%, 90%, 0.5)"));for(var _=0;_<30;_++)e.noStroke(),e.beginShape(),r(i-4-2*_,n),e.endShape(e.CLOSE),e.fill(o[0],o[1],o[2],10);e.pop()}(_,c),e.textSize(15),e.fill(200),e.textAlign(e.CENTER),e.text("MAKE SOUND",e.windowWidth/2,e.windowHeight-50)}}}var F=function(e){function a(){var e;Object(u.a)(this,a),(e=Object(f.a)(this,Object(h.a)(a).call(this))).btnClick=function(){navigator.mediaDevices.getUserMedia({audio:!0}).then(e.micStart,e.micError)},e.micStart=function(a){e.setState({style:{display:"none"}});var t=e.state.context,n=t.createMediaStreamSource(a),i=t.createAnalyser();n.connect(i),i.fftSize=2048;var s=i.frequencyBinCount,o=new Uint8Array(i.fftSize);e.setState({analyser:i,dataArray:o,bufferLength:s})},e.micError=function(){e.setState({btnTxt:"RE-EANBLE!"}),console.log("error")},e.update=function(){var a=e.state,t=a.dataArray,n=a.analyser;console.log(t),n.getByteFrequencyData(t)};var t=window.AudioContext||window.webkitAudioContext||!1;return e.state={timer:null,style:{},btnTxt:"START",context:t?new t:null},e}return Object(v.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){!function(e){p=e}(y("/user")),this.btnClick()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g.a,{sketch:C,analyser:this.state.analyser,bufferLength:this.state.bufferLength}))}}]),a}(n.Component),M=t(20),k=["./iPad_FX_Samples/sample_1-1.mp3","./iPad_FX_Samples/sample_1-2.mp3","./iPad_FX_Samples/sample_1-3.mp3","./iPad_FX_Samples/sample_1-4.mp3","./iPad_FX_Samples/sample_1-5.mp3","./iPad_FX_Samples/sample_2-1.mp3","./iPad_FX_Samples/sample_2-2.mp3","./iPad_FX_Samples/sample_2-3.mp3","./iPad_FX_Samples/sample_2-4.mp3","./iPad_FX_Samples/sample_2-5.mp3","./Noises/Analogue Hiss Mid Boost.mp3","./Noises/Crackle Pops.mp3","./Noises/Crunchy Crackle.mp3","./S7_recordings/S7_1.mp3","./S7_recordings/S7_2.mp3","./S7_recordings/S7_3.mp3","./S7_recordings/S7_4.mp3","./Mixed_Fx_Sounds/90 Realm.mp3","./Mixed_Fx_Sounds/91 Twisted.mp3","./Mixed_Fx_Sounds/92 Ghosts.mp3","./Noises/Fake Vinyl 1.mp3","./Noises/Fake Vinyl 2.mp3","./Noises/FizzPop.mp3","./Noises/FizzPopper2.mp3","./iPad_FX_Samples/sample_4-1.mp3","./iPad_FX_Samples/sample_4-2.mp3","./iPad_FX_Samples/sample_4-3.mp3","./iPad_FX_Samples/sample_4-4.mp3","./iPad_FX_Samples/sample_4-5.mp3","./ORGANIC_LPS_135_BPM/ZS_Organic_02_Water_Drops_135.wav","./ORGANIC_LPS_90_BPM/TDDC_Organic_02_Water_Drops_90.wav","./ORGANIC_LPS_135_BPM/ZS_Organic_10_Bubbling_135.wav","./ORGANIC_LPS_135_BPM/ZS_Organic_09_Back_Yard_Rain_135.wav","./ORGANIC_LPS_135_BPM/ZS_Organic_04_Drips_in_the_House_135.wav","./ORGANIC_LPS_90_BPM/TDDC_Organic_06_Thunder_Storm_90.wav","./ORGANIC_LPS_90_BPM/TDDC_Organic_04_Rain_and_Road_Noise_90.wav","./ORGANIC_LPS_90_BPM/TDDC_Organic_06_Rain_and_Drain_90.wav","./ORGANIC_LPS_135_BPM/ZS_Organic_06_Birdsong_135.wav","./ORGANIC_LPS_90_BPM/TDDC_Organic_07_Seagulls_90.wav","./ORGANIC_LPS_90_BPM/TDDC_Organic_03_Italian_Animals_90.wav","./ORGANIC_LPS_90_BPM/TDDC_Organic_09_Surf_90.wav","./ORGANIC_LPS_90_BPM/TDDC_Organic_08_Street_Echoes_90.wav","./ORGANIC_LPS_90_BPM/TDDC_Organic_10_Street_Life_90.wav","./ORGANIC_LPS_90_BPM/TDDC_Organic_01_Distorted_Drip_Sirens_90.wav","./ORGANIC_LPS_135_BPM/ZS_Organic_01_Louis_135.wav","./ORGANIC_LPS_135_BPM/ZS_Organic_03_Hammer_135.wav","./ORGANIC_LPS_135_BPM/ZS_Organic_08_Broken_Glass_135.wav"],A=t(146),N={},B=k.length;A.keys().forEach((function(e){var a=k.indexOf(e);-1!==a&&(N[a]=A(e))}));var T=[0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],R=[0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],L=["255, 255, 255","255, 255, 255","255, 0, 0","0, 255, 0","0, 0, 255","0, 253, 255","255, 0, 0","255,251,0","150,0,150","0, 255, 0","255,191,0","255,64,255","255, 255, 255","255, 255, 255","255, 0, 0","0, 255, 0","0, 0, 255","0, 253, 255","255, 0, 0","255,251,0","255,70,44","191,40,9","255,0,84","255,133,6","255,255,255","255, 255, 255","255, 0, 0","0, 255, 0","0, 0, 255","0, 180, 250","9, 255, 250","0, 158, 255","0, 158, 49","72,255,255","255,239,0","9, 255, 250","0, 158, 255","255,255,0","118,48,0","118,145,0","0, 180, 250","255,255,255"],j=t(65),I=t.n(j),E=t(4),X=t(66),G=(t(249),function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(f.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(i)))).state={defaultProp:{easing:"easeInOutQuad",loop:2,duration:500,direction:"alternate",delay:0,endDelay:0,background:"rgba(0,0,0,1)"}},t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"shouldComponentUpdate",value:function(e,a){return"follow"==e.data.mode&&e.opacity!=this.props.opacity||e.refresh!==this.props.refresh}},{key:"computeData",value:function(e){var a=0;return"color"in e&&(e.colorTemp=e.color),"alpha"in e&&(a=e.alpha),"follow"==e.mode&&(a=this.props.opacity),"background"in e||(e.direction="blink"==e.mode?"alternate":"normal",e.loop="light"==e.mode?e.loopTime:2*e.loopTime),e.background="rgba(".concat(e.colorTemp,",").concat(a,")"),delete e.loopTime,delete e.color,delete e.alpha,e}},{key:"genRgbStyle",value:function(e,a){var t=e,n=t.substring(5,t.length-1).split(","),i={stiffness:a,damping:30};return{style:{r:Object(E.spring)(parseFloat(n[0]),i),g:Object(E.spring)(parseFloat(n[1]),i),b:Object(E.spring)(parseFloat(n[2]),i),a:Object(E.spring)(parseFloat(n[3]),i)},motionFunc:this.rgbMotion}}},{key:"rgbMotion",value:function(e){var a=e.r,t=e.g,n=e.b,s=e.a;return i.a.createElement("div",{id:"lightBox",key:Date.now(),style:{background:"rgba(".concat(Math.floor(a),",").concat(Math.floor(t),",").concat(Math.floor(n),",").concat(s,")")}})}},{key:"genHslStyle",value:function(e){var a=e,t=a.substring(5,a.length-1).split(","),n={stiffness:80,damping:20},i=Object(X.rgbToHsl)(parseFloat(t[0]),parseFloat(t[1]),parseFloat(t[2])),s=i.h,o=i.s,r=i.l;return{style:{h:Object(E.spring)(s,n),s:Object(E.spring)(o,n),l:Object(E.spring)(r,n),a:Object(E.spring)(parseFloat(t[3]),n)},motionFunc:this.hslMotion}}},{key:"hslMotion",value:function(e){var a=e.h,t=e.s,n=e.l,s=e.a;return i.a.createElement("div",{id:"lightBox",key:Date.now(),style:{background:"hsla(".concat(360*a,",").concat(100*t,"%,").concat(100*n,"%,").concat(s,")")}})}},{key:"render",value:function(){var e=this.state.defaultProp,a=this.computeData(this.props.data),t=Object.assign(e,a),n=this.genRgbStyle(t.background,t.duration),s=n.style,o=n.motionFunc,r=i.a.createElement(E.Motion,{style:s},o),c=i.a.createElement(I.a,Object.assign({key:Date.now()},t),i.a.createElement("div",{id:"lightBox"}));return"blink"==t.mode?c:r}}]),a}(n.Component)),Z=t(12),z=t.n(Z),H=function(){function e(a){Object(u.a)(this,e),this.setAlpha(a),this.y=null,this.s=null}return Object(m.a)(e,[{key:"setAlpha",value:function(e){if(e<=0||e>1)throw new Error;this.alpha=e}},{key:"filter",value:function(e,a,t){var n;return t&&this.setAlpha(t),n=this.y?this.alpha*e+(1-this.alpha)*this.s:e,this.y=e,this.s=n,n}},{key:"lastValue",value:function(){return this.y}}]),e}(),U=function(){function e(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(Object(u.a)(this,e),a<=0||t<=0||i<=0)throw new Error;this.freq=a,this.minCutOff=t,this.beta=n,this.dCutOff=i,this.x=new H(this.alpha(this.minCutOff)),this.dx=new H(this.alpha(this.dCutOff)),this.lasttime=null}return Object(m.a)(e,[{key:"alpha",value:function(e){var a=1/this.freq;return 1/(1+1/(2*Math.PI*e)/a)}},{key:"filter",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.lasttime&&a&&(this.freq=1/(a-this.lasttime)),this.lasttime=a;var t=this.x.lastValue(),n=t?(e-t)*this.freq:0,i=this.dx.filter(n,a,this.alpha(this.dCutOff)),s=this.minCutOff+this.beta*Math.abs(i);return this.x.filter(e,a,this.alpha(s))}}]),e}();t(250);function V(e){var a={width:"".concat(e.percentage,"%")};return i.a.createElement("div",{className:"filler",style:a})}var J=function(e){return i.a.createElement("div",{className:"progressBar"},i.a.createElement(V,{percentage:e.percentage}))},W=(t(251),function(){for(var e=new z.a.Meter("level"),a=new z.a.Analyser("fft",64),t=new z.a.Analyser("waveform",32),n=[],i=0,s=Object.entries(N);i<s.length;i++){var o=s[i],c=Object(r.a)(o,2),_=c[0],p=c[1],l=new z.a.Player({url:p,fadeOut:T[_],fadeIn:R[_]}).connect(e).connect(t).connect(a).toMaster();n.push(l)}return{meter:e,fft:a,waveform:t,soundPlayer:n}}),q=function(e){function a(){var e;return Object(u.a)(this,a),(e=Object(f.a)(this,Object(h.a)(a).call(this))).loadFinish=function(){e.setState({buttonTxt:"START",style:{},loading:!1}),e.clickButton()},e.calcLoadingPercentage=function(){if(1!==e.state.loadPercentage){var a=0;e.state.soundPlayer.forEach((function(e){e.loaded&&a++})),e.setState({loadPercentage:Math.floor(100*a/B)}),setTimeout(e.calcLoadingPercentage,200)}},e.clickButton=function(){if("START"===e.state.buttonTxt){e.setState({style:{display:"none"}}),e.playSound({order:0,mode:0,volume:0})}},e.stopAll=function(){e.state.soundPlayer.forEach((function(e){void 0!==e&&e.loaded&&"stopped"!==e.state&&e.stop()}))},e.calculateEuro=function(){var a=e.state,t=a.nowOrder,n=a.waveform,i=a.euro,s=0;if(void 0!==e.state.soundPlayer[t]){if("stopped"===e.state.soundPlayer[t].state)clearInterval(e.state.soundInterval);else{var o=n.getValue(),r=Math.max.apply(Math,o),c=-1*Math.min.apply(Math,o),_=Math.max(r,c);(_*=7)>1?_=1:_<.2&&0!==_&&(_=.2),s=1*i.filter(_)}e.props.onChange(s,e.props.parent)}},e.state=Object.assign({nowOrder:0,euro:null,soundInterval:null,loading:!0,loadPercentage:0},W()),z.a.Buffer.on("load",e.loadFinish),e}return Object(v.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.calcLoadingPercentage()}},{key:"shouldComponentUpdate",value:function(e,a){if("stop"in e.data)return this.stopAll(),!1;if(e.show&&!this.props.show){this.playSound({order:0,mode:0,volume:0})}return e.refresh!==this.props.refresh||a.style!==this.state.style||e.show&&!this.props.show||a.loadPercentage!==this.state.loadPercentage}},{key:"render",value:function(){var e=this,a=this.state,t=a.loading,n=a.loadPercentage,s=this.props.data,o=this.state,r=o.soundPlayer,c=o.nowOrder;return this.props.show&&("order"in s?s.delay>0?setTimeout((function(){e.playSound(s)}),s.delay):this.playSound(s):"volume"in s&&void 0!==r[c]&&r[c].loaded&&(r[c].volume.value=s.volume)),i.a.createElement("div",null,this.props.show&&i.a.createElement(d,{show:t},i.a.createElement("div",null,"Loading ",n+"%",i.a.createElement(J,{percentage:n}))))}},{key:"playSound",value:function(e){var a=e.order,t=e.mode,n=e.volume,i=this.state.soundPlayer;void 0!==i[a]&&i[a].loaded&&(void 0!==n&&(i[a].volume.value=n),i[a].start()),this.state.nowOrder=a,"follow"===t&&this.genAlphaFromSound(a)}},{key:"genAlphaFromSound",value:function(){this.state.euro=new U(200),null!=this.state.soundInterval&&clearInterval(this.state.soundInterval),this.state.soundInterval=setInterval(this.calculateEuro,100,this)}}]),a}(n.Component),Y=function(e,a){return e>=0&&e<a},K=function(){var e=Date.now();"undefined"!==typeof performance&&"function"===typeof performance.now&&(e+=performance.now());var a="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(a){var t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===a?t:3&t|8).toString(16)}));return sessionStorage.setItem("StageEffectUUID",a),a},Q=function(e){return JSON.parse(JSON.stringify(e))},$=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(f.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(i)))).state={uuid:sessionStorage.getItem("StageEffectUUID")||K(),refreshAnime:!1,refreshMusic:!1,socketData:{},lightData:{},soundData:{},opa:-1,opacity:0},t.socketConnectFn=function(){var e=t.state.socket;console.log("receiver connected to server"),console.log(t.state.uuid),console.log(e),e.emit("connected",{uuid:t.state.uuid}),t.setState({socketID:e.id}),e.on("debug",(function(e){console.log("<socket> ".concat(e))})),e.on("controlData",t.receiveControlData.bind(Object(M.a)(t)))},t.setupBeforeUnloadListener=function(e){window.addEventListener("beforeunload",(function(a){return a.preventDefault(),e.emit("disconnected",{uuid:t.state.uuid}),a}))},t.clickButton=function(){"{}"!=JSON.stringify(t.state.soundData)&&t.setState((function(e){return{refreshMusic:!e.refreshMusic}})),"{}"!=JSON.stringify(t.state.lightData)&&t.setState((function(e){return{refreshAnime:!e.refreshAnime}}))},t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState({socket:y("/receiver",this.socketConnectFn)})}},{key:"receiveControlData",value:function(e){var a=this.handleSocketData(e),t=a.light,n=a.sound;"{}"!==JSON.stringify(n)&&this.setState((function(e){return{soundData:Q(n),refreshMusic:!e.refreshMusic}})),"{}"!==JSON.stringify(t)&&this.setState((function(e){return{soundData:Q(n),lightData:Q(t),refreshAnime:!e.refreshAnime}}))}},{key:"handleSocketData",value:function(e){var a="sound"in e?this.handleSoundData(e.sound):{},t="light"in e?this.handleLightData(e.light):{};return!("color"in t)&&"{}"!==JSON.stringify(t)&&"order"in a&&(t.color=L[a.order%L.length]),"color"in t&&"order"in a&&"*"===t.color&&(t.color=L[a.order%L.length]),"delay"in t&&"order"in a&&(a.delay=t.delay),"mode"in t&&"order"in a&&(a.mode=t.mode),"mode"in t&&"stop"in a&&"follow"===t.mode&&(t={}),{light:t,sound:a}}},{key:"handleSoundData",value:function(e){return Y(e.order,B)?((!Y(e.orderTo,B+1)||e.orderTo<e.order)&&(e.orderTo=e.order),e.order=e.order+Math.floor(Math.random()*(e.orderTo-e.order)),"stop"in e&&"*"===e.stop&&delete e.stop,e):"volume"in e?(delete e.order,e):{}}},{key:"handleLightData",value:function(e){return"none"===e.mode?{}:("color"in e&&"*"===e.color&&delete e.color,e.delay=Math.random()*e.delay,e)}},{key:"changeHandler",value:function(e){this.setState({opacity:e})}},{key:"render",value:function(){console.log("render");var e=this.state,a=e.refreshAnime,t=e.refreshMusic,n=e.lightData,s=e.soundData,o=e.opacity;return i.a.createElement("div",{id:"wrap"},i.a.createElement(d,{show:this.props.show},i.a.createElement(G,{refresh:a,data:n,opacity:o})),i.a.createElement(q,{show:this.props.show,refresh:t,data:s,onChange:this.changeHandler.bind(this),parent:this}))}}]),a}(n.Component);var ee=function(){var e=Object(n.useState)(!0),a=Object(r.a)(e,2),t=a[0],s=a[1],o=Object(n.useState)(!1),c=Object(r.a)(o,2),_=c[0],p=c[1],u=Object(n.useState)(!1),m=Object(r.a)(u,2),f=m[0],h=m[1];return i.a.createElement("div",null,i.a.createElement(d,{show:t},i.a.createElement(l,{select:function(e){s(!1),0===e?p(!0):h(!0),console.log("select: "+e)}})),i.a.createElement(d,{show:_},i.a.createElement(F,null)),i.a.createElement($,{show:f}))};o.a.render(i.a.createElement(ee,null),document.getElementById("root"))}]),[[67,1,2]]]);
//# sourceMappingURL=main.4dda5e6a.chunk.js.map