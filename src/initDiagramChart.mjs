export function initDiagramChart(diagramState) {
  
  const $root = document.getElementById('root')

  for (let i = 0; i < diagramState.length; i++) {

    const $div = document.createElement('div')
    // const $hr1 = document.createElement('hr')
    // const $hr2 = document.createElement('hr')
    const $divAttributes = document.createElement('div')
    const $divMethods = document.createElement('div')
    
    const $uid = document.createElement('h6')
    const $title = document.createElement('h5')
    const $attributes = document.createElement('h6')
    const $methods = document.createElement('h6')
    
    $uid.className = 'typewriter'
    $title.className = 'typewriter'
    $attributes.className = 'typewriter'
    $methods.className = 'typewriter'

    $div.className = 'cardClass'
    $div.id = 'draggable'
    $uid.innerText = `uid: ${diagramState[i].uid}`
    $title.innerText = `clase: ${diagramState[i].class}`
    // $attributes.innerText = `atributos: ${diagramState[i].attributes.length === 0 ? 'vacio' : ''}`
    // $methods.innerText = `metodos: ${diagramState[i].methods.length === 0 ? 'vacio' : ''}`

    $divAttributes.appendChild($attributes)
    $divMethods.appendChild($methods)
    
    // if (diagramState[i].attributes) {
    //   for (let a = 0; a < diagramState[i].attributes.length; a++) {
    //     const $renderAttribute = document.createElement('h6')
    //     $renderAttribute.className = 'typewriter'

    //     $renderAttribute.innerText = 
    //     `${diagramState[i].attributes[a].visible}${diagramState[i].attributes[a].attribute} : ${diagramState[i].attributes[a].type}`

    //     $divAttributes.appendChild($renderAttribute)
    //   }
    // }

    // if (diagramState[i].methods) {
    //   for (let a = 0; a < diagramState[i].methods.length; a++) {
    //     const $renderMethod = document.createElement('h6')
    //     $renderMethod.className = 'typewriter'

    //     $renderMethod.innerText = 
    //     `${diagramState[i].methods[a].visible}${diagramState[i].methods[a].method} : ${diagramState[i].methods[a].type}`

    //     $divMethods.appendChild($renderMethod)
    //   }
    // }

    $div.appendChild($uid)
    $div.appendChild($title)
    // $div.appendChild($hr1)
    $div.appendChild($divAttributes)
    // $div.appendChild($hr2)
    $div.appendChild($divMethods)

    $root.appendChild($div)
  }
}