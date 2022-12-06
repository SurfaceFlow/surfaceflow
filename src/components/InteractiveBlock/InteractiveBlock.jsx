import './interactiveblock.scss'

import { useState } from 'react'
import Graph from "react-graph-vis"
import ReactDOM from "react-dom"
import { useTranslation } from 'react-i18next'
import ReactTooltip from 'react-tooltip'


const options = {
  layout: {
    hierarchical: false
  },
  edges: {
    color: "#000000"
  },
  interaction:{
    hover: true,
    zoomView: false
  },
  clickToUse: true
};

const InteractiveBlock = () => {
  const { t } = useTranslation()
  
  const [x, setX] = useState(-10000)
  const [y, setY] = useState(-10000)
  const [header, setHeader] = useState('')
  const [text, setText] = useState('')
  const [state, setState] = useState({
    counter: 7,
    graph: {
      nodes: [
        { id: 1, label: "0.6", color: "#e04141" },
        { id: 2, label: "0.8", color: "#e09c41" },
        { id: 3, label: "0.6", color: "#e0df41" },
        { id: 4, label: "0.3", color: "#7be041" },
        { id: 5, label: "0.2", color: "#41e0c9" },
        { id: 6, label: "0.2", color: "#41e0c9" },
        { id: 7, label: "0.5", color: "#41e0c9" }
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 1 },
        { from: 4, to: 2 },
        { from: 4, to: 5 },
        { from: 4, to: 6 }
      ]
    },
    events: {
      select: (event) => {
      },
      doubleClick: ({ pointer: { canvas } }) => {
        
      },
      hoverNode:function(event){
        setX(event.pointer.DOM.x)
        setY(event.pointer.DOM.y)
        setHeader('This is node')
        setText('Node is ...')
      },
      blurNode:function(event){
        setX(-10000)
        setY(-10000)
        setHeader('')
        setText('')
      },
      hoverEdge:function(event){
        setX(event.pointer.DOM.x)
        setY(event.pointer.DOM.y)
        setHeader('This is edge')
        setText('Edge is ...')
      },
      blurEdge:function(event){
        setX(-10000)
        setY(-10000)
        setHeader('')
        setText('')
      }
    }
  })
  const { graph, events } = state;

  return (
    <>
      <div className='interactive-block_header'>This is interactive model</div>
      <div className="p-2 text-center" style={{position: 'relative'}} class='interactive-block'>
        <Graph graph={graph} options={options} events={events} style={{ height: "640px" }} />
        <div style={{position: 'absolute', left: `${x}px`, top: `${y}px`}}> 
          <div class="interactive-block_right">
            <div class="interactive-block_text-content">
                <h3>{header}</h3>
                <div>{text}</div>
            </div>
            <i></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default InteractiveBlock