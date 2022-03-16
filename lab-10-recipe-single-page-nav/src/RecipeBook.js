import React from 'react'
import Listing from "./Listing";
import AddNew from "./AddNew"
import axios from 'axios'

export default class RecipeBook extends React.Component {
    
    state = {
        active: 'recipe',
        data:[
            
        ]
    }

    BASE_API_URL="http://localhost:8888/"

    async componentDidMount() {
        let response = await axios.get(this.BASE_API_URL + "recipes");
        this.setState({
            'data': response.data 
        })

    }

    renderPage() {
        if (this.state.active === 'recipe') {
            return <Listing data={this.state.data}/>
        } else if(this.state.active === 'add') {
            return <AddNew processAddNewRecipe={this.addRecipe}/>
        }
    }

    setActive(page) {
        this.setState({
            'active': page
        })
    }

    // the newRecipe arugment should be an object with _id,
    // title and ingredients
    addRecipe = (newRecipe) => {
        this.setState({
            'data': [...this.state.data, newRecipe],
            'active':'recipe'
        })
    }

    // all class-based component must have a render function
    // or else you cannot create instance of it
    render() {
        return (<div className="container">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className="nav-link"
                            onClick={()=>{
                                this.setActive('recipe')
                            }}>
                        Recipes
                    </button>
                </li>
                <li>
                    <button className="nav-link" onClick={()=>{
                        this.setActive('add')
                    }}>
                        Add New
                    </button>
                </li>
            </ul>
            {this.renderPage()}
        </div>)
    }
}