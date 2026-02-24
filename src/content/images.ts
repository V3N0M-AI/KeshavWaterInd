// Centralized image registry
// Update file paths here to swap visuals across the site without touching page code.

// NOTE: Keep keys stable; only change imports to replace assets.

// ABOUT (Editorial Mosaic)
import aboutTopWide from '../assets/hero-water-plant.jpg'
import aboutBottomLeft from '../assets/dialysis-ro.jpg'
import aboutBottomRight from '../assets/ro-plant.jpg'

// HOME
import homeHero from '../assets/hero-water-plant.jpg'
import homeFeature from '../assets/WhatsApp Image 2026-02-24 at 10.17.24 AM (3).jpeg'

// PRODUCTS (anchors)
import productDialysis from '../assets/dialysis-ro.jpg'
import productEtp from '../assets/etp-plant.jpg'
import productStp from '../assets/stp-plant.jpg'
import productIndustrialRo from '../assets/ro-plant.jpg'
import productCommercialRo from '../assets/ro-plant.jpg'
import productSoftener from '../assets/dm-softener.jpg'
import productDmPlant from '../assets/dm-softener.jpg'

// PROJECTS / INSTALLATIONS (Clients)
import projectA from '../assets/WhatsApp Image 2026-02-24 at 10.17.23 AM (1).jpeg'
import projectB from '../assets/WhatsApp Image 2026-02-24 at 10.17.24 AM (1).jpeg'
import projectC from '../assets/WhatsApp Image 2026-02-24 at 10.17.25 AM (1).jpeg'

export const IMAGES = {
  about: {
    topWide: aboutTopWide, // about us img 1 path
    bottomLeft: aboutBottomLeft, // about us img 2 path
    bottomRight: aboutBottomRight, // about us img 3 path
  },
  home: {
    hero: homeHero,
    feature: homeFeature,
  },
  products: {
    industrialRo: productIndustrialRo,
    commercialRo: productCommercialRo,
    softener: productSoftener,
    dmPlant: productDmPlant,
    etp: productEtp,
    stp: productStp,
    dialysis: productDialysis,
  },
  projects: {
    a: projectA,
    b: projectB,
    c: projectC,
  },
} as const
