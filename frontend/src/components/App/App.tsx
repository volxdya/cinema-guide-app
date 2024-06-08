import {Routes, Route} from 'react-router-dom';
import {MainPage} from "../Main/MainPage.tsx";
import '../../styles/main.global.css';
import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer/Footer.tsx";
import {GenrePage} from "../GenrePage/GenrePage.tsx";
import {GenreFilms} from "../GenrePage/GenreFilms/GenreFilms.tsx";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/genres" element={<GenrePage/>}/>
                <Route path="/genre/:title" element={<GenreFilms/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
