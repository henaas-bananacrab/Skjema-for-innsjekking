import './Header.css'



function Header() {  
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="Images/Momentum.png" alt="Momentum Logo" />
      </a>

      {/* Navigasjonsmeny */}
      <nav className="navbar">
        <ul>
          <li><a href="index.html">Hjem</a></li>
          <li><a href="HTML/Programmering.html">Programmering</a></li>
          <li><a href="HTML/HTTP&HTTPS.html">HTTP&HTTPS</a></li>
          <li><a href="HTML/NodeJS.html">NodeJS</a></li>
          <li><a href="HTML/React.html">React</a></li>
          <li><a href="HTML/Vite.html">Vite</a></li>
          <li><a href="HTML/AboutMe.html">About Me</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
