import React, { Component } from "react";
import API from "../../utils/API";

class Discover extends Component {
    state = {
        dogPic: "",
        count: 0
    }

    loadNextDog = () => {
        API.getRandomDog().then(res => {
            this.setState({ dogPic: res.data.message })
        })
    };

    componentDidMount() {
        this.loadNextDog();
    };

    dislikeClick = () => {
        this.loadNextDog();
    };

    likeClick = () => {
        const randomNumber = Math.floor(Math.random() * 5)
        if (randomNumber === 1) {
            this.setState({ count: this.state.count + 1 })
        }
        this.loadNextDog();
    };


    render() {
        return (
            <div className="Discover">
                <h1>Find dogs in your area</h1>
                <main>
                    <img src={this.state.dogPic} alt="Random Dog" />
                </main>
                <section>
                    <button onClick={this.likeClick}>Like</button>
                    <button onClick={this.dislikeClick}>Dislike</button>
                </section>
                <section>
                    <p>You've matched with {this.state.count} dogs</p>
                </section>
            </div>
        )
    };
}

export default Discover;