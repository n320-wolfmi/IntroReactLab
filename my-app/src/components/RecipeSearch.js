import './../App.css'
import React from "react"

export default class RecipeSearch extends React.Component {  
    state = { 
        //create an array of recipe items
        recipes: [
            "Apple pie", 
            "Cherry Pie", 
            "Pizza Pie", 
            "Hamburger", 
            "Ham Steak", 
            "Chocolate Mousse", 
            "Chocolate Ice Cream"
        ], 
        searchTerm: ""
    }
  
    render() {

        //pull out matching recipes for search term
        let matchedRecipes = this.state.recipes.filter((recipe) => {
            return recipe.toLocaleUpperCase().includes(this.state.searchTerm.toLocaleUpperCase())
        })

        //pull each recipe from the array using the map function and put them into the recipesList variable
        let recipesList = matchedRecipes.map((recipe) => {
            return <li>{recipe}</li>
        })

      return (
        <div className="RecipeSearch">
            <h2>Component - Recipes</h2>
            <input value={this.state.searchTerm} onChange={(event) => {this.updateSearch(event)}}/>
            <ul>{recipesList}</ul> 
        </div>
      )
    }

    updateSearch(event) {
        this.setState({searchTerm: event.target.value})
    }
  }