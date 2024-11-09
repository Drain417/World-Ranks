import { createStore } from "vuex";

const store = createStore({
    state: {
        countries: [],
        filteredCountries: [],
        searchTerm: '',
        filter: {
            unMember: null,
            region: [],
            area: null,
            population: null,
            independent: null,
        },
        sortBy: 'population',
    },
    mutations: {
        SET_COUNTRIES: (state, countries) => {
            state.countries = countries;
            state.filteredCountries = countries;
        },
        SET_SEARCH_TERM(state, term) {
            state.searchTerm = term;
        },
        SET_FILTER(state, filter) {
            state.filter = filter;
        },
        SET_UN_MEMBER(state, value) {
            state.filter.unMember = value;
            this.commit('FILTER_COUNTRIES');
        },
        SET_INDEPENDENT(state, value) {
            state.filter.independent = value;
            this.commit('FILTER_COUNTRIES');
        },
        SET_SORT_BY(state, sortBy) {
            state.sortBy = sortBy;
            this.commit('FILTER_COUNTRIES');
        },
        FILTER_COUNTRIES(state) {
            const { unMember, region, area, population, independent} = state.filter;
            const searchTermLower = state.searchTerm.toLowerCase().trim();

            const regex = new RegExp(`^${searchTermLower}`, 'i');

            state.filteredCountries = state.countries.filter(country => {
                const matchesSearch = regex.test(country.name.common) ||
                    regex.test(country.region) ||
                    regex.test(country.subregion);

                const matchesUnMember = (unMember === null) || (country.unMember === unMember);
                const matchesRegion = region.length > 0 ? region.includes(country.region) : true;
                const matchesPopulation = population ? country.population <= population : true;
                const matchesArea = area ? country.area <= area : true;
                const matchesIndependent = independent === null || country.independent === independent;


                return matchesSearch && matchesUnMember && matchesRegion && matchesPopulation && matchesArea && matchesIndependent;
            });
        },
    },
    actions: {
        async fetchCountries({commit}) {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                const countries = data.map(country => {
                    const currencyCode = Object.keys(country.currencies || {})[0];
                    const currencyName = currencyCode ? country.currencies[currencyCode].name : null;

                    return {
                        flags: country.flags.svg,
                        name: {
                            common: country.name.common,
                            official: country.name.official,
                        },
                        capital: country.capital,
                        languages: Object.values(country.languages || {}),
                        currencyName,
                        borders: country.borders,
                        population: country.population,
                        area: country.area,
                        region: country.region,
                        subregion: country.subregion,
                        cca3: country.cca3,
                        ccn: country.ccn,
                        continents: country.continents,
                        unMember: country.unMember,
                        independent: country.independent,
                    };
                });

                commit('SET_COUNTRIES', countries);
                console.log('Countries after fetch:', countries);
            } catch (error) {
                console.error('Failed to fetch countries:', error);
            }
        }
    },
    getters: {
        getFilteredCountries: state => {
            return state.filteredCountries.sort((a, b) => {
                switch (state.sortBy) {
                    case 'population':
                        return b.population - a.population;
                    case 'name':
                        return a.name.common.localeCompare(b.name.common);
                    case 'area':
                        return b.area - a.area;
                    default:
                        return 0;
                }
            })
        },
        getSearchTerm: state => state.searchTerm,
        filteredCountriesCount: state => state.filteredCountries.length,
    },
});

export default store;