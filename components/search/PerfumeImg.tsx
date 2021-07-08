import React from 'react';
import styled from 'styled-components';

interface PropsType {
  image: string;
  name: string;
  keyword: string;
}

function PerfumeImg(props: PropsType) {
  return (
    <PerfumeImgWrap>
      <img className="fume_img" src={props.image} />
      <div className="hover_img">
        <Name>{props.name}</Name>
        <Keyword>{props.keyword}</Keyword>
      </div>
    </PerfumeImgWrap>
  );
}

const PerfumeImgWrap = styled.div`
  position: relative;
  cursor: pointer;

  &:hover img {
    opacity: 0.7;
  }

  &:hover .hover_img {
    opacity: 1;
  }
  .fume_img {
    display: block;
    backface-visibility: hidden;
    transition: 0.5s ease;
    opacity: 1;
    width: 26rem;
    height: 35.2rem;
  }

  .hover_img {
    display: flex;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease;
    opacity: 0;
    background-color: rgba(1, 1, 1, 0.4);
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
    font-family: 'NotoSans';
  }
`;

const Name = styled.div`
  display: flex;
  margin-top: 2.5rem;
  width: 20rem;
  line-height: 3.12rem;
  letter-spacing: 4px;
  font-size: 2.6rem;
  font-size: 2.6rem;
  font-weight: bold;
  font-weight: bold;
`;

const Keyword = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  line-height: 2.4rem;
  line-height: 2.4rem;
  font-size: 2rem;
`;

export default PerfumeImg;
