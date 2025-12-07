// Router
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    
    window.addEventListener('popstate', () => this.handleRoute());
    document.addEventListener('DOMContentLoaded', () => this.handleRoute());
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  navigate(path) {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  handleRoute() {
    const path = window.location.pathname;
    const app = document.getElementById('app');
    
    // Match routes
    if (path === '/' || path === '/index.html') {
      this.routes['/']();
    } else if (path.startsWith('/product/')) {
      this.routes['/product/:id'](path.split('/')[2]);
    } else if (path === '/contact') {
      this.routes['/contact']();
    } else if (path === '/checkout') {
      this.routes['/checkout']();
    } else {
      this.routes['/']();
    }
  }
}

// Initialize Router
const router = new Router();

// State Management
const state = {
  cart: [
    {
      id: 1,
      name: "2 Pieces Mango set- Regular fit",
      color: "Yellow",
      colorHex: "#d4af37",
      price: 25.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "3 Pieces Zara set- Casual fit",
      color: "Black",
      colorHex: "#000000",
      price: 32.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Zara Cardigan- Regular fit",
      color: "Blue",
      colorHex: "#1E3A8A",
      price: 40.25,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=200&h=200&fit=crop"
    }
  ],
  favorites: [],
  user: null
};

// Components
function Header() {
  return `
    <header class="header">
      <div class="header-top">
        <a href="/" class="logo" onclick="router.navigate('/'); return false;">
          <img src="https://c.animaapp.com/mivermkpLBMRtC/img/logo.png" alt="Logo" />
          <span class="logo-text">Luminae</span>
        </a>

        <div class="search-bar">
          <input type="text" class="search-input" placeholder="Search Products" />
          <select class="search-select">
            <option>All categories</option>
          </select>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>

        <nav class="nav-links">
          <a href="#" class="nav-link">About us</a>
          <a href="#" class="nav-link">Blog</a>
          <a href="/contact" class="nav-link" onclick="router.navigate('/contact'); return false;">Contact us</a>
          <a href="#" class="nav-link">Help & support</a>
        </nav>

        <div class="social-icons">
          <img src="https://c.animaapp.com/mivermkpLBMRtC/img/instagram.png" alt="Instagram" class="social-icon" />
          <img src="https://c.animaapp.com/mivermkpLBMRtC/img/icon-fb.png" alt="Facebook" class="social-icon" />
          <img src="https://c.animaapp.com/mivermkpLBMRtC/img/icon-telegram.svg" alt="Telegram" class="social-icon" />
        </div>
      </div>

      <div class="header-bottom">
        <button class="categories-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="3" y1="12" x2="21" y2="12" stroke-width="2"/>
            <line x1="3" y1="6" x2="21" y2="6" stroke-width="2"/>
            <line x1="3" y1="18" x2="21" y2="18" stroke-width="2"/>
          </svg>
          Categories
        </button>

        <div style="display: flex; gap: 12px;">
          <button class="categories-btn" style="font-weight: 400; font-size: 12px;">
            USD
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
              <path d="M4 6l4 4 4-4" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="categories-btn" style="font-weight: 400; font-size: 12px;">
            English
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
              <path d="M4 6l4 4 4-4" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <div style="flex: 1; height: 62px; border-left: 1px solid #555; border-right: 1px solid #555; margin: 0 20px;"></div>

        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="https://c.animaapp.com/mivermkpLBMRtC/img/men-cosmetic.png" alt="Promo" style="width: 63px; height: 62px;" />
          <div>
            <div style="font-size: 12px; font-weight: 700; color: white;">Weekly Men's Toiletries Coupons.</div>
            <div style="font-size: 12px; color: #c4c4c4;">We extend exclusive discounts to our male clientele</div>
          </div>
        </div>

        <div style="flex: 1; height: 62px; border-left: 1px solid #555; margin: 0 20px;"></div>

        <div class="header-actions">
          <a href="#" class="header-action">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke-width="2"/>
            </svg>
            Sign in
          </a>
          <a href="#" class="header-action">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke-width="2"/>
            </svg>
            Favorites
          </a>
          <a href="/checkout" class="header-action" onclick="router.navigate('/checkout'); return false;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke-width="2"/>
            </svg>
            Card
            <span class="cart-badge">${state.cart.length}</span>
          </a>
        </div>
      </div>

      <nav class="category-nav">
        <a href="#" class="category-link active">Woman</a>
        <a href="#" class="category-link">Male</a>
        <a href="#" class="category-link">Mother-Child</a>
        <a href="#" class="category-link">Home & Furniture</a>
        <a href="#" class="category-link">Super market</a>
        <a href="#" class="category-link">Cosmetics</a>
        <a href="#" class="category-link">Shoe & Bag</a>
        <a href="#" class="category-link">Electronic</a>
        <a href="#" class="category-link">Sport & Outdoor</a>
        <a href="#" class="category-link">Best seller</a>
      </nav>
    </header>
  `;
}

function Hero() {
  return `
    <section class="hero">
      <div class="hero-left"></div>
      <div class="hero-right">
        <h2 class="hero-title">KIMONOS, CAFTANS & PAREOS</h2>
        <p class="hero-subtitle">Poolside glam included From $4.99</p>
        <button class="hero-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke-width="2"/>
          </svg>
          SHOP NOW
        </button>
      </div>
      <div class="promo-card">
        <div class="promo-content">
          <h3 class="promo-title">Summer Essentials</h3>
          <p class="promo-discount">20% off</p>
        </div>
        <div class="promo-footer">19 Jul-30 Jul</div>
      </div>
    </section>
  `;
}

function ProductCard(product) {
  return `
    <div class="product-card" onclick="router.navigate('/product/${product.id}')">
      <img src="${product.image}" alt="${product.title}" class="product-image" />
      <div class="product-info">
        <h3 class="product-brand">${product.brand}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-rating">
          <div class="stars">
            ${'★'.repeat(product.rating)}
          </div>
          <span class="reviews">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="price-current">${product.price}</span>
          <span class="price-original">${product.originalPrice}</span>
          <span class="price-discount">${product.discount}</span>
        </div>
      </div>
    </div>
  `;
}

function Footer() {
  return `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Company</h3>
          <ul class="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Store</a></li>
            <li><a href="/contact" onclick="router.navigate('/contact'); return false;">Contact us</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Career Opportunities</h3>
          <ul class="footer-links">
            <li><a href="#">Selling Programs</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Cooperation</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>How to Buy</h3>
          <ul class="footer-links">
            <li><a href="#">Making Payments</a></li>
            <li><a href="#">Delivery Options</a></li>
            <li><a href="#">Buyer Protection</a></li>
            <li><a href="#">New User Guide</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Help</h3>
          <ul class="footer-links">
            <li><a href="/contact" onclick="router.navigate('/contact'); return false;">Contacts Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-address">165-179 Forster Road City of Monash, Melbourne, Australia</p>
        <p class="footer-copyright">©2023 Copyright in reserved for lumine shop</p>
      </div>
    </footer>
  `;
}

// Pages
function LandingPage() {
  const products = [
    {
      id: 1,
      image: "https://c.animaapp.com/mivermkpLBMRtC/img/photo.png",
      brand: "Mango",
      description: "Kimono & Caftan - Black - Regular fit",
      rating: 5,
      reviews: 289,
      price: "$228",
      originalPrice: "$290",
      discount: "-10%"
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mivermkpLBMRtC/img/photo-1.png",
      brand: "Zara",
      description: "Midi top- Daily fit",
      rating: 5,
      reviews: 523,
      price: "$95",
      originalPrice: "$145",
      discount: "-7%"
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mivermkpLBMRtC/img/photo-2.png",
      brand: "Uniqlo",
      description: "Midi atlas Slim fit - bohemian",
      rating: 5,
      reviews: 86,
      price: "$125",
      originalPrice: "$156",
      discount: "-8%"
    },
    {
      id: 4,
      image: "https://c.animaapp.com/mivermkpLBMRtC/img/photo-3.png",
      brand: "Mango dress",
      description: "Kimono & Caftan - Colorful - Night club fit",
      rating: 5,
      reviews: 121,
      price: "$365",
      originalPrice: "$487",
      discount: "-15%"
    }
  ];

  return `
    ${Header()}
    ${Hero()}
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Top100</h2>
        <a href="#" class="view-all">
          View all
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
            <path d="M6 4l4 4-4 4" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </a>
      </div>
      <div class="product-grid">
        ${products.map(p => ProductCard(p)).join('')}
      </div>
    </section>
    ${Footer()}
  `;
}

function ProductDetailPage(id) {
  const images = [
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop"
  ];

  return `
    ${Header()}
    <div class="breadcrumb">
      <a href="/" class="breadcrumb-link" onclick="router.navigate('/'); return false;">Homepage</a>
      <span class="breadcrumb-separator">›</span>
      <a href="#" class="breadcrumb-link">Women</a>
      <span class="breadcrumb-separator">›</span>
      <a href="#" class="breadcrumb-link">Clothes</a>
      <span class="breadcrumb-separator">›</span>
      <span class="breadcrumb-current">Zara</span>
    </div>
    <div class="product-detail-container">
      <div class="product-gallery">
        <div class="thumbnails">
          ${images.map((img, i) => `
            <div class="thumbnail ${i === 0 ? 'active' : ''}" onclick="changeMainImage(${i})">
              <img src="${img}" alt="Product ${i + 1}" />
            </div>
          `).join('')}
        </div>
        <div class="main-image">
          <img id="mainImage" src="${images[0]}" alt="Product" onclick="toggleZoom()" />
        </div>
      </div>
      <div class="product-info-section">
        <div class="product-header">
          <h1 class="product-title">SHORT PRINTED DRESS</h1>
          <button class="favorite-btn" onclick="toggleFavorite()">
            <svg id="favoriteIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke-width="2"/>
            </svg>
          </button>
        </div>
        <div class="product-price-large">$39.99</div>
        
        <div class="size-selector">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="selector-label">Size</span>
            <a href="#" style="font-size: 12px; color: #ff7a00;">Size guideline</a>
          </div>
          <div class="size-options">
            ${['XS', 'S', 'M', 'L', 'XL'].map((size, i) => `
              <button class="size-option ${i === 1 ? 'active' : ''}" onclick="selectSize(this)">${size}</button>
            `).join('')}
          </div>
        </div>

        <div class="color-selector">
          <span class="selector-label">Color</span>
          <div class="color-options">
            ${['#8B1A1A', '#1E3A8A', '#F97316', '#FBBF24'].map((color, i) => `
              <button class="color-option ${i === 0 ? 'active' : ''}" style="background: ${color};" onclick="selectColor(this)"></button>
            `).join('')}
          </div>
        </div>

        <div class="quantity-selector">
          <div class="quantity-header">
            <span class="selector-label">Quantity</span>
            <span class="quantity-info">50 available / 104 sold</span>
          </div>
          <div class="quantity-controls-large">
            <button class="qty-btn-large" onclick="updateQuantity(-1)">−</button>
            <input type="number" id="quantity" class="qty-input" value="2" min="1" />
            <button class="qty-btn-large" onclick="updateQuantity(1)">+</button>
          </div>
        </div>

        <div class="price-summary">
          <div class="summary-price">$79.98</div>
          <label class="checkbox-label">
            <input type="checkbox" checked />
            <span class="checkbox-text">
              Add shipping insurance for $9 
              <span style="color: #9d9d9d;">(declared value: only if the package gets lost, stolen or damaged.)</span>
            </span>
          </label>
        </div>

        <div class="action-buttons">
          <button class="btn-shop-now">SHOP NOW</button>
          <button class="btn-add-basket">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke-width="2"/>
            </svg>
            ADD TO BASKET
          </button>
        </div>
      </div>
    </div>
    ${Footer()}
  `;
}

function ContactPage() {
  return `
    ${Header()}
    <div style="padding: 16px 90px; border-bottom: 1px solid #e5e5e5;">
      <button class="btn btn-outline" onclick="router.navigate('/')" style="display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke-width="2"/>
          <polyline points="9 22 9 12 15 12 15 22" stroke-width="2"/>
        </svg>
        Back to Homepage
      </button>
    </div>
    <div class="contact-container">
      <div class="contact-form-section">
        <h1 class="contact-title">Tell us about your</h1>
        <h2 class="contact-subtitle">Concerns</h2>
        <form onsubmit="handleContactSubmit(event)">
          <div class="form-group">
            <label class="form-label">Your Name</label>
            <div class="input-wrapper">
              <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke-width="2"/>
              </svg>
              <input type="text" class="form-input" placeholder="Enter Your Name here" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <div class="input-wrapper">
              <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-width="2"/>
                <polyline points="22,6 12,13 2,6" stroke-width="2"/>
              </svg>
              <input type="email" class="form-input" placeholder="Enter Your Email here" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea class="form-textarea" placeholder="Tell us about your concerns" required></textarea>
          </div>
          <button type="submit" class="submit-btn">SEND</button>
        </form>
      </div>
      <div class="contact-image-section">
        <img src="https://c.animaapp.com/mivermkpLBMRtC/img/screenshot-2025-12-07-at-12-07-37.png" alt="Fashion models" class="contact-image" />
      </div>
    </div>
  `;
}

function CheckoutPage() {
  const cartTotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const giftBox = 10.90;
  const total = cartTotal + giftBox;

  return `
    ${Header()}
    <div class="checkout-container">
      <div class="checkout-grid">
        <div class="cart-items">
          <h1 class="cart-title">Card <span style="color: #9d9d9d;">${state.cart.length}</span></h1>
          ${state.cart.map(item => `
            <div class="cart-item">
              <img src="${item.image}" alt="${item.name}"  class="item-image" />
              <div class="item-details">
                <h3 class="item-name">${item.name}</h3>
                <div class="item-color">
                  <span>Color:</span>
                  <div class="color-dot" style="background: ${item.colorHex};"></div>
                </div>
              </div>
              <span class="item-price">$${item.price.toFixed(2)}</span>
              <div class="quantity-controls">
                <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">−</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
              </div>
              <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
              <button class="remove-btn" onclick="removeFromCart(${item.id})">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="3 6 5 6 21 6" stroke-width="2"/>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke-width="2"/>
                </svg>
              </button>
            </div>
          `).join('')}
        </div>
        <div>
          <div class="order-summary">
            <h2 class="summary-title">Order Summary</h2>
            <div class="summary-row">
              <span class="summary-label">Price</span>
              <span class="summary-value">$${cartTotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Shipping</span>
              <span class="summary-value">$0.00</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Tax</span>
              <span class="summary-value">$0.00</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Discount Price</span>
              <span style="color: #ff2e00; font-size: 12px;">⚠ You must log in to use the discount code</span>
            </div>
            <div class="summary-row" style="padding-top: 16px; border-top: 1px solid #d9d9d9;">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" checked />
                <span>Pack in a Gift Box</span>
              </label>
              <span class="summary-value">$${giftBox.toFixed(2)}</span>
            </div>
            <div class="summary-total">
              <span class="total-label">Total Price</span>
              <span class="total-value">$${total.toFixed(2)}</span>
            </div>
            <button class="checkout-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke-width="2"/>
              </svg>
              CHECKOUT
            </button>
          </div>
          <div class="coupon-section">
            <div class="coupon-input">
              <input type="text" class="coupon-field" placeholder="Enter coupon code" />
              <button class="coupon-btn">Login and Apply code</button>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 64px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
          <h2 style="font-size: 24px; font-weight: 700;">YOU MIGHT ALSO LIKE</h2>
          <div style="display: flex; gap: 8px;">
            <button style="width: 40px; height: 40px; border: 1px solid #d9d9d9; background: white; border-radius: 4px; cursor: pointer;">‹</button>
            <button style="width: 40px; height: 40px; border: 1px solid #d9d9d9; background: white; border-radius: 4px; cursor: pointer;">›</button>
          </div>
        </div>
        <div class="product-grid">
          ${[1,2,3,4].map(i => `
            <div class="product-card">
              <img src="https://c.animaapp.com/mivermkpLBMRtC/img/4-org-zoom-1.png" alt="Product" class="product-image" />
              <div class="product-info">
                <h3 class="product-brand">SHORT PRINTED DRESS</h3>
                <div class="product-price">
                  <span class="price-current">$69.99</span>
                  <span class="price-original">$129.99</span>
                  <span style="background: #ff2e00; color: white; padding: 2px 6px; border-radius: 2px; font-size: 10px; font-weight: 700;">-40%</span>
                </div>
                <button class="btn btn-outline" style="width: 100%; margin-top: 12px;">$${30 + i*5} Add to cart</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    ${Footer()}
  `;
}

// Event Handlers
window.changeMainImage = function(index) {
  const images = [
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop"
  ];
  document.getElementById('mainImage').src = images[index];
  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
};

window.toggleZoom = function() {
  const img = document.getElementById('mainImage');
  img.classList.toggle('zoomed');
};

window.toggleFavorite = function() {
  const icon = document.getElementById('favoriteIcon');
  const isFavorite = icon.getAttribute('fill') === 'red';
  icon.setAttribute('fill', isFavorite ? 'none' : 'red');
  icon.setAttribute('stroke', isFavorite ? '#d9d9d9' : 'red');
};

window.selectSize = function(btn) {
  document.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
};

window.selectColor = function(btn) {
  document.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
};

window.updateQuantity = function(delta) {
  const input = document.getElementById('quantity');
  const newValue = Math.max(1, parseInt(input.value) + delta);
  input.value = newValue;
};

window.updateCartQuantity = function(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (item) {
    item.quantity = Math.max(1, item.quantity + delta);
    router.handleRoute();
  }
};

window.removeFromCart = function(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  router.handleRoute();
};

window.handleContactSubmit = function(e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  e.target.reset();
};

// Register Routes
router.addRoute('/', () => {
  document.getElementById('app').innerHTML = LandingPage();
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    setTimeout(() => el.style.opacity = '1', i * 100);
  });
});

router.addRoute('/product/:id', (id) => {
  document.getElementById('app').innerHTML = ProductDetailPage(id);
});

router.addRoute('/contact', () => {
  document.getElementById('app').innerHTML = ContactPage();
});

router.addRoute('/checkout', () => {
  document.getElementById('app').innerHTML = CheckoutPage();
});

// Make router globally accessible
window.router = router;
