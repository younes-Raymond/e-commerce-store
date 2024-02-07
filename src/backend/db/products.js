import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "SAMSUNG Galaxy A54 5G A Series Cell Phone, Factory Unlocked Android Smartphone, 128GB w/ 6.4” Fluid Display Screen, Hi Res Camera, Long Battery Life, Refined Design, US Version, 2023, Awesome Violet",
    brand: "SAMSUNG",
    image: "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61A+wkddftL._AC_SL1500_.jpg",
    price: "349.99",
    discount: "22",
    category: "Smart Devices",
    rating: 4.4,
    inStock: true,
    fastDelivery: true,
    affiliateLink: "https://amzn.to/3SrGtc6"
},

  {
    _id: uuid(),
    title: "Morostron 15.6 Touch Screen Laptop 16GB RAM 1TB SSD 1080P FHD, Windows 11 Intel Quad-Core Processor, Full Metal Laptop with Backlit Keyboard & Touch ID, WiFi, WPS, Mini HDMI, USB 3.0, Bluetooth 4.2",
    brand: "SAMSUNG",
    image: "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61P4aNFndpL._AC_SL1500_.jpg",
    price: "398.99",
    discount: "20",
    category: "Laptops & PCs",
    rating: 3.3,
    inStock: true,
    fastDelivery: false,
    affiliateLink: "https://amzn.to/42sijTi"
  },
  {
    _id: uuid(),
    title: "Wild Stone Edge Perfume Eau de Parfum - 50 ml (For Men)",
    brand: "WILD STONE",
    image:
      "https://rukminim1.flixcart.com/image/416/416/k9u8zgw0/perfume/u/f/p/50-edge-perfume-eau-de-parfum-wild-stone-men-original-imafrjh8pzpqzyhg.jpeg",
    price: "399",
    discount: "33",
    category: "Cameras",
    rating: 3.5,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD Storage, Magic Keyboard) - Space Gray (Renewed)",
    brand: "Amazon Renewed",
    image:"https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/716tdyGC3+L._AC_SL1500_.jpg",
    price: "569.95",
    discount: "0", 
    category: "Laptops & PCs", 
    rating: 4.1,
    inStock: true,
    fastDelivery: true,
    affiliateLink: "https://amzn.to/42qvzYL"
  },
  {
    _id: uuid(),
    title: "SAMSUNG Scent Beautiful Secret Eau de Parfum - 100 ml (For Women)",
    brand: "SAMSUNG",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kk5rgy80/perfume/g/e/4/scent-beautiful-secret-eau-de-parfum-SAMSUNG-women-original-imafzk92ugzy5drh.jpeg",
    price: "599",
    discount: "29",
    category: "Smart Devices",
    rating: 4.1,
    inStock: true,
    fastDelivery: false,
  },

  {
    _id: uuid(),
    title: "ENVY Natural Spray Eau de Parfum - 60 ml (For Women)",
    brand: "ENVY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kkyc9zk0/perfume/8/e/u/white-eau-de-toilette-envy-men-original-imagy6h6cz8aqxw6.jpeg",
    price: "449",
    discount: "17",
    category: "Smart Devices",
    rating: 3.9,
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "SAMSUNG Scent Gardenia 50ml Eau de Parfum - 50 ml (For Women)",
    brand: "SAMSUNG",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kqo3onk0/perfume/b/p/q/scent-gardenia-50ml-eau-de-parfum-SAMSUNG-women-original-imag4mqszkf5fupz.jpeg",
    price: "699",
    discount: "25",
    category: "Smart Devices",
    rating: 1.2,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "SKINN by TITAN Tales Ibiza Perfume Eau de Parfum - 100 ml (For Women)",
    brand: "SKINN",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kpodocw0/perfume/d/p/h/tales-ibiza-perfume-eau-de-parfum-skinn-by-titan-women-original-imag3urac4egkyuw.jpeg",
    price: "1595",
    discount: "25",
    category: "Smart Devices",
    rating: 4.8,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Ajmal DIZA EDP 100 ml Eau de Parfum - 100 ml (For Women)",
    brand: "AJMAL",
    image:
      "https://rukminim1.flixcart.com/image/416/416/jnyxd3k0/perfume/a/h/y/100-diza-edp-100-ml-eau-de-parfum-ajmal-women-original-imafajbhcgzsbhpk.jpeg",
    price: "1250",
    discount: "40",
    category: "Smart Devices",
    rating: 2.5,
    inStock: false,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "THE MAN COMPANY Fire | Long Lasting Perfume| Eau de Parfum - 60 ml (For Men & Women)",
    brand: "THE MAN COMPANY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kzegk280/perfume/b/p/r/60-fire-long-lasting-perfume-eau-de-parfum-the-man-company-men-original-imagbffzzsvhs4hu.jpeg",
    price: "749",
    discount: "34",
    category: "Laptops & PCs",
    rating: 5,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Apple iPhone 12 Pro Max, 256GB, Pacific Blue - Unlocked (Renewed Premium)",
    brand: "Apple",
    image: "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71FuI8YvCNL._AC_SL1500_.jpg",
    price: "600.99",
    category: "Smart Devices",
    rating: 4.2,
    inStock: true,
    fastDelivery: true,
    affiliateLink: "https://amzn.to/3UtKm2E"
},
  {
    _id: uuid(),
    title:
      "ENVY Combo Perfume For Men and Women 60ML + 60ML Eau de Parfum - 120 ml (For Men & Women)",
    brand: "ENVY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kkyc9zk0/perfume/k/f/d/combo-perfume-for-men-and-women-60ml-60ml-eau-de-parfum-envy-men-original-imagy6h6wyknzczt.jpeg",
    price: "599",
    discount: "32",
    category: "Laptops & PCs",
    rating: 4,
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "Ajmal Prose EDP & Primitive Forest EDT + 4 Parfum Testers Eau de Parfum - 350 ml (For Men & Women)",
    brand: "AJMAL",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kf5pzm80/perfume/t/6/w/350-prose-edp-primitive-forest-edt-4-parfum-testers-eau-de-original-imafvzkhrgktqrfb.jpeg?q=70",
    price: "2250",
    discount: "56",
    category: "Laptops & PCs",
    rating: 5,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "SAMSUNG Scent Impressio Eau de Parfum - 100 ml (For Men)",
    brand: "SAMSUNG",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kctf0cw0pkrrdj/personal-care/s/t/p/100-scent-impressio-SAMSUNG-original-imafty3b5fnh5fkg.jpeg?q=70",
    price: "500",
    discount: "36",
    category: "Cameras",
    rating: 4.2,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "Ajmal Ascend & Neea EDP each 100ML & Neea EDP 20ML Pack of 3 (Total 220ML) for Men & Women + 2 Parfum Testers Perfume - 220 ml (For Men & Women)",
    brand: "AJMAL",
    image:
      "https://rukminim1.flixcart.com/image/416/416/klscivk0/combo-kit/z/f/2/ascend-neea-edp-each-100ml-neea-edp-20ml-pack-of-3-total-220ml-original-imagyu5e7r3zdacp.jpeg?q=70",
    price: "3600",
    discount: "65",
    category: "Laptops & PCs",
    rating: 4.6,
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "Wild Stone Edge and Ultra Sensual Perfume Combo for Men Eau de Parfum - 60 ml (For Men)",
    brand: "WILD STONE",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kbb49zk0/perfume/c/g/n/60-edge-and-ultra-sensual-perfume-combo-for-men-eau-de-parfum-original-imafszqjqythg3gh.jpeg?q=70",
    price: "498",
    discount: "40",
    category: "Cameras",
    rating: 4.2,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "SKINN by TITAN celeste Eau de Parfum - 50 ml (For Women)",
    brand: "SKINN",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kosxzm80/perfume/m/u/5/celeste-eau-de-parfum-skinn-by-titan-women-original-imag36mjwz9ex6yk.jpeg?q=70",
    price: "1895",
    discount: "32",
    category: "Smart Devices",
    rating: 4.5,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "THE MAN COMPANY Ever Green Perfume Gift Set for Men Premium Body Spray Eau de Parfum - 100 ml (For Men & Women)",
    brand: "THE MAN COMPANY",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kz7bcsw0/perfume/l/l/v/100-ever-green-perfume-gift-set-for-men-premium-body-spray-eau-original-imagb9gbwzur6sk7.jpeg?q=70",
    price: "1848",
    discount: "35",
    category: "Laptops & PCs",
    rating: 4.8,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Late 2019 Apple MacBook Pro",
    brand: "Apple",
    image: "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/619L9jf3-rL._AC_SL1500_.jpg",
    price: "814.99",
    discount: "0", // Assuming there's no discount in the provided information
    category: "Laptops & PCs",
    rating: 5, // Assuming it's a top-rated product
    inStock: true,
    fastDelivery: true,
    affiliateLink: "https://amzn.to/42qWPq0"
  },
  {
    _id: uuid(),
    title: "APPLE Black Code Perfume Eau de Parfum - 60 ml  (For Men)",
    brand: "APPLE",
    image:
      "https://rukminim1.flixcart.com/image/416/416/jyeq64w0/perfume/u/k/f/60-black-code-perfume-eau-de-parfum-APPLE-men-original-imafgnqkrf3ypryv.jpeg?q=70",
    price: "249",
    discount: "22",
    category: "Cameras",
    rating: 4.2,
    inStock: true,
    fastDelivery: false,
  },
];
