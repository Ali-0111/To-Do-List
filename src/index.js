import './style.css';

const name = require('./modules/name.js');

const mainhead = document.querySelector('.main-head');
mainhead.innerText = `Hi ${name}`;
