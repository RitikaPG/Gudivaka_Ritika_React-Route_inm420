import logo from './Home.png';
import './App.css';

function Welcome(props) {
  return <h1> Welcome Home {props.firstName} {props.lastName}</h1> 
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome firstName="Ritika" lastName="Gudivaka"/>
      </header>
    </div>
  );
}

export default Home;
