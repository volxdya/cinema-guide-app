import {Routes, Route} from 'react-router-dom';
import {MainPage} from "../Main/MainPage.tsx";
import '../../styles/main.global.css';
import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer/Footer.tsx";
import {GenrePage} from "../GenrePage/GenrePage.tsx";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/genres" element={<GenrePage/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
