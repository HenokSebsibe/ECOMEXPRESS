import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { createContext } from 'react';
const AuthContext = createContext();
    function Navbar(){
      const { user , Logout } = useContext(AuthContext);
      return (
        <header style={{ padding: "1rem", marginBottom:"1rem", borderBottom:"1px solid #e5e7eb", display:flex, justifyContent:"center"}}>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            </nav>
            <div>
            {user.isAuth ? <Link to="/login">Login</Link> :<button onClick={Logout}>Logout</button>}
            </div>
            <div>
              {user.isAuth ?(<Link to="login">login</Link>) : 

              
              <button onClick={Logout}>Logout</button>})
            </div>
        </header>
      );
    }
function HomePage(){
  const { user } = useContext(AuthContext);
  return(
    <div>
      <h1>Home Page</h1>
      
    {user.isAuth ? <h1>Welcome, {user.name}!</h1> :
      <p>Welcome to our website! Please log in to access your profile and personalized features.</p>}
    </div>   
      
      );
}

function AboutPage(){
  return <h1>About Page</h1>
}
function ProfilePage() {
  const { user } = useContext(AuthContext);
  return(
        <div>
    <h1>Profile</h1>
    <p>Name: {user.name}</p>
    <p>here you can view your profile information</p>
  </div>
  )

}
function LoginPage() {
  const [name, setName] = useState('');
const{user, Login} = useContext(AuthContext);
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Welcome, ${name}!`);
    if(name.trim() !== ''){
      Login(name);
    }
  }

  return (
    <div style={{ padding: "0.15rem" }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <label>Name:</label>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />

        <button type="submit">Login</button>
      </form>
      {user.isAuth && <p>Welcome, {user.name}</p>}
      
    </div>
  );
}

function App() {
    const [user, setUser] = useState({ name: '', isAuth: false });

    function Login(name) {
      setUser({ name,   isAuth: true });

    }
    function Logout() {
      setUser({ name: '', isAuth: false });
    }

  return (
    <div>
    
      <AuthContext.Provider value={{ user, Login, Logout }}>
      <nav style ={{display:'flex', gap:'1rem', padding:'1rem'}}>
        
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/login'>Login</Link>
      </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/Profile' element={<ProfilePage />} />
          <Route path='/Login' element={<LoginPage />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
