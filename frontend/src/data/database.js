import juteProduct from "../assets/images/product/jute-product.webp";

import mogaraEssence from "../assets/images/product/mogara-essence.png";
import namoNamah from "../assets/images/product/namo-namah.png";
import oudhSwarna from "../assets/images/product/oudh-swarna.png";
import walaSerenity from "../assets/images/product/wala-serenity.png";
import anantChandan from "../assets/images/product/anant-chandan.png";
import goldenCrown from "../assets/images/product/golden-crown.png";
import haritPanadi from "../assets/images/product/harit-panadi.png";
import lobanAuraCamphor from "../assets/images/product/loban-aura-camphor.png";

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
  // ===========================
  // BAGS
  // ===========================

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
    isBestSellerProduct: true,

    mainImage: juteProduct,

    images: [juteProduct, juteProduct, juteProduct],

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
    isBestSellerProduct: false,

    mainImage: juteProduct,

    images: [juteProduct, juteProduct],

    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },

  // ===========================
  // AGARBATTI
  // ===========================

  {
    id: "prod_3",

    name: "Mogara Essence Agarbatti",
    slug: "mogara-essence-agarbatti",

    description:
      "Premium Mogara fragrance incense sticks with a soothing floral aroma.",

    brand: "Geffron",

    categoryId: "cat_1",

    productType: "Incense Stick",

    material: "Natural Herbs",

    modelCode: "AG-101",

    status: "active",

    isTopProduct: true,
    isBestSellerProduct: true,

    mainImage: mogaraEssence,

    images: [mogaraEssence],

    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },

  {
    id: "prod_4",

    name: "Namo Namah Agarbatti",
    slug: "namo-namah-agarbatti",

    description: "Divine fragrance crafted for daily prayers and meditation.",

    brand: "Geffron",

    categoryId: "cat_1",

    productType: "Incense Stick",

    material: "Natural Herbs",

    modelCode: "AG-102",

    status: "active",

    isTopProduct: true,
    isBestSellerProduct: false,

    mainImage: namoNamah,

    images: [namoNamah],

    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },

  {
    id: "prod_5",

    name: "Oudh Swarna Agarbatti",
    slug: "oudh-swarna-agarbatti",

    description: "Rich oudh fragrance with a luxurious and long-lasting aroma.",

    brand: "Geffron",

    categoryId: "cat_1",

    productType: "Incense Stick",

    material: "Natural Herbs",

    modelCode: "AG-103",

    status: "active",

    isTopProduct: false,
    isBestSellerProduct: true,

    mainImage: oudhSwarna,

    images: [oudhSwarna],

    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },

  {
    id: "prod_6",

    name: "Wala Serenity Agarbatti",
    slug: "wala-serenity-agarbatti",

    description:
      "Refreshing herbal fragrance that creates a peaceful ambience.",

    brand: "Geffron",

    categoryId: "cat_1",

    productType: "Incense Stick",

    material: "Natural Herbs",

    modelCode: "AG-104",

    status: "active",

    isTopProduct: false,
    isBestSellerProduct: false,

    mainImage: walaSerenity,

    images: [walaSerenity],

    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },

  {
    id: "prod_7",

    name: "Anant Chandan Agarbatti",
    slug: "anant-chandan-agarbatti",

    description:
      "Classic sandalwood fragrance for spiritual rituals and relaxation.",

    brand: "Geffron",

    categoryId: "cat_1",

    productType: "Incense Stick",

    material: "Natural Herbs",

    modelCode: "AG-105",

    status: "active",

    isTopProduct: true,
    isBestSellerProduct: true,

    mainImage: anantChandan,

    images: [anantChandan],

    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },

  {
    id: "prod_8",

    name: "Golden Crown Agarbatti",
    slug: "golden-crown-agarbatti",

    description:
      "Premium incense sticks offering a royal and pleasant fragrance.",

    brand: "Geffron",

    categoryId: "cat_1",

    productType: "Incense Stick",

    material: "Natural Herbs",

    modelCode: "AG-106",

    status: "active",

    isTopProduct: false,
    isBestSellerProduct: true,

    mainImage: goldenCrown,

    images: [goldenCrown],

    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },

  {
    id: "prod_9",

    name: "Harit Panadi Agarbatti",
    slug: "harit-panadi-agarbatti",

    description: "Natural herbal incense with a refreshing green fragrance.",

    brand: "Geffron",

    categoryId: "cat_1",

    productType: "Incense Stick",

    material: "Natural Herbs",

    modelCode: "AG-107",

    status: "active",

    isTopProduct: false,
    isBestSellerProduct: false,

    mainImage: haritPanadi,

    images: [haritPanadi],

    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },

  {
    id: "prod_10",

    name: "Loban Aura Camphor Agarbatti",
    slug: "loban-aura-camphor-agarbatti",

    description:
      "Premium Loban and Camphor incense for purification and devotion.",

    brand: "Geffron",

    categoryId: "cat_1",

    productType: "Incense Stick",

    material: "Natural Herbs",

    modelCode: "AG-108",

    status: "active",

    isTopProduct: true,
    isBestSellerProduct: true,

    mainImage: lobanAuraCamphor,

    images: [lobanAuraCamphor],

    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },
];

export const productSpecs = [
  // ===========================
  // BAG PRODUCTS
  // ===========================

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
    productId: "prod_2",

    dimensions: {
      length: 38,
      width: 30,
      height: 8,
    },

    weightOptions: ["200gm", "500gm"],
    count: 1,

    packaging: "Eco-friendly folded packaging",

    benefits: [
      "Traditional Warli design",
      "Reusable",
      "Strong handles",
      "Eco-friendly material",
    ],
  },

  // ===========================
  // AGARBATTI PRODUCTS
  // ===========================

  {
    productId: "prod_3",

    length: "9 inch",
    weightOptions: ["30gm", "60gm", "100gm"],

    burnTime: "45–60 min",
    diameter: "2.5 mm",

    packaging: "Premium Box Pack",
    count: 20,

    benefits: [
      "Long-lasting fragrance",
      "Low smoke",
      "Natural ingredients",
      "Floral soothing aroma",
    ],
  },

  {
    productId: "prod_4",

    length: "9 inch",
    weightOptions: ["30gm", "60gm", "100gm"],

    burnTime: "45–60 min",
    diameter: "2.5 mm",

    packaging: "Premium Box Pack",
    count: 20,

    benefits: [
      "Divine fragrance",
      "Ideal for prayer",
      "Long-lasting aroma",
      "Low smoke",
    ],
  },

  {
    productId: "prod_5",

    length: "9 inch",
    weightOptions: ["30gm", "60gm", "100gm"],

    burnTime: "45–60 min",
    diameter: "2.5 mm",

    packaging: "Premium Box Pack",
    count: 20,

    benefits: [
      "Luxury oudh fragrance",
      "Premium aroma",
      "Long burning time",
      "Relaxing atmosphere",
    ],
  },

  {
    productId: "prod_6",

    length: "9 inch",
    weightOptions: ["30gm", "60gm", "100gm"],

    burnTime: "45–60 min",
    diameter: "2.5 mm",

    packaging: "Premium Box Pack",
    count: 20,

    benefits: [
      "Refreshing fragrance",
      "Natural ingredients",
      "Low smoke",
      "Peaceful ambience",
    ],
  },

  {
    productId: "prod_7",

    length: "9 inch",
    weightOptions: ["30gm", "60gm", "100gm"],

    burnTime: "45–60 min",
    diameter: "2.5 mm",

    packaging: "Premium Box Pack",
    count: 20,

    benefits: [
      "Pure sandalwood fragrance",
      "Spiritual relaxation",
      "Long-lasting aroma",
      "Natural ingredients",
    ],
  },

  {
    productId: "prod_8",

    length: "9 inch",
    weightOptions: ["30gm", "60gm", "100gm"],

    burnTime: "45–60 min",
    diameter: "2.5 mm",

    packaging: "Premium Box Pack",
    count: 20,

    benefits: [
      "Royal fragrance",
      "Premium quality",
      "Low smoke",
      "Long-lasting freshness",
    ],
  },

  {
    productId: "prod_9",

    length: "9 inch",
    weightOptions: ["30gm", "60gm", "100gm"],

    burnTime: "45–60 min",
    diameter: "2.5 mm",

    packaging: "Premium Box Pack",
    count: 20,

    benefits: [
      "Herbal fragrance",
      "Natural ingredients",
      "Fresh aroma",
      "Eco-friendly product",
    ],
  },

  {
    productId: "prod_10",

    length: "9 inch",
    weightOptions: ["30gm", "60gm", "100gm"],

    burnTime: "45–60 min",
    diameter: "2.5 mm",

    packaging: "Premium Box Pack",
    count: 20,

    benefits: [
      "Loban and camphor fragrance",
      "Purifying aroma",
      "Ideal for rituals",
      "Long-lasting fragrance",
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
