// components
import HeaderSearchInput from '@/components/input/HeaderSearchInput';
import GroupCategory from './components/GroupCategory';

export default function GroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col flex-1 px-2">
      <HeaderSearchInput placeholder="북토크 명을 입력하세요" />
      <GroupCategory />
      <section>{children}</section>
    </section>
  );
}
