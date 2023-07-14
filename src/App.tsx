import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes} from 'react-router-dom';
import Gene from "./pages/gene/gene";
import Wgcna from "./pages/wgcna/wgcna";
import Phenotype from "./pages/phenotype/phenotype";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Gene/>}/>
                <Route path="/gene" element={<Gene/>}/>
                <Route path="/wgcna" element={<Wgcna/>}/>
                <Route path="/phenotype" element={<Phenotype/>}/>
            </Routes>
            <Footer/>
       </div>
    );
}

export default App;
