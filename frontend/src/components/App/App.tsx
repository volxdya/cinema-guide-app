import {Routes, Route} from 'react-router-dom';
import {MainPage} from "../Main/MainPage.tsx";
import '../../styles/main.global.css';
import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer/Footer.tsx";
import {GenrePage} from "../GenrePage/GenrePage.tsx";
import {GenreFilms} from "../GenrePage/GenreFilms/GenreFilms.tsx";
import {Profile} from "../Profile/Profile.tsx";
import {FilmPage} from "../FilmPage/FilmPage.tsx";
import {EditProfilePage} from "../Profile/Edit/EditProfilePage.tsx";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/genres" element={<GenrePage/>}/>
                <Route path="/genre/:title" element={<GenreFilms/>}/>
                <Route path="/film/:id" element={<FilmPage/>}/>
                <Route path="/edit/" element={<EditProfilePage/>}/>
            </Routes>

            <Footer/>
        </>
    );
}

export default App

// hello danil