export const NEPAL_LOCATIONS = {
  "Bagmati Province": [
    "Bhaktapur",
    "Chitwan",
    "Kathmandu",
    "Kavrepalanchok",
    "Lalitpur",
    "Makwanpur",
  ],
  "Gandaki Province": ["Kaski"],
  "Karnali Province": ["Surkhet"],
  "Koshi Province": ["Jhapa", "Morang", "Sunsari"],
  "Lumbini Province": ["Rupandehi"],
  "Madhesh Province": ["Dhanusha", "Parsa"],
  "Sudurpashchim Province": ["Kailali", "Kanchanpur"],
} as const;

export type Province = keyof typeof NEPAL_LOCATIONS;

export type District = {
  [P in Province]: (typeof NEPAL_LOCATIONS)[P][number];
}[Province];

export const NEPAL_PROVINCES = Object.keys(NEPAL_LOCATIONS) as Province[];

export function getDistricts(province: Province) {
  return NEPAL_LOCATIONS[province];
}
