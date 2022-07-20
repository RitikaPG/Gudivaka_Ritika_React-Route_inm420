import logo from './Proj.png';
import './App.css';

function Welcome(props) {
  return <h1> This is {props.firstName} {props.lastName}'s project</h1> 
}

function Projects() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome firstName="Ritika" lastName="Gudivaka"/>
      </header>
    </div>
  );
}

export default Projects;
