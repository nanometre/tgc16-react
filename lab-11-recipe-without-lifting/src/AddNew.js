import axios from 'axios'
import React from 'react'

export default class AddNew extends React.Component {
    
    BASE_API_URI = "http://localhost:8888/"
   
    state = {
        'newTitle': '',
        'newIngredients': []
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (<React.Fragment>
            <h1>Add new Recipe</h1>
            <div>
                <label>Title:</label>
                <input type='text'
                       onChange={this.updateFormField}
                       name="newTitle"
                       value={this.state.newTitle} 
                       className='form-control' />
            </div>
            <div>
                <label>Ingredients:</label>
                <input type='text'
                    name="newIngredients"
                    value={this.state.newIngredients}
                    onChange={this.updateFormField}
                    className='form-control'
                    placeholder="Seperate each ingredient with a comma" />
            </div>
            <button className="btn btn-primary mt-3" onClick={this.addNew}>Add New</button>
        </React.Fragment>)
    }

    addNew=async ()=>{
        await axios.post(this.BASE_API_URI + 'recipes',{
            'title': this.state.newTitle,
            'ingredients': this.state.newIngredients.split(',')
        })
        
        this.props.doneAddingRecipe();

    }
}