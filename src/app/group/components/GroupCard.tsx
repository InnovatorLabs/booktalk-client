import styled, { css } from 'styled-components';

type Props = {
  data: string;
  slidePerScreen: number; //
};

export default function GroupCard(props: Props) {
  const { data, slidePerScreen } = props;
  return (
    <SlideCard slidePerScreen={slidePerScreen}>
      <div className="flex justify-center items-center w-full h-[300px] rounded-[1rem] bg-slate-100">
        {data}
      </div>
    </SlideCard>
  );
}

const SlideCard = styled.div<{ slidePerScreen: number }>`
  flex-grow: 0;
  flex-shrink: 0;
  padding: 0.25rem;
  border-radius: 1rem;
  ${props => css`
    flex-basis: ${100 / props.slidePerScreen}%;
    max-width: ${100 / props.slidePerScreen}%;
  `}
`;
