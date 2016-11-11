import express, { Router } from 'express'
import socket from './socket.io.server'
// import React from 'react'
// import ReactDOMServer from 'react-dom/server'
// import Chat from '../chat/components/chat'

let router = Router()

router.get('/', (req,res)=> {
  // let html = ReactDOMServer.renderToString(
  //   React.createElement(Chat)
  // )
  // // console.log('here')
  // // console.log(html)
  // // TODO: Change this line later
  // // res.end(html)
  res.render('index')
})

export { router, socket } 
