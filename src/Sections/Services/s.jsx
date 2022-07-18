import gsap from "gsap";
import { useEffect,useState, useRef } from "react";
import styled from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tube from "../../assets/37089-5-headphones-transparent-background.png";
import Cone from "../../assets/16-green-book-png-image-image.png";

import neuraltone11 from "../../assets/neuraltone11.gif";

import admin from "../../assets/erp-admin.png";
import student from "../../assets/erp-student.png";
import teacher from "../../assets/erp-teacher.png";
import TextBlock from "../../components/TextBlock";
import TextBlock1 from "../../components/TextBlock1";
import SvgBlock from "../../components/SvgBlock";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled as styled1 } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


// const TextBlock = lazy(() => import("../../components/TextBlock"));
// const SvgBlock = lazy(() => import("../../components/SvgBlock"));

const ServiceSection = styled.section`
  width: 100vw;
  
  /* background-color: #0a0b10; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 80vw;
`;
const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
    height: 80vw;
  position: relative;
  /* z-index: 10; */
  svg {
    width: 80vw;
    height: 25rem;
  }
  @media only Screen and (max-width: 48em) {
    svg {
      width: 60%;
      height: auto;
    }
  }
`;
const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  z-index: -1;
  background-color: #0a0b10;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;
const MobileSvg = styled.img`
  
  width: 100%;
  height: auto;
 
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: 100%;
    
  }
  @media only Screen and (max-width: 40em) {
    display: none;
    width: 100%;
  }
`;
const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;


const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  /* margin-bottom: 10rem; */
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /* z-index: 1; */

  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const BootstrapDialog = styled1(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Services = () => {
  const [open, setOpen] =useState(false);
  const [open1, setOpen1] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const element = ref.current;
    ////
    const mq = window.matchMedia("(max-width: 48em)");
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),

        start: "top top+=180",

        end: "bottom bottom",

        pin: element,
        pinReparent: true,
      },
    });
    t1.fromTo(
      document.getElementById("line"),

      {
        height: "15rem",
      },
      {
        height: "3rem",
        duration: 2,
        scrollTrigger: {
          trigger: document.getElementById("line"),
          start: "top top+=180",

          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    revealRefs.current.forEach((el, index) => {
      // console.log(el.childNodes);
      if (mq.matches) {
        t1
        .from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top top+=180",

              end: "bottom bottom",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top top+=180",

              end: "bottom bottom",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=30",
                end: "center top+=10",
                scrub: true,
              },
            }
          );
      } 
      else {
        t1
        .from(                                    ///// animation
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=200",
              end: "bottom bottom-=300",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center-=300",
              end: "bottom center-=300",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=200",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  return (
    <ServiceSection id="services">
      <Background ref={ref}>
        <Title className="title">Our Projects</Title>
        {/* <Line id="line" />
        <Triangle id="triangle" /> */}
      </Background>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Design"
          title={<h1>Neuraltone is a research tool</h1>}
          subText={
            <h5>
             
              <div>
      <Button variant="text" onClick={handleClickOpen}>
        More Detail
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" >
          <h2>
        Neuraltone
        </h2>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Neuraltone is a research tool developed with Center for the Neural Basis of Cognition, Carnegie Mellon University to study human's involuntary learning to different stimuli. 
          It is designed as a video game to guise the research nature of the project to the participants.
          
         
          </Typography>
          <Typography gutterBottom>
          This tool is highly configurable and offers different levels of access control and edit control based on permissions. 
          </Typography>
          <Typography gutterBottom>
          Admins can create entire new games inside the system on a backend, and participants can access that via special code. 
          For every action, for every mouse movement and button click, we log that event in the database which is then used for analysis.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
            </h5>
          }
        />
        {/* <OBJ>
          <img src={Tube} alt="Tube Object" width="400" height="400" />
        </OBJ> */}
        
        <Carousel className="MobileSvg"
         autoPlay={true} 
         interval={3000}
         dynamicHeight={true}
          showThumbs={false}
           infiniteLoop={true}
           showStatus={false}
           width="80vw" height="25rem" 
            >
                <div>
                <img src={neuraltone11} alt="Cone Object"  />
                </div>
                {/* <div>
                <img src={neuraltone1} alt="Cone Object" width="100%" height="100%"  />
                </div> */}
                {/* <div>
                <img src={neuraltone2} alt="Cone Object" width="100%" height="100%" />
                </div> */}
                
            </Carousel>
      </Content>
      <Content ref={addToRefs}>
      <TextBlock
          // topic="React js"
          title={<h1> Enterprise Resource Planning</h1>}
          subText={
            <h5>
            
              <div>
      <Button variant="text" onClick={handleClickOpen1}>
        More Detail
      </Button>
      <BootstrapDialog
        onClose={handleClose1}
        aria-labelledby="customized-dialog-title"
        open={open1}
      >
        <BootstrapDialogTitle id="customized-dialog-title" >
        <h2>
        Enterprise resource planning (ERP)
        </h2>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          ERP is defined as the ability to deliver an integrated suite of business applications. 
          ERP tools share a common process and data model, covering broad and deep operational end-to-end processes, 
          such as those found in finance, HR, distribution, manufacturing, service and the supply chain.

          </Typography>
          <Typography gutterBottom>
          ERP applications automate and support a range of administrative and operational business processes across multiple industries, 
          including line of business, customer-facing, administrative and the asset management aspects of an enterprise. 
          ERP deployments are complex and expensive endeavors, and some organizations struggle to define the business benefits.
          </Typography>
          <Typography gutterBottom>
          Look for business benefits in four areas: a catalyst for business innovation, a platform for business process efficiency, 
          a vehicle for process standardization, and IT cost savings. Most enterprises focus on the last two areas, because they are the easiest to quantify.
           However, the first two areas often have the most significant impact on the enterprise.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose1}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
            </h5>
          }
        />
        <Rb id="svgBlock"></Rb>
       <Carousel className="MobileSvg"
         autoPlay={true} 
         interval={3000}
         dynamicHeight={true}
          showThumbs={false}
           infiniteLoop={true}
           showStatus={false}
           width="80vw" height="80vw"
            
            >
                <div>
                <img src={admin} alt="admin" />
                </div>
                <div>
                <img src={teacher} alt="teacher"  />
                </div>
                <div>
                <img src={student} alt="student" />
                </div>
            </Carousel>
       
      </Content>
      <Content>
        <TextBlock1
          topic="Support"
          title={<h1>We provide support 24x7</h1>}
          subText={
            <h5 >
              Once your system is online, we will stay on hand to help you use
              it and provide technical support and mainten your
              business
            </h5>
          }
        />
        {/* <OBJ>
          <img src={Capsule} alt="Capsule Object" width="400" height="400" />
        </OBJ> */}
        <SvgBlock svg="giphy1.gif" />
      </Content>
    </ServiceSection>
  );
};

export default Services;





