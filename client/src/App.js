///////////////  Package Imports  ////////////////////////////////
import React from 'react';
import uuid from 'uuid/v4';
import {BrowserRouter as Router, Route} from 'react-router-dom';
////////////// Components Imports ////////////////////////////////
import Header from './components/Header';
import BoardView from './components/BoardView';
import NewBoardView from './components/pages/NewBoardView';
import OpenBoardView from './components/pages/OpenBoardView';
/////////////    CSS Imports      ////////////////////////////////
import './App.css';
//////////////////////////////////////////////////////////////////

/**
 * This file is the parent file from which all of the website is
 * rendered, if you need to edit routes or information on a global scale
 * of the website, it should happen in here
 */
class App extends React.Component {
  /**
   * State and Extra Definitions
   */
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
  ///////////////// Method Bloc
  /**
   * showBoard
   * @param id the id of the board that you want to show (Comes from BoardListing>BoardView>this)
   */
  showBoard = (id) => {
    this.setState({currentBoard: this.state.boards.filter(board => board.id === id)[0]});
  }

  /**
   * addBoard
   * @param name the name of the new board (Comes from NewBoardView)
   */
  addBoard = (name) => {
    const newBoard = {
      name,
      id: uuid()
    }
    this.setState({boards:[...this.state.boards, newBoard]});
    alert("New Board Created");
  }
  /**
   * The Render Method
   */
  render() {
    /**
     * Current paths
     * /          - the root page that displays a list of all boards available
     * /addBoard  - displays the NewBoardView Component and allows for the creation of new boards
     * /showBoard - displays the information held within this.state.currentBoard
     */
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => 
            (<BoardView boards={this.state.boards} showBoard={this.showBoard}/>)}/>
          <Route path="/addBoard" render={props =>(<NewBoardView addBoard={this.addBoard}/>)}/>
          <Route path="/showBoard" render={props =>(<OpenBoardView currentBoard={this.state.currentBoard}/>)}/>
        </div>
      </Router>
    );
  }
  
}

export default App;
