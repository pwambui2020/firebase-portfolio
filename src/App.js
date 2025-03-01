import './App.css';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import ResetPassword from './components/reset_password';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Firestore Project</h1>
        <SignUp />
        <SignIn />
        <ResetPassword />
        
      </header>
    </div>
  );
}

export default App;
