import React from 'react';
import '../homepage/homepage.styles.scss';
import Directory from '../../components/directory/directory.component';


const HomePage = () => (
  <div className='homepage'>
    <section class="slideshow">
      <div class="slideshow-slide">
        <div class="slideshow-content">
          <h2>Slide 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta unde beatae ratione quos cupiditate ullam quas nam, incidunt quia qui?</p>
        </div>
        <img className='slide-image'
          src={require("../../assets/banner1.jpg")} alt="">
        </img>
      </div>

      <div class="slideshow-slide">
        <div class="slideshow-content">
          <h2>Slide 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta unde beatae ratione quos cupiditate ullam quas nam, incidunt quia qui?</p>
        </div>
        <img className='slide-image'
          src={require("../../assets/banner2.jpg")} alt="">
        </img>
      </div>

      <div class="slideshow-slide">
        <div class="slideshow-content">
          <h2>Slide 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta unde beatae ratione quos cupiditate ullam quas nam, incidunt quia qui?</p>
        </div>
        <img className='slide-image'
          src={require("../../assets/banner3.jpg")} alt="">
        </img>
      </div>

    </section>

    {/* <h1>Welcome to my Homepage</h1> */}
    <div className='directory-menu'>
      <Directory />
    </div>

    {/* <!--footer--> */}
        <footer className="footer">
            <div class="footer-heading">
                <h3 class="">
                    More Info
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta unde beatae ratione quos cupiditate ullam quas nam, incidunt quia qui?</p>
            </div>
            
            
            <div className="footer-heading">
                <h3 class="">
                    Clothes Store
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta unde beatae ratione quos cupiditate ullam quas nam, incidunt quia qui?</p>

            </div>
        </footer>
{/* --end of footer--> */}




  </div>
);
export default HomePage;

