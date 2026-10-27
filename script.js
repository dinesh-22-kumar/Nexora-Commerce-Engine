const API_URL = "http://localhost:8080/api/products";

// Exact 20 Products with Real High-Res Hardware Images & Categories
let initialProducts = [
  // --- KEYBOARDS ---
  {
    id: 1,
    name: "Keychron K2 Pro Wireless",
    category: "Keyboards",
    price: 8499,
    stock: 14,
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Akko 3068B Plus Retro",
    category: "Keyboards",
    price: 6299,
    stock: 9,
    imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Logitech G Pro X TKL",
    category: "Keyboards",
    price: 11499,
    stock: 5,
    imageUrl: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Royal Kludge RK61 RGB",
    category: "Keyboards",
    price: 3899,
    stock: 22,
    imageUrl: "https://images.unsplash.com/photo-1541140532154-b024d705b909?auto=format&fit=crop&w=600&q=80"
  },

  // --- GAMING MICE ---
  {
    id: 5,
    name: "Logitech G Pro X Superlight",
    category: "Gaming Mice",
    price: 10999,
    stock: 12,
    imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Razer DeathAdder V3 Pro",
    category: "Gaming Mice",
    price: 12499,
    stock: 8,
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Logitech MX Master 3S",
    category: "Gaming Mice",
    price: 8995,
    stock: 18,
    imageUrl: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Glorious Model O Wireless",
    category: "Gaming Mice",
    price: 5999,
    stock: 11,
    imageUrl: "https://images.unsplash.com/photo-1626218174358-7769486c4b79?auto=format&fit=crop&w=600&q=80"
  },

  // --- HEADSETS ---
  {
    id: 9,
    name: "Sony WH-1000XM5 Wireless",
    category: "Headsets",
    price: 29990,
    stock: 6,
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "HyperX Cloud II Wireless",
    category: "Headsets",
    price: 9490,
    stock: 15,
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Audio-Technica ATH-M50xBT2",
    category: "Headsets",
    price: 15999,
    stock: 7,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "SteelSeries Arctis Nova 7",
    category: "Headsets",
    price: 16499,
    stock: 4,
    imageUrl: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80"
  },

  // --- MONITORS ---
  {
    id: 13,
    name: "LG UltraGear 27'' QHD 165Hz",
    category: "Monitors",
    price: 24999,
    stock: 10,
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Samsung Odyssey G7 32'' Curved",
    category: "Monitors",
    price: 43999,
    stock: 3,
    imageUrl: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    name: "BenQ MOBIUZ EX2710Q 1440p",
    category: "Monitors",
    price: 27490,
    stock: 8,
    imageUrl: "https://images.unsplash.com/photo-1585792180666-f7547cb6a25c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    name: "Dell UltraSharp 32'' 4K Hub",
    category: "Monitors",
    price: 68900,
    stock: 2,
    imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80"
  },

  // --- DESK GEAR ---
  {
    id: 17,
    name: "Grovemade Wool Felt Desk Pad",
    category: "Desk Gear",
    price: 3499,
    stock: 25,
    imageUrl: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    name: "BenQ ScreenBar Monitor Light",
    category: "Desk Gear",
    price: 9990,
    stock: 12,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19,
    name: "Ergonomic Aluminium Laptop Stand",
    category: "Desk Gear",
    price: 1899,
    stock: 30,
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    name: "Elgato Stream Deck MK.2",
    category: "Desk Gear",
    price: 13999,
    stock: 7,
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
  }
];

let products = [...initialProducts];
let currentFilter = "All Gear";
let cartItemCount = 0;

const grid = document.getElementById("productGrid");
const form = document.getElementById("productForm");
const cartBadge = document.getElementById("cartCount");
const totalBadge = document.getElementById("productTotalBadge");

// 1. Fetch from Spring Boot
async function fetchProducts() {
  try {
    const res = await fetch(API_URL);
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        products = data;
      }
    }
  } catch (err) {
    console.warn("Backend offline. Displaying local 20 products.", err);
  }
  renderProducts();
}

// 2. Render Cards
function renderProducts() {
  grid.innerHTML = "";

  const filtered = currentFilter === "All Gear" 
    ? products 
    : products.filter(p => p.category === currentFilter);

  totalBadge.innerText = `Live Inventory (${filtered.length} Items)`;

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 40px;">No gear found in this category.</p>`;
    return;
  }

  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div>
        <div class="card-img-wrapper">
          <img class="card-img" src="${p.imageUrl || 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80'}" alt="${p.name}" loading="lazy">
        </div>
        <div class="card-tag">${p.category || 'Official Nexora Gear'}</div>
        <h3>${p.name}</h3>
        <div class="price-row">
            <span class="price">₹${Number(p.price).toLocaleString('en-IN')}</span>
            <span class="stock">● ${p.stock} in stock</span>
        </div>
      </div>
      <div style="display: flex; gap: 8px; margin-top: 14px;">
        <button class="add-cart-btn" style="flex: 1;" onclick="addToCart()">Add to Cart</button>
        <button onclick="deleteProduct(${p.id})" title="Delete Item" style="background: #fee2e2; border: 1px solid #fca5a5; color: #b91c1c; border-radius: 6px; padding: 0 10px; cursor: pointer; font-weight: 700;">✕</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// 3. Category Filter
function filterCategory(categoryName, element) {
  currentFilter = categoryName;
  document.querySelectorAll('.cat-pill').forEach(el => el.classList.remove('active'));
  if (element) element.classList.add('active');
  renderProducts();
}

// 4. Cart Counter
function addToCart() {
  cartItemCount++;
  cartBadge.innerText = cartItemCount;
}

// 5. Admin Form: Add Product
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("pName").value.trim();
  const categoryInput = document.getElementById("pCategory").value;
  const priceInput = Number(document.getElementById("pPrice").value);
  const stockInput = Number(document.getElementById("pStock").value);
  const imgInput = document.getElementById("pImg").value.trim();

  const newProduct = {
    name: nameInput,
    category: categoryInput,
    price: priceInput,
    stock: stockInput,
    imageUrl: imgInput
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct)
    });

    if (res.ok) {
      const savedData = await res.json();
      products.unshift(savedData);
    } else {
      newProduct.id = Date.now();
      products.unshift(newProduct);
    }
  } catch (err) {
    newProduct.id = Date.now();
    products.unshift(newProduct);
  }

  renderProducts();
  form.reset();
  alert("Product added successfully!");
});

// 6. Delete Product
async function deleteProduct(id) {
  if (!confirm("Are you sure you want to remove this product?")) return;
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  } catch (err) {
    console.warn("Deleted locally.");
  }
  products = products.filter(p => p.id !== id);
  renderProducts();
}

fetchProducts();