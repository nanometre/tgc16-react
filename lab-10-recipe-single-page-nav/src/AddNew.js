import React from 'react'
import axios from 'axios'

export default class AddNew extends React.Component {
    state = {
        'newRecipeTitle': '',
        'newIngredients': []
    }

    BASE_API_URL = "http://localhost:8888/"

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    updateIngredient = (index, newValue) => {
        this.setState({
            'newIngredients': [
                ...this.state.newIngredients.slice(0, index),
                newValue,
                ...this.state.newIngredients.slice(index + 1)
            ]
        })
    }

    addNewIngredient = () => {
        this.setState({
            newIngredients: [...this.state.newIngredients, this.state.newIngredientBeingAdded],
            newIngredientBeingAdded: ''
        })
    }

    addNewRecipe = async () => {
 
        let response = await axios.post(this.BASE_API_URL + 'recipes', {
            'title': this.state.newRecipeTitle,
            'ingredients': this.state.newIngredients
        })

        // to access the props, use this.props
        this.props.processAddNewRecipe(response.data[0]); 
    }

    render() {
        return (
            <React.Fragment>
                <h1>Add Recipe</h1>
                <div>
                    <label>Recipe Title</label>
                    <input className="form-control" type="text" name="newRecipeTitle"
                        onChange={this.updateFormField} />
                </div>
                <h2>Ingredients</h2>
                <input type="text" name="newIngredientBeingAdded"
                    value={this.state.newIngredientBeingAdded}
                    onChange={this.updateFormField}
                    onKeyDown={(evt) => {
                        if (evt.keyCode === 13) {
                            this.addNewIngredient();
                        }
                    }}
                />
                <button onClick={() => {
                    this.addNewIngredient();
                }}>Add Ingredient</button>
                {this.state.newIngredients.map((ingredient, index) => {
                    return (
                        <div key={index}>
                            <input type="text" className="form-control mt-3" value={this.state.newIngredients[index]}
                                onChange={(evt) => {
                                    this.updateIngredient(index, evt.target.value)
                                }} />
                        </div>)
                })}
                <div>

                </div>
                <button onClick={this.addNewRecipe} className="mt-3 btn btn-primary">Add New Recipe</button>
            </React.Fragment>
        )
    }

}