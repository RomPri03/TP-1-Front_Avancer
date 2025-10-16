import './App.css'; 
import React, { useState } from 'react';


function App() {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    
    console.log('Tentative de connexion avec :');
    console.log('Nom d\'utilisateur:', username);
    console.log('Mot de passe:', password);

    
    if (username === 'admin' && password === '1234') {
        alert('Connexion réussie !');
    } else {
        alert('Identifiants incorrects.');
    }
  };

  return (
    <div className="app-container">
      <div className="login-box">
        <h2>CONNEXION</h2>
        <form onSubmit={handleSubmit}>
          
          {}
          <div className="user-box">
            <input
              type="text"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Nom d'utilisateur</label>
          </div>
          
          {}
          <div className="user-box">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Mot de passe</label>
          </div>
          
          {}
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export default App;