import {Route, Routes} from 'react-router-dom';
import '../../styles/main.global.css';
import {lazy, Suspense} from "react";
import {Loader} from "../../ui/Loader/Loader.tsx";



function App() {

    const Profile = lazy(() => import('../Profile/Profile.tsx'));
    const MainPage = lazy(() => import('../Main/MainPage.tsx'));
    const GenrePage = lazy(() => import('../GenrePage/GenrePage.tsx'));
    const GenreFilms = lazy(() => import('../GenrePage/GenreFilms/GenreFilms.tsx'));
    const FilmPage = lazy(() => import('../FilmPage/FilmPage.tsx'));
    const EditProfilePage = lazy(() => import('../Profile/Edit/EditProfilePage.tsx'));
    const MyFilms = lazy(() => import('../MyFilms/MyFilms.tsx'));
    const Header = lazy(() => import('../Header/Header.tsx'));
    const Footer = lazy(() => import('../Footer/Footer.tsx'));
    const Modals = lazy(() => import('../Modals/Modals.tsx'));

    return (
        <Suspense fallback={<Loader/>}>
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
        </Suspense>
    );
}

export default App;