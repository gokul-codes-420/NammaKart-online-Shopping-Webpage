import mongoose from "mongoose";
import Product from "./models/Product.js";

const productsDummyData = [
  {
    _id: "67a1f4e43f34a77b6dde9144",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Apple AirPods Pro 2nd gen",
    description: "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) provide excellent sound, active noise cancellation, and a comfortable fit. The USB-C case ensures quick charging, and they pair seamlessly with Apple devices for an effortless audio experience.",
    price: 499.,
    offerPrice: 399.99,
    image: [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/k4dafzhwhgcn5tnoylrw.webp",
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/j212frakb8hdrhvhajhg.webp",
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/imwuugqxsajuwqpkegb5.webp",
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/k1oqaslw5tb3ebw01vvj.webp",
    ],
    category: "Earphone",
    date: 1738667236865,
    __v: 0,
  },
  {
    _id: "67a1f52e3f34a77b6dde914a",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Bose QuietComfort 45",
    description: "The Bose QuietComfort 45 headphones are engineered for exceptional sound quality and unparalleled noise cancellation. With a 24-hour battery life and comfortable, lightweight design, these headphones deliver premium audio for any environment. Whether on a flight, in the office, or at home, the Bose QC45 blocks out distractions, offering an immersive listening experience.",
    price: 429.99,
    offerPrice: 329.99,
    image: [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/m16coelz8ivkk9f0nwrz.webp",
    ],
    category: "Headphone",
    date: 1738667310300,
    __v: 0,
  },
  {
    _id: "67a1f5663f34a77b6dde914c",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Samsung Galaxy S23",
    description: "The Samsung Galaxy S23 offers an all-encompassing mobile experience with its advanced AMOLED display, offering vibrant visuals and smooth interactions. Equipped with top-of-the-line fitness tracking features and cutting-edge technology, this phone delivers outstanding performance. With powerful hardware, a sleek design, and long battery life, the S23 is perfect for those who demand the best in mobile innovation.",
    price: 899.99,
    offerPrice: 799.99,
    image: [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/xjd4eprpwqs7odbera1w.webp",
    ],
    category: "Smartphone",
    date: 1738667366224,
    __v: 0,
  },
  {
    _id: "67a1f5993f34a77b6dde914e",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Garmin Venu 2",
    description: "The Garmin Venu 2 smartwatch blends advanced fitness tracking with sophisticated design, offering a wealth of features such as heart rate monitoring, GPS, and sleep tracking. Built with a 24-hour battery life, this watch is ideal for fitness enthusiasts and anyone looking to enhance their daily lifestyle. With a stunning AMOLED display and customizable watch faces, the Venu 2 combines technology with style seamlessly.",
    price: 399.99,
    offerPrice: 349.99,
    image: [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/hdfi4u3fmprazpnrnaga.webp",
    ],
    category: "Earphone",
    date: 1738667417511,
    __v: 0,
  },
  {
    _id: "67a1f5ef3f34a77b6dde9150",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "PlayStation 5",
    description: "The PlayStation 5 takes gaming to the next level with ultra-HD graphics, a powerful 825GB SSD, and ray tracing technology for realistic visuals. Whether you're into high-action games or immersive storytelling, the PS5 delivers fast loading times, seamless gameplay, and stunning visuals. It's a must-have for any serious gamer looking for the ultimate gaming experience.",
    price: 599.99,
    offerPrice: 499.99,
    image: [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/dd3l13vfoartrgbvkkh5.webp",
    ],
    category: "Accessories",
    date: 1738667503075,
    __v: 0,
  },
  {
    _id: "67a1f70c3f34a77b6dde9156",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Canon EOS R5",
    description: "The Canon EOS R5 is a game-changing mirrorless camera with a 45MP full-frame sensor, offering ultra-high resolution and the ability to shoot 8K video. Whether you're capturing professional-quality stills or cinematic video footage, this camera delivers exceptional clarity, speed, and color accuracy. With advanced autofocus and in-body stabilization, the R5 is ideal for photographers and videographers alike.",
    price: 4199.99,
    offerPrice: 3899.99,
    image: [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/r5h370zuujvrw461c6wy.webp",
    ],
    category: "Camera",
    date: 1738667788883,
    __v: 0,
  },
  {
    _id: "67a1f7c93f34a77b6dde915a",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "MacBook Pro 16",
    description: "The MacBook Pro 16, powered by Apple's M2 Pro chip, offers outstanding performance with 16GB RAM and a 512GB SSD. Whether you're editing high-resolution video, developing software, or multitasking with ease, this laptop can handle the toughest tasks. It features a stunning Retina display with True Tone technology, making it a top choice for professionals in creative industries or anyone who demands premium performance in a portable form.",
    price: 2799.99,
    offerPrice: 2499.99,
    image: [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/rzri7kytphxalrm9rubd.webp",
    ],
    category: "Laptop",
    date: 1738667977644,
    __v: 0,
  },
  {
    _id: "67a1f8363f34a77b6dde915c",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Sony WF-1000XM5",
    description: "Sony WF-1000XM5 true wireless earbuds deliver immersive sound with Hi-Res Audio and advanced noise cancellation technology. Designed for comfort and quality, they provide a stable, snug fit for a secure listening experience. Whether you're working out or traveling, these earbuds will keep you connected with the world around you while enjoying rich, clear sound.",
    price: 349.99,
    offerPrice: 299.99,
    image: [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/e3zjaupyumdkladmytke.webp",
    ],
    category: "Earphone",
    date: 1738668086331,
    __v: 0,
  },
  {
    _id: "67a1f85e3f34a77b6dde915e",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Samsung Projector 4k",
    description: "The Samsung 4K Projector offers an immersive cinematic experience with ultra-high-definition visuals and realistic color accuracy. Equipped with a built-in speaker, it delivers rich sound quality to complement its stunning 4K resolution. Perfect for movie nights, gaming, or presentations, this projector is the ultimate choice for creating an at-home theater experience or professional setting.",
    price: 1699.99,
    offerPrice: 1499.99,
    image: [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/qqdcly8a8vkyciy9g0bw.webp",
    ],
    category: "Accessories",
    date: 1738668126660,
    __v: 0,
  },
  {
    _id: "67a1fa4b3f34a77b6dde9166",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "ASUS ROG Zephyrus G16",
    description: "The ASUS ROG Zephyrus G16 gaming laptop is powered by the Intel Core i9 processor and features an RTX 4070 GPU, delivering top-tier gaming and performance. With 16GB of RAM and a 1TB SSD, this laptop is designed for gamers who demand extreme power, speed, and storage. Equipped with a stunning 16-inch display, it's built to handle the most demanding titles and applications with ease.",
    price: 2199.99,
    offerPrice: 1999.99,
    image: [
      "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/wig1urqgnkeyp4t2rtso.webp",
    ],
    category: "Laptop",
    date: 1738668619198,
    __v: 0,
  }
];

const MONGODB_URI = "mongodb://localhost:27017/nammakart";

const categoriesToPopulate = [
  "Fashion", "Mobiles", "Beauty", "Electronics", "Home", 
  "Appliances", "Toys, baby", "Food & More", "Auto Acc.", 
  "2 Wheelers", "Sports", "Books", "Furniture"
];

const categoryImages = {
  "Fashion": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400",
  "Mobiles": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400",
  "Beauty": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400",
  "Electronics": "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=400",
  "Home": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=400",
  "Appliances": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=400",
  "Toys, baby": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=400",
  "Food & More": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400",
  "Auto Acc.": "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=400",
  "2 Wheelers": "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=400",
  "Sports": "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400",
  "Books": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400",
  "Furniture": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400"
};

categoriesToPopulate.forEach((cat) => {
  for (let i = 1; i <= 20; i++) {
    productsDummyData.push({
      userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      name: `${cat} Premium Item ${i}`,
      description: `High quality ${cat} product for everyday use. Designed to meet your expectations with excellent build quality.`,
      price: Math.floor(Math.random() * 2000) + 200,
      offerPrice: Math.floor(Math.random() * 1500) + 100,
      image: [categoryImages[cat] || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400"],
      category: cat,
      date: Date.now() - Math.floor(Math.random() * 10000000),
    });
  }
});

async function seedProducts() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB database.");

    // Delete existing products (if any) to avoid duplicates
    await Product.deleteMany({});
    console.log("Cleared existing products.");

    // Insert dummy data
    await Product.insertMany(productsDummyData);
    console.log("Dummy products inserted successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding products:", error);
    mongoose.connection.close();
  }
}

seedProducts();
