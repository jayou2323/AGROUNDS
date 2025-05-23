import React from 'react';
import '../../css/secession/SelectReason.scss';
import BackTitle_Btn from '../../../../components/BackTitle_Btn';
import Login_title from '../../../../components/Login_title';
import rightarrow from '../../../../assets/left.png';
import { useNavigate } from 'react-router-dom';


const SelectReason = () => {
  const navigate = useNavigate();

  const Contents = ({ title, onClick }) => {
    return (
      <div className='reasontitlebox' onClick={onClick}>
        <p className='title1'>{title}</p>
        <img className='arrow1' src={rightarrow} alt='arrow' />
      </div>
    );
  };

  return (
    <div className='selectreason'>
      <BackTitle_Btn navTitle='서비스 탈퇴' />
      <Login_title title='탈퇴하시는 이유가 무엇인가요?' explain='더 나은 서비스가 될 수 있도록 의견을 들려주세요' />
      <Contents title='사용하지 않는 앱이에요' onClick={() => navigate('/app/secessionlast', {state: {reason: '사용하지 않는 앱이에요'}})} />
      <Contents title='사용법이 어려워요' onClick={() => navigate('/app/secessionlast', {state: {reason: '사용법이 어려워요'}})} />
      <Contents title='오류가 많아요' onClick={() => navigate('/app/secessionlast', {state: {reason: '오류가 많아요'}})} />
      <Contents title='보안이 걱정돼요' onClick={() => navigate('/app/secessionlast', {state: {reason: '보안이 걱정돼요'}})} />
      <Contents title='개인정보가 불안해요' onClick={() => navigate('/app/secessionlast', {state: {reason: '개인정보가 불안해요'}})} />
      <Contents title='특별한 이유 없음' onClick={() => navigate('/app/secessionlast', {state: {reason: '특별한 이유 없음'}})} />
      <Contents title='기타' onClick={() => navigate('/app/secession-other-reason')} />
    </div>
  );
};


export default SelectReason;