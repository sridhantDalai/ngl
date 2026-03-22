import React, { useState } from 'react';
import './App.scss';

function App() {
  const [msg, setMsg] = useState('');

  // The separate function (FX) to handle the insert logic
  const handleInsert = async () => {
    if (!msg.trim()) return;

    // 1. Perform your action (e.g., alert or API call)
    alert(`Message Inserted Successfully! 🚀
      You typed: ${msg}`);

    //backend
    const rawData = {"message" : msg}
    console.log(`You typed : ${msg}`);
    const response = await fetch("https://ngl-production-0894.up.railway.app/me" , {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify(rawData)
    })

    console.log(response)

    // 2. Clear all text
    setMsg('');
    
    // 3. (Optional) You could add a console log or more logic here
    console.log("Input has been cleared.");
  };

  return (
    <div className="app-container">
      {/* The Aesthetic Background Layers */}
      <div className="aesthetic-bg"></div>
      <div className="floating-mesh">
        <div className="mesh-sphere s1"></div>
        <div className="mesh-sphere s2"></div>
        <div className="mesh-sphere s3"></div>
      </div>

      {/* Main UI */}
      <header className="header-group">
        <h1>Not Gonna Lie 💭</h1>
        <p>Send anonymous thoughts to <span>Sridhant ❤️</span></p>
      </header>

      <main className="confession-card">
        <textarea 
          placeholder="Write your anonymous message here..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        
        {/* The Button now calls the separate handleInsert function */}
        <button 
          className="btn-submit" 
          disabled={!msg.trim()}
          onClick={handleInsert}
        >
          Insert Message
        </button>
      </main>

      <footer className="footer-text">
        Made by SRIDHANT DALAI :)
      </footer>
    </div>
  );
}

export default App;