const User = ({ user, index }) => {
    const { email, role } = user; 


    const makeAdmin = () => {
        fetch(`https://floating-dusk-82041.herokuapp.com/user/admin/${email}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>Name</td>
            <td>{email}</td>
            <td> <button className='btn btn-sm btn-warning'>Role</button> </td>
            <td> <button className='btn btn-sm btn-success' disabled={role == 'admin'} onClick={makeAdmin}>{role ? 'Admin': 'Make Admin'}</button> </td>
            <td> <label for="delete-order" className="btn btn-sm btn-error">Delete</label></td>
        </tr>
    );
};

export default User;