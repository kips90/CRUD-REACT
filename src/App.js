import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SingleBlog from './pages/SingleBlog';
import AddBlog from './pages/AddBlog';

function App() 
{


  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/> } > 
       <Route index element={<Home />} />
       <Route path='about' element={<About />} />
       <Route path='addblog' element={<AddBlog />} />

       <Route path='blogs/:id' element={<SingleBlog />} />
       <Route path='contact' element={<Contact />} />
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
