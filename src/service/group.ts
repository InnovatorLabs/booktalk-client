import { readFile } from 'fs/promises';
import path from 'path';

export type GroupType = {
  id: string;
  image: string;
  maxMember: number;
  currentMember: number;
  content: string;
  category: string[];
  title: string;
  type: string;
  path: string;
};

export interface GroupPageInterface {
  myGroup: GroupType[];
  activeGroup: GroupType[];
  newGroup: GroupType[];
}

export async function getAllgroup(): Promise<GroupPageInterface[]> {
  const filePath = path.join(process.cwd(), 'data', 'group.json');
  console.log(filePath, 'filePath ?');
  return readFile(filePath, 'utf-8').then<GroupPageInterface[]>(JSON.parse);
}
