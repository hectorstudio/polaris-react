import styled from 'styled-components';

export const DashboardWrap = styled.section`
  width:100%;
  float:left;
  padding:5rem;
`;

export const MediaCardWrap = styled.div`
  padding:0 1.5rem;

  &:focus {
    outline:none;
    border:none;
  }
`;

export const CarouselWrap = styled.section`
  float:left;
  width:100%;
  margin:0 0 5rem -1.5rem;

  h4 {  
    font-size:1.8rem;
    color:#FFF;
    margin:0 0 2rem 1.5rem;
  }

  .slick-slide {
    opacity:.5;
    transition:.2s all;
  }

  .slick-active {
    opacity:1;
  }
`;
