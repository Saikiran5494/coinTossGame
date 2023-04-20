// Write your code here
import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossImage: headImage, headCount: 0, tailCount: 0}

  buttonClicked = () => {
    const num = Math.floor(Math.random() * 2)
    if (num === 0) {
      this.setState({tossImage: headImage})
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    } else {
      this.setState({tossImage: tailImage})
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
    }
  }

  render() {
    const {tossImage, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.buttonClicked}>
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total: {totalCount}</p>
            <p>Heads: {headCount}</p>
            <p>Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
