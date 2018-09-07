import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCocktails } from '../redux'
import Cocktail from './Cocktail'


class CocktailList extends Component {

    /* Get my initial array of drinks*/
    componentDidMount(){
        this.props.getCocktails()
    }

    render(){
        console.log(this.props)
        return (
            <div>
                {/* Map out of received cocktails array in redux */}
                {this.props.cocktails.map(cocktail => <Cocktail {...cocktail}/> )}
            </div>
        )
    }
}
                // 1: What do we want from redux state
                // 2: Which methods (action creators) do we need from redux
export default connect(state=>state, { getCocktails })(CocktailList)
