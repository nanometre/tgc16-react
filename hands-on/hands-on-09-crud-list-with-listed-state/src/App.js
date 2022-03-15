import logo from './logo.svg';
import './App.css';
import React from 'react';
import RenderAddExpense from './RenderAddExpense';
import RenderAllExpenses from './RenderAllExpenses';

class App extends React.Component {
  state = {
    expenses: [
      {
        id: 1,
        date: "2022-02-19",
        description: "Bus transport fees to work",
        category: "transport",
        amount: 1.9,
        reconciled: false
      },
      {
        id: 2,
        date: "2022-02-25",
        description: "Dinner with friends",
        category: "food",
        amount: "100",
        reconciled: false
      },
      {
        id: 3,
        date: "2022-03-01",
        description: "Movie with family",
        category: "entertainment",
        amount: "50",
        reconciled: false
      }
    ],
    addDate: "",
    addDescription: "",
    addCategory: "transport",
    addAmount: "",
    expenseIdToEdit: -1,
    expenseBeingEdited: null,
    editDate: "",
    editDescription: "",
    editCategory: "",
    editAmount: ""
  }

  updateFormField = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  renderExpenses = (expense) => {
    return <React.Fragment key={expense.id}>
      <h4>{expense.description}</h4>
      <p>Date: {expense.date}</p>
      <p>Category: {expense.category}</p>
      <p>Amount: {expense.amount}</p>
      <button onClick={() => { this.deleteExpense(expense) }}>Delete</button>
      <button onClick={() => { this.editExpense(expense) }}>Edit</button>
    </React.Fragment>
  }

  renderEditExpense = (expense) => {
    return <React.Fragment>
      <div>
        Description: <input type="text"
          value={this.state.editDescription}
          name="editDescription"
          onChange={this.updateFormField} />
      </div>
      <div>
        Date: <input type="text"
          value={this.state.editDate}
          name="editDate"
          onChange={this.updateFormField} />
      </div>
      <div>
        Category: <select value={this.state.editCategory}
          name="editCategory"
          onChange={this.updateFormField}>
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
          value={this.state.editAmount}
          name="editAmount"
          onChange={this.updateFormField} />
      </div>
      <button onClick={this.processEdit}>Confirm</button>
      <button onClick={this.cancelEdit}>Cancel</button>
    </React.Fragment>
  }

  addExpense = () => {
    let newExpense = {
      id: Math.floor(Math.random() * 100000 + 99999),
      date: this.state.addDate,
      description: this.state.addDescription,
      category: this.state.addCategory,
      amount: this.state.addAmount,
      reconciled: false
    }
    this.setState({
      expenses: [...this.state.expenses, newExpense]
    })
  }

  deleteExpense = (expense) => {
    let indexToDelete = this.state.expenses.findIndex(e => expense.id === e.id)
    this.setState({
      expenses: [...this.state.expenses.slice(0, indexToDelete),
      ...this.state.expenses.slice(indexToDelete + 1)]
    })
  }

  editExpense = (expense) => {
    this.setState({
      expenseBeingEdited: expense,
      expenseIdToEdit: expense.id,
      editDescription: expense.description,
      editDate: expense.date,
      editCategory: expense.category,
      editAmount: expense.amount
    })
  }

  processEdit = () => {
    let indexToEdit = this.state.expenses.findIndex(e => this.state.expenseIdToEdit === e.id)
    let editedExpense = {
      id: this.state.expenseBeingEdited.id,
      date: this.state.editDate,
      description: this.state.editDescription,
      category: this.state.editCategory,
      amount: this.state.editAmount,
      reconciled: false
    }
    this.setState({
      expenses: [...this.state.expenses.slice(0, indexToEdit),
        editedExpense,
      ...this.state.expenses.slice(indexToEdit + 1)],
      expenseIdToEdit: -1,
      expenseBeingEdited: null
    })
  }

  cancelEdit = () => {
    this.setState({
      expenseIdToEdit: -1,
      expenseBeingEdited: null
    })
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <RenderAllExpenses
          expenses={this.state.expenses}
          expenseBeingEdited={this.state.expenseBeingEdited}
          expenseIdToEdit={this.state.expenseIdToEdit}
          renderEditExpense={this.renderEditExpense}
          renderExpenses={this.renderExpenses} />

        <RenderAddExpense
          addDate={this.state.addDate}
          addDescription={this.state.addDescription}
          addCategory={this.state.addCategory}
          addAmount={this.state.addAmount}
          updateFormField={this.updateFormField}
          addExpense={this.addExpense} />
      </div>
    );
  }
}

export default App;
