///////////////  Package Imports  ////////////////////////////////
import React from 'react';
import uuid from 'uuid/v4';

class AppUtils extends React.Component {
  
     ///////////////// Method Bloc
  /**
   * showBoard
   * @param id the id of the board that you want to show (Comes from BoardListing>BoardView>this)
   */
  moveSwimlaneInFrontOfTargetSwimlane = (draggedSwimlaneId, targetSwimlaneId) => {
    if(typeof targetSwimlaneId === "object" || draggedSwimlaneId === targetSwimlaneId) return;
    let currentBoard = this.state.currentBoard
    let movingSwimlane = currentBoard.swimLanes.filter(swimlane => swimlane.id === draggedSwimlaneId)[0]
    console.log(`${draggedSwimlaneId} => ${targetSwimlaneId} : ${typeof targetSwimlaneId}`)
    currentBoard.swimLanes = currentBoard.swimLanes.filter(swimlane => swimlane.id !== draggedSwimlaneId)
    let sl = []
    for(var i = 0; i < currentBoard.swimLanes.length; i++) {
      if(currentBoard.swimLanes[i].id === targetSwimlaneId) {
        sl.push(movingSwimlane)
      }
      sl.push(currentBoard.swimLanes[i])

    }
    console.log(sl)
    currentBoard.swimLanes = sl
    let boards = [...this.state.boards.filter(board => board.id !== currentBoard.id), currentBoard]
    boards.push(boards.shift());
    this.setState({currentBoard,boards})
  }
  moveCard = (cardId, currentSwimlaneId, targetSwimlaneId) => {
    let card = this.state.currentBoard.swimLanes.filter(
           swimlane => swimlane.id === currentSwimlaneId)[0].cards.filter(
               card => card.id === cardId)[0]
    console.log(card)
    if(card !== undefined) {
      this.deleteCard(cardId, currentSwimlaneId, this.state.currentBoard.id)
      this.addExistingCard(card,targetSwimlaneId)
    }
    

  }
  moveCardAbove = (cardId, currentSwimlaneId, targetSwimlaneId, cardBelowId) => {
    let card = this.state.currentBoard.swimLanes.filter(
           swimlane => swimlane.id === currentSwimlaneId)[0].cards.filter(
               card => card.id === cardId)[0]
    console.log(card)
    if(card !== undefined) {
      this.deleteCard(cardId, currentSwimlaneId, this.state.currentBoard.id)
      this.addExistingCardAbove(card,targetSwimlaneId, cardBelowId)
    }
    

  }

  changeSwimlaneTitle = (boardId, title, swimlaneId) => {
    let currentBoard = this.state.currentBoard
    let swimLanes = currentBoard.swimLanes
    let swimlaneLoc = -1
    for(let i = 0; i < swimLanes.length; i++) {
      if(swimLanes[i].id === swimlaneId) {
        swimlaneLoc = i;
        break;
      }
    }
    if (swimlaneLoc !== -1) {
      currentBoard.swimLanes[swimlaneLoc].title = title
      var newBoards = [...this.state.boards.filter(board => board.id !== boardId), currentBoard];
      newBoards.push(newBoards.shift());
      this.setState({boards: newBoards})
      this.setState({currentBoard})
    }
    
  }
  showBoard = (id) => {
    this.setState({currentBoard: this.state.boards.filter(board => board.id === id)[0]});
    this.setState({showImage: true});
  }

  hideImage = () => {
    this.setState({showImage: false});
  }
  updateCard = (card, swimlaneId, boardId) => {
    let currentBoard = this.state.currentBoard;
    let swimlaneToEdit = this.state.currentBoard.swimLanes.filter((swimlane) => swimlane.id === swimlaneId)[0]
    for(var i = 0; i < swimlaneToEdit.cards.length; i++) {
      if(swimlaneToEdit.cards[i].id === card.id) {
        swimlaneToEdit.cards[i] = card;
        break;
      }
    }
    // eslint-disable-next-line
    for(var i = 0; i < this.state.currentBoard.swimLanes.length; i++) {
      if(this.state.currentBoard.swimLanes[i].id === swimlaneId) {
        currentBoard.swimLanes[i] = swimlaneToEdit;
        break;
      }
    }
    let boards = this.state.boards
    // eslint-disable-next-line
    for(var i = 0; i < boards.length; i++) {
      if(boards[i].id === boardId) {
        boards[i] = currentBoard
        break;
      }
    }
    this.setState({currentBoard})
    this.setState({boards})
  }
  deleteCard = (cardId, swimlaneId, boardId) => {
      let currentBoard = this.state.currentBoard
      let swimlane     = currentBoard.swimLanes.filter((swimlane) => swimlane.id === swimlaneId)[0];
      swimlane.cards   = swimlane.cards.filter((card) => card.id !== cardId)
      for(var i = 0; i < currentBoard.swimLanes; i++) {
          if(currentBoard.swimLanes[i].id === swimlaneId) {
              currentBoard.swimLanes[i] = swimlane;
              break;
          }
      }
      let boards = this.state.boards.filter((board) => board.id !== currentBoard.id)
      boards.push(currentBoard)
      this.setState({currentBoard})
      this.setState({boards})

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
  deleteSwimlane = (id) => {
    let currentBoard = this.state.currentBoard
    currentBoard.swimLanes = currentBoard.swimLanes.filter(swimlane => swimlane.id !== id)
    var newBoards = [...this.state.boards.filter(board => board.id !== currentBoard.id), currentBoard];
    newBoards.push(newBoards.shift());
    this.setState({boards: newBoards})
    this.setState({currentBoard})
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
    var newSwimlane = {title: name, id: uuid(), cards: []};
    board.swimLanes = [...board.swimLanes, newSwimlane]
    var newBoards = [...this.state.boards.filter(board => board.id !== id), board]
    newBoards.push(newBoards.shift());
    this.setState({boards: newBoards})
  }
  addExistingCard = (card, swimlaneId) => {
    let currentBoard = this.state.currentBoard
    for(var i = 0; i < currentBoard.swimLanes.length; i++) {
      if(currentBoard.swimLanes[i].id === swimlaneId) {
        currentBoard.swimLanes[i].cards.push(card)
      }
    }
    let boards = [currentBoard,...this.state.boards.filter(board => board.id !== currentBoard.id)]
    this.setState({currentBoard})
    this.setState({boards})
  }
  addExistingCardAbove = (card, swimlaneId, cardBelowId) => {
    let currentBoard = this.state.currentBoard
    let updatedCards = []
    console.log(card)
    for(var i = 0; i < currentBoard.swimLanes.length; i++) {
      if(currentBoard.swimLanes[i].id === swimlaneId) {
        for(var j = 0; j < currentBoard.swimLanes[i].cards.length; j++) {
          if(currentBoard.swimLanes[i].cards[j].id === cardBelowId) {
            updatedCards.push(card)
            updatedCards.push(currentBoard.swimLanes[i].cards[j])
          }
          else {
            updatedCards.push(currentBoard.swimLanes[i].cards[j])
          }
        }

        currentBoard.swimLanes[i].cards = updatedCards;
      }
    }
    let boards = [currentBoard,...this.state.boards.filter(board => board.id !== currentBoard.id)]
    this.setState({currentBoard})
    this.setState({boards})
  }
  addCard = (title, description, swimlaneId) => {
    let newCard = {
      title,
      description,
      id: uuid(),
      comments: [],
      labels: []
    }
    let currentBoard = this.state.currentBoard
    for(var i = 0; i < currentBoard.swimLanes.length; i++) {
      if(currentBoard.swimLanes[i].id === swimlaneId) {
        currentBoard.swimLanes[i].cards.push(newCard)
      }
    }
    let boards = [currentBoard,...this.state.boards.filter(board => board.id !== currentBoard.id)]
    this.setState({currentBoard})
    this.setState({boards})
  }
  toggleSpace = () => {
    let antiCurrentSetting = !(this.state.darkMode)
    this.setState({darkMode: antiCurrentSetting});
  }
  addComment = (comment, cardId, swimlaneId, boardId) => {
    let commentToAdd = {
        comment,
        id: uuid()
    }
    let currentBoard = this.state.currentBoard
    let currentSwimlane = currentBoard.swimLanes.filter(swimlane => swimlane.id === swimlaneId)[0]
    

    for( var i = 0; i < currentSwimlane.cards.length; i++) {
        if(currentSwimlane.cards[i].id === cardId) {
          currentSwimlane.cards[i].comments.push(commentToAdd)
          break;
        }
    }
    for(var i = 0; i < currentBoard.swimLanes.length; i++) {
        if(currentBoard.swimLanes[i].id === swimlaneId) {
            currentBoard.swimLanes[i] = currentSwimlane
        }
    }
    let boards = [...this.state.boards.filter(board => board.id !== boardId), currentBoard]
    boards.push(boards.shift());
    this.setState({currentBoard,boards})
      
  }
  updateComment = (comment, commentId, cardId, swimlaneId, boardId) => {
    let currentBoard = this.state.currentBoard
    let currentSwimlane = currentBoard.swimLanes.filter(swimlane => swimlane.id === swimlaneId)[0]
    let currentCard = currentSwimlane.cards.filter(card => card.id === cardId)[0]
    
    for(var i = 0; i < currentCard.comments.length; i++) {
      if (currentCard.comments[i].id===commentId)
      currentCard.comments[i].comment = comment
    }
    let boards = [...this.state.boards.filter(board => board.id !== boardId), currentBoard]
      boards.push(boards.shift());
      this.setState({currentBoard,boards})
      //console.log(this.state.currentBoard.swimLanes.filter(swimlane => swimlane.id === swimlaneId)[0].cards.filter(card => card.id === cardId)[0].comments)
  }
  deleteComment = (commentId, cardId, swimlaneId, boardId) => {
    let currentBoard = this.state.currentBoard
    let currentSwimlane = currentBoard.swimLanes.filter(swimlane => swimlane.id === swimlaneId)[0]
    let currentCard = currentSwimlane.cards.filter(card => card.id === cardId)[0]
    currentCard.comments = currentCard.comments.filter(comment => comment.id !== commentId)

    for(var i = 0; i < currentSwimlane.cards.length; i++) {
        if(currentSwimlane.cards[i].id === cardId) {
            currentSwimlane.cards[i] = currentCard
            break;
        }
    }
    for(var i = 0; i < currentBoard.swimLanes.length; i++) {
        if(currentBoard.swimLanes[i].id === cardId) {
            currentBoard.swimLanes[i] = currentSwimlane
            break;
        }
    }
    let boards = [...this.state.boards.filter(board => board.id !== boardId), currentBoard]
    boards.push(boards.shift());
    this.setState({currentBoard,boards})
  }

  //Label shtuff
  addLabel = (labelTitle, labelColor, cardId, swimlaneId, boardId) => {
    let labelToAdd = {
        title: labelTitle,
        color: labelColor,
        id: uuid()
    }
    
    let currentBoard = this.state.currentBoard
    let currentSwimlane = currentBoard.swimLanes.filter(swimlane => swimlane.id === swimlaneId)[0]

    for( var i = 0; i < currentSwimlane.cards.length; i++) {
        if(currentSwimlane.cards[i].id === cardId) {
          currentSwimlane.cards[i].labels.push(labelToAdd)
          break;
        }
    }
    for(var i = 0; i < currentBoard.swimLanes.length; i++) {
        if(currentBoard.swimLanes[i].id === swimlaneId) {
            currentBoard.swimLanes[i] = currentSwimlane
        }
    }
    let boards = [...this.state.boards.filter(board => board.id !== boardId), currentBoard]
    boards.push(boards.shift());
    this.setState({currentBoard,boards})
  }

  deleteLabel = (labelId, cardId, swimlaneId, boardId) => {
      let currentBoard = this.state.currentBoard
      let currentSwimlane = currentBoard.swimLanes.filter(swimlane => swimlane.id === swimlaneId)[0]
      let currentCard = currentSwimlane.cards.filter(card => card.id === cardId)[0]
      currentCard.labels = currentCard.labels.filter(label => label.id !== labelId)

      for (var i=0; i < currentSwimlane.cards.length; i++) {
          if (currentSwimlane.cards[i].id === cardId) {
              currentSwimlane.cards[i] = currentCard
              break;
          }
      }

      let boards = [...this.state.boards.filter(board => board.id !== boardId), currentBoard]
      boards.push(boards.shift());
      this.setState({currentBoard,boards})
      
  }
  moveSwimlaneToEnd = (swimlaneId) => {
    let currentBoard = this.state.currentBoard
    let swimlaneToEnd = currentBoard.swimLanes.filter(swimlane => swimlane.id === swimlaneId)[0]
    console.log(swimlaneToEnd)
    if(swimlaneToEnd === undefined) return;
    currentBoard.swimLanes = [...currentBoard.swimLanes.filter(swimlane => swimlane.id !== swimlaneId), swimlaneToEnd]
    console.log(currentBoard.swimLanes)
    let boards = [...this.state.boards.filter(board => board.id !== currentBoard.id), currentBoard]
    boards.push(boards.shift());
    this.setState({currentBoard,boards})
    console.log("moved to end")
  }
  
}

export default AppUtils
