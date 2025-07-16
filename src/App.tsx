// import React from 'react';
// import './App.css';
// import { createTheme, MantineProvider, Divider } from '@mantine/core';
// import '@mantine/core/styles.css';
// import '@mantine/tiptap/styles.css';
// import '@mantine/carousel/styles.css';
// import HomePage from './pages/HomePage';
// import FindJobs from "./pages/FindJobs";
// import Header from './Components/Header/Header';
// import Footer from './Components/footer/Footer';
// import PostJobPage from './Components/LandingPage/PostJobPage';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import PostJob from './Components/PostJob/PostJob';
// import JobDescPage from './pages/JobDescPage';
// import SignUpPage from './pages/SignUpPage';
// import PostedJobPage from './pages/PostedJobPage';
// import Login from './Components/SignUpLogin/Login';
// import Profile from './Components/profile/Profile';


// function App() {
//    const theme = createTheme({
//     focusRing: "never",
//     colors: {
//       'blueblack1': [
//         '#06141B','#06141B','#06141B','#06141B','#06141B',
//         '#06141B','#06141B','#06141B','#06141B','#06141B'
//       ],
//       'blueblack2': [
//         '#11212D','#11212D','#11212D','#11212D','#11212D',
//         '#11212D','#11212D','#11212D','#11212D','#11212D'
//       ],
//       'blueblack3': [
//         '#253745','#253745','#253745','#253745','#253745',
//         '#253745','#253745','#253745','#253745','#253745'
//       ],
//       'bluegrey1': [
//         '#4A5C6A','#4A5C6A','#4A5C6A','#4A5C6A','#4A5C6A',
//         '#4A5C6A','#4A5C6A','#4A5C6A','#4A5C6A','#4A5C6A'
//       ],
//       'bluegrey2': [
//         '#9BA8AB','#9BA8AB','#9BA8AB','#9BA8AB','#9BA8AB',
//         '#9BA8AB','#9BA8AB','#9BA8AB','#9BA8AB','#9BA8AB'
//       ],
//       'bluegrey3': [
//         '#CCD0CF','#CCD0CF','#CCD0CF','#CCD0CF','#CCD0CF',
//         '#CCD0CF','#CCD0CF','#CCD0CF','#CCD0CF','#CCD0CF'
//       ],
//     },
//     fontFamily: 'Poppins, sans-serif',
//     primaryColor:'bluegrey1',
//     primaryShade: 0,
//   })
//   return (
//     <div className="min-h-screen bg-blueblack1 text-bluegrey3 font-sans">
//       <MantineProvider defaultColorScheme='dark' theme={theme}>
//         <BrowserRouter>
//           <Header />
//           <Divider size={"xs"} mx="md" />
//           <Routes>
//             <Route path='/find-jobs' element={<FindJobs />} />
//             <Route path='/jobs' element={<JobDescPage />} />
//             <Route path='/posted-jobs' element={<PostedJobPage/>}/>
//             <Route path='/post-job' element={<PostJobPage/>} />
//             <Route path='/signup' element={<SignUpPage/>}/>
//             <Route path='/login' element={<SignUpPage/>}/>
//             <Route path='/profile' element={<Profile/>}/>
//             <Route path="*" element={<HomePage />} />
//           </Routes>
//           <Footer/>
//         </BrowserRouter>
//       </MantineProvider>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import { createTheme, MantineProvider, Divider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from './pages/HomePage';
import FindJobs from "./pages/FindJobs";
import Header from './Components/Header/Header';
import Footer from './Components/footer/Footer';
import PostJobPage from './Components/LandingPage/PostJobPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostJob from './Components/PostJob/PostJob';
import JobDescPage from './pages/JobDescPage';
import SignUpPage from './pages/SignUpPage';
import PostedJobPage from './pages/PostedJobPage';
import Login from './Components/SignUpLogin/Login';
import Profile from './Components/profile/Profile';


function App() {
   const theme = createTheme({
    focusRing: "never",
    colors: {
      'blueblack1': [
        '#06141B','#06141B','#06141B','#06141B','#06141B',
        '#06141B','#06141B','#06141B','#06141B','#06141B'
      ],
      'blueblack2': [
        '#11212D','#11212D','#11212D','#11212D','#11212D',
        '#11212D','#11212D','#11212D','#11212D','#11212D'
      ],
      'blueblack3': [
        '#253745','#253745','#253745','#253745','#253745',
        '#253745','#253745','#253745','#253745','#253745'
      ],
      'bluegrey1': [
        '#4A5C6A','#4A5C6A','#4A5C6A','#4A5C6A','#4A5C6A',
        '#4A5C6A','#4A5C6A','#4A5C6A','#4A5C6A','#4A5C6A'
      ],
      'bluegrey2': [
        '#9BA8AB','#9BA8AB','#9BA8AB','#9BA8AB','#9BA8AB',
        '#9BA8AB','#9BA8AB','#9BA8AB','#9BA8AB','#9BA8AB'
      ],
      'bluegrey3': [
        '#CCD0CF','#CCD0CF','#CCD0CF','#CCD0CF','#CCD0CF',
        '#CCD0CF','#CCD0CF','#CCD0CF','#CCD0CF','#CCD0CF'
      ],
    },
    fontFamily: 'Poppins, sans-serif',
    primaryColor:'bluegrey1',
    primaryShade: 0,
  })
  return (
    <div className="min-h-screen bg-blueblack1 text-bluegrey3 font-sans">
      <MantineProvider defaultColorScheme='dark' theme={theme}>
        <BrowserRouter>
          <Header />
          <Divider size={"xs"} mx="md" />
          <Routes>
            <Route path='/find-jobs' element={<FindJobs />} />
            <Route path='/jobs' element={<JobDescPage />} />
            <Route path='/posted-jobs' element={<PostedJobPage/>}/>
            <Route path='/post-job' element={<PostJobPage/>} />
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path='/login' element={<SignUpPage/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
