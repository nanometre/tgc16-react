import React from 'react';

export default function RenderAddExpense(props) {
    return (
        <React.Fragment>
            <h3>Add expense</h3>
            <div>
                Date: <input type="text"
                    value={props.addDate}
                    name="addDate"
                    onChange={props.updateFormField} />
            </div>
            <div>
                Description: <input type="text"
                    value={props.addDescription}
                    name="addDescription"
                    onChange={props.updateFormField} />
            </div>
            <div>
                Category: <select value={props.addCategory}
                    name="addCategory"
                    onChange={props.updateFormField}>
                    <option value="transport">transport</option>
                    <option value="entertainment">entertainment</option>
                    <option value="food">food</option>
                    <option value="bills">bills</option>
                    <option value="loans">loans</option>
                    <option value="others">others</option>
                </select>
            </div>
            <div>
                Amount: <input type="text"
                    value={props.addAmount}
                    name="addAmount"
                    onChange={props.updateFormField} />
            </div>
            <button onClick={props.addExpense}>Add</button>
        </React.Fragment>
    )
}