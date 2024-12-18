import { ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Eye, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Oversized Cotton Sweater",
    price: 89.99,
    image:
      "/images/pic1.jpg",
    category: "Sweaters",
  },
  {
    id: 2,
    name: "Vintage Denim Jacket",
    price: 129.99,
    image:
      "/images/pic2.jpg",
    category: "Jackets",
  },
  {
    id: 3,
    name: "Classic White Tee",
    price: 86.99,
    image:
      "/images/pic3.jpg",
    category: "T-Shirts",
  },
  {
    id: 4,
    name: "High-Waist Jeans",
    price: 11.99,
    image:
      "/images/pic4.jpg",
    category: "Jeans",
  },
  {
    id: 5,
    name: "High-Waist Jeans",
    price: 84.99,
    image:
      "/images/pic5.jpg",
    category: "Jeans",
  },
  {
    id: 6,
    name: "High-Waist Jeans",
    price: 53.99,
    image:
      "/images/pic6.jpg",
    category: "Jeans",
  },
  {
    id: 7,
    name: "High-Waist Jeans",
    price: 29.99,
    image:
      "/images/pic7.jpg",
    category: "Jeans",
  },
  // {
  //   id: 8,
  //   name: "High-Waist Jeans",
  //   price: 79.99,
  //   image:
  //     "/images/pic8.jpg",
  //   category: "Jeans",
  // },
  // {
  //   id: 9,
  //   name: "High-Waist Jeans",
  //   price: 79.99,
  //   image:
  //     "/images/pic9.jpg",
  //   category: "Jeans",
  // },
  // {
  //   id: 10,
  //   name: "High-Waist Jeans",
  //   price: 79.99,
  //   image:
  //     "/images/pic10.jpg",
  //   category: "Jeans",
  // },
  // {
  //   id: 11,
  //   name: "High-Waist Jeans",
  //   price: 79.99,
  //   image:
  //     "/images/pic11.jpg",
  //   category: "Jeans",
  // },
  // {
  //   id: 12,
  //   name: "High-Waist Jeans",
  //   price: 79.99,
  //   image:
  //     "/images/pic12.jpg",
  //   category: "Jeans",
  // },
  // {
  //   id: 13,
  //   name: "High-Waist Jeans",
  //   price: 79.99,
  //   image:
  //     "/images/pic13.jpg",
  //   category: "Jeans",
  // },
];

const categories = [
  "All",
  "New Arrivals",
  "Sweaters",
  "Jackets",
  "T-Shirts",
  "Jeans",
  "Accessories",
];

function App() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Sheet>
            <SheetTrigger asChild>
            <img
            src="/logoBlack.jpg"
            alt="Description of the image"
            width={100} // Set a width
            height={400}
          />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {categories.map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="block px-2 py-1 text-lg hover:text-primary"
                  >
                    {category}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="flex w-full items-center gap-4 md:gap-6">
            <a href="#" className="hidden md:block text-xl font-bold">
              SNEAKS
            </a>

            <nav className="hidden md:flex gap-6 mx-6">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {category}
                </a>
              ))}
            </nav>

            <div className="flex flex-1 items-center justify-end gap-4">
              <form className="hidden md:block w-full max-w-xs">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-8"
                  />
                </div>
              </form>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=60"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative  h-full flex items-center justify-center">
          <div className="max-w-xl flex flex-col items-center justify-center ">
            <h1 className="text-4xl text-center md:text-6xl font-bold text-white mb-4">
              New Collection
            </h1>
            <p className="text-lg text-center text-gray-200 mb-8">
              Discover our latest styles. Elegant designs meet comfort.
            </p>
            <Button size="lg" className="text-lg text-center">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container py-16 px-5">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black dark:bg-gray-800 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl group"
            >
              {/* Image Container with Overlay Effect */}
              <div className="relative overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-black hover:bg-gray-100"
                    >
                      <Eye className="h-4 w-4 mr-2" /> Quick View
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-semibold truncate max-w-[80%]">
                    {product.name}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-muted-foreground">(4.5)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted py-16 px-5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-5">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-muted-foreground">
                LUXE is a premium clothing brand focused on quality and style.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Sale
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 LUXE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
