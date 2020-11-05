import React, { Component } from 'react'
import API from "../../../utils/API";

export default class Search extends Component {
    state = {
        searchBreed: "",
        breeds: [],
        results: []
    }

    componentDidMount() {
        API.getAllBreeds().then(res => {
            this.setState({ breeds: res.data.message })
        })
    }

    handleInputChange = event => {
        this.setState({
            searchBreed: event.target.value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBreedPics(this.state.searchBreed).then(res => {
            this.setState({ results: res.data.message })
        })
    }

    render() {
        return (
            <div className="Search">
                <form onSubmit={this.handleFormSubmit}>
                    <datalist id="breeds">
                        {this.state.breeds.map(breed => <option>{breed}</option>)}
                    </datalist>
                    <input name="searchBreed" list="breeds" value={this.state.searchBreed} onChange={this.handleInputChange} />
                    <button>Search!</button>
                </form>
                {this.state.results.map(pic => <img src={pic} />)}
            </div>
        )
    }
}