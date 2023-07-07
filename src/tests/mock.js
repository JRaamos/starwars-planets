export const mockApi = () => {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
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
          {
            name: "Kamino", 
            rotation_period: "27", 
            orbital_period: "463", 
            diameter: "19720", 
            climate: "temperate", 
            gravity: "1 standard", 
            terrain: "ocean", 
            surface_water: "100", 
            population: "1000000000", 
            films: [
                "https://swapi.dev/api/films/5/"
            ], 
            created: "2014-12-10T12:45:06.577000Z", 
            edited: "2014-12-20T20:58:18.434000Z", 
            url: "https://swapi.dev/api/planets/10/"
        }
        ],
      }),
  });
};