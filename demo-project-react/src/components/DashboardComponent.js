import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from './../_actions/users';

class DashboardComponent extends React.Component {
    constructor() {
        super();
    }
    async componentDidMount() {
        const { fetchUsers } = this.props;
        await fetchUsers();
    }

    render() {
        const { users } = this.props;
        return (
            <div className="">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.users.map(user => {
                            return <tr key={user.id}>
                                <td>{user.id} </td>
                                <td>{user.name} </td>
                                <td>{user.age} </td>
                                <td>{user.gender} </td>
                                <td>{user.email} </td>
                                <td>{user.phoneNo} </td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers: fetchUsers
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardComponent);

