import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Home() {
  return (
    <Jumbotron>
      <div>
        <section className="site-banner">
          <div className="banner-area">
            <div className="author text-center">
              <div className="author-img"></div>
              <h1 className="text-white font-staat font-size-50 text-uppercase py-3">
                Sarah Salvini
              </h1>
              <h2 className="text-white font-ram font-size-40">
                Software Engineer Intern
              </h2>
            </div>
          </div>
        </section>
      </div>
    </Jumbotron>
  );
}

export default Home;
