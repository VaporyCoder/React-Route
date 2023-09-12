import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, Routes, Route, useParams } from "react-router-dom";
import Home from './Home';
import Users from './Users';
import Posts from './Posts';

const User = ({ users })=> {
  console.log(users);
  return (
    <div>
      <h1>User Name</h1>
    </div>
  );
};

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
      );
      const data = response.data;
      setUsers(data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts"
      );
      const data = response.data;
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <h1>The Social Network</h1>
      <nav>
        <Link to="/" className={pathname === "/" ? "selected" : ""}>
          Home
        </Link>
        <Link to="/users" className={pathname === "/users" ? "selected" : ""}>
          Users ({users.length})
        </Link>
        <Link to="/posts" className={pathname === "/posts" ? "selected" : ""}>
          Posts ({posts.length})
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route path="/User/:id" element={<User Users={users} />} />
      </Routes>
      <User />
    </>
  );
}

export default App;
