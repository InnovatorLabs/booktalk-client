import { readFile } from 'fs/promises';
import path from 'path';

export type BookType = {
  id: string;
  title: string;
  content: string;
  date: Date;
  path: string;
};

export async function getAllBooks(): Promise<BookType[]> {
  const filePath = path.join(process.cwd(), 'data', 'books.json');

  return readFile(filePath, 'utf-8')
    .then<BookType[]>(JSON.parse)
    .then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
