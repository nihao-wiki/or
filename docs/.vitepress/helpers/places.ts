import { destinations } from '../constants/destination';
import type { Destination, Destinations } from '../constants/destination';

const getPlacesGroupBy = (key): Destinations => {
  const result = {};
  for (const city in destinations) {
    const name = destinations[city][key];
    if (!result[name]) result[name] = [];
    result[name].push(destinations[city]);
  }
  return result;
};

const getPlacesByPopularity = (): Destination[] => {
  const result: Destination[] = [];
  for (const key in destinations) {
    const { youtubeRank, ...rest } = destinations[key];
    if (typeof youtubeRank === 'number')
      result[youtubeRank - 1] = destinations[key];
  }
  return result.filter(Boolean);
};

export const placesByRegion = getPlacesGroupBy('region');
export const placesByProvince = getPlacesGroupBy('province');
export const placesBy72144VisaPolicy = getPlacesGroupBy('staying72144');
export const placesByPopularity = getPlacesByPopularity();
