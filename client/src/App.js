///////////////  Package Imports  ////////////////////////////////
import React from 'react';
import uuid from 'uuid/v4';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
////////////// Components Imports ////////////////////////////////
import Header from './components/Header';
import BoardView from './components/pages/BoardView';
import NewBoardView from './components/pages/NewBoardView';
import OpenBoardView from './components/pages/OpenBoardView';
import AppUtils from './AppUtils'
import LandingHeader from './components/LandingHeader';
import LandingPage from './components/pages/LandingPage';
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
                coverImage: "https://i.imgur.com/cuq7xl7.gif",
                id: uuid(),
                comments: [
                  {
                    comment: "This is a sample comment",
                    id: uuid()
                  }
                ],
                labels: [
                  {
                    title: "SampleLabel",
                    color: "#1a1a1a",
                    id: uuid()
                  },
                  {
                    title: "SecondLab",
                    color: "#d83656",
                    id: uuid()
                  }
                ],
                dueDate: Date.now()
              },
              {
                title: "sample card",
                description: "This is a sample description",
                coverImage: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.memecdn.com%2Fbest-gif-ever_o_901136.gif&f=1",
                id: uuid(),
                comments: [
                  {
                    comment: "This is a sample comment",
                    id: uuid()
                  }
                ],
                labels: [
                  {
                    title: "SampleLabel",
                    color: "#1a1a1a",
                    id: uuid()
                  },
                  {
                    title: "SecondLab",
                    color: "#d83656",
                    id: uuid()
                  }
                ],
                dueDate: Date.now()
              }
            ]
          }
        ],
        img: ""
      },
      

    ]
    
  }

    
  callAPI() {
    fetch("https://kanban-web-backend.herokuapp.com/sender")
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(err => err);
}

componentWillMount() {
    this.callAPI();
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
        <link id="pagestyle" rel="stylesheet" type="text/css" href="styles/Dark.css" />
        <div style={{backgroundRepeat:'repeat', height:"100%", backgroundImage: (this.state.currentBoard.img && this.state.showImage) ? `url(${this.state.currentBoard.img})`: "none"}} className="App">
          <Switch>
            <Route exact path="/" render={() => {
                return(<LandingHeader/>)
              }}
            />
            <Route path="/" render={() => {
                return(<Header toggleSpace={this.toggleSpace} hideImage={this.hideImage} />)
              }}
            />
          </Switch>
          
           
          <Route exact path="/" render={(routerProps) => {
              if(this.state.showImage) this.hideImage();
              return(<LandingPage routerProps={routerProps}/>)
              }
            }
          />
          <Route exact path="/:username/boards" render={(routerProps) => {
              if(this.state.showImage) this.hideImage();
              return(<BoardView routerProps={routerProps} boards={this.state.boards} showBoard={this.showBoard}/>)
              }
            }
          />

          <Route path="/:username/addBoard" render={(routerProps) =>{
              if(this.state.showImage) this.hideImage();
              return(<NewBoardView routerProps={routerProps} addBoard={this.addBoard}/>)
              }
            }
          />

          <Route path="/🐝/:boardboard" render={props => (
            <OpenBoardView 
              deleteBoard={this.deleteBoard} changeBoardName={this.changeBoardName} 
              changeBoardBG={this.changeBoardBG} addSwimLane={this.addSwimLane} 
              currentBoard={this.state.currentBoard} changeSwimlaneTitle={this.changeSwimlaneTitle}
              deleteSwimlane={this.deleteSwimlane} addCard={this.addCard}
              updateCard={this.updateCard} deleteCard={this.deleteCard}
              addComment={this.addComment} deleteComment={this.deleteComment}
              moveCard={this.moveCard} moveCardAbove={this.moveCardAbove}
              moveSwimlaneToEnd={this.moveSwimlaneToEnd}
              moveSwimlaneInFrontOfTargetSwimlane={this.moveSwimlaneInFrontOfTargetSwimlane}
              updateLabel={this.updateLabel} updateComment={this.updateComment}
              addLabel={this.addLabel} deleteLabel={this.deleteLabel}
              setCardCoverImage={this.setCardCoverImage}/>
              )}
          />
        </div>  
      </Router>
    );
  }
  
}

export default App;
