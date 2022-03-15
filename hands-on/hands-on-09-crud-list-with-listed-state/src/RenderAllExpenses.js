import React from 'react';

export default function RenderAllExpenses(props) {
    return (
        <React.Fragment>
            <h3>My Expenses</h3>
            {props.expenses.map(expense => {
                if (props.expenseBeingEdited !== null && props.expenseIdToEdit === expense.id) {
                    return props.renderEditExpense(expense)
                } else {
                    return props.renderExpenses(expense)
                }
            }
            )}
        </React.Fragment>
    )
}