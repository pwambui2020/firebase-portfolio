import './App.css';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import ResetPassword from './components/reset_password';
import Firestore from './components/firestore';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Firestore Project</h1>
        <SignUp />
        <SignIn />
        <ResetPassword />
        <Firestore />
        
      </header>
    </div>
  );
}

export default App;
