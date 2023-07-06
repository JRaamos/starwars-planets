export const mockApi = () => {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          {
            name: "Geonosis", 
            rotation_period: "30", 
            orbital_period: "256", 
            diameter: "11370", 
            climate: "temperate, arid", 
            gravity: "0.9 standard", 
            terrain: "rock, desert, mountain, barren", 
            surface_water: "5", 
            population: "100000000000", 
            films: [
                "https://swapi.dev/api/films/5/"
            ], 
            created: "2014-12-10T12:47:22.350000Z", 
            edited: "2014-12-20T20:58:18.437000Z", 
            url: "https://swapi.dev/api/planets/11/"
        }, 
        {
            name: "Utapau", 
            rotation_period: "27", 
            orbital_period: "351", 
            diameter: "12900", 
            climate: "temperate, arid, windy", 
            gravity: "1 standard", 
            terrain: "scrublands, savanna, canyons, sinkholes", 
            surface_water: "0.9", 
            population: "95000000", 
            films: [
                "https://swapi.dev/api/films/6/"
            ], 
            created: "2014-12-10T12:49:01.491000Z", 
            edited: "2014-12-20T20:58:18.439000Z", 
            url: "https://swapi.dev/api/planets/12/"
        }, 
          {
            name: 'Alderaan',
            rotation_period: '24',
            orbital_period: '364',
            diameter: '12500',
            climate: 'temperate',
            gravity: 'gravity_aldebaran',
            terrain: 'grasslands, mountains',
            surface_water: 'surface_water_Alderaan',
            population: '2000000000',
            films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/6/'],
          },
          {
            name: 'Naboo',
            rotation_period: '26',
            orbital_period: '312',
            diameter: '12120',
            climate: 'temperate',
            gravity: 'gravity_Naboo',
            terrain: 'grassy hills, swamps, forests, mountains',
            surface_water: 'surface_water_Naboo',
            population: '4500000000',
            films: [
              'https://swapi.dev/api/films/3/',
              'https://swapi.dev/api/films/4/',
              'https://swapi.dev/api/films/5/',
              'https://swapi.dev/api/films/6/',
            ],
          },
        ],
      }),
  });
};