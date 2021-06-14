import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = React.useState("Portfolio")
  function showCurrentPage() {
      if (currentPage === "About") {
        return <About></About>
      }
      if (currentPage === "Portfolio") {
        return <Portfolio></Portfolio>
      }
      if (currentPage === "Contact") {
        return <Contact></Contact>
      }
      if (currentPage === "Resume") {
        return <Resume></Resume>
      }
  }
  return (
    <div>
      <Nav setCurrentPage={setCurrentPage} asdf="asdf"></Nav>
      <main>
        {showCurrentPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;