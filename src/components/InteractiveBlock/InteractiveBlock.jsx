import './interactiveblock.scss'

import { useState } from 'react'
import Graph from "react-graph-vis"
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion/dist/framer-motion'

const animationHeader = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.2 }, 
  }),
}

const animationGraph = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }, 
  }),
}


const options = {
  layout: {
    hierarchical: false,
    randomSeed: 8,
  },
  edges: {
    color: "#000000",
  },
  nodes: {
    fixed: {
      x: true,
      y: true,
    }
  },
  interaction:{
    hover: true,
    zoomView: false,
    selectable: false,
  },
  manipulation: {
    enabled: false,
    initiallyActive: true,
  },
  physics: {
    enabled: false,
    stabilization: {
      enabled: true,
      iterations: 100
    },
  },
  configure: {
    enabled: false,
  },
  
  clickToUse: false
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
        setX(event.pointer.DOM.x-5)
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
      },
    }
  })
  const { graph, events } = state;

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
      <motion.div className='interactive-block_header' variants={animationHeader}>This is interactive model</motion.div>
      <motion.div className="p-2 text-center interactive-block" style={{position: 'relative'}} variants={animationGraph}>
        <Graph graph={graph} options={options} events={events} style={{ height: "640px" }} />
        <div style={{position: 'absolute', left: `${x}px`, top: `${y}px`}}> 
          <div className="interactive-block_right">
            <div className="interactive-block_text-content">
                <h3>{header}</h3>
                <div>{text}</div>
            </div>
            <i></i>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default InteractiveBlock