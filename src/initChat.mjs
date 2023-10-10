import { createElement, Trash2 } from 'lucide';

import { analyserText } from './analyserText';
import { initDiagramChart } from './initDiagramChart.mjs'

// export const STATE = {
//   diagram: []
// }

export function initChat() {

  let chat = ''

  const $input = document.getElementById('input')
  const $button = document.getElementById('button')
  const $root = document.getElementById('root')
  const $section = document.getElementById('chatbar')
  const $loader = document.createElement('span')
  const $resetButton = document.createElement('button')
  const $trashIcon = createElement(Trash2)
  
  $resetButton.className = 'resetBtn'
  $resetButton.appendChild($trashIcon)
  $resetButton.id = 'reset'
  
  $loader.className = 'loader'
  
  $input.addEventListener('input', function(e) {
    chat = e.target.value
  })
  
  $button.addEventListener('click', function() {
    $root.appendChild($loader)
    document.querySelectorAll('#draggable').forEach( n => n.remove() );

    analyserText(chat)
    $input.value = ''
    chat = ''
    
    if (STATE.diagram.length) {
      $section.appendChild($resetButton)
    } else {
      $resetButton.remove()
    }
    
    setTimeout(() => {
      $loader.remove()
      initDiagramChart(STATE.diagram)
    }, 1500);
  })
  
  $resetButton.addEventListener('click', function() {
    document.querySelectorAll('#draggable').forEach( n => n.remove() );
    STATE.diagram = []
    $resetButton.remove()
  })
}