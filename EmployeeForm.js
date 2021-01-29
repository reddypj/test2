import React, { Component } from 'react'

class EmployeeForm extends Component {
    state = {
        ...this.returnStateObject()
    }
    returnStateObject() {
        if(this.props.currentIndex === -1)
            return {
                empId: '' ,
                empName: '',
                odc: '',
            }
        else {
            return this.props.list[this.props.currentIndex]
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length)
            this.setState({...this.returnStateObject()})
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value

        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)

    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleOnSubmit} autoComplete="off">
                    <div className="input-field col s3">
                        <input name="empId" placeholder="Emp Id" value={this.state.empId} onChange={this.handleInputChange}/>
                    </div>
                    <div className="input-field col s3">
                        <input name="empName" placeholder="Emp Name" value={this.state.empName} onChange={this.handleInputChange}/>
                    </div>
                    <div className="input-field col s3">
                        <input name="empaddress" placeholder="address" value={this.state.odc} onChange={this.handleInputChange}/><br/>
                    </div>
                    <div className="input-field col s3">
                        <button type="submit" className="btn blue">+Add </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EmployeeForm
