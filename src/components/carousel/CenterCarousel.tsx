'use client';
import React, { ReactNode } from 'react';
import cx from 'classnames';
import styled, { css } from 'styled-components';
// icons
import LeftArrowIcon from '@/components/icons/LeftArrowIcon';
import RightArrowIcon from '@/components/icons/RightArrowIcon';

const LEFT_HANDLE_CLASS = [
  'rounded-tr-[1rem]',
  'rounded-br-[1rem]',
  'mr-[0.25rem]',
];

const RIGHT_HANDLE_CLASS = [
  'rounded-tl-[1rem]',
  'rounded-bl-[1rem]',
  'ml-[0.25rem]',
];

type Props = {
  length: number;
  slidePerScreen: number;
  centerPadding: number;
  children: ReactNode;
};

export default function CenterCarousel(props: Props) {
  const { length, slidePerScreen, centerPadding, children } = props;

  const [currentSlide, setCurrentSlide] = React.useState<number>(0);

  const isLastSlide = Math.floor(length / slidePerScreen) === currentSlide;

  return (
    <section className="flex justify-center container overflow-hidden">
      <SlideButton
        className={
          !currentSlide
            ? cx(LEFT_HANDLE_CLASS, 'invisible')
            : cx(LEFT_HANDLE_CLASS, 'left-handle visible')
        }
        onClick={() => setCurrentSlide(currentSlide - 1)}
        centerPadding={centerPadding}
      >
        <LeftArrowIcon />
      </SlideButton>
      <SlideCardWrap
        currentSlide={currentSlide} //
      >
        {children}
      </SlideCardWrap>
      <SlideButton
        className={
          isLastSlide
            ? cx(RIGHT_HANDLE_CLASS, 'invisible')
            : cx(RIGHT_HANDLE_CLASS, 'right-handle visible')
        }
        onClick={() => setCurrentSlide(currentSlide + 1)}
        centerPadding={centerPadding}
      >
        <RightArrowIcon />
      </SlideButton>
    </section>
  );
}

const SlideCardWrap = styled.div<{ currentSlide: number }>`
  display: flex;
  width: 100%;
  transition-duration: 300ms;
  ${props => css`
    transform: translateX(-${props.currentSlide}00%);
  `}
`;

const SlideButton = styled.button<{ centerPadding: number }>`
  border: none;
  flex-grow: 0;
  z-index: 10;
  margin: 0.25rem 0;
  padding: 0 0.5rem;
  color: #fff;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: background-color 150ms ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  ${props => css`
    padding: ${props.centerPadding}rem;
  `}
`;
