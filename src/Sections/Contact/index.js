import React, { useState, useEffect } from "react";
import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedId from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;


const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
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
const Title1 = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-left:1rem;
  margin-bottom: 1rem;
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
    
  }
`;
const Contacts = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 3rem;
  margin-left:2rem;
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
    // border-bottom: 2px solid var(--pink);
  }
`;
const Icons1 = styled.div`
margin-top:2rem ;
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    resize: none;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;
const Contact = () => {
  
  
  const [email, setemail] = useState();
  const [Name, setName] = useState();
  const [Message, setMessage] = useState();
  const data = {
   
    email:email,
    name:Name,
    message: Message
 
  }
  
  const sendData = (e) => {
    e.target.reset();
    e.preventDefault();
  
      axios
        .post("https://oxdw4mjwm0.execute-api.ap-south-1.amazonaws.com/prod/simple",data )
        .then((response) => {
          console.log("working")
        })
        .catch((error) => {
          if (error.response) {
           console.log("error")
          }
        });
  
  };
  const notify = () => 
  {
    
  toast.success('Thanks for contacting us', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    }
    
    );
  }
  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      
        
        {/* <Title1>By Phone</Title1> */}
        {/* <Contacts>
        <div >
          <p class="desc">
          <small>(Monday to Friday, 9am to 6pm PST)</small>
          <br/>
          <Icons1>
          
          
          &ensp;&ensp;project.cworks@gmail.com
          </Icons1>
          <Icons1>
          &ensp;&ensp;&ensp;&ensp;&ensp;Ph &ensp; +14126287281
          </Icons1>
          </p>
        </div>
        </Contacts> */}
    
      <Icons>
        <a href="https://www.facebook.com/profile.php?id=100077678884545 " target="_blank">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/company/cloven-works/about/" target="_blank">
          <img src={LinkedId} alt="LinkedId" />
        </a>
        <a href="https://twitter.com/ClovenWorks" target="_blank">
          <img src={Twitter} alt="Twitter" />
        </a>
        {/* <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a> */}
      </Icons>
      <Form onSubmit={sendData}>
        <Row>
          <input name="name" type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input
            name="email"
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Email Id"
          />
        </Row>
        <textarea
          resize= "none"
          onChange={(e) => setMessage(e.target.value)}
          cols="30"
          rows="2"
          placeholder="Message"
        ></textarea>
        <div style={{ margin: "0 auto" }}>
        <button type="submit" onClick={notify}>Submit</button>
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;
