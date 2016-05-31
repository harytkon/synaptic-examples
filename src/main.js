import Perceptron from './Perceptron';
import { Trainer } from 'synaptic';
import React from 'react';
import { render } from 'react-dom';
import Examples from './Examples';
 
let myPerceptron = new Perceptron(2,13,1);
myPerceptron.connectLayers();
const myTrainer = new Trainer(myPerceptron);
 
console.log(myTrainer.XOR());

console.log('--');
console.log('0 ,0: ' + myPerceptron.activate([0,0]));
console.log('1 ,0: ' + myPerceptron.activate([1,0]));
console.log('0 ,1: ' + myPerceptron.activate([0,1]));
console.log('1 ,1: ' + myPerceptron.activate([1,1]));	
console.log('--');

render(
  <Examples />,
  document.getElementById('root')
);


