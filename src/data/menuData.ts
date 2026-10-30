import { MenuCategory, MenuItem } from '../types';

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'coffee-espresso', name: 'Coffee & Espresso', description: 'Artisanal roasts and classic Italian double shots' },
  { id: 'cold-coffee', name: 'Cold Brews & Frappes', description: 'Chilled signature blended brews and iced elixirs' },
  { id: 'refreshing', name: 'Refreshing Beverages', description: 'Artisanal coolers, iced teas, and botanical infusions' },
  { id: 'starters', name: 'Small Plates & Starters', description: 'Crunchy bites and European appetizers to share' },
  { id: 'burgers-wraps', name: 'Burgers & Wraps', description: 'Hearty gourmet burgers and freshly rolled wraps' },
  { id: 'pasta-italian', name: 'Pasta & Italian', description: 'Classic handmade pastas and stone-baked thin crust pizzas' },
  { id: 'mains', name: 'Main Course & Platters', description: 'Wholesome continental platters and comfort bowls' },
  { id: 'desserts', name: 'Desserts & Bakes', description: 'Sweet indulgences and delicate baked treats' },
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. Coffee & Espresso
  {
    id: 'doppio-espresso',
    name: 'Doppio Espresso',
    category: 'coffee-espresso',
    price: 140,
    description: 'Our namesake double-shot extraction crafted with premium roasted Arabica beans, featuring a rich, velvety golden hazelnut crema.',
    dietary: 'beverage',
    signature: true,
    bestseller: true,
    image: '/images/doppio/coffee-espresso-doppio.jpg',
    tags: ['Signature', 'Pure Roast', 'Double Shot']
  },
  {
    id: 'cappuccino-artisan',
    name: 'Artisan Cappuccino',
    category: 'coffee-espresso',
    price: 220,
    description: 'A harmonious third each of rich espresso, silky steamed whole milk, and dense microfoam, dusted with organic cocoa powder.',
    dietary: 'beverage',
    bestseller: true,
    image: '/images/doppio/coffee-cappuccino-latte-spread.jpg',
    tags: ['Classic', 'Velvety']
  },
  {
    id: 'cafe-latte',
    name: 'Classic Café Latte',
    category: 'coffee-espresso',
    price: 235,
    description: 'Smooth, comforting double espresso poured over gently steamed textured milk, finished with delicate barista latte art.',
    dietary: 'beverage',
    image: '/images/doppio/coffee-cappuccino-latte-spread.jpg',
    tags: ['Mild', 'Comfort']
  },
  {
    id: 'americano',
    name: 'Caffè Americano',
    category: 'coffee-espresso',
    price: 180,
    description: 'Double shot of our rich house espresso pulled over piping hot water, preserving the nuanced floral and nutty notes.',
    dietary: 'beverage',
    tags: ['Clean', 'Bold']
  },
  {
    id: 'hazelnut-mocha',
    name: 'Toasted Hazelnut Mocha',
    category: 'coffee-espresso',
    price: 250,
    description: 'Rich dark Dutch cocoa syrup combined with roasted espresso, hazelnut praline essence, and steamed milk.',
    dietary: 'beverage',
    signature: true,
    tags: ['Sweet & Nutty', 'Indulgent']
  },
  {
    id: 'rose-kissed-mocha',
    name: 'Rose-Kissed White Mocha',
    category: 'coffee-espresso',
    price: 280,
    description: 'A delicate botanical fusion of melted white chocolate, espresso, rose water aromatics, and whipped foam.',
    dietary: 'beverage',
    signature: true,
    tags: ['Botanical', 'Floral']
  },
  {
    id: 'latte-biscoff',
    name: 'Lotus Biscoff Latte',
    category: 'coffee-espresso',
    price: 280,
    description: 'Silky steamed milk infused with caramelized Belgian Lotus Biscoff spread, double espresso, and crunchy biscuit crumbs.',
    dietary: 'beverage',
    signature: true,
    bestseller: true,
    tags: ['Caramelized', 'Bestseller']
  },

  // 2. Cold Coffee & Frappes
  {
    id: 'iced-americano',
    name: 'Iced Americano',
    category: 'cold-coffee',
    price: 195,
    description: 'Freshly pulled double shot over crystalline ice cubes and chilled filtered water. Pure, revitalizing, and bold.',
    dietary: 'beverage',
    image: '/images/doppio/coffee-iced-americano.jpg',
    tags: ['Refreshing', 'Low Calorie']
  },
  {
    id: 'classic-cold-coffee',
    name: 'Doppio Classic Cold Coffee',
    category: 'cold-coffee',
    description: 'Thick, creamy slow-blended coffee churned with ice cream and rich espresso reduction for a nostalgic café indulgence.',
    dietary: 'beverage',
    bestseller: true,
    tags: ['Creamy', 'Classic']
  },
  {
    id: 'coconut-mocha-frappe',
    name: 'Coconut Mocha Frappe',
    category: 'cold-coffee',
    description: 'Tropical toasted coconut syrup blended with dark chocolate ganache, espresso, ice, and crowned with whipped cream.',
    dietary: 'beverage',
    signature: true,
    tags: ['Tropical', 'Signature']
  },
  {
    id: 'biscoff-frappe',
    name: 'Lotus Biscoff Frappe',
    category: 'cold-coffee',
    description: 'Crushed speculoos cookies blitzed with espresso and vanilla cream, topped with rich spiced cookie drizzle.',
    dietary: 'beverage',
    tags: ['Dessert Coffee', 'Sweet']
  },

  // 3. Refreshing Beverages
  {
    id: 'iced-thai-tea',
    name: 'Authentic Iced Thai Tea',
    category: 'refreshing',
    description: 'Traditional spiced Ceylon black tea brewed with star anise and cardamom, layered over crushed ice and sweetened condensed milk.',
    dietary: 'beverage',
    signature: true,
    image: '/images/doppio/food-pasta-salad-smoothies.jpg',
    tags: ['Spiced', 'Signature']
  },
  {
    id: 'berry-cooler',
    name: 'Sparkling Wild Berry Cooler',
    category: 'refreshing',
    description: 'Muddled fresh berries, mint leaves, and lime juice charged with sparkling soda over ice.',
    dietary: 'beverage',
    image: '/images/doppio/food-pasta-salad-smoothies.jpg',
    tags: ['Fizzy', 'Fruity']
  },
  {
    id: 'artisan-fruit-smoothie',
    name: 'Alphonso Mango & Cream Smoothie',
    category: 'refreshing',
    description: 'Velvety mango puree blended with chilled yogurt and cream, garnished with glazed cherries and almond flakes.',
    dietary: 'beverage',
    image: '/images/doppio/food-pasta-salad-smoothies.jpg',
    tags: ['Tropical', 'Creamy']
  },
  {
    id: 'hot-chocolate-classic',
    name: 'Velvety Belgian Hot Chocolate',
    category: 'refreshing',
    description: 'Melted 54% dark Belgian couverture chocolate simmered with fresh milk and a pinch of sea salt.',
    dietary: 'beverage',
    tags: ['Cozy', 'Chocolate']
  },

  // 4. Starters & Small Plates
  {
    id: 'chicken-nachos',
    name: 'Loaded Chicken Nachos',
    category: 'starters',
    description: 'Crisp corn tortilla chips piled high with spiced grilled chicken chunks, jalapeños, salsa, and melted cheddar sauce.',
    dietary: 'non-veg',
    bestseller: true,
    tags: ['Bestseller', 'Sharable']
  },
  {
    id: 'garlic-bread-cheese',
    name: 'Artisan Cheesy Garlic Bread',
    category: 'starters',
    description: 'Toasted rustic baguette slices slathered with roasted garlic herb butter and bubbly golden mozzarella cheese.',
    dietary: 'veg',
    image: '/images/doppio/food-pasta-salad-smoothies.jpg',
    tags: ['Cheesy', 'Vegetarian']
  },
  {
    id: 'peri-peri-fries',
    name: 'Peri Peri Seasoned Crisp Fries',
    category: 'starters',
    description: 'Golden fried Idaho cut potatoes tossed in spicy African bird’s eye chili blend, served with garlic herb aioli.',
    dietary: 'veg',
    image: '/images/doppio/food-continental-platter.jpg',
    tags: ['Crispy', 'Spicy']
  },
  {
    id: 'bruschetta-pomodoro',
    name: 'Classic Tomato Basil Bruschetta',
    category: 'starters',
    description: 'Diced vine-ripened tomatoes, fresh torn basil, garlic, and extra virgin olive oil atop grilled artisan sourdough.',
    dietary: 'veg',
    tags: ['Italian Classic', 'Vegetarian']
  },

  // 5. Sandwiches & Burgers
  {
    id: 'chicken-burger',
    name: 'Signature Doppio Chicken Burger',
    category: 'burgers-wraps',
    price: 390,
    description: 'Juicy seasoned grilled chicken patty layered with cheddar cheese, caramelized onions, crisp lettuce, and secret house sauce in a brioche bun.',
    dietary: 'non-veg',
    signature: true,
    tags: ['Gourmet Burger', 'Juicy']
  },
  {
    id: 'veggie-burger',
    name: 'Artisan Gourmet Veggie Burger',
    category: 'burgers-wraps',
    price: 320,
    description: 'Crispy roasted vegetable and potato herb patty served with melted cheese, gherkins, tomato relish, and chipotle mayo.',
    dietary: 'veg',
    tags: ['Crispy', 'Vegetarian']
  },
  {
    id: 'chicken-caesar-wrap',
    name: 'Chicken Caesar Salad Wrap',
    category: 'burgers-wraps',
    price: 420,
    description: 'Herb-grilled chicken breast, crisp romaine lettuce, shaved parmesan, and creamy anchovy-free Caesar dressing wrapped in a warm tortilla.',
    dietary: 'non-veg',
    bestseller: true,
    image: '/images/doppio/food-chicken-caesar-salad.jpg',
    tags: ['Protein Rich', 'Fresh']
  },
  {
    id: 'piri-piri-paneer-wrap',
    name: 'Piri Piri Paneer Wrap',
    category: 'burgers-wraps',
    price: 350,
    description: 'Marinated cottage cheese tossed in fiery piri piri spices, bell peppers, onions, and garlic mint drizzle rolled in a soft flatbread.',
    dietary: 'veg',
    tags: ['Spicy', 'Cottage Cheese']
  },
  {
    id: 'aloo-tikki-wrap',
    name: 'Spiced Aloo Tikki Wrap',
    category: 'burgers-wraps',
    price: 280,
    description: 'Crunchy golden potato patty layered with pickled red onions, sweet tamarind drizzle, and crisp greens.',
    dietary: 'veg',
    tags: ['Comfort', 'Desi Twist']
  },

  // 6. Pasta & Italian
  {
    id: 'penne-arrabbiata',
    name: 'Penne all’Arrabbiata',
    category: 'pasta-italian',
    description: 'Al dente penne simmered in a piquant San Marzano tomato sauce infused with garlic, red chili flakes, and fresh basil, served with garlic toast.',
    dietary: 'veg',
    bestseller: true,
    image: '/images/doppio/food-pasta-salad-smoothies.jpg',
    tags: ['Spicy Italian', 'Vegetarian']
  },
  {
    id: 'artisan-cheese-pizza',
    name: 'Handcrafted Stone-Baked Pizza',
    category: 'pasta-italian',
    description: 'Freshly rolled thin crust base smeared with fragrant tomato coulis, loaded with mozzarella, oregano, and gourmet toppings.',
    dietary: 'veg',
    bestseller: true,
    image: '/images/doppio/food-artisan-pizza.jpg',
    tags: ['Thin Crust', 'Wood-Fired Style']
  },
  {
    id: 'creamy-alfredo-pasta',
    name: 'Fettuccine Alfredo with Mushrooms',
    category: 'pasta-italian',
    description: 'Tossed in a velvety emulsion of butter, heavy cream, garlic, and freshly grated aged Parmigiano Reggiano.',
    dietary: 'veg',
    tags: ['Rich & Creamy']
  },
  {
    id: 'classic-baked-lasagna',
    name: 'Classic Baked Lasagna',
    category: 'pasta-italian',
    description: 'Slow-baked pasta sheets layered with savory ragù, rich béchamel, and golden gratinated mozzarella.',
    dietary: 'non-veg',
    signature: true,
    tags: ['Comfort Food', 'Baked Fresh']
  },

  // 7. Main Course & Platters
  {
    id: 'continental-grilled-platter',
    name: 'Continental Herb Rice & Croquette Platter',
    category: 'mains',
    description: 'Fragrant herb-tossed pilaf served with golden crisp potato croquettes, sauteed garden cauliflower, carrots, and sweet buttered corn.',
    dietary: 'veg',
    signature: true,
    image: '/images/doppio/food-continental-platter.jpg',
    tags: ['Wholesome', 'Signature Platter']
  },
  {
    id: 'chicken-salad-bowl',
    name: 'Hawaiian Chicken & Pineapple Salad',
    category: 'mains',
    description: 'Tender shredded chicken, sweet pineapple tidbits, glazed cherries, and crisp lettuce tossed in a creamy dressing.',
    dietary: 'non-veg',
    image: '/images/doppio/food-hawaiian-salad.jpg',
    tags: ['Sweet & Savory', 'Light Meal']
  },
  {
    id: 'grilled-fish-platter',
    name: 'Grilled Fish with Lemon Butter Sauce',
    category: 'mains',
    description: 'Pan-seared river sole fillet seasoned with fresh thyme, served alongside mashed potatoes and garlic-tossed greens.',
    dietary: 'non-veg',
    tags: ['Chef Special', 'Continental']
  },
  {
    id: 'mediterranean-brunch-platter',
    name: 'Doppio Savory Brunch Platter',
    category: 'mains',
    description: 'Freshly fried artisan flat crisps accompanied by spiced potato curry, cooling yogurt dip, and house relish.',
    dietary: 'veg',
    image: '/images/doppio/food-brunch-platter.jpg',
    tags: ['Hearty Brunch', 'Bistro Special']
  },

  // 8. Desserts & Bakes
  {
    id: 'classic-cheesecake',
    name: 'New York Style Cheesecake',
    category: 'desserts',
    description: 'Dense, velvety cream cheese filling baked on a buttery graham cracker crust, finished with blueberry reduction.',
    dietary: 'veg',
    bestseller: true,
    tags: ['Baked Fresh', 'Bestseller']
  },
  {
    id: 'baked-rasgulla-fusion',
    name: 'Artisan Baked Rasgulla Fusion',
    category: 'desserts',
    description: 'An acclaimed Odisha specialty — soft cottage cheese spheres baked in thickened caramelized saffron-cardamom rabdi.',
    dietary: 'veg',
    signature: true,
    tags: ['Odisha Specialty', 'Signature']
  },
  {
    id: 'chocolate-lava-cake',
    name: 'Warm Molten Chocolate Lava',
    category: 'desserts',
    description: 'Decadent dark chocolate sponge cake with an oozing hot chocolate molten center, served with vanilla bean ice cream.',
    dietary: 'veg',
    tags: ['Warm & Gooey']
  }
];

// Re-export centralized business info
export { BUSINESS_INFO, BUSINESS_CONFIG } from './business';

