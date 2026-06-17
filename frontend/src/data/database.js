export const categories = [
  {
    id: "cat_1",
    name: "Agarbatti",
    slug: "agarbatti",
    description:
      "Premium incense sticks crafted for fragrance and spiritual harmony.",
    image: "/images/categories/agarbatti.webp",
    status: "active",
  },
  {
    id: "cat_2",
    name: "Bags",
    slug: "bags",
    description: "Durable and high-quality packaging and utility bags.",
    image: "/images/categories/bags.webp",
    status: "active",
  },
];

export const products = [
  {
    id: "prod_1",
    name: "Premium Jute Bag Large",
    slug: "premium-jute-bag-large",

    description:
      "High-quality durable jute bag designed for daily and commercial use.",

    brand: "Geffron",
    categoryId: "cat_2",

    productType: "Shoulder Bag",

    material: "Jute",
    modelCode: "GB-001",

    status: "active",

    isTopProduct: true,

    mainImage: "/images/products/jute/main.jpg",
    images: [
      "/images/products/jute/1.jpg",
      "/images/products/jute/2.jpg",
      "/images/products/jute/3.jpg",
    ],

    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },

  {
    id: "prod_2",
    name: "Warli Printed Jute Bag",
    slug: "warli-printed-jute-bag",

    description:
      "Traditional Warli printed eco-friendly jute bag for daily use.",

    brand: "Geffron",
    categoryId: "cat_2",

    productType: "Warli Printed Bag",

    material: "Jute",
    modelCode: "GB-002",

    status: "active",

    isTopProduct: false,

    mainImage: "/images/products/warli/main.jpg",
    images: ["/images/products/warli/1.jpg", "/images/products/warli/2.jpg"],

    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },

  {
    id: "prod_3",
    name: "Lavender Agarbatti",
    slug: "lavender-agarbatti",

    description:
      "Premium incense sticks with long-lasting soothing lavender fragrance.",

    brand: "Geffron",
    categoryId: "cat_1",

    productType: "Lavender Stick",

    material: "Natural herbs",
    modelCode: "AG-101",

    status: "active",

    isTopProduct: true,

    mainImage: "/images/products/lavender/main.jpg",
    images: [
      "/images/products/lavender/1.jpg",
      "/images/products/lavender/2.jpg",
      "/images/products/lavender/3.jpg",
    ],

    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },
];

export const productSpecs = [
  {
    productId: "prod_1",

    dimensions: {
      length: 40,
      width: 30,
      height: 10,
    },

    weightOptions: ["200gm", "500gm", "1kg"],
    count: 1,

    packaging: "Folded eco packaging",

    benefits: ["Durable stitching", "Reusable", "Eco-friendly material"],
  },

  {
    productId: "prod_3",

    length: "9 inch",
    weightOptions: ["30gm", "60gm", "100gm"],
    burnTime: "45–60 min",
    diameter: "2.5 mm",

    packaging: "Box pack",
    count: 20,

    benefits: [
      "Long-lasting fragrance",
      "Low smoke",
      "Natural ingredients",
      "Spiritual calm",
    ],
  },
];

export const pricing = [
  {
    productId: "prod_1",
    price: 250,
    discountPercent: 10,
    discountedPrice: 225,
    sellingPrice: 225,
    currency: "INR",
    stock: 100,
    status: "active",
  },
  {
    productId: "prod_3",
    price: 50,
    discountPercent: 5,
    discountedPrice: 47.5,
    sellingPrice: 47.5,
    currency: "INR",
    stock: 500,
    status: "active",
  },
];

export const delivery = [
  {
    productId: "prod_1",
    deliveryCharges: 40,
    deliveryTime: "3-5 days",
    shippingType: "standard",
    status: "active",
  },
  {
    productId: "prod_3",
    deliveryCharges: 20,
    deliveryTime: "2-4 days",
    shippingType: "standard",
    status: "active",
  },
];
