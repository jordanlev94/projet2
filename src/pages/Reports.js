import React from "react";

import Particles from "react-particles-js";

function Reports() {
  
  return (
    <div>
      <div id='welcome' > Test </div>
      <Particles
        id="particles-js"
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 500,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 3,
              out_mode: "out",
            },
            shape: {
              type: ["image"],
              image: [
                {
                  src: "/images/images1.gif",
                  height: 205,
                  width: 330,
                },
                {
                  src: "/images/images2.gif",
                  height: 205,
                  width: 330,
                },
                {
                  src: "/images/images3.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images4.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images5.gif",
                  height: 205,
                  width: 330,
                },
                {
                  src: "/images/images6.gif",
                  height: 205,
                  width: 330,
                },
                {
                  src: "/images/images7.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images8.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images9.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images10.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images11.gif",
                  height: 207,
                  width: 329,
                },
                {
                  src: "/images/images12.gif",
                  height: 207,
                  width: 329,
                },
              ],
            },
            color: {
              value: "#f0f7ff",
            },
            size: {
              value: 70,
              random: false,
              anim: {
                enable: true,
                speed: 3,
                size_min: 5,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
    </div>
  );
}

export default Reports;
