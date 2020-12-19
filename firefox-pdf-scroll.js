
/*
 ABOUT
 This is some code that will autoscroll the PDF viewer in Firefox
 
 USAGE
  1. open a PDF in Firefox's built in viewer
  2. press F12 to open the Developer Tools
  3. copy-paste the following block of code into the JS console

NOTE
 Currently, the only way to start/stop/adjust-speed is by changing
 the variable values in the JS console. 

TODO
Inject UI controls for start/stop/speed (maybe)
Add keyboard event handlers for start/stop/speed (probably)
 */

///////////////////////////
// --- begin code block ---
const pdfViewer = document.getElementById('viewerContainer')

// adjust speed with timeout and dy . A smaller timeout results in smoother scrolling 
let timeout = 300; // the amount of time to wait before scrolling (miliseconds)
let dy = 5;  // delta-y, the amount to scroll vertically each scroll action 

let active = false; // toggle true/false to start/stop scrolling
let kill = false;   // set to true to stop the action-loop indefinately

let start = (action) => {
	setTimeout(() => {
		if(active)
			action();
		if(false == kill)
			start(action);
	}, timeout);
};

start(() => {
	pdfViewer.scrollBy(0,dy);
});

// --- finish code block---
///////////////////////////

// WIP: this is a class to facilitate the above timeout loop
// features: 
// 1. adjustable timeout
// 2. start/stop buttons
// TODO: finish coding, test
// NOTE: I stopped work on this class because my main goal was to get auto-scroll working, not write this class
const Repeater = (action,timeout) => {
	
	let timeout = 1000;
	let active = true;

	const start = (action) = > {
		setTimeout(() => {
			if(active)
				action();
			reset(action);
		}, timeout);
	};

  const stop = () {
  
  };
  
	return {
     start,
     stop,
     timeout
	};

};

let Action = (go, settings) => {

}


////////////
