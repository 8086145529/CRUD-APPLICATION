
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';
import Read from './Components/Read';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      {/* It is mandatory to give : before id in '/update/:id',since it indicates that id is a dynamic value which changes according to the specific ID provided in the URL.if we doesn't give : , the route will only match URLs that exactly match '/update/id'. It will not be able to capture dynamic values. */}
     {/* //On using useParams hook, the key in the object returned by useParams() will match the parameter name you defined in your route,here it is the id in the path and the object returned by useParams() hook should be {id}*/}
      <Route path='/update/:id' element={<Update/>}></Route>
      <Route path='/read/:id' element={<Read/>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
