import CloseIcon from './icons/CloseIcon';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ onClose, children }: Props) {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/40"
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative bg-white w-4/5 max-w-xl rounded-md">
        <button
          className="absolute top-0 right-0 p-4 text-black"
          onClick={() => onClose()}
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </section>
  );
}
