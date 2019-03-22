import React from 'react'


const RecipeItem = (props) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={props.img} alt="" />
            <div className="card-body">
                <h5 className="card-title">TITLE HERE</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>INGREDIENTS HERE
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;