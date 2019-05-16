import React from 'react';
import { connect } from 'react-redux'
import { callApi } from '../../api'
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { selectUserId, selectUser, selectUserToEdit } from '../../actions';
import Modal from '../../common/modal'
import TextInput from '../../common/textInput'
class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openAdd: false,
            openEdit: false,
            userToEdit: {
                id: "",
                name: "",
                age: "",
                sex: ""
            }
        }
    }
    componentDidMount() {
        // callApi("GET", "randoma", undefined,
        //     (res) => console.log(res),
        //     (err) => console.log(err.response.status)
        // );
    }
    postUser = () => {
        let user = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            sex: this.state.gender
        }
        this.props.selectUserToAdd(user)
    }
    editUser = () => {
        let { userToEdit } = this.state
        this.props.selectUserToEdit(userToEdit)
    }
    closeAdd = () => {
        this.setState({
            openAdd: false
        })
    }
    closeEdit = () => {
        this.setState({
            openEdit: false
        })
    }
    render() {
        let { users } = this.props
        return (
            <Paper>
                <Button variant="contained" color="primary" onClick={() => {
                    this.setState({
                        openAdd: true
                    })
                }}>
                    THÊM
                </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Age</TableCell>
                            <TableCell align="left">Gender</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.age}</TableCell>
                                <TableCell align="left">{row.sex}</TableCell>
                                <TableCell align="center">
                                    <Tooltip title="Edit" placement="top-start">
                                        <IconButton aria-label="Edit" onClick={() => {
                                            this.setState({
                                                userToEdit: row,
                                                openEdit: true
                                            })
                                        }}>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete" placement="top-start">
                                        <IconButton aria-label="Delete" onClick={() => {
                                            this.props.selectUserToDel(row.id)
                                        }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Modal open={this.state.openAdd}
                    onClose={() => this.closeAdd()}
                    isFullWidth={true}
                    onSubmit={() => this.postUser()}
                    header={
                        <h3>Add User</h3>
                    }
                    content={
                        <div>
                            <TextInput
                                label={"ID"}
                                placeholder="ID"
                                onChange={(e) => this.setState({
                                    id: e
                                })} />
                            <TextInput
                                label={"Full name"}
                                placeholder="Name"
                                onChange={(e) => this.setState({
                                    name: e
                                })} />
                            <TextInput placeholder="Age"
                                label={"Age"}
                                onChange={(e) => this.setState({
                                    age: e
                                })} />
                            <TextInput placeholder="Gender"
                                label={"Gender"}
                                onChange={(e) => this.setState({
                                    gender: e
                                })} />
                        </div>
                    }
                />
                <Modal open={this.state.openEdit}
                    isFullWidth={true}
                    onSubmit={() => this.editUser()}
                    onClose={() => this.closeEdit()}
                    header={
                        <h3>Edit User</h3>
                    }
                    content={
                        <div>
                            <TextInput placeholder="Name"
                                label={"Full name"}
                                value={this.state.userToEdit.name}
                                onChange={(e) => this.setState({
                                    userToEdit: { ...this.state.userToEdit, name: e }
                                })} />
                            <TextInput placeholder="Age"
                                label={"Age"}
                                value={this.state.userToEdit.age}
                                onChange={(e) => this.setState({
                                    userToEdit: { ...this.state.userToEdit, age: e }
                                })} />
                            <TextInput placeholder="Gender"
                                label={"Gender"}
                                value={this.state.userToEdit.sex}
                                onChange={(e) => this.setState({
                                    userToEdit: { ...this.state.userToEdit, sex: e }
                                })} />
                        </div>
                    }
                />
            </Paper>
        );
    }
}
const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => ({
    selectUserToDel: (id) => dispatch(selectUserId(id)),
    selectUserToAdd: (user) => dispatch(selectUser(user)),
    selectUserToEdit: (user) => dispatch(selectUserToEdit(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(About);
