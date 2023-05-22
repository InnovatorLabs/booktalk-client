// icons
import LargeSearchIcon from '@/components/icons/LargeSearchIcon';

type Props = {
  placeholder: string;
};

export default function HeaderSearchInput(props: Props) {
  const { placeholder } = props;
  return (
    <section className="relative flex items-center w-full h-[80px] border-b-2">
      <input
        className="w-full h-full pl-[50px] outline-0 text-[22px] font-[500]"
        type="text"
        placeholder={placeholder}
      />
      <button
        type="button"
        className="absolute top-0 left-0 w-[50px] h-full rounded-full"
      >
        <LargeSearchIcon />
      </button>
    </section>
  );
}
