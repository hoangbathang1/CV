
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './pages/about/About';

import { Navigate} from 'react-router-dom';

import Layout from './components/Layout/Layout';

import 'reflect-metadata';
import SKillPage from './pages/skill/SKillPage';
import Chinhsuainfor from './components/ChinhSua/Chinhsuainfor';



function App() {
 
  
  return (
    <Router>
      
      <Layout></Layout>
  

      
      <Routes>
       
        <Route  path='/home/:id' element={<About></About>} />
        <Route  path='/skill/:id/:id1' element={<SKillPage></SKillPage>} />
        <Route  path='/chinhsua/:id' element={<Chinhsuainfor></Chinhsuainfor>} />
        <Route
        path="*"
        element={<Navigate to="/home/lylich" replace />}/>
      </Routes>

      
      
    </Router>
   
  );
}

export default App;
