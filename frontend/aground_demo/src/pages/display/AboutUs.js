import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/display/Nav';
import LeftBtn from '../../components/display/LeftBtn';
import About from '../../assets/display/aboutUs/about.png';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <AboutUsStyle>
      <Nav arrow='true' />
      <img src={About} className='img'/>
      <div className='back'><LeftBtn children='뒤로' onClick={() => navigate(-1)}/></div>
    </AboutUsStyle>
  );
};

export default AboutUs;

const AboutUsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    .img{
      width: 100vw;
      position: relative;
      top: -10vh;
    }
    .back{
      position: relative;
      top: -15vh;
    }
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    .img{
      width: 100vw;
      position: relative;
      top: -10vh;
    }
    .back{
      position: relative;
      top: -15vh;
    }
  }
  @media screen and (min-width: 1281px){
    .img{
      width: 40vw;
      position: relative;
      top: -10vh;
    }
    .back{
      position: relative;
      top: -15vh;
    }
  }
  
`