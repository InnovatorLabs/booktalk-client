// components
import MultiCarousel from '@/components/MultiCarousel';

type Props = {
  label: string;
};

export default function GroupCarousel(props: Props) {
  const { label } = props;

  return (
    <section className="pt-10">
      <div className="flex items-center w-full h-[100px]">
        <h1 className="text-xl font-bold">{label}</h1>
      </div>
      <MultiCarousel>
        <div className="flex flex-col justify-between relative h-[290px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2 border">
          Item 1
        </div>
        <div className="flex flex-col justify-between relative h-[290px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2 border">
          Item 2
        </div>
        <div className="flex flex-col justify-between relative h-[290px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2 border">
          Item 3
        </div>
        <div className="flex flex-col justify-between relative h-[290px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2 border">
          Item 4
        </div>
        <div className="flex flex-col justify-between relative h-[290px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2 border">
          Item 1
        </div>
        <div className="flex flex-col justify-between relative h-[290px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2 border">
          Item 1
        </div>
        <div className="flex flex-col justify-between relative h-[290px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2 border">
          Item 1
        </div>
        <div className="flex flex-col justify-between relative h-[290px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2 border">
          Item 1
        </div>
        <div className="flex flex-col justify-between relative h-[290px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2 border">
          Item 1
        </div>
        <div className="flex flex-col justify-between relative h-[290px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2 border">
          Item 1
        </div>
        <div className="flex flex-col justify-between relative h-[290px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2 border">
          Item 1
        </div>
        <div className="flex flex-col justify-between relative h-[290px] rounded-xl shadow-[3px_5px_10px_1px_rgba(0,0,0,0.3)] p-4 m-2 border">
          Item 1
        </div>
      </MultiCarousel>
    </section>
  );
}
