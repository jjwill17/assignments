import React, { Component } from 'react'
import axios from 'axios'

class Cocktail extends Component {
    constructor(){
        super()
        this.state = {
            infoToggle: false,
            currentCocktail: {}
        }
    }

    handleDrinkSelect = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.idDrink}`).then(response => {
            this.setState({
                currentCocktail: response.data.drinks[0]
            })
        })
        this.setState(prevState => ({
            infoToggle: !prevState.infoToggle
        }))
    }

    render(){
        const styles = {
            container: {
                backgroundImage: `url(${this.props.strDrinkThumb})`,
                height: '200px',
                width: '300px',
                backgroundSize: 'cover'
            }
        }

        return (
            <div style={styles.container}>
                { this.state.infoToggle 
                    ? <div>
                        <h3>Name: {this.state.currentCocktail.strDrink}</h3>
                        <h4>Category: {this.state.currentCocktail.strCategory}</h4>
                        <h5>Glass: {this.state.currentCocktail.strGlass }</h5>
                      </div>
                    : <h1>{this.props.strDrink}</h1>
                }
                <button onClick={ this.handleDrinkSelect }>Get Info</button>
            </div>
        )
    }
}

export default Cocktail