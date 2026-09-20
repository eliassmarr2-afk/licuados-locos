const PRODUCTS = [
  {
    id: "frutilla",
    name: "Licuado de frutilla",
    category: "frutilla",
    kind: "Clásico",
    price: 8890,
    accent: "#ec7f8a",
    soft: "#f3b9c0",
    image: "https://images.unsplash.com/photo-1560536914-61692ef17082?auto=format&fit=crop&w=900&q=82",
    description: "Frutilla, leche y hielo. Fresco, suave y bien frutal."
  },
  {
    id: "banana",
    name: "Licuado de banana",
    category: "banana",
    kind: "Clásico",
    price: 8890,
    accent: "#e8bd49",
    soft: "#f4df91",
    image: "https://images.unsplash.com/photo-1685967836529-b0e8d6938227?auto=format&fit=crop&w=900&q=82",
    description: "Banana madura, leche y hielo para una textura cremosa."
  },
  {
    id: "sandia",
    name: "Licuado de sandía",
    category: "sandia",
    kind: "Clásico",
    price: 8890,
    accent: "#ed6771",
    soft: "#f2aab0",
    image: "https://images.unsplash.com/photo-1683531658992-b78c311900a3?auto=format&fit=crop&w=900&q=82",
    description: "Sandía bien fría, hielo y una mezcla liviana y refrescante."
  },
  {
    id: "durazno",
    name: "Licuado de durazno",
    category: "durazno",
    kind: "Clásico",
    price: 8890,
    accent: "#ee9b64",
    soft: "#f4c59f",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=82",
    description: "Durazno, leche y hielo con una base cremosa y fresca."
  },
  {
    id: "manzana",
    name: "Licuado de manzana",
    category: "manzana",
    kind: "Clásico",
    price: 8890,
    accent: "#7eb95b",
    soft: "#b8d79f",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=900&q=82",
    description: "Manzana fresca, hielo y una combinación suave y equilibrada."
  },
  {
    id: "uvas",
    name: "Licuado de uvas",
    category: "uvas",
    kind: "Clásico",
    price: 8890,
    accent: "#9568ad",
    soft: "#cdb5da",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=82",
    description: "Uvas, hielo y una base fresca con perfil naturalmente dulce."
  },
  {
    id: "frutilla-banana",
    name: "Frutilla + banana",
    category: "frutilla banana",
    kind: "Combinado",
    price: 9230,
    accent: "#df8a83",
    soft: "#efb9b4",
    image: "https://images.unsplash.com/photo-1587501578729-2d1b41255ce4?auto=format&fit=crop&w=900&q=82",
    description: "Frutilla y banana en una mezcla cremosa, dulce y equilibrada."
  },
  {
    id: "sandia-durazno",
    name: "Sandía + durazno",
    category: "sandia durazno",
    kind: "Combinado",
    price: 9230,
    accent: "#ed846c",
    soft: "#f3b8a8",
    image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=900&q=82",
    description: "Una combinación fresca de sandía y durazno con mucho sabor."
  },
  {
    id: "manzana-uvas",
    name: "Manzana + uvas",
    category: "manzana uvas",
    kind: "Combinado",
    price: 9230,
    accent: "#788f64",
    soft: "#b8c8aa",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=900&q=82",
    description: "Manzana y uvas con un perfil fresco, dulce y ligeramente ácido."
  }
];

const money = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0
});

function productRow(product) {
  return (
    '<article class="product-row" ' +
      'data-search="' + (product.name + " " + product.category).toLowerCase() + '" ' +
      'data-category="' + product.category.toLowerCase() + '" ' +
      'style="--product-accent:' + product.accent + ';--product-soft:' + product.soft + ';">' +
      '<div class="product-row__content">' +
        '<a class="product-row__copy" href="producto.html?producto=' + encodeURIComponent(product.id) + '" aria-label="Ver ' + product.name + '">' +
          '<h3>' + product.name + '</h3>' +
          '<p>' + product.description + '</p>' +
        '</a>' +
        '<div class="product-row__footer">' +
          '<span class="product-row__price">' + money.format(product.price) + '</span>' +
          '<div class="quantity-control" aria-label="Cantidad de ' + product.name + '">' +
            '<button class="row-quantity-minus" type="button" aria-label="Restar uno" data-product="' + product.id + '">−</button>' +
            '<span class="row-quantity-value" data-product="' + product.id + '">1</span>' +
            '<button class="row-quantity-plus" type="button" aria-label="Sumar uno" data-product="' + product.id + '">+</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<a class="product-row__media" href="producto.html?producto=' + encodeURIComponent(product.id) + '" aria-label="Ver ' + product.name + '">' +
        '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy">' +
      '</a>' +
    '</article>'
  );
}

function initHome() {
  const classicGrid = document.querySelector("#classicGrid");
  const comboGrid = document.querySelector("#comboGrid");
  if (!classicGrid || !comboGrid) return;

  classicGrid.innerHTML = PRODUCTS
    .filter(function (product) { return product.kind === "Clásico"; })
    .map(productRow)
    .join("");

  comboGrid.innerHTML = PRODUCTS
    .filter(function (product) { return product.kind === "Combinado"; })
    .map(productRow)
    .join("");

  const searchInput = document.querySelector("#searchInput");
  const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
  const emptyState = document.querySelector("#emptyState");
  const quantities = {};
  let activeFilter = "todos";

  PRODUCTS.forEach(function (product) {
    quantities[product.id] = 1;
  });

  function renderRowQuantity(productId) {
    const value = document.querySelector('.row-quantity-value[data-product="' + productId + '"]');
    if (value) value.textContent = quantities[productId];
  }

  document.addEventListener("click", function (event) {
    const minus = event.target.closest(".row-quantity-minus");
    const plus = event.target.closest(".row-quantity-plus");

    if (minus) {
      const productId = minus.dataset.product;
      quantities[productId] = Math.max(1, quantities[productId] - 1);
      renderRowQuantity(productId);
    }

    if (plus) {
      const productId = plus.dataset.product;
      quantities[productId] += 1;
      renderRowQuantity(productId);
    }
  });

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    document.querySelectorAll(".product-row").forEach(function (row) {
      const matchesSearch = !query || row.dataset.search.includes(query);
      const matchesCategory =
        activeFilter === "todos" || row.dataset.category.includes(activeFilter);
      const show = matchesSearch && matchesCategory;

      row.hidden = !show;
      if (show) visible += 1;
    });

    emptyState.hidden = visible !== 0;
  }

  searchInput.addEventListener("input", applyFilters);

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      activeFilter = button.dataset.filter;

      filterButtons.forEach(function (item) {
        item.classList.remove("is-active");
      });

      button.classList.add("is-active");
      applyFilters();
    });
  });
}

function initProductDetail() {
  const page = document.querySelector("[data-product-page]");
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("producto") || "frutilla";
  const product = PRODUCTS.find(function (item) {
    return item.id === productId;
  }) || PRODUCTS[0];

  document.documentElement.style.setProperty("--accent", product.accent);
  document.documentElement.style.setProperty("--accent-soft", product.soft);

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.setAttribute("content", product.accent);

  document.title = product.name + " | Licuados Locos";
  document.querySelector("#productImage").src = product.image;
  document.querySelector("#productImage").alt = product.name;
  document.querySelector("#productName").textContent = product.name;
  document.querySelector("#productSubtitle").textContent =
    product.kind === "Combinado" ? "Licuado combinado" : "Licuado clásico";
  document.querySelector("#productPrice").textContent = money.format(product.price);
  document.querySelector("#productDescription").textContent = product.description;

  const quantityValue = document.querySelector("#quantityValue");
  const minusButton = document.querySelector("#quantityMinus");
  const plusButton = document.querySelector("#quantityPlus");
  let quantity = 1;

  function renderQuantity() {
    quantityValue.textContent = quantity;
  }

  minusButton.addEventListener("click", function () {
    quantity = Math.max(1, quantity - 1);
    renderQuantity();
  });

  plusButton.addEventListener("click", function () {
    quantity += 1;
    renderQuantity();
  });
}

initHome();
initProductDetail();
