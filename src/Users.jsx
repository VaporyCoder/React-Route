import { Link } from "react-router-dom";

const Users = ({ users }) => {
    return (
      <div>
        <h1>Users</h1>
        <hr />
        <ul>
          {users.map((user) => {
            return <li key={user.id}><Link to={`/users/${ user.id}`}>{user.username}</Link></li>;
          })}
        </ul>
      </div>
    );
  };

  export default Users;