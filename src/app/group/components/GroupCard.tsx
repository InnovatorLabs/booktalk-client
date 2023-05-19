import styled, { css } from 'styled-components';
import { GroupType } from '@/service/group';

type Props = {
  data: GroupType;
  slideperscreen: number; //
};

export default function GroupCard(props: Props) {
  const { data, slideperscreen } = props;
  // console.log(data, 'data ?');

  return (
    <SlideCard slideperscreen={slideperscreen}>
      <div className="flex justify-center items-center w-full h-[300px] rounded-[1rem] bg-slate-100">
        {/* {data} */}
      </div>
    </SlideCard>
  );
}

const SlideCard = styled.div<{ slideperscreen: number }>`
  flex-grow: 0;
  flex-shrink: 0;
  padding: 0.25rem;
  border-radius: 1rem;
  ${props => css`
    flex-basis: ${100 / props.slideperscreen}%;
    max-width: ${100 / props.slideperscreen}%;
  `}
`;
