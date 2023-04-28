import { readFile } from 'fs/promises';
import path from 'path';

export type PostType = {
  id: string;
  profileImage: string;
  userName: string;
  title: string;
  content: string;
  date: Date;
  path: string;
  follow: boolean;
};

export async function getAllPosts(): Promise<PostType[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');

  return readFile(filePath, 'utf-8')
    .then<PostType[]>(JSON.parse)
    .then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
