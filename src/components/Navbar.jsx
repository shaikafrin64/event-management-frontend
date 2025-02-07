import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Event Management</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/login" className="mx-2">Login</Link>
        <Link to="/dashboard" className="mx-2">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
