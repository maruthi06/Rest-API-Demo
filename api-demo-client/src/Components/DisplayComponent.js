import React, { Component } from 'react';

import RequestModule from '../Service/ApiService';

class DisplayComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editFlag: false,
            index: 0,
            name: '',
            age: '',
            mail: '',
            about: ''
        };
    }

    async deleteData(name, email) {
        await RequestModule('http://localhost:4200/data', 'delete',
            { name, email }, { 'Content-Type': 'application/json' });
        let tempData = this.props.data;
        tempData = tempData.filter(obj => obj.email !== email);
        this.props.updateState(tempData);
    }

    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th scope="col">
                                Name
                            </th>
                            <th scope="col">
                                Age
                            </th>
                            <th scope="col">
                                Email
                            </th>
                            <th scope="col">
                                About
                            </th>
                            <th scope="col">
                                Delete/Edit
                            </th>
                        </tr>
                        {
                            this.props.data && this.props.data.map((obj, i) => {
                                const { name, age, email, about } = obj;

                                return (
                                    <tr key={i}>
                                        <td>
                                            {
                                                (this.state.editFlag && this.state.index === i) ?
                                                    <input type="text" name="name" defaultValue={name} onChange={this.onChangeInput.bind(this)} />
                                                    : name
                                            }
                                        </td>
                                        <td>
                                            {
                                                (this.state.editFlag && this.state.index === i) ?
                                                    <input type="text" name="age" defaultValue={age} onChange={this.onChangeInput.bind(this)} />
                                                    : age
                                            }
                                        </td>
                                        <td>
                                            {email}
                                        </td>
                                        <td>
                                            {
                                                (this.state.editFlag && this.state.index === i) ?
                                                    <textarea rows='4' cols='60' name="about" defaultValue={about} onChange={this.onChangeInput.bind(this)} />
                                                    : about
                                            }
                                        </td>
                                        <td>
                                            <button onClick={this.deleteData.bind(this, name, email)} className='btn btn-danger btn-sh'>Delete</button>
                                            {(this.state.editFlag && this.state.index === i) ?
                                                <div>
                                                    <button onClick={this.onClickSubmit.bind(this)} classname="btn btn-secondary btn-sm">Submit</button>
                                                    <button onClick={this.onClickEdit.bind(this, i, false)} className="btn btn-primary btn-sa">Cancel</button>
                                                </div>
                                                :
                                                <button onClick={this.onClickEdit.bind(this, i)} className="btn btn-secondary btn-sm">Edit</button>
                                            }
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    onChangeInput(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    onClickEdit(index, editFlag = true) {
        const { name, age, about, email } = this.props.data[index];
        this.setState({ editFlag, index, name, age, about, email });
    }

    async onClickSubmit() {
        const { name, age, about, email } = this.state;
        this.setState({ editFlag: false, name, age, about, email })
        let tempData = this.props.data;
        let updatedValueIndex = tempData.findIndex(obj => obj.email === email);
        tempData[updatedValueIndex] = {
            name, age, about, email
        };
        this.props.updateState(tempData);
        await RequestModule(
            "http://localhost:4200/data",
            'put',
            { name, age, about, email },
            { "Content-Type": 'application/json' });
    }
}

export default DisplayComponent;
