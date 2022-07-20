
import './App.css';
import logo from './About.png';


function Welcome(props) {
  return <h1> This is about {props.firstName} {props.lastName}</h1> 
}

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome firstName="Ritika" lastName="Gudivaka"/>
      </header>
    </div>
  );
}

export default About;
