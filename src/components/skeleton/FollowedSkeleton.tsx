const FOLLOW_DUMMY_DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function FollowedSkeleton() {
  return (
    <div className="h-[30rem] animate-[fadeOut_0.7s_ease-in-out]">
      <section className="">
        <div className="flex items-center w-full px-2 py-8">
          <div className="w-[170px] h-[28px] text-xl font-bold bg-slate-100 rounded-md" />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {FOLLOW_DUMMY_DATA.map(item => (
            <li key={item.id}>
              <div className="flex flex-col h-[290px] bg-slate-100 p-4 m-2 rounded-xl">
                <article className="flex items-center border-b pb-2">
                  <div className="w-[40px] h-[40px] rounded-full bg-slate-200" />
                  <div className="flex-1 h-[40px] rounded-full mx-4 bg-slate-200" />
                  <div className="w-[55px] h-[35px] bg-slate-200" />
                </article>
                <article className="flex flex-col p-2">
                  <div className="h-[40px] bg-slate-200 rounded-md" />
                  <div className="h-[80px] flex-2 bg-slate-200 mt-2 rounded-md" />
                  <div className="self-end h-[30px] w-[60px]  bg-slate-200 mt-10 rounded-full" />
                </article>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
