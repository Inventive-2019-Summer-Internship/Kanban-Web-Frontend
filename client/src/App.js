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
    id: -1,
    img: null
  }
  state = {
    darkMode: true,
    showImage: false,
        musicList: ["Always_Be_My_Unicorn.mp3","Arms_Dealer.mp3","Half_Bit.mp3",
    "Meteor.mp3","OK_POP_KO.mp3","Orbital_Romance.mp3",
  "Scouting.mp3","Space_Adventure.mp3","Splashing_Around.mp3",
    "do_dodo_do_dodododooo_DODODO.mp3","UltimateShowdownOfUltimateDestiny.mp3","tacos.mp3"],
    currentBoard: this.BLANK_BOARD,
    boards: [
      {
        id: uuid(),
        name: "My First Board",
        swimLanes: [
          {
            title: "Sample1",
            id: uuid(),
            cards: [
              {
                title: "sample card",
                description: "This is a sample description",
                id: uuid()
              }
            ]
          }
        ],
        img: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.memecdn.com%2Fbest-gif-ever_o_901136.gif&f=1"
      },
      {
        id: uuid(),
        name: "My Second Board",
        swimLanes: [
          {
            title: "Sample",
            id: uuid(),
            cards: []
          }
        ],
        img: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F42283b6ad92daba7e619865e2e1aa9bd%2Ftenor.gif%3Fitemid%3D13154832&f=1"
      },

    ]
    
  }

  
  ///////////////// Method Bloc
  /**
   * showBoard
   * @param id the id of the board that you want to show (Comes from BoardListing>BoardView>this)
   */
  componentWillMount() {
    /*if(this.state.darkMode) {
      require("./App.css");
    } else {
      require("./cssupdate.css");
    }*/
    require("./Dark.css");
  }
  showBoard = (id) => {
    this.setState({currentBoard: this.state.boards.filter(board => board.id === id)[0]});
    this.setState({showImage: true});
  }

  hideImage = () => {
    this.setState({showImage: false});
  }

  /**
   * addBoard
   * @param name the name of the new board (Comes from NewBoardView)
   */
  addBoard = (name, url) => {
    const newBoard = {
      name,
      id: uuid(),
      swimLanes: [],
      img: url
    }
    this.setState({boards:[...this.state.boards, newBoard]});
    alert("New Board Created");
  }
  deleteBoard = (id) => {
    var newBoards = this.state.boards.filter(board => board.id !== id);
    window.history.back();
    this.setState({boards: newBoards})
  }
  changeBoardName = (name, id) => {
    var board = this.state.boards.filter(board => board.id === id)[0];
    board.name = name;
    var newBoards = [...this.state.boards.filter(board => board.id !== id), board];
    newBoards.push(newBoards.shift());
    this.setState({boards: newBoards})
  }
  changeBoardBG = (url, id) => {
    var board = this.state.boards.filter(board => board.id === id)[0];
    board.img = url;
    var newBoards = [...this.state.boards.filter(board => board.id !== id), board];
    newBoards.push(newBoards.shift());
    this.setState({boards: newBoards})
  }
  addSwimLane = (name, id) => {
    var board = this.state.boards.filter(board => board.id === id)[0];
    var newSwimlane = {title: name};
    board.swimLanes = [...board.swimLanes, newSwimlane]
    var newBoards = [...this.state.boards.filter(board => board.id !== id), board]
    newBoards.push(newBoards.shift());
    this.setState({boards: newBoards})
  }
  toggleSpace = () => {
                var q = (Math.floor(Math.random()*this.state.musicList.length));
        var mtitle="music/"+this.state.musicList[q];
        var audio = new Audio(mtitle);
        this.state.darkMode ?  audio.play() : audio.pause();
    let antiCurrentSetting = !(this.state.darkMode)
    this.setState({darkMode: antiCurrentSetting});
    console.log(mtitle)
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
        <div style={{backgroundRepeat:'repeat',height:"100%", backgroundImage: (this.state.currentBoard.img && this.state.showImage) ? `url(${this.state.currentBoard.img})`: "none"}} className="App">
          <Header toggleSpace={this.toggleSpace} hideImage={this.hideImage} />
          <Route exact path="/" render={() => {
            if(this.state.showImage) this.hideImage();
            return(<BoardView boards={this.state.boards} showBoard={this.showBoard}/>)}}/>
          <Route path="/addBoard" render={() =>{
            if(this.state.showImage) this.hideImage();
            return(<NewBoardView addBoard={this.addBoard}/>)}}/>
          <Route path="/showBoard" render={props =>(<OpenBoardView deleteBoard={this.deleteBoard} changeBoardName={this.changeBoardName} changeBoardBG={this.changeBoardBG} addSwimLane={this.addSwimLane} currentBoard={this.state.currentBoard}/>)}/>
        </div>  
      </Router>
    );
  }
  
}

export default App;
