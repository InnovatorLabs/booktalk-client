import { readFile } from 'fs/promises';
import path from 'path';
// types
import { GroupType } from '@/types/group';

export interface GroupPageInterface {
  myGroup: GroupType[];
  activeGroup: GroupType[];
  newGroup: GroupType[];
}

export async function getAllgroup(): Promise<GroupPageInterface[]> {
  const filePath = path.join(process.cwd(), 'data', 'group.json');

  return readFile(filePath, 'utf-8').then<GroupPageInterface[]>(JSON.parse);
}
