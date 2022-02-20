import './App.css';
import Header from './compoenents/Header';
import AppDetails from './compoenents/AppDetails';
import DownloadApp from './compoenents/DownloadApp';
import Apresentations from './compoenents/Apresentations';

function App() {
    return (
        <div className="App">
            <Header />
            <AppDetails />
            <DownloadApp />
            <Apresentations />
        </div>
    );
}

export default App;
