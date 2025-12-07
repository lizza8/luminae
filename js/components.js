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
  showWomanMenu: false
};

// Header Component
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
        <a href="/women" class="category-link active" onclick="router.navigate('/women'); return false;">Woman</a>
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

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Header, state };
}
