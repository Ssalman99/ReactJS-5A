// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLoggedIn: true}

  onSub = () => {
    this.setState({isLoggedIn: false})
  }

  onSubs = () => {
    this.setState({isLoggedIn: true})
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="pera">Thank you! Happy Learning</p>
        <div className="button-container">
          {isLoggedIn ? (
            <button className="button" onClick={this.onSub}>
              Subscribe
            </button>
          ) : (
            <button className="button" onClick={this.onSubs}>
              "Subscribed"
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Welcome
