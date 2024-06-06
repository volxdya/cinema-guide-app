import {Routes, Route} from 'react-router-dom';
import {MainPage} from "../Main/MainPage.tsx";
import '../../styles/main.global.css';

function App() {

    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    )
}

export default App
