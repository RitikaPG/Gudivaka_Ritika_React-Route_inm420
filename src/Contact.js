import './App.css';
import logo from './Contacts.png';

function Welcome(props) {
  return <h1> {props.firstName} {props.lastName} is sleepy go away</h1> 
}

function Contacts() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome firstName="Ritika" lastName="Gudivaka"/>
      </header>
    </div>
  );
}

export default Contacts;
