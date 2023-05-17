'use client';

import { BookType } from '@/service/books';
import BookGrid from '@/components/book/BookGrid';

type Props = {
  books: BookType[];
};

export default function BookContent({ books }: Props) {
  return <BookGrid books={books} />;
}
