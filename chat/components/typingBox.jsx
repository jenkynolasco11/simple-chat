import React, { Component } from 'react'

export default class TypingBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      message : ''
    }
  }

  render(){
    return (
      <div className='typing-box'>
        <input type='text' onChange={this.modifyMessage.bind(this)} value={this.state.message}/>
        <input type='button' value='Send' onClick={this.sendMessage.bind(this)}/>
      </div>
    )
  }
  modifyMessage(e){
    this.setState({
      message : e.target.value
    })
    // console.log(this.state.message)
  }

  sendMessage(){
    if(this.state.message){
      // Send message on socket
      this.broadcastMessage()
      // let message = this.state.message
      this.props.onSendMessage( [this.state.message , 'me'])

      this.setState({
        message : ''
      })
    }
  }

  componentDidMount(){
  }

  broadcastMessage(){
    socket.emit('message', {message : this.state.message})
  }
}
