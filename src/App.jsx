import { HashRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Header from "./components/essentials/Header"
import Footer from "./components/essentials/Footer"
import SingleCourseView from './pages/SingleCourseView';
import AllCourseView from './pages/AllCourseView';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import RedirectToVideoWithID from './pages/RedirectToVideoWithID';

function App(props) {
  return (
    <div className="App">
        <HashRouter> {/* ADD RECOMMENDED WATCHES PER WEEK TO SUCCEED THROUGHOUT THE YEAR */}
          <Header ASAPMessage={props.ASAPMessage} GeneralMessage={props.GeneralMessage}/>
            <main>
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/fag' element={<AllCourseView />} />
                <Route path='/sok' element={<Search />} />
                <Route path='/spesifikt-fag/:fag/:kategori/:video' element={<SingleCourseView />} />
                <Route path='/spesifikt-fag-id/:id' element={<RedirectToVideoWithID />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
          <Footer />
        </HashRouter>
    </div>
  );
}

export default App;
