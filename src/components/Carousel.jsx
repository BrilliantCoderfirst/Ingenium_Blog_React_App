import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselItem = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1566207462754-97c86c31db3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Relationship and community building</h3>
            <p>
              Much like social media platforms, blogs allow people to share
              their thoughts and experiences with others.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?b=1&s=612x612&w=0&k=20&c=_C4iNvLOzKbbfbeTMsJ4mQf8OGQwYWJ8GWKLKRglrF8="
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Would you want to have a blog of your own? Yes!</h3>
            <p>
              Most people today are creating blogs for a variety of reasons.
              Every human being has their own story to tell.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1252684502/photo/professional-blogger-working-on-his-new-post-for-social-media-at-home-closeup-creative.jpg?s=612x612&w=0&k=20&c=VR7V3Hn1HKjMQdykk2zjQ-2Xjsiw3tewZFZMp6swpog="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Want to start a blog on your own?</h3>
            <p>
              Creating your own personal blog takes a few steps. First, you need
              to decide on a name for your blog, also called a domain name.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselItem;
