(function () {
  const CART_KEY = 'medisave_cart';
  const WHATSAPP_NUMBER = '601161443401'; // same number used in index.html

  // ---------- storage ----------
  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCart();
  }

  function addToCart(id, name, price, img) {
    const cart = getCart();
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id, name, price: price || 0, img: img || '', qty: 1 });
    }
    saveCart(cart);
    openCart();
  }

  function removeFromCart(id) {
    const cart = getCart().filter((item) => item.id !== id);
    saveCart(cart);
  }

  function updateQty(id, delta) {
    const cart = getCart();
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(id);
      return;
    }
    saveCart(cart);
  }

  function cartTotal(cart) {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function cartCount(cart) {
    return cart.reduce((sum, item) => sum + item.qty, 0);
  }

  function formatPrice(n) {
    return 'RM' + n.toFixed(2);
  }

  // ---------- rendering ----------
  function renderCart() {
    const cart = getCart();

    const badge = document.getElementById('cart-count');
    if (badge) {
      const count = cartCount(cart);
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }

    const list = document.getElementById('cart-items');
    if (!list) return; // sidebar not injected yet

    const emptyMsg = document.getElementById('cart-empty');
    const totalEl = document.getElementById('cart-total');

    list.innerHTML = '';

    if (cart.length === 0) {
      if (emptyMsg) emptyMsg.style.display = 'block';
      if (totalEl) totalEl.textContent = formatPrice(0);
      return;
    }
    if (emptyMsg) emptyMsg.style.display = 'none';

    cart.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML =
        '<div class="cart-item-info">' +
        '<p class="cart-item-name">' + item.name + '</p>' +
        '<p class="cart-item-price">' + formatPrice(item.price) + ' &times; ' + item.qty + '</p>' +
        '</div>' +
        '<div class="cart-item-controls">' +
        '<button class="qty-btn" data-action="dec" data-id="' + item.id + '" aria-label="Decrease quantity">&minus;</button>' +
        '<span class="qty-value">' + item.qty + '</span>' +
        '<button class="qty-btn" data-action="inc" data-id="' + item.id + '" aria-label="Increase quantity">+</button>' +
        '<button class="remove-btn" data-action="remove" data-id="' + item.id + '" aria-label="Remove item">&times;</button>' +
        '</div>';
      list.appendChild(li);
    });

    if (totalEl) totalEl.textContent = formatPrice(cartTotal(cart));
  }

  // ---------- sidebar open/close ----------
  function openCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ---------- WhatsApp checkout ----------
  function checkoutWhatsApp() {
    const cart = getCart();
    if (cart.length === 0) return;

    let msg = 'Hi Medisave Pharmacy, I would like to order:%0A%0A';
    cart.forEach((item) => {
      msg += '- ' + item.name + ' x' + item.qty + '%0A';
    });
    msg += '%0AEstimated Total: ' + formatPrice(cartTotal(cart)) + '%0A%0APlease confirm availability and final price. Thank you!';

    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + msg, '_blank', 'noopener');
  }

  // ---------- inject sidebar markup once, on any page ----------
  function injectSidebar() {
    if (document.getElementById('cart-sidebar')) return;

    const overlay = document.createElement('div');
    overlay.id = 'cart-overlay';
    overlay.className = 'cart-overlay';

    const sidebar = document.createElement('aside');
    sidebar.id = 'cart-sidebar';
    sidebar.className = 'cart-sidebar';
    sidebar.setAttribute('aria-label', 'Shopping cart');
    sidebar.innerHTML =
      '<div class="cart-sidebar-header">' +
      '<h3>Your Cart</h3>' +
      '<button id="cart-close" class="cart-close-btn" aria-label="Close cart">&times;</button>' +
      '</div>' +
      '<ul id="cart-items" class="cart-items-list"></ul>' +
      '<p id="cart-empty" class="cart-empty-msg">Your cart is empty.</p>' +
      '<div class="cart-sidebar-footer">' +
      '<div class="cart-total-row"><span>Estimated Total</span><span id="cart-total">RM0.00</span></div>' +
      '<p class="cart-note">Final price is confirmed by our pharmacist via WhatsApp before payment.</p>' +
      '<button id="cart-checkout" class="btn btn-whatsapp" style="width:100%;">Checkout via WhatsApp</button>' +
      '</div>';

    document.body.appendChild(overlay);
    document.body.appendChild(sidebar);

    overlay.addEventListener('click', closeCart);
    document.getElementById('cart-close').addEventListener('click', closeCart);
    document.getElementById('cart-checkout').addEventListener('click', checkoutWhatsApp);

    document.getElementById('cart-items').addEventListener('click', function (e) {
      const btn = e.target.closest('button');
      if (!btn) return;
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if (action === 'inc') updateQty(id, 1);
      if (action === 'dec') updateQty(id, -1);
      if (action === 'remove') removeFromCart(id);
    });
  }

  // ---------- store page: live product search ----------
  function initProductSearch() {
    const input = document.getElementById('product-search');
    if (!input) return;

    const grids = document.querySelectorAll('.card-grid.cols-3');

    input.addEventListener('input', function () {
      const term = input.value.trim().toLowerCase();

      grids.forEach(function (grid) {
        const cards = grid.querySelectorAll('.product-card');
        if (cards.length === 0) return;

        let visibleCount = 0;
        cards.forEach(function (card) {
          const name = (card.querySelector('h3')?.textContent || '').toLowerCase();
          const category = (card.querySelector('.product-category')?.textContent || '').toLowerCase();
          const match = !term || name.includes(term) || category.includes(term);
          card.style.display = match ? '' : 'none';
          if (match) visibleCount++;
        });

        let noResults = grid.nextElementSibling;
        if (!noResults || !noResults.classList.contains('search-no-results')) {
          noResults = document.createElement('p');
          noResults.className = 'search-no-results';
          noResults.textContent = 'No products match your search.';
          grid.insertAdjacentElement('afterend', noResults);
        }
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      });
    });
  }

  // ---------- wire up page ----------
  document.addEventListener('DOMContentLoaded', function () {
    injectSidebar();
    renderCart();
    initProductSearch();

    // cart icon in header — id must be "cart-toggle" (see header snippet)
    document.body.addEventListener('click', function (e) {
      const toggle = e.target.closest('#cart-toggle');
      if (toggle) {
        e.preventDefault();
        openCart();
      }
    });

    // any "Add to Cart" button on the page — data-add-to-cart + data-id/name/price/img
    document.body.addEventListener('click', function (e) {
      const addBtn = e.target.closest('[data-add-to-cart]');
      if (!addBtn) return;
      const { id, name, price, img } = addBtn.dataset;
      addToCart(id, name, parseFloat(price), img);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeCart();
    });

    // header loads asynchronously via include.js — re-render badge once it's in the DOM
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      const observer = new MutationObserver(function () {
        renderCart();
      });
      observer.observe(headerPlaceholder, { childList: true, subtree: true });
    }
  });

  window.MedisaveCart = { addToCart, removeFromCart, updateQty, openCart, closeCart };
})();