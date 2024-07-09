import NavBar from './components/NavBar';
import './style/App.css'
import {
    createHashRouter,
    Outlet
} from 'react-router-dom';
import { Home } from './routes/Home';
import {About} from './routes/About';

const App = createHashRouter([
    {
        path: "/",
        element: <NavBarWrapper/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
        ]
    }
]);

function NavBarWrapper(){
    return (
        <div className='App'>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default App
