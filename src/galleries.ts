// Define each gallery location here.
// To add a new location: add a new object, drop photos in public/photos/{slug}/, list filenames.

export interface Gallery {
  slug: string;
  name: string;
  description: string;
  coverImage: string;
  photos: string[];
}

export const galleries: Gallery[] = [
  {
    slug: "hong-kong",
    name: "Hong Kong",
    description: "Transport, markets, street life, and a fishing village at the edge of the city.",
    coverImage: "/photos/hong-kong/street-01.jpg",
    photos: [
      "transport-01.jpg",
      "transport-02.jpg",
      "transport-03.jpg",
      "market-01.jpg",
      "market-02.jpg",
      "market-03.jpg",
      "market-04.jpg",
      "market-05.jpg",
      "market-06.jpg",
      "market-07.jpg",
      "street-01.jpg",
      "street-02.jpg",
      "street-03.jpg",
      "street-04.jpg",
      "street-05.jpg",
      "street-06.jpg",
      "street-07.jpg",
      "street-08.jpg",
      "street-09.jpg",
      "street-10.jpg",
      "street-11.jpg",
      "street-12.jpg",
      "street-13.jpg",
      "tai-o-01.jpg",
      "tai-o-02.jpg",
      "tai-o-03.jpg",
      "tai-o-04.jpg",
      "tai-o-05.jpg",
      "buddha-01.jpg",
      "buddha-sofia.jpg",
      "buddha-02.jpg",
      "buddha-03.jpg",
      "food-01.jpg",
      "food-02.jpg",
      "food-03.jpg",
      "food-04.jpg",
      "food-05.jpg",
      "food-06.jpg",
      "food-07.jpg",
    ],
  },
  // When Taiwan is ready, add another entry here — same structure
];