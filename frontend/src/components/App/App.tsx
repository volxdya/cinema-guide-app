import {Route, Routes} from 'react-router-dom';
import {MainPage} from "../Main/MainPage.tsx";
import '../../styles/main.global.css';
import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer/Footer.tsx";
import {GenrePage} from "../GenrePage/GenrePage.tsx";
import {GenreFilms} from "../GenrePage/GenreFilms/GenreFilms.tsx";
import {Profile} from "../Profile/Profile.tsx";
import {FilmPage} from "../FilmPage/FilmPage.tsx";
import {EditProfilePage} from "../Profile/Edit/EditProfilePage.tsx";
import {Modals} from "../Modals/Modals.tsx";
import {MyFilms} from "../MyFilms/MyFilms.tsx";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/profile/:title" element={<Profile/>}/>
                <Route path="/genres" element={<GenrePage/>}/>
                <Route path="/genre/:title" element={<GenreFilms/>}/>
                <Route path="/film/:id" element={<FilmPage/>}/>
                <Route path="/edit/" element={<EditProfilePage/>}/>
                <Route path="/production/:id" element={<MyFilms/>}/>
            </Routes>
            <Modals/>
            <Footer/>
        </>
    );
}

export default App;

// hello danil