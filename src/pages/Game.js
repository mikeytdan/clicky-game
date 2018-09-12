import React, { Component } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import Score from "../components/Score";


class Game extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0,
    images: [],
    clickedImages: [],
    status: ""
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.setupImages();
  }

  setupImages = () => {
    var images = [];
    var index = 40;
    for (let i = 0; i < 12; i++) {
      index += Math.floor(Math.random() * 3) + 1;
      images.push(`https://picsum.photos/200/200?image=${index}`)
    }

    this.setState({ images: images });
  }

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  cardClicked = (src) => {
    let images = this.shuffledImages();
    let clickedImages = [];

    var status = "";
    if (this.state.clickedImages.includes(src)) {
      status = "lost";
    } else if (this.state.clickedImages.length >= 11) {
      status = "won";
      clickedImages = [];
    } else {
      clickedImages = this.state.clickedImages;
      clickedImages.push(src);
    }
    

    this.setState({ 
      images: images,
      clickedImages: clickedImages,
      status: status
    });
  }
  
  shuffledImages = () => {
    return this.shuffleArray(this.state.images);
  }

  render() {
    return (
      <div>
        <Container>
          <h1 className="text-center">Clicky Game</h1>
          <h4 className="text-center">The objective of this game is to select all the images without selecting the same image twice. Evertime an image is selected the order will be randomized.</h4>
          <Score guessed={this.state.clickedImages.length}/>
          {this.state.status == "won" ? (
            <h2 className="text-center text-success">You won<br/>Starting a new game!</h2>
          ) : this.state.status == "lost" ? (
            <h2 className="text-center text-danger">You lost :(<br/>Starting a new game!</h2>
          ) : ""}
          <Wrapper>
            {this.state.images.map(image => {
              return (
                <Card
                  key={image}
                  src={image}
                  cardClicked={this.cardClicked}
                />
              )
            })}
          </Wrapper>
        </Container>
      </div>
    );
  }
}

export default Game;
