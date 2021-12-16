import './tableUser.css'
import {Component} from 'react'
import users from '../../userInformation'

class TableUsers extends Component {
    state = {
        users: users
    }
    handleDeleteUser = (id) => {
        this.setState({users: this.state.users.filter(user => user.id !== id)})
    }
    handleAddUser=()=>{
        const name=prompt('Enter New Name')
        const familyName=prompt('Enter New FamilyName')
        const status=prompt('Enter New Status')
        const email=prompt('Enter New Email')
        this.setState({users:
                [...users,
                {id:Math.floor(Math.random()*1000),name,familyName,status,email}]
        })}

    handleUpdateUser=(oldUser)=>{
        const name=prompt('Enter New Name',oldUser.name)
        const familyName=prompt('Enter New FamilyName',oldUser.familyName)
        const status=prompt('Enter New Status',oldUser.status)
        const email=prompt('Enter New Email',oldUser.email)
        this.setState({users:users.map(user=>user.id===oldUser.id?
                {...oldUser,name,familyName ,status, email}
                :user)}
        )}

    render() {
        return (
            <div className='Page'>
                <button className='AddBtn' onClick={this.handleAddUser}>
                    Add New User
                </button>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Family Name</th>
                        <th>Status</th>
                        <th>Email</th>
                        <th>
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.familyName}</td>
                                <td>{user.status}</td>
                                <td>{user.email}</td>
                                <td className>
                                    <button onClick={() => this.handleUpdateUser(user)}>Update</button>
                                    <button onClick={() => this.handleDeleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default TableUsers