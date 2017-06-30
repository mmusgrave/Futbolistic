import {values } from 'lodash';

export const selectAllStories = ({ stories }) => {
  // 
  return values(stories.stories)
};
