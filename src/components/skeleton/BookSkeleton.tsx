const BOOK_DUMMY_DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function BookSkeleton() {
  return (
    <section className="h-[30rem] animate-[skeleton_1s_infinite]">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {BOOK_DUMMY_DATA.map(item => (
          <>
            <li key={item.id} className="mb-20">
              <div className="flex flex-col h-[246px] bg-slate-100 p-4 m-2 rounded-xl">
                <article className="flex flex-col p-2">
                  <div className="h-[40px] bg-slate-200 rounded-md" />
                  <div className="h-[80px] flex-2 bg-slate-200 mt-2 rounded-md" />
                  <div className="self-end h-[30px] w-[60px]  bg-slate-200 mt-10 rounded-full" />
                </article>
              </div>
            </li>
          </>
        ))}
      </ul>
    </section>
  );
}
