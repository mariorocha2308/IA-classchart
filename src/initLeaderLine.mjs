import { STATE } from "./initChat.mjs"

export const LINE_OPTIONS = {
  dash: {
    animation: true
  },
  color: 'black',
  size: 3,
  path: 'grid'
}

export function initLeaderLine() {
  
  STATE.connections.forEach(match => {
    let start = document.querySelector(`[data-id="${match[0]}"]`)
    let end = document.querySelector(`[data-id="${match[1]}"]`)
  
    if (start && end) {

      LINE_OPTIONS.startPlug = match[2].plug ? match[2].plug[0] : 'behind'
      LINE_OPTIONS.endPlug = match[2].plug ? match[2].plug[1] : 'behind'

      LINE_OPTIONS.startLabel = match[2].label ? LeaderLine.captionLabel(match[2]?.label[0]) : ''
      LINE_OPTIONS.middleLabel = match[2].label ? LeaderLine.captionLabel(match[2]?.label[1]) : ''
      LINE_OPTIONS.endLabel = match[2].label ? LeaderLine.captionLabel(match[2]?.label[2]) : ''

      const leadLine = new LeaderLine(start,end, LINE_OPTIONS)

      STATE.listLines = [...STATE.listLines, leadLine]
  
      for (let i = 0; i < STATE.diagram.length; i++) {
        if (STATE.diagram[i].uid === match[0] || STATE.diagram[i].uid === match[1]) {
          STATE.diagram[i].relations = [...STATE.diagram[i].relations, leadLine]
        }
      }
    }
  });
}