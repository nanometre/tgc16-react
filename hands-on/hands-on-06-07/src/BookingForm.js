import React from 'react'
import axios from 'axios'

export default class BookingForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        seatings: "",
        smoking: "",
        appetisers: [],
        allSeatings: [],
        allSmoking: [],
        allAppetiser: [],
        loaded: false
    }
    
    
    render() {
        if (this.state.loaded) {
            return this.renderForm()
        } else {
            return <h1>Loading</h1>
        }
    }

    renderForm() {
        return (
            <React.Fragment>
                <div>
                    <label>First Name: </label>
                    <input type='text' name="firstName" value={this.state.firstName} onChange={this.updateForm}></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type='text' name="lastName" value={this.state.lastName} onChange={this.updateForm}></input>
                </div>
                <div>
                    <label>Seatings: </label>
                    {this.renderSeatingRB()}
                </div>
                <div>
                    <label>Smoking: </label>
                    <select  name="smoking" onChange={this.updateForm} value={this.state.smoking}>
                        {this.renderSmoking()}
                    </select>
                </div>
                <div>
                    <label>Appetisers: </label>
                    {this.renderAppetisers()}
                </div>
            </React.Fragment>
        )
    }

    renderSeatingRB() {
        let allRB = [];
        for (let seating of this.state.allSeatings) {
            let rb = <React.Fragment key={seating.value}>
                        <input type="radio"
                               name="seatings"
                               value={seating.value}
                               onChange={this.updateForm}
                               checked={this.state.seatings === seating.value}
                               />{seating.display}
                     </React.Fragment>
            allRB.push(rb)
        }
        return allRB
    }

    renderSmoking() {
        let smokingOptions = this.state.allSmoking.map(function(smoking){
            return <option value={smoking.value} key={smoking.value}>{smoking.display}</option>
        })
        return smokingOptions
    }

    renderAppetisers() {
        let appetiserCB = this.state.allAppetiser.map((appetiser) => {
            return <React.Fragment key={appetiser.value}>
                        <input type="checkbox"
                               name="appetisers"
                               value={appetiser.value}
                               onChange={this.updateAppetisers}
                               checked={this.state.appetisers.includes(appetiser.value)}
                        />{appetiser.display}
                   </React.Fragment>
        })
        return appetiserCB
    }

    updateForm = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value 
        })
    }

    updateAppetisers = (evt) => {
        if (this.state.appetisers.includes(evt.target.value)) {
            let clone = this.state.appetisers.filter(a=> a !== evt.target.value)
            this.setState({
                appetisers: clone
            })
        } else {
            this.setState({
                appetisers: [...this.state.appetisers, evt.target.value]
            })
        }
    }

    async componentDidMount() {
        let seatingsRequest = axios.get('seating.json')
        let smokingRequest = axios.get('smoking.json')
        let appetiserRequest = axios.get('appetiser.json')

        let seatingsResponse = await seatingsRequest
        let smokingResponse = await smokingRequest
        let appetiserResponse = await appetiserRequest

        this.setState({
            allSeatings: seatingsResponse.data,
            allSmoking: smokingResponse.data,
            allAppetiser: appetiserResponse.data,
            loaded: true
        })
    }
}