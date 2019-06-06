///////////////  Package Imports  ////////////////////////////////
import React from 'react';
import uuid from 'uuid/v4';
import {BrowserRouter as Router, Route} from 'react-router-dom';
////////////// Components Imports ////////////////////////////////
import Header from './components/Header';
import BoardView from './components/BoardView';
import NewBoardView from './components/pages/NewBoardView';
import OpenBoardView from './components/pages/OpenBoardView';
import AppUtils from './AppUtils'
/////////////    CSS Imports      ////////////////////////////////

//////////////////////////////////////////////////////////////////

/**
 * This file is the parent file from which all of the website is
 * rendered, if you need to edit routes or information on a global scale
 * of the website, it should happen in here
 */
class App extends AppUtils {
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
   // superStyle: require("./Dark.css"),

    showImage: false,
        musicList: ["Always_Be_My_Unicorn.mp3","Arms_Dealer.mp3","Half_Bit.mp3",
    "Meteor.mp3","OK_POP_KO.mp3","Orbital_Romance.mp3",
  "Scouting.mp3","Space_Adventure.mp3","Splashing_Around.mp3",
    "do_dodo_do_dodododooo_DODODO.mp3","UltimateShowdownOfUltimateDestiny.mp3","tacos.mp3",
  "musicMetroid.mp3","megacastle.mp3","greenHills.mp3",
    "greeeeen.mp3","halo.mp3","blops2.mp3"],
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
                id: uuid(),
                comments: [
                  {
                    comment: "This is a sample comment",
                    id: uuid()
                  }
                ]
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
        <div style={{backgroundRepeat:'repeat', height:"100%", backgroundImage: (this.state.currentBoard.img && this.state.showImage) ? `url(${this.state.currentBoard.img})`: "none"}} className="App">
          <Header toggleSpace={this.toggleSpace} hideImage={this.hideImage} />
           <link id="pagestyle" rel="stylesheet" type="text/css" href="styles/Dark.css" /> 


          <Route exact path="/" render={() => {
              if(this.state.showImage) this.hideImage();
              return(<BoardView boards={this.state.boards} showBoard={this.showBoard}/>)
              }
            }
          />

          <Route path="/addBoard" render={() =>{
              if(this.state.showImage) this.hideImage();
              return(<NewBoardView addBoard={this.addBoard}/>)
              }
            }
          />

          <Route path="/showBoard" render={props => (
            <OpenBoardView 
              deleteBoard={this.deleteBoard} changeBoardName={this.changeBoardName} 
              changeBoardBG={this.changeBoardBG} addSwimLane={this.addSwimLane} 
              currentBoard={this.state.currentBoard} changeSwimlaneTitle={this.changeSwimlaneTitle}
              deleteSwimlane={this.deleteSwimlane} addCard={this.addCard}
              updateCard={this.updateCard} deleteCard={this.deleteCard}
              addComment={this.addComment} deleteComment={this.deleteComment}
              moveCard={this.moveCard}/>
              )}
          />
        </div>  
      </Router>
    );
  }
  
}

export default App;
