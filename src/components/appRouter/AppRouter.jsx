import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Error from '../../pages/error/Error';
import Posts from '../../pages/posts/Posts';
import About from '../../pages/about/About';
import PostIdPage from '../../pages/postIdPage/PostIdPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/about' Component={About} />
                <Route exact path='/posts' Component={Posts} />
                <Route exact path='/posts/:id' Component={PostIdPage} />
                <Route path='*' Component={Error} />
                <Route exact path='/' Component={Posts} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;