import { addHero, removeHero, changeText} from './storeChange';

const initialState = {
  heroesList: [],
  searchText: ''
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_HERO':
      return addHero(state, action.hero);

    case 'REMOVE_HERO':
      return removeHero(state, action.hero);

    case 'CHANGE_TEXT':
      return changeText(state, action.text);

    default:
      return state;
  }
};

export default reducer;
