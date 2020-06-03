import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Left from '../images/left.png';
import Right from '../images/right.png';

const Carousel = ({ time, carouselItems, itemsDisplayed }) => {
  const [items, setItems] = useState(carouselItems);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  const rotateLeft = () => {
    const array = [...items];
    array.push(array.shift());
    setItems(array);
  };

  const rotateRight = () => {
    const array = [...items];
    array.unshift(array.pop());
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

  return (
    <>
      <ItemContainer>
        <Arrow src={Left} onClick={rotateLeft} />
        {itemsToDisplay &&
          itemsToDisplay.length > 0 &&
          itemsToDisplay.map((item, index) => (
            <ItemsWrapper key={index}>{item}</ItemsWrapper>
          ))}
        <Arrow src={Right} onClick={rotateRight} />
      </ItemContainer>
    </>
  );
};

export default Carousel;
