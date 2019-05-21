import React from 'react';
import Header from './components/Header';
import BoardView from './components/BoardView';
import uuid from 'uuid/v4';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NewBoardView from './components/pages/NewBoardView';

class App extends React.Component {
  BLANK_BOARD = {
    name: "Default Board",
    id: -1
  }
  state = {
    currentBoard: this.BLANK_BOARD,
    boards: [
      {
        name: "My First Board",
        id: uuid()
      },
      {
        name: "My Second Board",
        id: uuid()
      },

    ]
    
  }

  showBoard = (id) => {
    this.setState({currentBoard: this.state.boards.filter(board => board.id === id)[0]});
  }

  addBoard = (name) => {
    const newBoard = {
      name,
      id: uuid()
    }
    this.setState({boards:[...this.state.boards, newBoard]});
    alert("New Board Created");
  }

  render() {
    return (
      <Router>
        
        <div className="App">
          <Header board={this.state.currentBoard} />
          <Route exact path="/" render={props => 
            (<BoardView boards={this.state.boards} showBoard={this.showBoard}/>)}/>
          <Route path="/addBoard" render={props =>(<NewBoardView addBoard={this.addBoard}/>)}/>
          
        </div>
      </Router>
    );
  }
  
}

export default App;
