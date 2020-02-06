const getters = {
  heroes: state => state.heroes,
  hero: state => state.hero,
  totalHeroes: state => state.heroes.length,
  isLoading: state => state.isLoading,
  error: state => state.error
};
export default getters;
