import React from 'react';
import './UserDetails.css';

function UserDetails(props){
    const user = props.user;
    function fullName(user){
        return `${user.fname} ${user.lname}`;
    }

    function encryptEmail(user){
        let email = user.email;
        let indexOfAt = email.indexOf('@');
        let sliced = email.slice(1,indexOfAt-1);
        let regx = new RegExp(sliced,'gi');
        let hiddenEmail = email.replace(regx,'*'.repeat(sliced.length));
        return hiddenEmail;
    }

    return(
        <section className="user-details">
            <table className="user-details-table">
                <thead><tr><th>Details:</th></tr></thead>
                <tbody>
                    <tr>
                        <td>Name:</td><td>{fullName(user)}</td>
                    </tr>
                    <tr>
                        <td>Email address:</td><td>{encryptEmail(user)}</td>
                    </tr>
                    <tr>
                        <td>Occupation:</td><td>{user.occupation}</td>
                    </tr>
                    <tr>
                        <td>Status:</td><td>{user.status}</td>
                    </tr>
                    <tr>
                        <td>Summary:</td><td>{user.summary}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default UserDetails;