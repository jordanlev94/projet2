import Particles from 'react-particles-js';


<Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 8,
	            "density": {
	                "enable": true,
	                "value_area": 700
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	                "circle"
	            ],
	            "image": [
	                {
	                    "src": "/react.cd2ab268.svg",
	                    "height": 40,
	                    "width": 43
	                },
	                {
	                    "src": "/k8s.2d579d24.svg",
	                    "height": 40,
	                    "width": 40
	                },
	                {
	                    "src": "/code.b3b4c4f4.png",
	                    "height": 30,
	                    "width": 30
                    }
                    ,
	                {
	                    "src": "./",
	                    "height": 20,
	                    "width": 20
	                }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 40,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 50,
	                "size_min": 20,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
    