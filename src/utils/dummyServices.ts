import HairImage from '@/assets/hair2.png'
import Makeup from '@/assets/makeup2.png'
import Skin from '@/assets/skin2.png'

export const dummyServices = [
  {
    name: 'Luxe Grooming Haven',
    category: 'Beard and Hair Services',
    subCategory: 'Haircut Deluxe',
    price: 20,
    images: [
      {
        img: 'https://thebeardclub.com/cdn/shop/articles/how-to-trim-long-beard_1200x630.jpg?v=1674046250',
        _id: {
          $oid: '65a15cc81d253195434249d2',
        },
      },
    ],
    description:
      'Experience the epitome of male grooming at Luxe Grooming Haven, where precision meets pampering. Our deluxe beard trim service transforms facial hair into a masterpiece of sophistication. Step into an atmosphere of refined elegance and indulge in the opulence of our studio, designed to be your haven for unparalleled grooming. Discover the artistry of our whisker wizards and embrace the extraordinary at Luxe Grooming Haven.',
    availability: true,
    shop: {
      name: 'Style Vibe Makeup service',
    },
  },
  {
    name: 'Opulent Locks Couture - Haircut Deluxe',
    category: 'Beard and Hair Services',
    subCategory: 'Haircut Deluxe',
    price: 55,
    images: [
      {
        img: 'https://cdn.shopify.com/s/files/1/0353/7879/0540/files/SQ-FT-B28.jpg?v=1630558369',
        _id: {
          $oid: '65a15dbb1d253195434249d9',
        },
      },
    ],
    description:
      'Indulge in the ultimate luxury of hair care with our Opulent Locks Couture Deluxe Haircut. Experience personalized attention from our skilled stylists who specialize in crafting a bespoke look that complements your style. This deluxe service includes a meticulous haircut, premium styling, and a rejuvenating wash. Elevate your grooming routine with Opulent Locks Couture and embrace a new level of sophistication.',
    availability: true,
    shop: {
      name: 'Style Vibe Makeup service',
    },
  },
  {
    name: 'Nape Elegance Refinement',
    category: 'Beard and Hair Services',
    subCategory: 'Neck Shave',
    price: 70,
    images: [
      {
        img: 'https://theruggedbros.com/cdn/shop/articles/should-you-shave-neckbeard-1_2048x.jpg?v=1658867082',
        _id: {
          $oid: '65a15e801d253195434249dd',
        },
      },
    ],
    description:
      "Immerse yourself in the epitome of grooming precision with our 'Nape Elegance Refinement' service. This specialized neck shave is designed to redefine the contours of your neck and enhance your overall look. Our skilled barbers meticulously trim and shape the nape area, ensuring a clean and polished finish. Experience the artistry of our barbers as they blend expertise with attention to detail, leaving you with a refined and sophisticated appearance. Elevate your grooming routine with 'Nape Elegance Refinement' and embrace the subtle touch that transforms the ordinary into extraordinary.",
    availability: true,
    shop: {
      name: 'Style Vibe Makeup service',
    },
  },
  {
    name: 'Ultimate Grooming Experience - Shave & Facial',
    category: 'Beard and Hair Services',
    subCategory: 'Shave & Facial',
    price: 80,
    images: [
      {
        img: 'https://cdn.shopify.com/s/files/1/0364/3677/0951/files/from-shop-img.jpg',
        _id: {
          $oid: '65a16ebee98f24d7dae89b3e',
        },
      },
    ],
    description:
      "Immerse yourself in the pinnacle of self-care with our 'Ultimate Grooming Experience - Shave & Facial.' This comprehensive service combines the artistry of a classic shave with the rejuvenating benefits of a tailored facial treatment. Our skilled barbers expertly wield the razor to provide a smooth and precise shave, followed by a customized facial that cleanses, exfoliates, and hydrates your skin. Relax in the hands of our grooming professionals as they deliver a harmonious blend of precision and pampering, leaving you with a refreshed, revitalized, and impeccably groomed appearance. Treat yourself to the ultimate indulgence and experience grooming at its finest with our 'Ultimate Grooming Experience - Shave & Facial.",
    availability: true,
    shop: {
      name: 'Style Vibe Makeup service',
    },
  },
  {
    name: 'Radiant Glamour Facial Makeup',
    category: 'Makeup Services',
    subCategory: 'Facial Makeup',
    price: 50,
    images: [
      {
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61xJTtVzfmL._AC_UF1000,1000_QL80_.jpg',
        _id: {
          $oid: '65a2bc351fa4d4d5b9a0a385',
        },
      },
    ],
    description:
      "Elevate your natural beauty with our 'Radiant Glamour Facial Makeup' service. Our skilled makeup artists specialize in creating stunning and customized looks to enhance your features and ensure you look and feel your best for any special occasion. Whether it's a glamorous evening event, a wedding, or a photoshoot, our expert team will use high-quality makeup products and precise techniques to achieve a flawless finish that complements your unique style. From subtle enhancements to bold transformations, trust us to bring out your inner radiance with our 'Radiant Glamour Facial Makeup' service.",
    availability: true,
    shop: {
      name: 'Style Vibe Makeup service',
    },
  },
  {
    name: 'Enchanting Eyes Express',
    category: 'Makeup Services',
    subCategory: 'Eye Makeup',
    price: 110,
    images: [
      {
        img: 'https://i.pinimg.com/736x/bd/64/56/bd6456a73413e92c14ccb7c616c87194.jpg',
        _id: {
          $oid: '65a2bcbb1fa4d4d5b9a0a389',
        },
      },
    ],
    description:
      "Unleash the magic of your gaze with our 'Enchanting Eyes Express service powered by ChatGPT. Our skilled makeup artists are dedicated to creating captivating eye looks tailored to your preferences and personality. Whether you desire a sultry smoky eye, a playful pop of color, or a classic elegant style, our team, guided by the creativity of ChatGPT, will craft a mesmerizing eye makeup experience just for you. Using top-notch products and the latest trends, we ensure your eyes become the focal point, leaving a lasting impression. Elevate your beauty and express your unique style with 'Enchanting Eyes Express.",
    availability: true,
    shop: {
      name: 'Style Vibe Makeup service',
    },
  },
]

export const serviceCategories = [
  {
    id: 1,
    name: 'Beard & Hair Services',
    img: HairImage,
  },
  {
    id: 2,
    name: 'Makeup Services',
    img: Makeup,
  },
  {
    id: 3,
    name: 'Skincare Services',
    img: Skin,
  },
]

export const dummyClientReviews = [
  {
    id: 1,
    name: '',
    rating: 4,
    review: `I have been going to Style Vibe for my makeup needs since I moved here  from the city. They are professional, friendly`,
  },
  {
    id: 2,
    name: '',
    rating: 5,
    review: `I have been going to Style Vibe for my makeup needs since I moved here  from the city. They are professional, friendly`,
  },
  {
    id: 3,
    name: '',
    rating: 3,
    review: `I have been going to Style Vibe for my makeup needs since I moved here  from the city. They are professional, friendly`,
  },
  {
    id: 4,
    name: '',
    rating: 4,
    review: `I have been going to Style Vibe for my makeup needs since I moved here  from the city. They are professional, friendly`,
  },
]

export const dummyBlogs = [
  {
    id: 1,
    title: 'Trendy Hairstyles for This Season',
    content:
      'Explore the latest and trendiest hairstyles for this season. From chic bobs to elegant updos, discover the perfect look for you.',
    media: 'https://example.com/salon-image.jpg',
    author: 'Rony Barua',
    tags: ['hairstyles', 'beauty', 'fashion', 'salon'],
    createdAt: '2024-03-02',
  },
  {
    id: 2,
    title: 'Trendy Hairstyles for This Season 2',
    content:
      'Explore the latest and trendiest hairstyles for this season. From chic bobs to elegant updos, discover the perfect look for you.',
    media: 'https://example.com/salon-image.jpg',
    author: 'Rony Barua',
    tags: ['hairstyles', 'beauty', 'fashion', 'salon'],
    createdAt: '2024-03-02',
  },
  {
    id: 3,
    title: 'Trendy Hairstyles for This Season 3',
    content:
      'Explore the latest and trendiest hairstyles for this season. From chic bobs to elegant updos, discover the perfect look for you.',
    media: 'https://example.com/salon-image.jpg',
    author: 'Rony Barua',
    tags: ['hairstyles', 'beauty', 'fashion', 'salon'],
    createdAt: '2024-03-02',
  },
]
