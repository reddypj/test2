import React, { Component } from 'react'
import EmployeeForm from './EmployeeForm'

class EmployeeList extends Component {
    state={
        currentIndex: -1,
        list : this.returnList()
    }

    returnList() {
        if (localStorage.getItem('employees')== null)
            localStorage.setItem('employees', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('employees'))
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if(this.state.currentIndex === -1)
            {
                list.push(data)
            } else {
                list[this.state.currentIndex] = data 
            }
        localStorage.setItem('employees', JSON.stringify(list))
        this.setState({list, currentIndex: -1})
    }

    onClickHandleEdit = index => {
        this.setState({
            currentIndex: index
        })
    }

    onClickHandleDelete = index => {
        var list = this.returnList()
        list.splice(index,1)
        localStorage.setItem('employees', JSON.stringify(list))
        this.setState({list, currentIndex: -1})
    }

    render() {
        return (
            <div>
                <h3>Employees List</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Employee address</th>
                        <th colSpan="2">Action</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((item,index)=> {
                                return <tr key = {index}>
                                    <td>{item.empId}</td>
                                    <td>{item.empName}</td>
                                    <td>{item.empadd}</td>
                                    <td><button style={{ color: 'green' }} className="fa fa-edit" onClick={() =>this.onClickHandleEdit(index)}></button></td>
                                    <td><button style={{ color: 'red' }} className="fa fa-trash" onClick={() =>this.onClickHandleDelete(index)}></button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <hr/>
                <EmployeeForm
                 onAddOrEdit={this.onAddOrEdit}
                 currentIndex={this.state.currentIndex}
                 list={this.state.list}/>
            </div>
        )
    }
}

export default EmployeeList
