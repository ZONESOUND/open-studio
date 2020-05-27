let useFiles = [
    "./iPad_FX_Samples/sample_1-1.mp3",
    "./iPad_FX_Samples/sample_1-2.mp3",
    "./iPad_FX_Samples/sample_1-3.mp3",
    "./iPad_FX_Samples/sample_1-4.mp3",
    "./iPad_FX_Samples/sample_1-5.mp3",
    "./iPad_FX_Samples/sample_2-1.mp3",
    "./iPad_FX_Samples/sample_2-2.mp3",
    "./iPad_FX_Samples/sample_2-3.mp3",
    "./iPad_FX_Samples/sample_2-4.mp3",
    "./iPad_FX_Samples/sample_2-5.mp3",
    "./Noises/Analogue Hiss Mid Boost.mp3", //10
    "./Noises/Crackle Pops.mp3",
    "./Noises/Crunchy Crackle.mp3",
    "./S7_recordings/S7_1.mp3", //13
    "./S7_recordings/S7_2.mp3", 
    "./S7_recordings/S7_3.mp3",
    "./S7_recordings/S7_4.mp3", 
    "./Mixed_Fx_Sounds/90 Realm.mp3", //17
    "./Mixed_Fx_Sounds/91 Twisted.mp3",
    "./Mixed_Fx_Sounds/92 Ghosts.mp3",
    "./Noises/Fake Vinyl 1.mp3", //20 生火
    "./Noises/Fake Vinyl 2.mp3",
    "./Noises/FizzPop.mp3",
    "./Noises/FizzPopper2.mp3",
    "./iPad_FX_Samples/sample_4-1.mp3", //24
    "./iPad_FX_Samples/sample_4-2.mp3",
    "./iPad_FX_Samples/sample_4-3.mp3",
    "./iPad_FX_Samples/sample_4-4.mp3",
    "./iPad_FX_Samples/sample_4-5.mp3",
    "./ORGANIC_LPS_135_BPM/ZS_Organic_02_Water_Drops_135.wav", //29
    "./ORGANIC_LPS_90_BPM/TDDC_Organic_02_Water_Drops_90.wav",
    "./ORGANIC_LPS_135_BPM/ZS_Organic_10_Bubbling_135.wav",
    "./ORGANIC_LPS_135_BPM/ZS_Organic_09_Back_Yard_Rain_135.wav",//32
    "./ORGANIC_LPS_135_BPM/ZS_Organic_04_Drips_in_the_House_135.wav",
    "./ORGANIC_LPS_90_BPM/TDDC_Organic_06_Thunder_Storm_90.wav",
    "./ORGANIC_LPS_90_BPM/TDDC_Organic_04_Rain_and_Road_Noise_90.wav",
    "./ORGANIC_LPS_90_BPM/TDDC_Organic_06_Rain_and_Drain_90.wav",
    "./ORGANIC_LPS_135_BPM/ZS_Organic_06_Birdsong_135.wav", // 37
    "./ORGANIC_LPS_90_BPM/TDDC_Organic_07_Seagulls_90.wav",
    "./ORGANIC_LPS_90_BPM/TDDC_Organic_03_Italian_Animals_90.wav",
    "./ORGANIC_LPS_90_BPM/TDDC_Organic_09_Surf_90.wav",
    "./ORGANIC_LPS_90_BPM/TDDC_Organic_08_Street_Echoes_90.wav", // 41
    "./ORGANIC_LPS_90_BPM/TDDC_Organic_10_Street_Life_90.wav",
    "./ORGANIC_LPS_90_BPM/TDDC_Organic_01_Distorted_Drip_Sirens_90.wav",
    "./ORGANIC_LPS_135_BPM/ZS_Organic_01_Louis_135.wav", // 44
    "./ORGANIC_LPS_135_BPM/ZS_Organic_03_Hammer_135.wav",
    "./ORGANIC_LPS_135_BPM/ZS_Organic_08_Broken_Glass_135.wav",
    ];

let context = require.context('../sound/', true, /\.(wav|m4a|mp3|aif)$/);
let soundFiles={};
let soundFileNum=useFiles.length;

context.keys().forEach((filename)=>{
    let idx = useFiles.indexOf(filename);
    if (idx !== -1) {
        soundFiles[idx] = context(filename);
    }
});

export {soundFiles, soundFileNum};


export let soundFadeOut = [
0,0,0,0,0,
0,0,0,0,0,
10,10,10,
10,10,10,10,
10,10,10,
10,10,10,10,
0,0,0,0,0,
5,5,5,
5,5,5,5,5,
5,5,5,5,
5,5,5,
5,5,5
]

export let soundFadeIn = [
0,0,0,0,0,
0,0,0,0,0,
0,0,0,
10,10,10,10,
10,10,10,
10,10,10,10,
0,0,0,0,0,
5,5,5,
5,5,5,5,5,
5,5,5,5,
5,5,5,
5,5,5
]

export let rgbColors = [
"255, 255, 255", //white
"255, 255, 255", //white
"255, 0, 0",	// r
"0, 255, 0",	// g
"0, 0, 255", 	// b
//2
"0, 253, 255",  //c
"255, 0, 0",	//r
"255,251,0",	//y
"150,0,150", 	//purple
"0, 255, 0",	//g
//3
"255,191,0",	//yellow
"255,64,255",	//m
"255, 255, 255", //white
//4
"255, 255, 255", //white
"255, 0, 0",	// r
"0, 255, 0",	// g
"0, 0, 255", 	// b
//3
"0, 253, 255",  //c
"255, 0, 0",	//r
"255,251,0",	//y
//4 red
"255,70,44",
"191,40,9",
"255,0,84",
"255,133,6",
//5
"255,255,255",
"255, 255, 255", //white
"255, 0, 0",	// r
"0, 255, 0",	// g
"0, 0, 255", 	// b
//3
"0, 180, 250",
"9, 255, 250",
"0, 158, 255",
//5
"0, 158, 49",
"72,255,255",
"255,239,0",
"9, 255, 250",
"0, 158, 255",
//4
"255,255,0",
"118,48,0",
"118,145,0",
"0, 180, 250",
"255,255,255"

];
//5,5,3,4,3
//4: red
//5
//3: blue
//5: blue & thunder yellow & yard green
//4: green & yellow
