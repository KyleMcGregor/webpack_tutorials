import _ from 'lodash';
import './style.css';
import Data from '.data.csv';

function loadData(){
    console.log(Data);
}

function component(){
    const element = document.createElement('div'); 

    element.innerHTML = _.join(['Hello', 'webpack', 'How are you?'], ' '); 
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component()); 