import { v4 as uuidV4 } from 'uuid';

export const source = 'sitecore-marketplace-sdk';

export const generateId = () => {
  return uuidV4();
};
