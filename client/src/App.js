import React from 'react';
import Header from './components/Header';
import BoardView from './components/BoardView';
import uuid from 'uuid/v4';
import './App.css';

class App extends React.Component {

  state = {
    boards: [
      {
        name: "My First Board",
        id: uuid()
      },
      {
        name: "My First Board",
        id: uuid()
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Header />
        <BoardView boards={this.state.boards}/>
      </div>
    );
  }
  
}

export default App;
