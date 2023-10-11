import { createElement, Workflow, ArrowBigUpDash } from 'lucide';

import { initChat } from './src/initChat.mjs';
import { initDraggable } from './src/initDraggable.mjs'

function initApp() {
  const $root = document.getElementById('root')
  
  //NAVBAR 
  const $nav = document.createElement('nav')
  const $h5 = document.createElement('h5')
  const $workflowIcon = createElement(Workflow);

  $h5.innerText = 'ClassChart'
  $h5.className = 'navbar-title'

  $nav.appendChild($workflowIcon)
  $nav.appendChild($h5)
  $nav.className = 'navbar'

  // CHAT SECTION
  const $section = document.createElement('section')
  const $input = document.createElement('input')
  const $button = document.createElement('button')
  const $submitIcon = createElement(ArrowBigUpDash)

  $button.id = 'button'
  $button.className = 'button-icon'
  $button.appendChild($submitIcon)

  $input.id = 'input'
  $input.placeholder = 'Envia una instrucción'
  $input.autofocus = true
  $input.spellcheck = false

  $section.appendChild($input)
  $section.appendChild($button)
  $section.id = 'chatbar'
  $section.className = 'chatbar'

  $root.appendChild($nav)
  $root.appendChild($section)
}

initApp()
initChat()
initDraggable()