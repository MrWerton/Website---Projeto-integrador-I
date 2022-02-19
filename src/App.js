import logo from './logo.svg';
import './App.css';
import Header from './compoenents/Header';
import AppDetails from './compoenents/AppDetails';
import DownloadApp from './compoenents/DownloadApp';

function App() {
  return (
    <div className="App">
     <Header/>
     <AppDetails/>
     <DownloadApp/>
    </div>
  );
}

export default App;
