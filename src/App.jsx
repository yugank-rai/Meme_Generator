import { Routes , Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/home.jsx"; 
import EditPage from "./pages/edit.jsx"; 
import './App.css';

function App() {
    return (
        <div className="app">
            <h1>Meme Generator</h1>
            <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/edit" element={<EditPage />} />
            </Routes>
        </div>
    );
}

export default App;
