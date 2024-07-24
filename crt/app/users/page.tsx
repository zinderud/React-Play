import React from 'react'
interface User {
    id: number;
    name: string;
    email: string;
}
const UserPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await res.json();

    return (
        <>
            <div>UserPage</div>

            <table className='table table-bordered'>
                <thead>   <tr>
                    <th>Name</th>
                    <th> Email</th>
                </tr></thead>

                <tbody>

                    {users.map((user: any) =>
                        <tr key={user.id}>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.email}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </>
    )
}

export default UserPage