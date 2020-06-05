import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Left from '../images/left.png';
import Right from '../images/right.png';
import Bolinha from '../images/bolinha.png';

const Carousel = ({ time, carouselItems, itemsDisplayed }) => {
  const [items, setItems] = useState(carouselItems);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const [bolinhaAcesa, setBolinhaAcesa] = useState(0);

  const rotateLeft = () => {
    const array = [...items];
    array.push(array.shift());
    bolinhaAcesa <= 0
      ? setBolinhaAcesa(items.length - 1)
      : setBolinhaAcesa(bolinhaAcesa - 1);
    setItems(array);
  };

  const rotateRight = () => {
    const array = [...items];
    array.unshift(array.pop());
    bolinhaAcesa >= items.length - 1
      ? setBolinhaAcesa(0)
      : setBolinhaAcesa(bolinhaAcesa + 1);
    setItems(array);
  };

  useEffect(() => {
    setItemsToDisplay([...items.slice(0, itemsDisplayed)]);
  }, [items, itemsDisplayed]);

  useEffect(() => {
    const cleanup = setInterval(() => {
      rotateLeft();
    }, time);

    return () => {
      clearInterval(cleanup);
    };
  });

  const ItemsWrapper = styled.div`
    width: 100%;
    padding: 0.5rem;
  `;

  const CarouselContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  `;

  const ItemContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow: hidden;
    align-items: center;
    padding-left: 1.3rem;
    @media (max-width: 767px) {
      padding-left: 0;
    }
  `;

  const Arrow = styled.img`
    width: 24px;
    height: 37.32px;
    cursor: pointer;
    @media (max-width: 767px) {
      width: 12px;
      height: 19px;
    }
  `;

  const BolinhaContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 6rem;
  `;

  const ImgBolinha = styled.img`
    width: 11px;
    height: 11px;
  `;

  const ImgBolinhaAmarela = styled.img`
    width: 11px;
    height: 11px;
    background: #fae700;
    box-shadow: 0px 0px 20px rgba(250, 231, 0, 0.5);
    border-radius: 50%;
  `;

  return (
    <>
      <CarouselContainer>
        <ItemContainer>
          <Arrow src={Left} onClick={rotateLeft} />
          {itemsToDisplay &&
            itemsToDisplay.length > 0 &&
            itemsToDisplay.map((item, index) => (
              <ItemsWrapper key={index}>{item}</ItemsWrapper>
            ))}
          <Arrow src={Right} onClick={rotateRight} />
        </ItemContainer>
        <BolinhaContainer>
          {[...Array(items.length)].map((bolinha, indice) => {
            if (indice === bolinhaAcesa) {
              return <ImgBolinhaAmarela src={ImgBolinha} key={indice} />;
            }
            return <ImgBolinha src={Bolinha} key={indice} />;
          })}
        </BolinhaContainer>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
