import { Contact } from "./contants";

export const locations = [
  {
    id: "london",
    name: "London Clinic",
    address: "151 Lavender Hill",
    city: "London",
    postcode: "SW11 5QJ",
    phone: Contact.LONDON_PHONE,
    email: "london@agelessblissful.com",
    image: "https://i.pinimg.com/originals/9a/22/61/9a2261b14ef3fb8bae5f4da4ddfa7acc.jpg",
    interiorImage: "https://i.pinimg.com/736x/cc/66/0e/cc660ee6f8f8b2559d691c077f9a4f63.jpg",
    description: "Our flagship London clinic offers a luxurious and tranquil environment for all your aesthetic treatment needs. Located in the heart of Battersea, we provide easy access to premium treatments in a sophisticated setting.",
    features: [
      "State-of-the-art treatment rooms",
      "Comfortable consultation areas",
      "Private parking available",
      "Wheelchair accessible",
      "Free WiFi",
      "Refreshment area"
    ],
    openingHoursText: "Mon-Fri: 9AM-6PM, Sat: 9AM-5PM",
    openingHours: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 6:00 PM",
      "Saturday": "9:00 AM - 5:00 PM",
      "Sunday": "Closed"
    },
    transport: {
      tube: "Clapham Junction (5 min walk)",
      bus: "Routes 77, 87, 156, 219",
      parking: "Free parking available on-site",
      accessibility: "Fully wheelchair accessible"
    },
    nearestStation: "Clapham Junction",
    nearby: [
      "Battersea Park - 10 min walk",
      "Clapham Junction Station - 5 min walk",
      "Northcote Road shops - 8 min walk",
      "Battersea Power Station - 15 min walk"
    ]
  },
  {
    id: "northampton",
    name: "Northampton Clinic",
    address: "Abington Street",
    city: "Northampton",
    postcode: "NN1 2AJ",
    phone: Contact.NORTHAMPTON_PHONE,
    email: "northampton@agelessblissful.com",
    image: "https://i.pinimg.com/originals/79/a4/d4/79a4d4b9990351bc3ee1c996ef26e48b.jpg",
    interiorImage: "https://i.pinimg.com/736x/66/e0/84/66e084b0fb0c83882d1b05c08daa7091.jpg",
    description: "Our Northampton clinic brings premium aesthetic treatments to the heart of the town center. With modern facilities and a welcoming atmosphere, we provide exceptional care in a convenient location.",
    features: [
      "Modern treatment facilities",
      "Spacious waiting area",
      "Town center location",
      "Accessible entrance",
      "Complimentary WiFi",
      "Tea and coffee facilities"
    ],
    openingHoursText: "Mon-Fri: 9AM-6PM, Sat: 9AM-5PM",
    openingHours: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 6:00 PM",
      "Saturday": "9:00 AM - 5:00 PM",
      "Sunday": "Closed"
    },
    transport: {
      train: "Northampton Station (10 min walk)",
      bus: "Town center bus routes",
      parking: "Public car parks nearby",
      accessibility: "Ground floor access"
    },
    nearestStation: "Northampton Station",
    nearby: [
      "Grosvenor Shopping Centre - 2 min walk",
      "Market Square - 5 min walk",
      "Northampton Station - 10 min walk",
      "Delapré Abbey - 15 min drive"
    ]
  },
  {
    id: "lagos",
    name: "Lagos Clinic",
    address: "24 Awoniyi Street, off Osolo Way",
    city: "Ajao Estate, Lagos",
    postcode: "101233",
    phone: Contact.LAGOS_PHONE,
    email: "lagos@agelessblissful.com",
    image: "https://i.pinimg.com/originals/9a/22/61/9a2261b14ef3fb8bae5f4da4ddfa7acc.jpg",
    interiorImage: "https://i.pinimg.com/736x/cc/66/0e/cc660ee6f8f8b2559d691c077f9a4f63.jpg",
    description: "Our Lagos clinic offers premium aesthetic treatments in the heart of Ajao Estate. Experience world-class care in a serene and modern environment.",
    features: [
      "Modern treatment facilities",
      "Comfortable waiting area",
      "Convenient location",
      "Air-conditioned environment",
      "Complimentary WiFi",
      "Refreshment area"
    ],
    openingHoursText: "Mon-Fri: 9AM-6PM, Sat: 9AM-5PM",
    openingHours: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 6:00 PM",
      "Saturday": "9:00 AM - 5:00 PM",
      "Sunday": "Closed"
    },
    transport: {
      parking: "Street parking available",
      accessibility: "Ground floor access",
      bus: "Nearby bus routes"
    },
    nearestStation: "Mushin, Ikeja 102215, Lagos",
    nearby: [
      "Ajao Estate Market - 5 min walk",
      "Osolo Way - 2 min walk",
      "Murtala Muhammed International Airport - 15 min drive",
      "Ikeja City Mall - 20 min drive"
    ]
  }
]