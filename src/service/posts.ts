import { readFile } from 'fs/promises';
import path from 'path';
// types
import { PostType } from '@/types/feed';

export async function getAllPosts(): Promise<PostType[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');

  return readFile(filePath, 'utf-8')
    .then<PostType[]>(JSON.parse)
    .then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
