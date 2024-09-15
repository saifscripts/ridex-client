export const BIKE_BRANDS = [
  'Yamaha',
  'Honda',
  'Kawasaki',
  'Ducati',
  'BMW',
  'Harley-Davidson',
  'Suzuki',
  'Royal Enfield',
];

export const bikeBrandOptions = BIKE_BRANDS.map((brand) => ({
  value: brand,
  label: brand,
}));

export const bikeAvailabilityOptions = [
  { value: true, label: 'Available' },
  { value: false, label: 'Unavailable' },
];
