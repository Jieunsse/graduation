import axios from 'axios';
import type { CreatorContent } from '@domain/creator/types/creatorContent.ts';

const mockUrl = new URL('../mock/creatorMock.json', import.meta.url).href;

export const getCreatorContents = async (): Promise<CreatorContent[]> => {
  const response = await axios.get<CreatorContent[]>(mockUrl);
  return response.data;
};
