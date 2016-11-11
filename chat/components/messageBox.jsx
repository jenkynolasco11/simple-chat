import React, {Component} from 'react'

export default class MessageBox extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let addMessages = ([message, who], index) => {
      return <Message key={index} message={message} from={who} />
    }

    return (
      <div className='message-box '>
        {
          this.props.messages.map(addMessages)
        }
      </div>
    )
  }

  componentDidMount(){
  }
}

class Message extends Component {
  constructor (props){
    super(props)
  }

  render(){
    return (
      // Somewhat, the key property is needed. Read about it later
      <div className={'message ' + this.props.from}>
        <p>
          {this.props.message}
        </p>
      </div>
    )
  }
}
