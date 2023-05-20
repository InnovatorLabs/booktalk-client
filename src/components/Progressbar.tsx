import styled from '@emotion/styled';

type Props = {
  value: number;
  steplevel: number;
};

export default function Progressbar(props: Props) {
  const { value, steplevel } = props;

  return (
    <div className="relative w-full">
      <div className="absolute w-full h-[5px] bg-slate-100" />
      <CurrentBar
        value={value}
        steplevel={steplevel}
        className="absolute w-full bg-[#141414] h-[5px]"
      />
    </div>
  );
}

const CurrentBar = styled.div<{ value: number; steplevel: number }>`
  transition-duration: 500ms;
  transform: scaleX(${props => props.value / props.steplevel});
  transform-origin: center left;
`;
