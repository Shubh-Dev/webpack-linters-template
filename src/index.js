import _ from 'lodash';
import './style.css';
// import MAT from './MAT.png';


function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

      // Add the image to our existing div.
  // const myIcon = new Image();
  // myIcon.src = MAT;

  // element.appendChild(myIcon);
  const root = document.querySelector(".root")

const sentence = document.createElement('p');
sentence.textContent="Webpack config complete"
sentence.classList.add('hello');

  
    return element;
  }
  
  document.body.appendChild(component());