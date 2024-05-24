import React, { useEffect, useState, useRef } from "react";
import "../Style/Home.css";
import Contact from "../Home/Contact"
import Header from "../Layout/Header"

import { Link, useLocation } from "react-router-dom";
import cleaning from "../assets/image/Cleaning.png"

const Home = () => {
  

  return (
    <>
<section class="hero" id="hero">
  <div class="container-lg">
    <div class="row align-items-center">
      <div class="col-sm-6">
        <h1 class="display">Kalikshine Service Private Limited</h1>
        <p>Your trusted partner for top-notch cleaning services. We specialize in carpet cleaning, sofa cleaning, curtain washing, room cleaning, and galaicha cleaning. Experience the difference with our professional and eco-friendly cleaning solutions.</p>
        <br></br>
        <button class="btn btn-outline-dark btn-lg" href="/services'">  <a class="nav-link" href="#services">our Services</a></button>
      </div>
      <div class="col-sm-6 text-center">
        <img src={cleaning} class="img-fluid" alt="Cleaning Services"></img>
      </div>
    </div>
  </div>
</section>


<section class="services" id="services">
  <div class="container">
    <h2 class="display-5 fw-bold mb-4">Our Services</h2>
    <div class="row">
      <div class="col-lg col-sm-6 mt-4">
        <div class="card">
          <i class="bi bi-house-door-fill"></i>
          <div class="card-body">
            <h5 class="card-title fw-bold">Carpet Cleaning</h5>
            <p class="card-text">Our professional carpet cleaning service ensures that your carpets are thoroughly cleaned, removing dirt, stains, and allergens to leave them looking fresh and new.</p>
          </div>
        </div>
      </div>
      <div class="col-lg col-sm-6 mt-4">
        <div class="card">
          <i class="bi bi-couch-fill"></i>
          <div class="card-body">
            <h5 class="card-title fw-bold">Sofa Cleaning</h5>
            <p class="card-text">We provide deep cleaning for your sofas, removing dust, stains, and odors to enhance the comfort and appearance of your furniture.</p>
          </div>
        </div>
      </div>
      <div class="col-lg col-sm-6 mt-4">
        <div class="card">
          <i class="bi bi-cloud-rain-fill"></i>
          <div class="card-body">
            <h5 class="card-title fw-bold">Curtain Washing</h5>
            <p class="card-text">Our curtain washing service carefully cleans your curtains, ensuring they are free from dust, allergens, and dirt, while maintaining their quality and color.</p>
          </div>
        </div>
      </div>
      <div class="col-lg col-sm-6 mt-4">
        <div class="card">
          <i class="bi bi-broom-fill"></i>
          <div class="card-body">
            <h5 class="card-title fw-bold">Room Cleaning</h5>
            <p class="card-text">Our comprehensive room cleaning service covers every aspect of cleaning, from dusting and vacuuming to sanitizing surfaces, leaving your space spotless.</p>
          </div>
        </div>
      </div>
      <div class="col-lg col-sm-6 mt-4">
        <div class="card">
          <i class="bi bi-grid-fill"></i>
          <div class="card-body">
            <h5 class="card-title fw-bold">Galaicha Cleaning</h5>
            <p class="card-text">Specializing in galaicha (rug) cleaning, we ensure that your rugs are meticulously cleaned, preserving their beauty and extending their lifespan.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="about" id="about">
  <div class="container">
    <h2 class="display-5 fw-bold mb-4">About Us</h2>
    <p>Welcome to Kalikshine Service Private Limited, your trusted partner for all your cleaning needs. We specialize in providing top-notch cleaning services including carpet cleaning, sofa cleaning, curtain washing, room cleaning, and galaicha (rug) cleaning. Our experienced team is dedicated to delivering exceptional results, ensuring that every corner of your home or office shines with cleanliness.</p>
    <p>At Kalikshine, we believe in the power of a clean environment to enhance your quality of life. Our mission is to offer reliable, efficient, and eco-friendly cleaning solutions tailored to your specific needs. We use state-of-the-art equipment and environmentally friendly products to ensure the safety and well-being of your family and pets.</p>
    <p>What sets us apart is our commitment to customer satisfaction. We take pride in our attention to detail, professionalism, and the personalized service we provide to each of our clients. Trust Kalikshine Service Private Limited to keep your spaces spotless and fresh.</p>
  </div>
</section>



{/* 
<section class="testimonials" id="testimonials">
  <div class="container">
    <h2 class="display-5 fw-bold mb-4">Testimonials</h2>
    <div id="carouselExample" class="carousel slide carousel-dark carousel-fade">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis orci enim, ac
            auctor ex iaculis ut. Mauris ut elit mi. Sed nec quam bibendum, congue augue ut, molestie
            tellus. Fusce vel semper dolor." </p>
          <h5>John Doe</h5>
        </div>
        <div class="carousel-item">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at tortor a massa facilisis
            venenatis sit amet non libero. Etiam vel sem venenatis tellus laoreet feugiat eu in mi."
          </p>
          <h5>June Doe</h5>
        </div>
        <div class="carousel-item">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non metus eu sem ultrices
            tincidunt sit amet ac nisi. In hac habitasse platea dictumst. Aliquam pellentesque diam non
            eros feugiat maximus." </p>
          <h5>Johnny Doe</h5>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section> */}
   <Contact />




    </>
  );
};

export default Home;
