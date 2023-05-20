'use client';
// types
import { BookType } from '@/types/book';
// components
import BookGrid from './BookGrid';

type Props = {
  books: BookType[];
};

export default function BookContent({ books }: Props) {
  return <BookGrid books={books} />;
}
