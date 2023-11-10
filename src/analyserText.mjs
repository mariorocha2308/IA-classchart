import { STATE } from "./initChat.mjs";

export function analyserText(chat) {

  const segments = chat.split(' ')

  var classID = "";
  var attributes = []
  var methods = []
  var relations = []

  for(let i = 0; i < segments.length; i++) {

    // init connections
    if(segments[i].includes('>')) {
      let matcherId = [segments[i-1], segments[i+1], {}]

      if (segments.includes('plug:')) {
        let idxPlug = segments.indexOf('plug:')

        matcherId[2] = {
          ...matcherId[2], plug: segments[idxPlug+1].split('/')
        }
      }
      
      if (segments.includes('label:')) {
        let idxLabel = segments.indexOf('label:')

        matcherId[2] = {
          ...matcherId[2], label: segments[idxLabel+1].split('/')
        }
      }
      
      STATE.connections.push(matcherId)
      return;
    }

    
    // init attributes
    if(segments[i].includes(':')) {
      attributes.push({
        visible: segments[i-1].charAt(0),
        attribute: segments[i-1].substring(1),
        type: segments[i].substring(1)
      })
    }
    
    // init methods
    if(segments[i].includes('(') && segments[i].includes(')')) {
      methods.push({
        visible: segments[i].charAt(0),
        method: segments[i].substring(1),
        type: "func"
      })
    }
    
    // Set init classes
    if(/[A-Z]/.test(segments[i].charAt(0))) {
      let classname = segments[i].split(',')[0]
      
      let isClass = STATE.diagram.find(chart => chart.class === classname)
      if(isClass) {
        if (segments.includes('borra')) {
          const filtered = STATE.diagram.filter(chart => chart.class !== classname)

          STATE.diagram = filtered
          return;
        }
        classID = isClass.uid

      } else {
        STATE.diagram.push({
          uid: Math.random().toString(36).slice(-4),
          class: classname,
          attributes, methods, relations
        })
      }
    }
  }
  
  // Set init attributes in especific class by id
  for(let a = 0; a < STATE.diagram.length; a++) {
    if(STATE.diagram[a].uid === classID) {
      STATE.diagram[a].attributes = [...STATE.diagram[a].attributes, ...attributes]
    }
  }
  
  // Set init methods in especific class by id
  for(let a = 0; a < STATE.diagram.length; a++) {
    if(STATE.diagram[a].uid === classID) {
      STATE.diagram[a].methods = [...STATE.diagram[a].methods, ...methods]
    }
  }
}