import React, { Component } from 'react';

import RequestModule from '../Service/ApiService';

class FormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
            about: ''
        };
    }

    render() {
        return (
            <div>
                <input type="text" name='name' value={this.state.name} onChange={this.onChangeInput.bind(this)} />
                <input type="text" name="age" value={this.state.age} onChange={this.onChangeInput.bind(this)} />
                <input type="text" name='email' value={this.state.email} onChange={this.onChangeInput.bind(this)} />
                <input type="text" name="about" value={this.state.about} onChange={this.onChangeInput.bind(this)} />
                <button onClick={this.addData.bind(this)}> Add Data</button>
            </div>
        );
    }
    onChangeInput(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    async addData() {
        const data = await RequestModule('http://localhost:4200/data', 'post', this.state,
            { 'Content-Type': 'application/json' });
        let tempData = this.props.data;
        this.props.updateState(tempData.concat(data));
        this.setState({
            name: '',
            age: '',
            email: '',
            about: ''
        });
    }
}

export default FormComponent;