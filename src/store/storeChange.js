export const changeText = (state, text) => {
  return {
    ...state,
    searchText: text
  };
}

export const removeHero = (state, hero) => {
  const newHeroList = state.heroesList.filter(item => item.name !== hero.name);
  return {
    ...state,
    heroesList: [...newHeroList]
  };
};

export const addHero = (state, hero) => {
  let indexHero;
  const newHeroList = [...state.heroesList];
  let newHero = newHeroList.find((element, index) => {
    if (element.name === hero.name) {
      indexHero = index;
    }

    return element.name === hero.name;
  });
  
  if (newHero) {
    newHeroList[indexHero].count += 1;
  } else {
    newHeroList.push({ ...hero, count: 1 });
  }

  return {
    ...state,
    heroesList: [...newHeroList]
  };
};