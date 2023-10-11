// eslint-disable-next-line no-unused-vars
import React  from 'react'
import NavBar from "./components/navbar/NavBar.jsx";
import Jobs from "./components/jobDiv/Jobs.jsx";
import Search from "./components/searchDiv/Search.jsx";
import Value from "./components/valueDiv/Value.jsx";
import Footer from "./components/footerDiv/Footer.jsx";

function App() {

  return (
    <div className='w-[85%] m-auto bg-white'>
        <NavBar />
        <Search />
        <Jobs />
        <Value />
        <Footer />
    </div>
  )
}

export default App
