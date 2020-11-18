import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Contributions = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/repos/facebook/react/contributors')
            .then(function (response) {
                // handle success
                var sorted = response.data.sort(function(a, b) {
                    const loweredA = a.login.toLowerCase();
                    const loweredB = b.login.toLowerCase();
                    return loweredA < loweredB ? -1 : loweredA > loweredB ? 1 : 0;
                })
                setUsers(sorted);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {

            });
    }, [])
    const listUsers = users.map((user, i) =>
        <li key={i}>{user.login}</li>);

    return (
        <ul>{listUsers}</ul>
    )

}