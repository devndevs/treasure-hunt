import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      gameOver: false
    }
  }

  componentDidMount() {
    let treasure = Math.floor(Math.random() * 
    this.state.board.length)
    this.setState({ treasureLocation: treasure })
    let bomb = Math.floor(Math.random() * 
    this.state.board.length)
    this.setState({ bombLocation: bomb })
}
  
  handleGamePlay = (index) => {
    const { board , treasureLocation ,bombLocation } = this.state
    if(index === treasureLocation){
      board[index] = "💎"
      this.setState({ board: board, gameOver:"win"})
    }else if(index === bombLocation){
      board[index]= "💣"
      this.setState({ board : board})
    }else{
      board[index] = "🌴"
      this.setState({ board: board})
    }
  }

  render(){
      console.log("treasure:" , this.state.treasureLocation)
      console.log("bomb:" , this.state.bombLocation)
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className = "gameboard">
        { this.state.board.map((value , index) => {
          return(
            <Square 
              value={value}
              key={index}
              index ={index}
              handleGamePlay={ this.handleGamePlay }
            />
          )
        })}
        </div>
        {
          this.state.gameOver &&
          <p className= "message">🎉Winner Winner Chicken Dinner🎉</p>

        }
      </>
    )
  }
}
export default App
