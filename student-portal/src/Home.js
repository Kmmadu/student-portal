import React from 'react';

function Home() {
  return (
    <div className='main'>

      <section className="hero">
        <div className="overlay">
          <h1>Welcome to StudentHub</h1>
        </div>
      </section>
      <section class="welcome-section">
        <div class="container">
          <div class="grid">
            <div class="text-box">
              <h1>Welcome to StudentHub</h1>
              <p>StudentHub is your one-stop platform for finding the perfect student accommodation, whether you're looking to rent, buy, or find essential services. Our mission is to make your university experience smooth and enjoyable by providing verified listings and reliable service providers.</p>
            </div>
            <div class="image-box">
              <img src={process.env.PUBLIC_URL + "/welcome.png"}
                alt="Welcome to StudentHub"
                className="responsive" />
            </div>
          </div>
        </div>
      </section>
      {/* Explore Section  */}
      <section class="explore-section" id='explore-services'>
        <div class="container">
          <div class="text-box">
            <h1>Explore Our Services</h1>
            <p>At StudentHub, we provide a comprehensive platform to cater to all your student needs. Discover our wide range of services:</p>
          </div>
          <div class="image-container">
            <div class="explore-box">
              <img src={process.env.PUBLIC_URL + "/book_accommodation.jpg"} alt="Accommodation Booking" />
              <h3>Accommodation Booking</h3>
              <p class="service-description">Find and book your ideal student accommodation effortlessly.</p>

            </div>
            <div class="explore-box">
              <img src={process.env.PUBLIC_URL + "/buy_sell.jpg"} alt="Buy/Sell Properties" />
              <h3>Buy/Sell Properties</h3>
              <p class="service-description">Engage in buying or selling properties tailored to student needs.</p>

            </div>
            <div class="explore-box">
              <img src={process.env.PUBLIC_URL + "/student_service.png"} alt="Student Services" />
              <h3>Student Services</h3>
              <p class="service-description">Access a variety of student-specific services, from beauty and grooming to catering.</p>

            </div>
            <div class="explore-box">
              <img src={process.env.PUBLIC_URL + "/local_experiences.jpg"} alt="Local Experiences" />
              <h3>Local Experiences</h3>
              <p class="service-description">Explore and enjoy local attractions and experiences around your university.</p>

            </div>
          </div>
        </div>
      </section>
      {/* <!-- Why Choose Us Section --> */}
        <section class="why-choose-us">
            <div class="container">
                <h2>Why Choose StudentHub?</h2>
                <div class="grid">
                    <div class="info-box">
                        <img src={process.env.PUBLIC_URL + "/easy-search.jpg"} alt="Easy Search"/>
                        <h3>Easy Search</h3>
                        <p>Our user-friendly platform allows you to easily search for accommodation that fits your preferences and budget. Filter by location, type, and amenities to find your ideal place.</p>
                    </div>
                    <div class="info-box">
                        <img src={process.env.PUBLIC_URL + "/verified-listings.jpg"} alt="Verified Listings"/>
                        <h3>Verified Listings</h3>
                        <p>We ensure that all our property listings are verified, providing you with accurate and trustworthy information so you can make informed decisions.</p>
                    </div>
                    <div class="info-box">
                        <img src={process.env.PUBLIC_URL + "/student-support.jpg"} alt="Student Support"/>
                        <h3>Student Support</h3>
                        <p>Our dedicated support team is here to help you every step of the way, from finding accommodation to settling in and accessing essential services.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- FAQ Section --> */}
        <section id="info-section" class="info-section">
            <h2>FAQ</h2>
            <div class="container grid">
                <div class="info-box">
                    <h3>What accommodation options are available?</h3>
                    <p>We offer a range of accommodation options to suit your needs. Whether you're looking for shared homes or entire apartments, we have flexible options designed to fit your preferences and budget.</p>
                </div>
                <div class="info-box">
                    <h3>How quickly can I book a home?</h3>
                    <p>We have streamlined the entire booking process to make it as quick and efficient as possible. You can find and rent your future home in just a few clicks, allowing you to move in within minutes rather than days.</p>
                </div>
                <div class="info-box">
                    <h3>Are the listings verified?</h3>
                    <p>Yes, all our listings are verified to ensure you receive accurate and trustworthy information. We take pride in providing reliable property details to help you make informed decisions.</p>
                </div>
            </div>
        </section>
        {/* <!-- Newsletter Signup Section --> */}
        <section class="newsletter">
            <div class="container">
                <h2>Stay Updated</h2>
                <p>Subscribe to our newsletter for the latest updates on student accommodations and services.</p>
                <form>
                    <input type="email" placeholder="Enter your email" required/>
                    <button type="submit" className='but'>Subscribe</button>
                </form>
            </div>
        </section>
      
    </div>
  );
}

export default Home;
