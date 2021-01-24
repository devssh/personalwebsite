import logo from './logo.svg';
import linkedinlogo from './linkedinlogo.png';
import twitterlogo from './twittericon.png';
import instagramlogo from './instagramicon.png';
import facebooklogo from './facebookicon.png';
import twlogo from './thoughtworkslogo.jpg';
import srmlogo from './srmlogo.png';
import internetlogo from './internetlogo.png';
import profilepic from './devbur.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<div className="row"> 
	  <img src={profilepic} className="profile-pic" alt="profile pic" />
	</div>
	<div className="row">
	  <img src={logo} className="icon" alt="Devashish" />
        
	<div className="bold">
          Devashish Sood
        </div>

	</div>
	<div className="row">
          <a className="App-link"
          href="https://www.linkedin.com/in/devssh/"
          target="_blank" rel="noopener noreferrer">
	    <img src={linkedinlogo} className="icon" alt="Linkedin" /> 
          </a>

	  <a className="App-link"
          href="https://www.facebook.com/devashishsood1975"
          target="_blank" rel="noopener noreferrer">
            <img src={facebooklogo} className="icon" alt="Facebook" />
          </a>

	  <a className="App-link"
          href="https://www.twitter.com/dev_hf"
          target="_blank" rel="noopener noreferrer">
            <img src={twitterlogo} className="icon" alt="Twitter" />
          </a>

	  <a className="App-link"
          href="https://www.instagram.com/dev.ssh"
          target="_blank" rel="noopener noreferrer">
            <img src={instagramlogo} className="icon" alt="Instagram" />
          </a>

	  <a className="App-link"
          href="https://www.instagram.com/musique_dev/"
          target="_blank" rel="noopener noreferrer">
            <img src={instagramlogo} className="icon" alt="Instagram" />
          </a>
	</div>

	<div>
	  <div className="row">
            <div><img src={logo} className="App-logo" alt="Entrepreneur" />
	    </div><div className="bold">Entrepreneur
	    </div>
	  </div>
	  <p>Currently working on real life problems in my business. Working on core business development among other things.</p>
	</div>

	<div>
         <p> </p>
	 <div className="row">
	   <div><img src={twlogo} className="icon" alt="ThoughtWorks" />
	   </div><div className='p'> ThoughtWorks
	   </div>
	 </div>
	 <p>
	  Have worked as a fullstack software developer, blockchain engineer, consultant, data scientist, 
	 </p><p></p>
	 <div className="row">
	  <div><img src={srmlogo} className="icon" alt="SRM" />
	  </div><div>SRM University
	  </div>
	 </div>
         B.Tech Computer Science
	</div>

	
      </header>
    </div>
  );
}

export default App;
