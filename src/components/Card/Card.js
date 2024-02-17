// src/components/Card/Card.js
import styled from 'styled-components';
import Link from 'next/link';

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 5rem;
`;

const CardWrapper = styled.a`
  position: relative;
  height: 200px;
  background: ${({ bgUrl }) => `url(${bgUrl}) no-repeat center center`};
  background-size: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const CardTitle = styled.h2`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const CardType = styled.p`
  color: #d1d1d1;
  font-size: 0.9rem;
`;

const Card = ({ bgUrl, title, chartType, link }) => {
  return (
    <Link href={link} passHref>
      <CardWrapper bgUrl={bgUrl}>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardType>{chartType}</CardType>
        </CardContent>
      </CardWrapper>
    </Link>
  );
};

export default Card;
