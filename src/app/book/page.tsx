import BookContent from './components/BookContent';
import { getAllBooks } from '@/service/books';

export default async function BookPage() {
  const books = await getAllBooks();

  return <BookContent books={books} />;
}
