import { Router, RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/router/router.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import NavigationBar from './components/navbar/navbar.js'
function App() {
  return (
    <div className="App">
    <NavigationBar></NavigationBar>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
