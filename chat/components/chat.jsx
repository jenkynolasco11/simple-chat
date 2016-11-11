import React, {Component} from 'react'
import MessageBox from './messageBox.jsx'
import TypingBox from './typingBox.jsx'

export default class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages : [],
      newMessage : ''
    }
  }

  appendMessage([message, from]){
    let allMessages = this.state.messages.concat( [[message, from]] )

    this.setState({
      messages : allMessages
    })
  }

  render(){
    return (
      <section /*style={this.state.style}*/>
        <MessageBox messages={this.state.messages}/>
        <TypingBox onSendMessage={this.appendMessage.bind(this)}/>
      </section>
    )
  }

  // Chat handlers
  componentDidMount(){
    socket.on('message', this.receivedMessage.bind(this))
  }

  receivedMessage(message){
    this.appendMessage([message,'you'])
  }

}
