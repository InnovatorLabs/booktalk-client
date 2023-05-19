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
  'mr-[1rem]',
];

const RIGHT_HANDLE_CLASS = [
  'rounded-tl-[1rem]',
  'rounded-bl-[1rem]',
  'ml-[1rem]',
];

type Props = {
  length: number;
  slideperscreen: number;
  centerpadding: number;
  children: ReactNode;
};

export default function CenterCarousel(props: Props) {
  const { length, slideperscreen, centerpadding, children } = props;

  const [currentslide, setCurrentslide] = React.useState<number>(0);

  const isLastSlide =
    Math.floor((length - 1) / slideperscreen) === currentslide;

  return (
    <section className="flex justify-center overflow-hidden group">
      <SlideButton
        className={
          !currentslide
            ? cx(LEFT_HANDLE_CLASS, 'invisible')
            : cx(LEFT_HANDLE_CLASS, 'left-handle visible')
        }
        onClick={() => setCurrentslide(currentslide - 1)}
        centerpadding={centerpadding}
      >
        <LeftArrowIcon />
      </SlideButton>
      <SlideCardWrap
        currentslide={currentslide} //
      >
        {children}
      </SlideCardWrap>
      <SlideButton
        className={
          isLastSlide
            ? cx(RIGHT_HANDLE_CLASS, 'invisible')
            : cx(RIGHT_HANDLE_CLASS, 'right-handle visible')
        }
        onClick={() => setCurrentslide(currentslide + 1)}
        centerpadding={centerpadding}
      >
        <RightArrowIcon />
      </SlideButton>
    </section>
  );
}

const SlideCardWrap = styled.div<{ currentslide: number }>`
  display: flex;
  width: calc(100% - 16rem);
  transition-duration: 300ms;
  ${props => css`
    transform: translateX(-${props.currentslide}00%);
  `}
`;

const SlideButton = styled.button<{ centerpadding: number }>`
  border: none;
  flex-grow: 0;
  z-index: 10;
  padding: 0 0.5rem;
  color: #fff;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: background-color 150ms ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  ${props => css`
    padding: ${props.centerpadding}rem;
  `}
`;
