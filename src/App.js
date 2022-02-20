import './App.css';
import Header from './compoenents/Header';
import AppDetails from './compoenents/AppDetails';
import DownloadApp from './compoenents/DownloadApp';
import Apresentations from './compoenents/Apresentations';
import Team from './compoenents/Team';
import ProjectLinks from './compoenents/ProjectLinks';

function App() {
    return (
        <div className="App">
            <Header />
            <AppDetails />
            <DownloadApp />
            <Apresentations />
            <Team/>
            <ProjectLinks/>
        </div>
    );
}

export default App;
