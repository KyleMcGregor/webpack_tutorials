import _ from 'lodash';
import printMe from './print';


function component(){
    const element = document.createElement('div'); 

    const btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack', 'How are you?'], ' '); 
    element.classList.add('hello');

    btn.innerHTML = 'click me to print on the console!';
    btn.onclick = printMe();
    element.appendChild(btn); 

    return element;
}

document.body.appendChild(component()); 