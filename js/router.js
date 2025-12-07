// Simple Router Implementation
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
    
    // Match routes
    if (path === '/' || path === '/index.html') {
      this.routes['/']();
    } else if (path.startsWith('/product/')) {
      const id = path.split('/')[2];
      this.routes['/product/:id'](id);
    } else if (path === '/contact') {
      this.routes['/contact']();
    } else if (path === '/checkout') {
      this.routes['/checkout']();
    } else if (path === '/women') {
      this.routes['/women']();
    } else {
      this.routes['/']();
    }
  }
}

// Initialize Router
const router = new Router();
window.router = router;
