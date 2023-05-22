const GROUP_DUMMY_DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function GroupSkeleton() {
  return (
    <section className="pt-10 animate-[skeleton_1s_infinite]">
      <div className="flex items-center w-full h-[100px]">
        <div className="w-[180px] h-[28px] bg-slate-100 rounded-md"></div>
      </div>
      <div className="flex w-full h-[386px]">
        <div className="w-[112px] grow-0 mr-[16px] p-10 bg-slate-100 rounded-tr-[1rem] rounded-br-[1rem]"></div>
        <article className="flex w-[calc(100%-16rem)]">
          <div className="rounded-[1rem] px-[16px] grow-0 shrink-0 basis-1/4 max-w-1/4">
            <div className="flex w-full h-full flex-col bg-slate-100 rounded-[1rem]">
              <div className="h-[170px] bg-slate-200 rounded-lg"></div>
              <div className="h-[40px] mt-5 bg-slate-200 rounded-lg"></div>
              <div className="flex h-[40px] mt-14 gap-2">
                <div className="flex-1 bg-slate-200 rounded-lg"></div>
                <div className="flex-1 bg-slate-200 rounded-lg"></div>
                <div className="flex-1 bg-slate-200 rounded-lg"></div>
              </div>
            </div>
          </div>
          <div className="rounded-[1rem] px-[16px] grow-0 shrink-0 basis-1/4 max-w-1/4">
            <div className="flex w-full h-full flex-col bg-slate-100 rounded-[1rem]">
              <div className="h-[170px] bg-slate-200 rounded-lg"></div>
              <div className="h-[40px] mt-5 bg-slate-200 rounded-lg"></div>
              <div className="flex h-[40px] mt-14 gap-2">
                <div className="flex-1 bg-slate-200 rounded-lg"></div>
                <div className="flex-1 bg-slate-200 rounded-lg"></div>
                <div className="flex-1 bg-slate-200 rounded-lg"></div>
              </div>
            </div>
          </div>
          <div className="rounded-[1rem] px-[16px] grow-0 shrink-0 basis-1/4 max-w-1/4">
            <div className="flex w-full h-full flex-col bg-slate-100 rounded-[1rem]">
              <div className="h-[170px] bg-slate-200 rounded-lg"></div>
              <div className="h-[40px] mt-5 bg-slate-200 rounded-lg"></div>
              <div className="flex h-[40px] mt-14 gap-2">
                <div className="flex-1 bg-slate-200 rounded-lg"></div>
                <div className="flex-1 bg-slate-200 rounded-lg"></div>
                <div className="flex-1 bg-slate-200 rounded-lg"></div>
              </div>
            </div>
          </div>
          <div className="rounded-[1rem] px-[16px] grow-0 shrink-0 basis-1/4 max-w-1/4">
            <div className="flex w-full h-full flex-col bg-slate-100 rounded-[1rem]">
              <div className="h-[170px] bg-slate-200 rounded-lg"></div>
              <div className="h-[40px] mt-5 bg-slate-200 rounded-lg"></div>
              <div className="flex h-[40px] mt-14 gap-2">
                <div className="flex-1 bg-slate-200 rounded-lg"></div>
                <div className="flex-1 bg-slate-200 rounded-lg"></div>
                <div className="flex-1 bg-slate-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </article>
        <div className="w-[112px] ml-[16px] bg-slate-100 rounded-tl-[1rem] rounded-bl-[1rem]"></div>
      </div>
    </section>
  );
}
