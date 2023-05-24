// import React from 'react';
// import Slider from 'react-slick';
// import "./slideshow.css";
// import image1 from "./image1.jpg"
// import image2 from "./image2.jpg"
// import image3 from "./image3.jpg"

// function Carousel() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <div>
//       <h2>Carousel Example</h2>
//       <Slider {...settings}>
//         <div>
//           <img className="image" src={image1} alt="Image 1" />
//         </div>
//         <div>
//           <img className="image" src={image2} alt="Image 2" />
//         </div>
//         <div>
//           <img  className="image" src={image3} alt="Image 3" />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default Carousel;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slideshow.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <h2>Carousel Example</h2>
      <Slider {...settings}>
        <div>
          <img className="image" src={image1} alt="Image 1" />
        </div>
        <div>
          <img className="image" src={image2} alt="Image 2" />
        </div>
        <div>
          <img className="image" src={image3} alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
