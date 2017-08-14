import React, { Component } from 'react';
import Counter from "./Counter";

const KEY = "KennethReactHW2";

class CounterForm extends Component
{
    constructor(props) {
        super(props);

        this.updateName = this.updateName.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: "My Counter",
            value: "",
        };
    }

    componentDidMount() {
        this.getData(KEY);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    updateName(event) {

        const tempName = event.target.name;
        const tempValue = event.target.value;

        this.setState({
            [tempName]: tempValue,
        });
    }

    updateValue(event) {
        const tempName = event.target.name;
        const tempValue = parseInt(event.target.value);

        this.setState({
            [tempName]: tempValue,
        });
    }

    handleSubmit(event) {
        console.log('CounterForm.handleSubmit', event);
        this.saveData(KEY + "-name", this.state.name);
        this.saveData(KEY + "-value", this.state.value.toString());
    }

    getData(key) {
        console.log('fetching data...', key);
        fetch('http://circuslabs.net:3000/data/' + KEY, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then( response => {
            if (response.status == 200) {
                return response.text();
            }
            if (this.props.initialValue) {
                return this.props.initialValue;
            }
            return '';
        }) 
        .then( data => {
            this.setState({value: data});
        })
        .catch(function(err) {
        }); 
    }

    saveData(key, value) {
        console.log('saving data...', key, value);
        let jsonData = {
            type: 'string',
            content: value,
        };
        fetch('http://circuslabs.net:3000/data/' + key, {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then( response => response.text() ) 
        .then( data => {
            console.log('here is the response data!', data);
        })
        .catch(function(err) {
            console.log('error!', err);
        });
    }

    render() {

        return (
            <div className="">
                <h2>Counter Form</h2>
                <hr/>

                <form>
                    <label>Name the counter: </label>
                    <input type="text" onChange={this.updateName} name="name" value={this.state.name} />
                    <br />
                    <br />
                    <label>Initial value for the counter: </label>
                    <input type="num" onChange={this.updateValue} name="value" value={this.state.value} />
                    <br />
                    <br />
                    <button onClick={this.handleSubmit}>Send</button>
                    <hr />
                </form>
                <Counter title={this.state.name} value={this.state.value} />
            </div>
        );

    }
}


export default CounterForm;