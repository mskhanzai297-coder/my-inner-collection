import { Product } from '../types';

import heroImg from '../assets/images/hero_luxury_banner_1791596069367.jpg';
import ladiesInnerwearImg from '../assets/images/cat_ladies_innerwear_1791596116071.jpg';
import mensInnerwearImg from '../assets/images/cat_mens_innerwear_1791596128465.jpg';
import lingerieNightwearImg from '../assets/images/cat_lingerie_nightwear_1791596140265.jpg';
import personalCareImg from '../assets/images/cat_personal_care_1791596151269.jpg';
import ladiesClothingImg from '../assets/images/cat_ladies_clothing_1791596338143.jpg';
import childrenClothingImg from '../assets/images/cat_children_clothing_1791596349394.jpg';

export const CATEGORY_METADATA = [
  {
    id: 'ladies-innerwear',
    title: "Ladies' Underwear",
    subtitle: 'Ultra-soft seamless bras, briefs, and contour shaping essentials',
    image: ladiesInnerwearImg,
    itemCount: 4,
  },
  {
    id: 'mens-innerwear',
    title: "Men's Underwear",
    subtitle: 'Combed cotton boxer briefs, anti-chafing trunks & daily vests',
    image: mensInnerwearImg,
    itemCount: 4,
  },
  {
    id: 'lingerie-nightwear',
    title: 'Lingerie & Nightwear',
    subtitle: 'Silky satin robes, delicate lace chemises & lounge sets',
    image: lingerieNightwearImg,
    itemCount: 3,
  },
  {
    id: 'ladies-clothing',
    title: "Ladies' Clothing",
    subtitle: 'Relaxed linen-cotton co-ords, premium loungewear & modest daily wear',
    image: ladiesClothingImg,
    itemCount: 3,
  },
  {
    id: 'children-clothing',
    title: "Children's Clothing",
    subtitle: 'Hypoallergenic organic cotton loungewear and snug everyday sets',
    image: childrenClothingImg,
    itemCount: 2,
  },
  {
    id: 'personal-care',
    title: 'Hair Removal & Personal Care',
    subtitle: 'Gentle sensitive depilatory creams, calming lotions & pH washes',
    image: personalCareImg,
    itemCount: 3,
  },
];

export const PRODUCTS: Product[] = [
  // 1. Ladies' Innerwear
  {
    id: 'mic-li-001',
    name: 'Seamless Cloud-Touch Wireless Bra',
    category: 'ladies-innerwear',
    categoryLabel: "Ladies' Innerwear",
    price: 1850,
    originalPrice: 2200,
    rating: 4.9,
    reviewsCount: 38,
    image: ladiesInnerwearImg,
    description: 'Designed for invisible support under eastern and western attire. Crafted from ultra-smooth micro-knit fabric with zero underwires, molded breathable cups, and wide anti-dig shoulder bands.',
    fabricOrMaterial: '78% Polyamide, 22% Elastane Microfiber',
    sizes: ['32B', '34B', '36B', '36C', '38C', '40D'],
    colors: [
      { name: 'Nude Almond', hex: '#d2b196' },
      { name: 'Classic Black', hex: '#18181b' },
      { name: 'Champagne Cream', hex: '#f3e8db' }
    ],
    inStock: true,
    stockCount: 24,
    badge: 'Best Seller',
    careInstructions: 'Hand wash cold or gentle machine wash in laundry bag. Do not tumble dry.',
    features: ['Zero underwire digging', 'Invisible under sheer fabrics', 'Anti-odor moisture-wicking weave', 'Soft-touch brushed clasp']
  },
  {
    id: 'mic-li-002',
    name: 'Pure Combed Cotton High-Waist Panties (Pack of 3)',
    category: 'ladies-innerwear',
    categoryLabel: "Ladies' Innerwear",
    price: 1450,
    originalPrice: 1750,
    rating: 4.8,
    reviewsCount: 45,
    image: ladiesInnerwearImg,
    description: 'Everyday breathability crafted for Pakistan’s climate. 100% combed long-staple cotton with gentle covered elastic that never bites into your skin. Full rear coverage for all-day peace of mind.',
    fabricOrMaterial: '100% Combed Breathable Cotton with Pure Cotton Gusset',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Trio Pastel Set', hex: '#e7d8cb' },
      { name: 'Monochrome Set', hex: '#27272a' }
    ],
    inStock: true,
    stockCount: 35,
    careInstructions: 'Machine washable at 40°C. Resilient double-needle stitching.',
    features: ['100% pure cotton breathable gusset', 'Non-binding waistband', 'Preshrunk fabric resistant to fading']
  },
  {
    id: 'mic-li-003',
    name: 'Sculpt Comfort Tummy-Tuck High Waist Shaper Brief',
    category: 'ladies-innerwear',
    categoryLabel: "Ladies' Innerwear",
    price: 2150,
    originalPrice: 2600,
    rating: 4.7,
    reviewsCount: 22,
    image: ladiesInnerwearImg,
    description: 'Instant silhouette smoothing under party wear, lawn kurtas, and formal evening wear. Targeted core compression with non-slip silicone interior ribbing so it stays in place without rolling down.',
    fabricOrMaterial: 'Targeted High-Density Spandex & Cotton Blend',
    sizes: ['M', 'L', 'XL', '2XL', '3XL'],
    colors: [
      { name: 'Skin Beige', hex: '#d5b99f' },
      { name: 'Midnight Black', hex: '#181818' }
    ],
    inStock: true,
    stockCount: 18,
    features: ['Non-slip interior waistband grip', 'Breathable multi-zone compression', 'Discreet invisible lines']
  },
  {
    id: 'mic-li-004',
    name: 'Everyday Comfort Padded T-Shirt Bra',
    category: 'ladies-innerwear',
    categoryLabel: "Ladies' Innerwear",
    price: 1650,
    rating: 4.8,
    reviewsCount: 29,
    image: ladiesInnerwearImg,
    description: 'A dependable wardrobe staple with light featherlight memory foam cups. Smooth contours prevent nipple show-through while retaining natural breast shape.',
    fabricOrMaterial: 'Cotton & Spandex Knit with Soft Foam',
    sizes: ['32B', '34B', '36B', '38B', '36C', '38C'],
    colors: [
      { name: 'Dusty Rose', hex: '#c59b97' },
      { name: 'Warm Mocha', hex: '#87695d' },
      { name: 'Pure Black', hex: '#1c1c1e' }
    ],
    inStock: true,
    stockCount: 30,
    features: ['Ultra-thin memory foam padding', 'Multiway convertible straps', 'Soft side wings for back smoothing']
  },

  // 2. Men's Innerwear
  {
    id: 'mic-mi-001',
    name: 'Modal Silk-Touch Men’s Boxer Briefs (Pack of 2)',
    category: 'mens-innerwear',
    categoryLabel: "Men's Innerwear",
    price: 1750,
    originalPrice: 2100,
    rating: 4.9,
    reviewsCount: 52,
    image: mensInnerwearImg,
    description: 'Engineered for absolute all-day freshness. Ultra-soft Austrian beechwood modal fabric that is three times softer than cotton and naturally resistant to heat build-up. Anti-roll waistband with ergonomic U-pouch.',
    fabricOrMaterial: '95% Micro Modal, 5% Elastane',
    sizes: ['M (30-32)', 'L (33-35)', 'XL (36-38)', '2XL (39-42)'],
    colors: [
      { name: 'Charcoal & Onyx', hex: '#333338' },
      { name: 'Navy & Slate', hex: '#212c40' }
    ],
    inStock: true,
    stockCount: 40,
    badge: 'Popular',
    features: ['Silky non-chafing inseams', 'Ergonomic 3D contour pouch', 'Stays cool in hot temperatures']
  },
  {
    id: 'mic-mi-002',
    name: 'Premium Combed Ribbed Cotton Undershirt Vest (Pack of 2)',
    category: 'mens-innerwear',
    categoryLabel: "Men's Innerwear",
    price: 1350,
    rating: 4.8,
    reviewsCount: 31,
    image: mensInnerwearImg,
    description: 'Classic ribbed cut with deep armholes and collar line that stays hidden beneath dress shirts and traditional Shalwar Kameez. Absorbs sweat and breathes freely throughout warm days.',
    fabricOrMaterial: '100% Super-Combed Pakistani Long-Staple Cotton',
    sizes: ['S (36)', 'M (38)', 'L (40)', 'XL (42)', '2XL (44)'],
    colors: [
      { name: 'Crisp White', hex: '#f8f8fa' },
      { name: 'Heather Grey', hex: '#9e9e9e' }
    ],
    inStock: true,
    stockCount: 50,
    features: ['Deep scoop neck stays concealed', 'Rib knit conforms without restriction', 'Reinforced seam hems']
  },
  {
    id: 'mic-mi-003',
    name: 'Active Performance Stretch Cotton Trunks',
    category: 'mens-innerwear',
    categoryLabel: "Men's Innerwear",
    price: 990,
    originalPrice: 1250,
    rating: 4.7,
    reviewsCount: 19,
    image: mensInnerwearImg,
    description: 'Short-leg athletic trunk cut providing snug support for workouts, driving, and active daily movement. Flatlock stitching prevents friction.',
    fabricOrMaterial: '92% Combed Cotton, 8% Lycra',
    sizes: ['M (30-32)', 'L (33-35)', 'XL (36-38)'],
    colors: [
      { name: 'Steel Grey', hex: '#4b5563' },
      { name: 'Jet Black', hex: '#111827' }
    ],
    inStock: true,
    stockCount: 22,
    features: ['Low rise cut for modern trousers', 'Moisture management finish', '4-way flexibility']
  },
  {
    id: 'mic-mi-004',
    name: 'Pure Cotton Comfort Briefs (Pack of 3)',
    category: 'mens-innerwear',
    categoryLabel: "Men's Innerwear",
    price: 1290,
    rating: 4.6,
    reviewsCount: 26,
    image: mensInnerwearImg,
    description: 'Traditional supportive brief cut with plush jacquard elastic waistband. Soft double-layer front fly and durable elastic leg bands.',
    fabricOrMaterial: '100% Pure Combed Cotton',
    sizes: ['M (30-32)', 'L (33-35)', 'XL (36-38)', '2XL (40)'],
    colors: [
      { name: 'Classic Dark Mix', hex: '#1f2937' }
    ],
    inStock: true,
    stockCount: 28,
    features: ['Double-layer support gusset', 'High-grade skin-friendly elastic', 'Everyday durability']
  },

  // 3. Lingerie & Nightwear
  {
    id: 'mic-ln-001',
    name: 'Champagne Gold Satin Silk Robe & Chemise 2-Piece Set',
    category: 'lingerie-nightwear',
    categoryLabel: 'Lingerie & Nightwear',
    price: 3450,
    originalPrice: 4200,
    rating: 4.95,
    reviewsCount: 41,
    image: lingerieNightwearImg,
    description: 'An exquisite ensemble pairing a fluid kimono wrap robe with a matching lace-trimmed slip chemise. Features scallop eyelash lace trims, adjustable crossover spaghetti straps, and a detachable satin waist tie.',
    fabricOrMaterial: 'Premium Satin Silk & French Eyelash Lace',
    sizes: ['Free Size (Fits S to XL)'],
    colors: [
      { name: 'Champagne Gold & Black', hex: '#c5a059' },
      { name: 'Midnight Wine', hex: '#4a1525' },
      { name: 'Pure Obsidian', hex: '#111111' }
    ],
    inStock: true,
    stockCount: 15,
    badge: 'Luxury Edit',
    features: ['Delicate French eyelash lace trims', 'Silky drape with zero static cling', 'Includes matching robe belt']
  },
  {
    id: 'mic-ln-002',
    name: 'Soft Touch Modal Sleep Shirt & Pajama Set',
    category: 'lingerie-nightwear',
    categoryLabel: 'Lingerie & Nightwear',
    price: 2950,
    originalPrice: 3500,
    rating: 4.85,
    reviewsCount: 34,
    image: lingerieNightwearImg,
    description: 'Boutique pajama set featuring a classic notch collar button-down top with piped contrast edging and easy elastic waistband trousers with side slip pockets.',
    fabricOrMaterial: '95% Natural Lenzing Modal, 5% Spandex',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blush Rose', hex: '#d9a5b3' },
      { name: 'Royal Navy', hex: '#1e293b' },
      { name: 'Pearl Ivory', hex: '#ece6d8' }
    ],
    inStock: true,
    stockCount: 20,
    features: ['Butter-soft breathable modal', 'Piped lapel collar detail', 'Relaxed gentle elastic waistband']
  },
  {
    id: 'mic-ln-003',
    name: 'Elegance Sheer Lace Trim Babydoll Nightdress',
    category: 'lingerie-nightwear',
    categoryLabel: 'Lingerie & Nightwear',
    price: 2350,
    originalPrice: 2800,
    rating: 4.75,
    reviewsCount: 18,
    image: lingerieNightwearImg,
    description: 'Graceful flowing silhouette with delicate floral lace cups and an airy flared hemline. Designed for utmost comfort and romantic grace.',
    fabricOrMaterial: 'Soft Poly-Chiffon & Stretch Floral Lace',
    sizes: ['S/M', 'L/XL'],
    colors: [
      { name: 'Emerald Velvet Tone', hex: '#0f3829' },
      { name: 'Onyx Black', hex: '#18181b' }
    ],
    inStock: true,
    stockCount: 16,
    features: ['Non-scratchy soft stretch lace', 'Adjustable shoulder straps', 'Discreet plain shipping guarantee']
  },

  // 4. Ladies' Clothing
  {
    id: 'mic-lc-001',
    name: 'Linen-Blend Relaxed Casual Co-ord Set',
    category: 'ladies-clothing',
    categoryLabel: "Ladies' Clothing",
    price: 3650,
    originalPrice: 4400,
    rating: 4.8,
    reviewsCount: 27,
    image: ladiesClothingImg,
    description: 'An effortless, sophisticated 2-piece lounge coordinate consisting of an oversized band-collar tunic shirt and tapered matching trousers. Crafted from breathable linen-cotton weave.',
    fabricOrMaterial: '65% Cotton, 35% Slub Linen',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Natural Sand', hex: '#d3c5b4' },
      { name: 'Olive Sage', hex: '#707a65' },
      { name: 'Warm Terracotta', hex: '#9d5945' }
    ],
    inStock: true,
    stockCount: 19,
    badge: 'New Arrival',
    features: ['Breathable linen blend fabric', 'Comfortable deep front pockets', 'Modest relaxed drape']
  },
  {
    id: 'mic-lc-002',
    name: 'Everyday Butter-Soft Modal Lounge Pants',
    category: 'ladies-clothing',
    categoryLabel: "Ladies' Clothing",
    price: 1950,
    rating: 4.9,
    reviewsCount: 33,
    image: ladiesClothingImg,
    description: 'Wide-leg loungewear trousers featuring a wide fold-over waistband and fluid drape. Perfect for relaxing at home or casual running of errands.',
    fabricOrMaterial: '95% Modal Cotton, 5% Spandex',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Oatmeal Heather', hex: '#c9bfb5' },
      { name: 'Charcoal Black', hex: '#262626' }
    ],
    inStock: true,
    stockCount: 25,
    features: ['Relaxed wide-leg silhouette', 'Ultra-gentle waist drawstring', 'Wrinkle resistant']
  },
  {
    id: 'mic-lc-003',
    name: 'Classic Pure Cotton Summer Tunic Shirt',
    category: 'ladies-clothing',
    categoryLabel: "Ladies' Clothing",
    price: 2450,
    rating: 4.7,
    reviewsCount: 15,
    image: ladiesClothingImg,
    description: 'Crisp breathable cotton kurti-style buttoned tunic shirt with minimalist mother-of-pearl finish buttons. Elegant paired with jeans or trousers.',
    fabricOrMaterial: '100% Breathable Lawn Cotton',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Ivory White', hex: '#faf9f6' },
      { name: 'Soft Sky Blue', hex: '#b5c7d3' }
    ],
    inStock: true,
    stockCount: 20,
    features: ['Featherlight pure cotton', 'Easy-care machine wash', 'Versatile collar styling']
  },

  // 5. Children's Clothing
  {
    id: 'mic-cc-001',
    name: 'Organic Cotton Waffle Lounge Set (Kids)',
    category: 'children-clothing',
    categoryLabel: "Children's Clothing",
    price: 1850,
    originalPrice: 2250,
    rating: 4.9,
    reviewsCount: 24,
    image: childrenClothingImg,
    description: 'Gentle on delicate young skin. Two-piece waffle-knit set featuring a henley button top and matching elasticated jogger pants. Free from synthetic dyes and irritants.',
    fabricOrMaterial: '100% GOTS Certified Organic Cotton Waffle',
    sizes: ['1-2 Years', '2-3 Years', '3-4 Years', '5-6 Years'],
    colors: [
      { name: 'Sage & Cream', hex: '#94a38f' },
      { name: 'Warm Biscuit', hex: '#c9b29b' }
    ],
    inStock: true,
    stockCount: 17,
    badge: 'Pure Organic',
    features: ['Hypoallergenic zero-itch knit', 'Tag-free neck design', 'Stretchy cuffs for growth leeway']
  },
  {
    id: 'mic-cc-002',
    name: 'Soft Ribbed Cotton Sleep & Play Pajamas (Kids)',
    category: 'children-clothing',
    categoryLabel: "Children's Clothing",
    price: 1550,
    rating: 4.8,
    reviewsCount: 19,
    image: childrenClothingImg,
    description: 'Snug fit ribbed cotton pajama set designed for restful sleep and cozy playtime. Gentle encased elastic waistband won’t leave marks on tummy.',
    fabricOrMaterial: '100% Combed Rib Cotton',
    sizes: ['2-3 Years', '3-4 Years', '4-5 Years', '6-7 Years'],
    colors: [
      { name: 'Dusty Blue', hex: '#8ba2b5' },
      { name: 'Warm Cream', hex: '#f0ebe1' }
    ],
    inStock: true,
    stockCount: 22,
    features: ['Super soft combed ribs', 'Preshrunk fabric', 'Snug comfortable fit']
  },

  // 6. Hair Removal & Personal Care
  {
    id: 'mic-pc-001',
    name: 'SilkSmooth Gentle Hair Removal Cream (Sensitive Skin)',
    category: 'personal-care',
    categoryLabel: 'Hair Removal & Personal Care',
    price: 890,
    originalPrice: 1150,
    rating: 4.8,
    reviewsCount: 62,
    image: personalCareImg,
    description: 'Formulated specifically for sensitive areas, arms, legs, and underarms. Infused with soothing Aloe Vera, Vitamin E, and Chamomile to dissolve unwanted hair painlessly in just 4-6 minutes while leaving skin nourished and silky.',
    fabricOrMaterial: '100ml Tube + Precision Soft Spatula Included',
    sizes: ['100ml Regular Tube', '180ml Value Pack (+Rs. 550)'],
    colors: [
      { name: 'Aloe & Chamomile Formula', hex: '#65a30d' }
    ],
    inStock: true,
    stockCount: 45,
    badge: 'Discreet Pack',
    careInstructions: 'Always conduct a patch test 24 hours prior to first full use. Avoid contact with broken or irritated skin.',
    features: ['Fast action in 4–6 minutes', 'Zero harsh chemical ammonia odor', 'Enriched with natural Vitamin E & Aloe', 'Packed discreetly with no external product markings']
  },
  {
    id: 'mic-pc-002',
    name: 'Soothing Calming Post-Depilatory Aftercare Lotion',
    category: 'personal-care',
    categoryLabel: 'Hair Removal & Personal Care',
    price: 990,
    rating: 4.9,
    reviewsCount: 38,
    image: personalCareImg,
    description: 'Cools, hydrates, and eliminates post-waxing or post-hair-removal redness. Packed with pure organic aloe vera leaf juice, witch hazel, and tea tree oil for irritation-free, supple skin.',
    fabricOrMaterial: '120ml Pump Bottle',
    sizes: ['120ml Pump Bottle'],
    colors: [
      { name: 'Calming Aloe Formula', hex: '#15803d' }
    ],
    inStock: true,
    stockCount: 30,
    features: ['Immediate cooling sensation', 'Prevents ingrown hair bumps', 'Fast absorbing, non-greasy']
  },
  {
    id: 'mic-pc-003',
    name: 'Gentle Intimate Cleansing Wash (pH 3.8 Balanced)',
    category: 'personal-care',
    categoryLabel: 'Hair Removal & Personal Care',
    price: 1150,
    originalPrice: 1400,
    rating: 4.85,
    reviewsCount: 29,
    image: personalCareImg,
    description: 'Dermatologically and gynecologically tested mild daily intimate cleanser. Specially formulated at pH 3.8 to support healthy flora and protect against odor, irritation, and dryness without harsh sulfates.',
    fabricOrMaterial: '150ml Hygienic Dispenser',
    sizes: ['150ml Bottle'],
    colors: [
      { name: 'Gentle Rosewater & Lactic Acid', hex: '#f43f5e' }
    ],
    inStock: true,
    stockCount: 25,
    badge: 'pH Balanced',
    features: ['Zero parabens, SLS, or synthetic perfume', 'Maintains optimal 3.8 acidic barrier', 'Respectful plain packaging']
  }
];

export const WHATSAPP_NUMBER = '03101041303';
export const WHATSAPP_INT_NUMBER = '923101041303';
export const SHIPPING_FEE = 200; // PKR 200 standard shipping in Pakistan
export const FREE_SHIPPING_THRESHOLD = 3000; // Free delivery over PKR 3000
