export const localProducts = [
  {
    id: 1,
    name: "Arabica Coffee Roasted",
    category: "arabica",
    stockStatus: "Ready Stock",
    image: "/image-product/Arabica-Cofee-Roasted.png",
    description: `We have coffee products where there are several types of coffee that we sell...`,
    gallery: [
      "/img-detail-product/Coffe-Green-Bean.png",
      "/img-detail-product/Coffe-Green-Bean2.png",
      "/img-detail-product/Coffe-Green-Bron.png",
      "/img-detail-product/Coffe-Green.png",
      "/img-detail-product/Coklat-Coffe.png",
      {
        type: "video",
        src: "/img-detail-product/Vidio-Kopi.mp4",
        thumbnail: "/img-detail-product/Vidio-Kopi.mp4"
      }
    ],
    info: {
      experience: "Have been a leading green beans suppliers since 2000.",
      productionTime: "In the production process, we need 1–5 weeks...",
      minimalOrder: "20 Kilos for minimal orders & 1-5 Kilos for samples",
      certification: "HALAL Certificates, Organic Farming Certificates..."
    },
    specs: {
      region: "Temanggung, Central Java",
      altitude: "900m",
      varieties: "Klon'a BP308",
      process: "Natural",
      cuppingNotes: "Rock Sugar, Chocolate, Walnut, Palmyra Fruit",
      shelfLife: "2 Year"
    },
    characteristics: {
      physical: {
        color: "Green",
        viscosity: "Pourable, not more than 600 – 1500 cps at 25-30 °C"
      },
      chemical: {
        caffeine: "2–3%",
        tannins: "3–5%",
        proteins: "13% proteins",
        fixedOils: "10–15% fixed oils"
      }
    }
  },
  {
    id: 2,
    name: "Arabica Coffee Roasted Premium",
    category: "arabica",
    stockStatus: "Pre-Order",
    image: "/image-product/Arabica-Cofee-Roasted1.png",
    description: "Premium Arabica coffee beans with deep flavor and strong aroma...",
    gallery: [
      "/img-detail-product/Coffe-Green-Bean2.png",
      "/img-detail-product/Coffe-Green-Bron.png"
    ],
    info: {
      experience: "Over 15 years experience exporting Arabica beans globally.",
      productionTime: "2–3 weeks after confirmed order.",
      minimalOrder: "25 kg MOQ, sample 2 kg available.",
      certification: "ISO, HALAL, Fair Trade"
    },
    specs: {
      region: "Aceh Gayo",
      altitude: "1200–1500 masl",
      varieties: "Typica, Bourbon",
      process: "Fully Washed",
      cuppingNotes: "Berries, Cocoa, Floral",
      shelfLife: "1.5 Year"
    },
    characteristics: {
      physical: {
        color: "Dark Brown",
        viscosity: "Thick body, strong crema"
      },
      chemical: {
        caffeine: "1.2–1.5%",
        acidity: "Medium-High",
        oils: "Natural coffee oils present",
        pH: "5.0–5.5"
      }
    }
  },
  {
    id: 3,
    name: "Robusta Coffee Roasted",
    category: "robusta",
    stockStatus: "Ready Stock",
    image: "/image-product/Robusta-Cofe.png",
    description: "Premium grade roasted Arabica with enhanced aroma and flavor balance...",
    gallery: ["/img-detail-product/Coffe-Green-Bron.png"],
    info: {
      experience: "10+ years with premium Arabica sourcing.",
      productionTime: "1–2 weeks",
      minimalOrder: "15 kg",
      certification: "USDA Organic, HALAL"
    },
    specs: {
      region: "Toraja, Sulawesi",
      altitude: "1400 masl",
      varieties: "Toraja Typica",
      process: "Semi-Washed",
      cuppingNotes: "Fruity, Brown Sugar, Floral",
      shelfLife: "1 Year"
    },
    characteristics: {
      physical: {
        color: "Medium Roast",
        viscosity: "Smooth and light-bodied"
      },
      chemical: {
        caffeine: "1.5%",
        acidity: "Balanced",
        proteins: "12%",
        oilContent: "Low"
      }
    }
  },
  {
    id: 4,
    name: "Green Coffee Bean",
    category: "arabica",
    stockStatus: "Pre-Order",
    image: "/image-product/Green-Cofe.png",
    description: "Robusta coffee with strong body and bold taste...",
    gallery: ["/img-detail-product/Coffe-Green.png"],
    info: {
      experience: "Exporting Robusta since 2010",
      productionTime: "2–4 weeks",
      minimalOrder: "20–30 kg",
      certification: "SNI, HALAL"
    },
    specs: {
      region: "Lampung",
      altitude: "500–800 masl",
      varieties: "Local Robusta",
      process: "Dry Process",
      cuppingNotes: "Earthy, Dark Chocolate",
      shelfLife: "2 Years"
    },
    characteristics: {
      physical: {
        color: "Dark Roast",
        viscosity: "Heavy, Bold"
      },
      chemical: {
        caffeine: "2.5%",
        acidity: "Low",
        oils: "Moderate",
        sugar: "2–3%"
      }
    }
  },
  {
    id: 5,
    name: "Black Coffee",
    category: "robusta",
    stockStatus: "Ready Stock",
    image: "/image-product/Black-Cofe.png",
    description: "Instant black coffee made from selected Robusta beans...",
    gallery: ["/img-detail-product/Coklat-Coffe.png"],
    info: {
      experience: "Manufacturing black coffee since 2015",
      productionTime: "1–2 weeks",
      minimalOrder: "10 kg",
      certification: "BPOM Certified, HALAL"
    },
    specs: {
      region: "Sumatra",
      altitude: "700 masl",
      varieties: "Robusta",
      process: "Spray Dried",
      cuppingNotes: "Bittersweet, Woody",
      shelfLife: "2.5 Years"
    },
    characteristics: {
      physical: {
        color: "Dark Black",
        viscosity: "Powder (instant)"
      },
      chemical: {
        caffeine: "3%",
        sugar: "0%",
        moisture: "Below 5%",
        ash: "1.2%"
      }
    }
  },
  {
    id: 6,
    name: "Liberica Coffee",
    category: "liberica",
    stockStatus: "Ready Stock",
    image: "/image-product/Liberikan-Cofe.png",
    description: "Rare Liberica beans with unique aroma and fruity character...",
    gallery: ["/img-detail-product/Outlined.png"],
    info: {
      experience: "Specialty coffee producer since 2018",
      productionTime: "2 weeks after order",
      minimalOrder: "10–15 kg",
      certification: "Direct Trade, HALAL"
    },
    specs: {
      region: "Bengkulu",
      altitude: "800–1000 masl",
      varieties: "Liberica",
      process: "Wet Hulled",
      cuppingNotes: "Jackfruit, Tobacco, Woody",
      shelfLife: "1.5 Years"
    },
    characteristics: {
      physical: {
        color: "Brownish",
        viscosity: "Smooth, Balanced body"
      },
      chemical: {
        caffeine: "1.8%",
        pH: "5.3",
        sugar: "1%",
        fixedOils: "8–10%"
      }
    }
  }
];
