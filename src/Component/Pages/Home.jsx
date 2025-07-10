// import React, { useEffect } from "react";

// const Home = () => {

//   // useEffect(() => {
//   //   const carousel = document.querySelector("#carouselExampleControls");
//   //   if (carousel) {
//   //     new window.bootstrap.Carousel(carousel, {
//   //       interval: 3000, // Adjust the interval if needed
//   //       ride: "carousel",
//   //     });
//   //   }
//   // }, []);

//   return (
//     <>

//       {/* <CustomNavbar /> */}
//       <div className="home">
//         <div className="row">

//           <div
//             id="carouselExampleControls"
//             className="carousel slide"
//             data-bs-ride="carousel"
//           >
//             <div className="carousel-inner">
//               <div
//                 className="carousel-item active slide-1"
//                 data-bs-interval="3000"
//               ></div>
//               <div
//                 className="carousel-item sakrat"
//                 data-bs-interval="3000"
//               ></div>
//               <div
//                 className="carousel-item slide-2"
//                 data-bs-interval="3000"
//               ></div>
//               <div
//                 className="carousel-item slide-3"
//                 data-bs-interval="3000"
//               ></div>
//               <div
//                 className="carousel-item slide-4"
//                 data-bs-interval="3000"
//               ></div>
//             </div>

//             <button
//               className="carousel-control-prev"
//               type="button"
//               data-bs-target="#carouselExampleControls"
//               data-bs-slide="prev"
//             >
//               <span
//                 className="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button
//               className="carousel-control-next"
//               type="button"
//               data-bs-target="#carouselExampleControls"
//               data-bs-slide="next"
//             >
//               <span
//                 className="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import Imge1 from "../../asset/img/Home/Hero-Banner-Ghee.png";
import Imge2 from "../../asset/img/Home/Hero Banner-two.png";
import Imge3 from "../../asset/img/Home/Hero-Banner-three.png";
import Imge4 from "../../asset/img/Home/Hero-Banner-one.png";
import Imgeeres1 from "../../asset/img/Home/Hero-Banner-Ghee-mobile.png";
import Imgeeres2 from "../../asset/img/Responsive/Mobile_screen-two.png";
import Imgeeres3 from "../../asset/img/Responsive/Mobile_screen-three.png";
import Imgeeres4 from "../../asset/img/Responsive/Mobile_screen-one.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Home = () => {
  
  useEffect(() => {
    const carousel = document.querySelector("#carouselExampleControls");
    if (carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 3000, // Adjust the interval if needed
        ride: "carousel",
      });
    }
  }, []);
  return (
    <>
      <div className="home">
        <div className="row">
          <div
            id="carouselExampleControls"
            className="carousel slide header-carousel"
            data-bs-ride="carousel"
            // data-bs-interval="3000"
            data-bs-pause="false" // Set this to false to avoid pausing
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <picture>
                  <source media="(max-width: 768px)" srcSet={Imgeeres1} />
                  <source media="(max-width: 1024px)" srcSet={Imgeeres1} />
                  <img src={Imge1} className="d-block w-100" alt="Slide 1" />
                </picture>
              </div>
              <div className="carousel-item">
                <picture>
                  <source media="(max-width: 768px)" srcSet={Imgeeres2} />
                  <source media="(max-width: 1024px)" srcSet={Imgeeres2} />
                  <img src={Imge2} className="d-block w-100" alt="Slide 1" />
                </picture>
              </div>
              <div className="carousel-item">
                <picture>
                  <source media="(max-width: 768px)" srcSet={Imgeeres3} />
                  <source media="(max-width: 1024px)" srcSet={Imgeeres3} />
                  <img src={Imge3} className="d-block w-100" alt="Slide 1" />
                </picture>
              </div>
              <div className="carousel-item">
                <picture>
                  <source media="(max-width: 768px)" srcSet={Imgeeres4} />
                  <source media="(max-width: 1024px)" srcSet={Imgeeres4} />
                  <img src={Imge4} className="d-block w-100" alt="Slide 1" />
                </picture>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              {/* <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              >
              </span> */}
              <BsChevronLeft className="text-dark fs-1" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              {/* <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span> */}
<BsChevronRight className="text-dark fs-1" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
