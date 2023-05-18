'use client';

import { BookType } from '@/service/books';
// components
import BookGrid from './BookGrid';

type Props = {
  books: BookType[];
};

export default function BookContent({ books }: Props) {
  return <BookGrid books={books} />;
}
