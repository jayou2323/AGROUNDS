import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import service from '../../assets/web/service-wide.png';
import servicem1 from '../../assets/web/servicem1.webp';
import servicem2 from '../../assets/web/servicem2.webp';
import servicem3 from '../../assets/web/servicem3.webp';
import servicem4 from '../../assets/web/servicem4.webp';
import servicem5 from '../../assets/web/servicem5.webp';
import servicem6 from '../../assets/web/servicem6.webp';

const Service = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return(
      <ServiceStyle>
        <div className='title'>정확한 분석으로 <br/>축구를 쉽고 재밌게</div>
        <div className='img-box'>
          <img className='first-img' src={servicem1} />
          <div className='img-title'>영상 기반의 <br/>정밀한 GPS 데이터 분석</div>
          <div className='img-contents'>히트맵과 리플레이 등 총 123가지의 다양한 분석 결과 <br/>를 바탕으로 본인의 축구 능력을 점수로 확인해보세요.</div>
          <img src={servicem2} />
          <img src={servicem3} />
          <img src={servicem4} />
          <img src={servicem5} />
          <img src={servicem6} />
        </div>
        <div style={{marginBottom: '15vh'}}></div>
      </ServiceStyle>
    )
  }

  return (
    <ServiceStyle>
      <img src={service} />
      <div style={{marginBottom: '20vh'}}></div>
    </ServiceStyle>
  );
};

export default Service;

const ServiceStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';

  img{
    width: 50%;
    margin-top: 20vh;
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    img{
      width: 90%;
      margin-top: 20vh;
    }
  }


  @media (max-width: 480px) {
    .title{
      font-size: 3vh;
      font-weight: 700;
      margin-top: 20vh;
      margin-bottom: 5vh;
      text-align: center;
      font-family: 'Pretendard';
    }
    .img-box{
      display: flex;
      flex-direction: column;
      align-items: center;
      .first-img{
        width: 100%;
      }
      .img-title{
        font-size: 3vh;
        font-weight: 700;
        margin-top: 10vh;
        text-align: center;
      }
      .img-contents{
        font-size: 2vh;
        font-weight: 400;
        color:#525252;
        width: 90%;
        margin-top: 2vh;
        margin-bottom: 5vh;
        line-height: 1.6;
        text-align: center;
      }
      img {
        width: 90%; 
        margin-top: 3vh;
      }
    }
  }
`