import React from 'react'

// this is a managed componnet
// meaning it doesn't have its state
// and what it display depends on the parent
export default function Listing(props) {
    return (<React.Fragment>
        <h1>Recipe Listing</h1>

        {
            props.data.map(
                recipe => {
                    return (
                        <React.Fragment key={recipe._id}>
                            <div className="card" style={{
                                'width':'18rem'
                            }}>
                                <div className="card-body">
                                    <h4 className="card-title">{recipe.title}</h4>

                                    <div className="card-text">
                                        <h5>Ingredients</h5>
                                        <ul>
                                            {
                                                recipe.ingredients.map(
                                                    (ingredient,index) => <li key={index}>{ingredient}</li>           
                                                )
                                            }
                                        </ul>
                                    </div>
                                 
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }
            )
        }


    </React.Fragment>)

}