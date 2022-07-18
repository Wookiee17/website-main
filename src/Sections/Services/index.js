import gsap from "gsap";
import { useEffect,useState, useRef } from "react";
import styled from "styled-components";
import neuraltone11 from "../../assets/neuraltone11.gif";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tube from "../../assets/3dtube.png";
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";
import PropTypes from 'prop-types';
import admin from "../../assets/erp-admin.png";
import student from "../../assets/erp-student.png";
import teacher from "../../assets/erp-teacher.png";
import Button from '@mui/material/Button';
import { styled as styled1 } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";
import TextBlock1 from "../../components/TextBlock1";
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
  padding-top: 30rem;
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

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 3rem;
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
const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22rem;
    height: 22rem;
  position: relative;
  /* z-index: 10; */
  svg {
    width: 80vw;
    height: 80vw;
  }
  @media only Screen and (max-width: 40em) {
    svg {
      width: 4rem;
      height: auto;
    }
    }
  @media only Screen and (max-width: 48em) {
    svg {
      width: 8rem;
      height: auto;
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
          start: "top top+=200",
          end: "bottom top+=220",
          scrub: true,
        },
      }
    );

    revealRefs.current.forEach((el, index) => {
      // console.log(el.childNodes);
      if (mq.matches) {
        t1.from(
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
              end: "bottom bottom-=100",
              scrub: true,
              // snap: true,
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
              start: "top center",
              end: "bottom center",
              scrub: true,
              // snap: true,

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
                // snap: true,
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
                start: "top top+=300",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      } 
      else {
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
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: true,
              // snap: true,
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
              start: "top center",
              end: "bottom center",
              scrub: true,
              // snap: true,

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
                // snap: true,
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
          'Neuraltone' is a research tool developed with the support of Carnegie Mellon
University's Center for Neurological Cognition and Behaviour.
          
         
          </Typography>
          <Typography gutterBottom>
          The intention is to collect data while maintaining the illusion that the entire
experience is a game. This software calculates passive auditory learning for the
player and collects and analyzes every action they make. This software also adheres
to GDP regulations, as it compiles every player's data.

          </Typography>
          <Typography gutterBottom>
          Essentially, this is a really cool piece of technology that lets experimenters change all
the game parameters and the game stimuli independently for a particular use case.
In addition, different experimenters can run their experiments using their own 
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
       <Rb >
       <Carousel 
         autoPlay={true} 
         interval={3000}
         
         dynamicHeight={true}
          showThumbs={false}
           infiniteLoop={true}
           showStatus={false}
          
           swipeable={1}
           
           
            >
                <div>
                <img src={neuraltone11} alt="Cone Object"  />
                </div>
               
                
            </Carousel>
            </Rb>
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Develop"
          title={<h1>Enterprise Resource Planning</h1>}
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
          Several schools are currently using the &#39;School Portal&#39;. It is a web-based portal
system that students can use to look at their courses, notifications, exam schedules,
apply for leave, ETc. Essentially, it is a one-stop-shop for all their interactions with
the school.

          </Typography>
          <Typography gutterBottom>
          Parents can ask questions to teachers, view marks, upcoming tests, and chat with
other parents. Besides posting tests, exam schedules, links to extra videos, class
notes, and checking student attendance, teachers can also post exam marks on this
site. Administrators can add new teachers, promote existing ones, provide transfer
certificates to outgoing students, and view students' records. The school system has
become much more efficient since implementing this program.
          </Typography>
          <Typography gutterBottom>
         
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
        
        <Rb >
       <Carousel 
         autoPlay={true} 
         interval={3000}
         dynamicHeight={true}
          showThumbs={false}
           infiniteLoop={true}
           showStatus={false}
           swipeable={1}
           useKeyboardArrows ={1} 
           
            
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
            </Rb>
      </Content>
<<<<<<< Updated upstream
=======
      {/* <Content ref={addToRefs} >
        <TextBlock
        
          topic="Design"
          title={<h1>Nearbuy Food Ordering App</h1>}
          subText={
            <h5>
             <div>
      <Button variant="text" onClick={handleClickOpen2}>
        More Detail
      </Button>
      <BootstrapDialog
        
        onClose={handleClose2}
        aria-labelledby="customized-dialog-title"
        open={open2}
      >
        <BootstrapDialogTitle id="customized-dialog-title" >
          <h2>
          Food Ordering App
        </h2>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          &#39;Nearbuy Food Ordering App&#39; allows customers to discover, buy, and save with
sellers closest to them (hence the name, near-buy). However, developing this type of
software requires much geographical data.
          
         
          </Typography>
          <Typography gutterBottom>
          Consequently, we developed a simple food ordering app that shows you food places
nearby, similar to Uber Eats/ Zomato/ Yelp. Our primary aim was to create an ability
to process large amounts of data in real-time. Like, Apache Storm, for instance, is a
real-time distributed tool that processes data streams in real-time.
          </Typography>
          <Typography gutterBottom>
         
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose2}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
            </h5>
          }
        />
       <Rb >
       <Carousel 
         autoPlay={true} 
         interval={3000}
         
         dynamicHeight={true}
          showThumbs={false}
           infiniteLoop={true}
           showStatus={false}
          
           swipeable={1}
           
           
            >
                <div>
                <img src={stream1} alt="Cone Object" width="500" height="600" />
                </div>
                <div>
                <img src={stream2} alt="Cone Object" width="500" height="600" />
                </div>
               
                
            </Carousel>
            </Rb>
      </Content> */}
>>>>>>> Stashed changes
      <Content>
        <TextBlock1
          topic="Support"
          title={<h1>We provide support 24x7</h1>}
          subText={
            <h5>
              Once your system is online, we will stay on hand to help you use it, provide technical
support, and maintain your business. So if you think we might be a match, apply
now, and let's chat!
            </h5>
          }
        />
        
        <SvgBlock svg="giphy1.gif" />
      </Content>
    </ServiceSection>
  );
};

export default Services;
