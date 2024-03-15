import React, { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Headshot from "./components/introduction/Headshot/Headshot";
import Intro from "./components/introduction/Intro/Intro";
import Skills from "./components/details/Skills/Skills";
import Projects from "./components/details/Projects/Projects";
import Footer from "./components/footer/Footer";
import Overlay from "./components/Overlay/Overlay";

function App() {
  const [overlay, setOverlay] = useState(false);

  const overlayToggleTrue = () => {
    setOverlay(true);
  };

  const overlayToggleFalse = () => {
    setOverlay(false);
  };

    return (
      <>
          <Navbar />
        {(overlay === true) && (
          <Overlay cancel={overlayToggleFalse} />
        )}
        <main className="app">
          <section className="introduction">
            <Headshot className="headshot" />
            <div className="intro-body">
              <Intro/>
              <button className="button" onClick={overlayToggleTrue}>
                Hire Devin
              </button>
            </div>
          </section>
          <section className="details">
            <Skills />
            <Projects />
          </section>
          <section className="footer">
            <Footer />
          </section>
        </main>
      </>
    )
}

export default App;