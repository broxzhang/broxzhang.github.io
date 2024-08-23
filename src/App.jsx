import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { ThemeProvider } from "./Context.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern-light bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          {/* <About /> */}
          <Experience />
          <Tech />
          {/* <Works />
          <Feedbacks /> */}
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>

      </ThemeProvider>

    </BrowserRouter>
  );
}

export default App;