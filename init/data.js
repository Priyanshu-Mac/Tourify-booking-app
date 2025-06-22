// const sampleListings = [
//   {
//     title: "Rustic Cabin in the Woods",
//     image : {
//       path : "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "A peaceful retreat surrounded by trees and nature. Great for hiking and unplugging.",
//     price: 900,
//     location: "Asheville",
//     country: "United States",
//   },
//   {
//     title: "Lakeview Mountain House",
//     image : {
//       path : "https://images.unsplash.com/photo-1697653664649-936ed36b3c8c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50YWluJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Enjoy the view of the lake and mountains in this spacious family home.",
//     price: 1300,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Historic Apartment with Charm",
//     image : {
//       path : "https://plus.unsplash.com/premium_photo-1672191496375-9659b519bef2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb25pYWwlMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Charming 19th-century apartment with modern amenities in a historic district.",
//     price: 1100,
//     location: "Edinburgh",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis Villa",
//     image : {
//       path : "https://images.unsplash.com/photo-1641049542858-039c5f434f7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGVzZXJ0JTIwT2FzaXMlMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Relax in a luxurious desert villa with a private pool and stunning views.",
//     price: 1600,
//     location: "Phoenix",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     image : {
//       path : "https://plus.unsplash.com/premium_photo-1661951437532-7d92dec35849?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW4lMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Hit the slopes right from your door in this alpine ski chalet.",
//     price: 2000,
//     location: "Zermatt",
//     country: "Switzerland",
//   },
//   {
//     title: "Bohemian Studio Flat",
//     image : {
//       path : "https://images.unsplash.com/photo-1685540256938-f02082efaa25?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwdG9reW98ZW58MHx8MHx8fDA%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Colorful and creative studio space perfect for solo travelers or couples.",
//     price: 800,
//     location: "Berlin",
//     country: "Germany",
//   },
//   {
//     title: "Canal-Side Houseboat",
//     image : {
//       path : "https://images.unsplash.com/photo-1598598795006-ea2174659eaa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjByZXNvcnR8ZW58MHx8MHx8fDA%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Experience life on the water in a cozy houseboat on Amsterdam’s canals.",
//     price: 1100,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Jungle Treehouse Getaway",
//     image : {
//       path : "https://plus.unsplash.com/premium_photo-1738099068528-c806bfe80d5f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0JTIwaW4lMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Sleep among the treetops in this adventurous jungle treehouse.",
//     price: 1000,
//     location: "Ubud",
//     country: "Indonesia",
//   },
//   {
//     title: "Minimalist City Condo",
//     image : {
//       path : "https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Clean and modern condo in the city center with all essential amenities.",
//     price: 1000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Classic Parisian Apartment",
//     image : {
//       path : "https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
//       filename : "listingImg",
//     },    
//       description:
//       "Quintessential Paris apartment with balconies and Eiffel Tower views.",
//     price: 1400,
//     location: "Paris",
//     country: "France",
//   },
//   {
//     title: "Ocean-View Penthouse",
//     image : {
//       path : "https://images.unsplash.com/photo-1578439297699-eb414262c2de?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Top-floor penthouse with panoramic views of the sea and skyline.",
//     price: 2500,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Traditional Riad with Courtyard",
//     image : {
//       path : "https://images.unsplash.com/photo-1719299225572-7b3e0f041308?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhpc3RvcnklMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Moroccan-style home with tiled walls and an interior courtyard.",
//     price: 950,
//     location: "Marrakech",
//     country: "Morocco",
//   },
//   {
//     title: "Countryside Stone Cottage",
//     image : {
//       path : "https://images.unsplash.com/photo-1733038237915-f2541910393f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHZpbGxhJTIwaW4lMjB3b29kc3xlbnwwfHwwfHx8MA%3D%3D",
//       filename : "listingImg",
//     },    
//       description: "Rustic stone cottage surrounded by fields and rolling hills.",
//     price: 850,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Floating Bamboo Bungalow",
//     image : {
//       path : "https://images.unsplash.com/photo-1655183689956-59ef30f95db3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJlYWNoJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Eco-friendly floating bungalow perfect for disconnecting from tech.",
//     price: 750,
//     location: "Kanchanaburi",
//     country: "Thailand",
//   },
//   {
//     title: "Luxury Villa with Infinity Pool",
//     image : {
//       path : "https://images.unsplash.com/photo-1600538441454-db4e893d1938?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEx1eHVyeSUyMFZpbGxhJTIwd2l0aCUyMEluZmluaXR5JTIwUG9vbHxlbnwwfHwwfHx8MA%3D%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Spacious villa with private staff and a stunning infinity pool view.",
//     price: 3000,
//     location: "Santorini",
//     country: "Greece",
//   },
//   {
//     title: "Charming Farmhouse Stay",
//     image : {
//       path : "https://plus.unsplash.com/premium_photo-1694475477920-8064c7783ed9?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Live the farm life with fresh air, animals, and home-cooked meals.",
//     price: 700,
//     location: "Tuscany",
//     country: "Italy",
//   },
//   {
//     title: "Hilltop Dome Retreat",
//     image : {
//       path : "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxha2UlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Sleep under the stars in a geodesic dome with panoramic views.",
//     price: 1100,
//     location: "Nevada City",
//     country: "United States",
//   },
//   {
//     title: "Beach Bungalow Bliss",
//     image : {
//       path : "https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
//       filename : "listingImg",
//     },    
//       description: "Simple and serene bungalow steps from white sandy beaches.",
//     price: 950,
//     location: "Goa",
//     country: "India",
//   },
//   {
//     title: "Urban Industrial Loft",
//     image : {
//       path : "https://images.unsplash.com/photo-1650137938625-11576502aecd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
//       filename : "listingImg",
//     },    
//       description:
//       "Raw, exposed-brick loft with lots of character and city views.",
//     price: 1200,
//     location: "Toronto",
//     country: "Canada",
//   },
//   {
//     title: "Alpine Tiny Home",
//     image : {
//       path : "https://images.unsplash.com/photo-1607844205227-ba5026d108e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxwaW5lJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "A cozy, compact home perfect for solo or couples’ mountain escapes.",
//     price: 700,
//     location: "Innsbruck",
//     country: "Austria",
//   },
//   {
//     title: "Art-Filled Downtown Flat",
//     image : {
//       path : "https://images.unsplash.com/photo-1612320648993-61c1cd604b71?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
//       filename : "listingImg",
//     },    
//       description:
//       "Surrounded by local art and culture, this flat is perfect for creatives.",
//     price: 1050,
//     location: "Barcelona",
//     country: "Spain",
//   },
//   {
//     title: "Secluded Cliffside Retreat",
//     image : {
//       path : "https://images.unsplash.com/photo-1579264670959-286d7b06f1ae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJlYWNoJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Private cliffside home with unmatched ocean sunsets and peace.",
//     price: 1700,
//     location: "Big Sur",
//     country: "United States",
//   },
//   {
//     title: "Chic Rooftop Apartment",
//     image : {
//       path : "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
//       filename : "listingImg",
//     },    
//       description:
//       "Modern apartment with a large rooftop patio and skyline views.",
//     price: 1450,
//     location: "Chicago",
//     country: "United States",
//   },
//   {
//     title: "Lakeside Log Cabin",
//     image : {
//       path : "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjByZXNvcnR8ZW58MHx8MHx8fDA%3D",
//       filename : "listingImg",
//     },    
//       description: "Classic log cabin nestled beside a peaceful mountain lake.",
//     price: 1250,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Colonial Mansion Suite",
//     image : {
//       path : "https://images.unsplash.com/photo-1642095012245-bda8033e8ee3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbG9uaWFsJTIwYXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
//       filename : "listingImg",
//     },    
//       description:
//       "Stay in a restored colonial mansion full of vintage elegance.",
//     price: 1500,
//     location: "Havana",
//     country: "Cuba",
//   },
//   {
//     title: "Remote Desert Camp",
//     image : {
//       path : "https://images.unsplash.com/photo-1657707419206-1ee02449a7ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc29ydCUyMGluJTIwbmF0dXJlfGVufDB8fDB8fHww",
//       filename : "listingImg",
//     },    
//       description:
//       "Glamping tents in the middle of the desert with starry skies.",
//     price: 850,
//     location: "Wadi Rum",
//     country: "Jordan",
//   },
//   {
//     title: "Nordic Cabin with Sauna",
//     image : {
//       path : "https://images.unsplash.com/photo-1575819474446-a1acbd0652cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWluJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Modern wooden cabin with private sauna and snow-covered trees.",
//     price: 1350,
//     location: "Rovaniemi",
//     country: "Finland",
//   },
//   {
//     title: "City Center Heritage House",
//     image : {
//       path : "https://images.unsplash.com/photo-1707067804503-4a6effa46bf9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2l0eSUyMENlbnRlciUyMEhlcml0YWdlJTIwSG91c2UlMjAoTGlzYm9uKXxlbnwwfHwwfHx8MA%3D%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "Old-world charm meets modern comfort in the city’s historic core.",
//     price: 1150,
//     location: "Lisbon",
//     country: "Portugal",
//   },
//   {
//     title: "Beachside Bamboo Hut",
//     image : {
//       path : "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
//       filename : "listingImg",
//     },    
//       description:
//       "A humble bamboo hut right by the sea — fall asleep to the sound of waves.",
//     price: 650,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Modern Eco Pod",
//     image : {
//       path : "https://images.unsplash.com/photo-1634662593278-11d75aacab28?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW9kZXJuJTIwRWNvJTIwUG9kfGVufDB8fDB8fHww",
//       filename : "listingImg",
//     },    
//       description:
//       "Sustainable, stylish pod in nature with solar power and minimal footprint.",
//     price: 900,
//     location: "Queenstown",
//     country: "New Zealand",
//   },
// ];

// module.exports = { data: sampleListings };

const sampleListings = [
  {
    title: "Rustic Cabin in the Woods",
    image: {
      path: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImg",
    },
    description: "A peaceful retreat surrounded by trees and nature. Great for hiking and unplugging.",
    price: 1899,
    location: "Asheville",
    country: "United States",
    categories: ["Trending", "Nature Escapes", "Mountains", "Stays"]
  },
  {
    title: "Lakeview Mountain House",
    image: {
      path: "https://images.unsplash.com/photo-1697653664649-936ed36b3c8c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50YWluJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
      filename: "listingImg",
    },
    description: "Enjoy the view of the lake and mountains in this spacious family home.",
    price: 2399,
    location: "Lake Tahoe",
    country: "United States",
    categories: ["Trending", "Mountains", "Stays"]
  },
  {
    title: "Historic Apartment with Charm",
    image: {
      path: "https://plus.unsplash.com/premium_photo-1672191496375-9659b519bef2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb25pYWwlMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D",
      filename: "listingImg",
    },
    description: "Charming 19th-century apartment with modern amenities in a historic district.",
    price: 1199,
    location: "Edinburgh",
    country: "United Kingdom",
    categories: ["Urban", "Stays"]
  },
  {
    title: "Desert Oasis Villa",
    image: {
      path: "https://images.unsplash.com/photo-1641049542858-039c5f434f7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGVzZXJ0JTIwT2FzaXMlMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingImg",
    },
    description: "Relax in a luxurious desert villa with a private pool and stunning views.",
    price: 2699,
    location: "Phoenix",
    country: "United States",
    categories: ["Trending", "With Pool", "Nature Escapes"]
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    image: {
      path: "https://plus.unsplash.com/premium_photo-1661951437532-7d92dec35849?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW4lMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingImg",
    },
    description: "Hit the slopes right from your door in this alpine ski chalet.",
    price: 2199,
    location: "Zermatt",
    country: "Switzerland",
    categories: ["Snow", "Mountains", "Trending"]
  },
  {
    title: "Bohemian Studio Flat",
    image: {
      path: "https://images.unsplash.com/photo-1685540256938-f02082efaa25?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwdG9reW98ZW58MHx8MHx8fDA%3D",
      filename: "listingImg",
    },
    description: "Colorful and creative studio space perfect for solo travelers or couples.",
    price: 899,
    location: "Berlin",
    country: "Germany",
    categories: ["Urban", "Stays"]
  },
  {
    title: "Canal-Side Houseboat",
    image: {
      path: "https://images.unsplash.com/photo-1598598795006-ea2174659eaa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjByZXNvcnR8ZW58MHx8MHx8fDA%3D",
      filename: "listingImg",
    },
    description: "Experience life on the water in a cozy houseboat on Amsterdam’s canals.",
    price: 1190,
    location: "Amsterdam",
    country: "Netherlands",
    categories: ["Urban", "Trending"]
  },
  {
    title: "Jungle Treehouse Getaway",
    image: {
      path: "https://plus.unsplash.com/premium_photo-1738099068528-c806bfe80d5f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0JTIwaW4lMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D",
      filename: "listingImg",
    },
    description: "Sleep among the treetops in this adventurous jungle treehouse.",
    price: 999,
    location: "Ubud",
    country: "Indonesia",
    categories: ["Nature Escapes", "Stays"]
  },
  {
    title: "Minimalist City Condo",
    image: {
      path: "https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      filename: "listingImg",
    },
    description: "Clean and modern condo in the city center with all essential amenities.",
    price: 1099,
    location: "Tokyo",
    country: "Japan",
    categories: ["Urban"]
  },
  {
    title: "Classic Parisian Apartment",
    image: {
      path: "https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
      filename: "listingImg",
    },
    description: "Quintessential Paris apartment with balconies and Eiffel Tower views.",
    price: 1490,
    location: "Paris",
    country: "France",
    categories: ["Urban", "Trending"]
  },
  {
    title: "Traditional Riad with Courtyard",
    image: {
      path: "https://images.unsplash.com/photo-1719299225572-7b3e0f041308?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhpc3RvcnklMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingImg",
    },
    description: "Moroccan-style home with tiled walls and an interior courtyard.",
    price: 949,
    location: "Marrakech",
    country: "Morocco",
    categories: ["Stays", "Nature Escapes"]
  },
  {
    title: "Countryside Stone Cottage",
    image: {
      path: "https://images.unsplash.com/photo-1733038237915-f2541910393f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHZpbGxhJTIwaW4lMjB3b29kc3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingImg",
    },
    description: "Rustic stone cottage surrounded by fields and rolling hills.",
    price: 899,
    location: "Cotswolds",
    country: "United Kingdom",
    categories: ["Nature Escapes", "Mountains"]
  },
  {
    title: "Floating Bamboo Bungalow",
    image: {
      path: "https://images.unsplash.com/photo-1655183689956-59ef30f95db3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJlYWNoJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
      filename: "listingImg",
    },
    description: "Eco-friendly floating bungalow perfect for disconnecting from tech.",
    price: 759,
    location: "Kanchanaburi",
    country: "Thailand",
    categories: ["Beaches", "Nature Escapes"]
  },
  {
    title: "Luxury Villa with Infinity Pool",
    image: {
      path: "https://images.unsplash.com/photo-1600538441454-db4e893d1938?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEx1eHVyeSUyMFZpbGxhJTIwd2l0aCUyMEluZmluaXR5JTIwUG9vbHxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingImg",
    },
    description: "Spacious villa with private staff and a stunning infinity pool view.",
    price: 3099,
    location: "Santorini",
    country: "Greece",
    categories: ["Trending", "With Pool", "Beaches"]
  },
  {
    title: "Charming Farmhouse Stay",
    image: {
      path: "https://plus.unsplash.com/premium_photo-1694475477920-8064c7783ed9?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingImg",
    },
    description: "Live the farm life with fresh air, animals, and home-cooked meals.",
    price: 719,
    location: "Tuscany",
    country: "Italy",
    categories: ["Nature Escapes", "Stays"]
  },
  {
    title: "Hilltop Dome Retreat",
    image: {
      path: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxha2UlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D",
      filename: "listingImg",
    },
    description: "Sleep under the stars in a geodesic dome with panoramic views.",
    price: 1129,
    location: "Nevada City",
    country: "United States",
    categories: ["Mountains", "Nature Escapes"]
  },
  {
    title: "Beach Bungalow Bliss",
    image: {
      path: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingImg",
    },
    description: "Simple and serene bungalow steps from white sandy beaches.",
    price: 959,
    location: "Goa",
    country: "India",
    categories: ["Beaches", "Nature Escapes"]
  },
  {
    title: "Urban Industrial Loft",
    image: {
      path: "https://images.unsplash.com/photo-1650137938625-11576502aecd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
      filename: "listingImg",
    },
    description: "Raw, exposed-brick loft with lots of character and city views.",
    price: 1289,
    location: "Toronto",
    country: "Canada",
    categories: ["Urban"]
  },
  {
    title: "Alpine Tiny Home",
    image: {
      path: "https://images.unsplash.com/photo-1607844205227-ba5026d108e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxwaW5lJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
      filename: "listingImg",
    },
    description: "A cozy, compact home perfect for solo or couples’ mountain escapes.",
    price: 729,
    location: "Innsbruck",
    country: "Austria",
    categories: ["Mountains", "Snow"]
  },
  {
    title: "Art-Filled Downtown Flat",
    image: {
      path: "https://images.unsplash.com/photo-1612320648993-61c1cd604b71?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
      filename: "listingImg",
    },
    description: "Surrounded by local art and culture, this flat is perfect for creatives.",
    price: 1090,
    location: "Barcelona",
    country: "Spain",
    categories: ["Urban", "Stays"]
  },
  {
    title: "Azure Horizon Villa",
    image: {
      path: "https://images.unsplash.com/photo-1543489822-c49534f3271f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5maW5pdHklMjBwb29sfGVufDB8MHwwfHx8MA%3D%3D",
      filename: "listingImg",
    },
    description: "Enjoy your vacation in this villa with a breathtaking infinity pool overlooking the hills.",
    price: 3590,
    location: "Ubud",
    country: "Indonesia",
    categories: ["With Pool", "Nature Escapes"],
  },
  {
    title: "Palm Springs Pool Retreat",
    image: {
      path: "https://images.unsplash.com/photo-1669694575282-03ed7faf6360?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5ncyUyMHBvb2wlMjByZXNvcnR8ZW58MHwwfDB8fHww",
      filename: "listingImg",
    },
    description: "Modern desert retreat with a private pool and open-air living.",
    price: 890,
    location: "Palm Springs",
    country: "USA",
    categories: ["With Pool", "Urban"],
  },
  {
    title: "Santorini Cliffside Pool Villa",
    image: {
      path: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&auto=format&fit=crop&q=60",
      filename: "listingImg",
    },
    description: "Romantic villa with private plunge pool and sea views.",
    price: 2100,
    location: "Santorini",
    country: "Greece",
    categories: ["With Pool", "Beaches"],
  },

  // --- Beaches ---
  {
    title: "Maldives Overwater Bungalow",
    image: {
      path: "https://images.unsplash.com/photo-1602002418679-43121356bf41?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXMlMjByZXNvcnR8ZW58MHwwfDB8fHww",
      filename: "listingImg",
    },
    description: "Iconic ocean bungalow with direct beach access and crystal clear waters.",
    price: 3200,
    location: "Baa Atoll",
    country: "Maldives",
    categories: ["Beaches", "Trending"],
  },
  {
    title: "Tulum Beachfront Casa",
    image: {
      path: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60",
      filename: "listingImg",
    },
    description: "Boho-style beachfront home with hammocks and palm trees.",
    price: 980,
    location: "Tulum",
    country: "Mexico",
    categories: ["Beaches", "Nature Escapes"],
  },
  {
    title: "Bondi Beach Surf Shack",
    image: {
      path: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=900&auto=format&fit=crop&q=60",
      filename: "listingImg",
    },
    description: "Simple and cozy stay just steps away from Bondi's famous waves.",
    price: 600,
    location: "Sydney",
    country: "Australia",
    categories: ["Beaches", "Urban"],
  },

  // --- Snow ---
  {
    title: "Swiss Alps Winter Lodge",
    image: {
      path: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&auto=format&fit=crop&q=60",
      filename: "listingImg",
    },
    description: "Charming wooden lodge surrounded by snowy peaks and ski trails.",
    price: 1350,
    location: "Zermatt",
    country: "Switzerland",
    categories: ["Snow", "Mountains"],
  },
  {
    title: "Japanese Snow Ryokan",
    image: {
      path: "https://plus.unsplash.com/premium_photo-1661883132712-58b38588abbb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW5lc2UlMjBzbm93JTIwcmVzb3J0fGVufDB8fDB8fHww",
      filename: "listingImg",
    },
    description: "Traditional Japanese stay with hot springs and snow-capped views.",
    price: 1100,
    location: "Niseko",
    country: "Japan",
    categories: ["Snow", "Nature Escapes"],
  },
  {
    title: "Canadian Log Cabin",
    image: {
      path: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=60",
      filename: "listingImg",
    },
    description: "Rustic cabin nestled in the snowy forests of British Columbia.",
    price: 720,
    location: "Whistler",
    country: "Canada",
    categories: ["Snow", "Trending"],
  },

  // --- Extra mixed listing ---
  {
    title: "Bali Beach Pool Hideout",
    image: {
      path: "https://images.unsplash.com/photo-1630988276810-1565ec1b8ff3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwcmVzb3J0fGVufDB8fDB8fHww",
      filename: "listingImg",
    },
    description: "Private beach villa with a turquoise pool, steps from the ocean.",
    price: 1450,
    location: "Bali",
    country: "Indonesia",
    categories: ["With Pool", "Beaches"],
  },
];

module.exports = { data: sampleListings };

