import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  id: string;
  title: string;
  content: string;
  date: Date;
  path: string;
};

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');

  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
