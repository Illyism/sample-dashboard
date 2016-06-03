
import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectGrid = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('grid')
);

export {
  selectHome,
  selectGrid,
};
