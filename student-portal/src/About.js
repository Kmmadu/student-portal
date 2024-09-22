import React from "react"
import './About.css'

function About(){
    return(
        <div className="about-body">
              <section class="about-section">
            <div class="about-container"><br/><br/>
                <h1>About StudentHub</h1>
                <p className="par">StudentHub is your ultimate destination for student accommodation, property, and services. We aim to make university life easier and more enjoyable for students across Nigeria.</p>
                
                <h2>Our Mission and Vision</h2>
                <p className="par">Our mission is to provide students with the best possible housing options and services, ensuring a smooth and enjoyable university experience. Our vision is to be the leading student accommodation and service provider in Nigeria and beyond.</p>
                
                <h2>Our History</h2>
                <p className="par">Founded in 2024 by a group of visionary students who had a common goal of solving accommodation problems and creating a hub where students can market their products, buy and sell properties. Since then, StudentHub has grown to become a trusted name in student accommodation and services.</p>
                
                <h2>Meet Our Team</h2>
                <div class="team">
                    <div class="team-member">
                        <div class="content">
                            <img src={process.env.PUBLIC_URL + "/kingsley.jpeg"} alt="CEO Profile" class="profile-image"/>
                            <h3>Mmadubugwu Kingsley</h3>
                            <p className="par">CEO & Co-Founder. Kingsley is a student at Federal Polytechnic Oko, Anambra, currently studying Computer Engineering. He is passionate about solving accommodation challenges for students across Nigeria, drawing from his personal experiences. Kingsley is dedicated to developing innovative solutions that enhance the student housing sector.</p>
                        </div>
                    </div>
                    <div class="team-member">
                        <div class="content">
                            <img src={process.env.PUBLIC_URL + "/stan.jpg"} alt="COO Profile" class="profile-image"/>
                            <h3>Anigbo Obumneme Moses <small>codeAkstan</small></h3>
                            <p className="par">Co-Founder & Backend Dev. Obumneme is a student of  University of Nigeria, Nsukka, currently studying Computer science and statistics.
                                The difficulty in getting accommodations in the university lead to this innovation.</p>
                        </div>
                    </div>
                </div>

                <h2>Our Core Values</h2>
                <p className="par">At StudentHub, we are driven by a set of core values that guide our actions and decisions:</p>
                <ul>
                    <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
                    <li>Excellence: We strive for excellence in everything we do.</li>
                    <li>Innovation: We foster a culture of innovation to continually improve our services.</li>
                    <li>Community: We build a supportive and inclusive community for all students.</li>
                </ul>
                
                <h2>Future Goals</h2>
                <p className="par">We are constantly looking forward to expanding our services and reaching more students. Our future goals include:</p>
                <ul>
                    <li>Expanding our accommodation options to more cities in Nigeria.</li>
                    <li>Introducing new student-focused services and events.</li>
                    <li>Collaborating with universities to enhance student experiences.</li>
                </ul>
            </div>
        </section>

        </div>
    );
}

export default About;