

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

function Home() {
  return <h1>Welcome to KL University</h1>;
}

function Courses() {
  return (
    <div>
      <h2>Available Courses</h2>
      <Link to="/course/101">Computer Science</Link><br />
      <Link to="/course/102">Electronics</Link><br />
      <Link to="/course/103">Mechanical</Link>
    </div>
  );
}

function Course() {
  const { id } = useParams();

  return (
    <div>
      <h2>Course Details</h2>
      <p>Selected Course ID: {id}</p>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Student Login</h2>
      <button onClick={() => navigate("/dashboard")}>
        Submit
      </button>
    </div>
  );
}

function Dashboard() {
  return <h1>Welcome to Student Dashboard</h1>;
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <h1>College Website</h1>

      <nav>
        <Link to="/">Home</Link> {" | "}
        <Link to="/courses">Courses</Link> {" | "}
        <Link to="/login">Login</Link> {" | "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
