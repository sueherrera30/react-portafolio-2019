import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Typed from 'typed.js'

ReactDOM.render(<App/> , document.getElementById('App'));
/*typing mood*/
var typed = new Typed('#subtitleTyped', {
	strings: ["Front-end in construction"],
	typeSpeed: 140,
    loop: false,
});


