import { BookType } from '@/service/books';
// components
import BookCard from './BookCard';

type Props = { books: BookType[] };

export default function BookGrid({ books }: Props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books?.map(book => (
        <li key={book.id} className="mb-20">
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
}
