import Hero from '@/components/Hero';
import BookContent from '@/components/book/BookContent';
import { getAllBooks } from '@/service/books';

export default async function BookPage() {
  const books = await getAllBooks();

  return (
    <section className="flex flex-col flex-1">
      <Hero />
      <BookContent books={books} />
    </section>
  );
}
