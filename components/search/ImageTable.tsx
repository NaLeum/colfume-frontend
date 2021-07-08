import React from 'react';
import PerfumeImg from './PerfumeImg';
import styled from 'styled-components';

const perfumeData = [
  // 임시 데이터
  {
    id: 1,
    name: 'ZARA PERFUME',
    keyword: '# 달콤한 향',
    image:
      'https://beautymatter.com/media/pages/articles/berlin-packaging-acquires-roma-international/30cd49356a-1616086617/berlin-packaging-acquires-roma-international2.jpeg',
  },
  {
    id: 2,
    name: 'ZARA PERFUME',
    keyword: '# 새콤한 향',
    image:
      'https://beautymatter.com/media/pages/articles/berlin-packaging-acquires-roma-international/30cd49356a-1616086617/berlin-packaging-acquires-roma-international2.jpeg',
  },
  {
    id: 3,
    name: 'ZARA PERFUME',
    keyword: '# 상콤한 향',
    image:
      'https://beautymatter.com/media/pages/articles/berlin-packaging-acquires-roma-international/30cd49356a-1616086617/berlin-packaging-acquires-roma-international2.jpeg',
  },
  {
    id: 4,
    name: 'ZARA PERFUME',
    keyword: '# 달달한 향',
    image:
      'https://beautymatter.com/media/pages/articles/berlin-packaging-acquires-roma-international/30cd49356a-1616086617/berlin-packaging-acquires-roma-international2.jpeg',
  },
  {
    id: 5,
    name: 'ZARA PERFUME',
    keyword: '# 달달한 향',
    image: 'http://www.dailygrid.net/news/photo/201905/222119_121434_5843.jpg',
  },
  {
    id: 6,
    name: 'ZARA PERFUME',
    keyword: '# 새콤한 향',
    image: 'http://www.dailygrid.net/news/photo/201905/222119_121434_5843.jpg',
  },
];

function ImageTable() {
  return (
    <ImageTableWrap>
      <ImageTableBox>
        {perfumeData.map(data => (
          <PerfumeImg key={data.id} image={data.image} name={data.name} keyword={data.keyword} />
        ))}
      </ImageTableBox>
    </ImageTableWrap>
  );
}

const ImageTableWrap = styled.div`
  padding-top: 13rem;
  padding-bottom: 38.4rem;
  justify-content: center;

  @media screen and (max-width: 1300px) {
    padding-bottom: 20rem;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 10rem;
  }

  @media screen and (max-width: 576px) {
    padding-top: 4.5rem;
    padding-bottom: 2.6rem;
  }
`;

const ImageTableBox = styled.div`
  width: 100%;
  max-width: 113.6rem;
  display: grid;
  justify-content: center;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3.2rem;

  @media screen and (max-width: 1300px) {
    max-width: 80rem;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 30rem;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.8rem;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
`;

export default ImageTable;
