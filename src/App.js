import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="gray-background">
        <img src={logo} lat="logo" />
        <h2>Welcome to WATO World!</h2>
        <ol>
			<li>목록1</li>
			<li>목록2</li>
		</ol>

		<ul>
			<li>WATO</li>
			<ol>
				<li>근영</li>
				<li>종순</li>
			</ol>
		</ul>
    </div>
  );
}

export default App;
