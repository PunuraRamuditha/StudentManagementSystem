import Layout from "./components/Layout";
import Home from "./pages/Home";
import {Route, Routes} from 'react-router-dom';
import Course from "./pages/Course";
import Student from "./pages/Student";
import Enroll from "./pages/Enroll";
import "./App.css"


function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/page-one' element={<Course />} />
                <Route path='/page-two'  element={<Student />} />
                <Route path='/page-Three'  element={<Enroll/>} />
               
            </Routes>
            
        </Layout>
    );
}

export default App;