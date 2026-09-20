const PRODUCTS = [
  {
    id: "frutilla",
    name: "Licuado de frutilla",
    category: "frutilla",
    kind: "Clásico",
    price: 8890,
    accent: "#ef7f91",
    soft: "#f8cbd2",
    image: "https://images.unsplash.com/photo-1560536914-61692ef17082?auto=format&fit=crop&w=900&q=82",
    description: "Frutilla, leche y hielo. Fresco, suave y bien frutal."
  },
  {
    id: "banana",
    name: "Licuado de banana",
    category: "banana",
    kind: "Clásico",
    price: 8890,
    accent: "#e9bd45",
    soft: "#f6e8ac",
    image: "https://images.unsplash.com/photo-1685967836529-b0e8d6938227?auto=format&fit=crop&w=900&q=82",
    description: "Banana madura, leche y hielo para una textura cremosa."
  },
  {
    id: "sandia",
    name: "Licuado de sandía",
    category: "sandia",
    kind: "Clásico",
    price: 8890,
    accent: "#ef5f68",
    soft: "#f7c5c8",
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
    soft: "#f7d6bf",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=82",
    description: "Durazno, leche y hielo con una base cremosa y fresca."
  },
  {
    id: "manzana",
    name: "Licuado de manzana",
    category: "manzana",
    kind: "Clásico",
    price: 8890,
    accent: "#80b85a",
    soft: "#d8e9c9",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=900&q=82",
    description: "Manzana fresca, hielo y una combinación suave y equilibrada."
  },
  {
    id: "uvas",
    name: "Licuado de uvas",
    category: "uvas",
    kind: "Clásico",
    price: 8890,
    accent: "#9369ad",
    soft: "#ded0e7",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=82",
    description: "Uvas, hielo y una base fresca con perfil naturalmente dulce."
  },
  {
    id: "frutilla-banana",
    name: "Frutilla + banana",
    category: "frutilla banana",
    kind: "Combinado",
    price: 9230,
    accent: "#e9858e",
    soft: "#f5ccd0",
    image: "https://images.unsplash.com/photo-1587501578729-2d1b41255ce4?auto=format&fit=crop&w=900&q=82",
    description: "Frutilla y banana en una mezcla cremosa, dulce y equilibrada."
  },
  {
    id: "sandia-durazno",
    name: "Sandía + durazno",
    category: "sandia durazno",
    kind: "Combinado",
    price: 9230,
    accent: "#ef806c",
    soft: "#f7d0c8",
    image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=900&q=82",
    description: "Una combinación fresca de sandía y durazno con mucho sabor."
  },
  {
    id: "manzana-uvas",
    name: "Manzana + uvas",
    category: "manzana uvas",
    kind: "Combinado",
    price: 9230,
    accent: "#768f63",
    soft: "#d9e0d2",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=900&q=82",
    description: "Manzana y uvas con un perfil fresco, dulce y ligeramente ácido."
  }
];

const money = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0
});

function productCard(product) {
  return (
    '<a class="product-card" ' +
      'href="producto.html?producto=' + encodeURIComponent(product.id) + '" ' +
      'data-search="' + (product.name + " " + product.category).toLowerCase() + '" ' +
      'data-category="' + product.category.toLowerCase() + '" ' +
      'style="--product-accent:' + product.accent + ';--product-soft:' + product.soft + ';" ' +
      'aria-label="Ver ' + product.name + '">' +
      '<div class="product-card__content">' +
        '<span class="product-card__tag">' + product.kind + '</span>' +
        '<h3>' + product.name + '</h3>' +
        '<p>' + product.description + '</p>' +
        '<div class="product-card__footer">' +
          '<span class="product-card__price">' + money.format(product.price) + '</span>' +
          '<span class="product-card__action">Ver</span>' +
        '</div>' +
      '</div>' +
      '<div class="product-card__media">' +
        '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy">' +
      '</div>' +
    '</a>'
  );
}

function initHome() {
  const classicGrid = document.querySelector("#classicGrid");
  const comboGrid = document.querySelector("#comboGrid");
  if (!classicGrid || !comboGrid) return;

  classicGrid.innerHTML = PRODUCTS
    .filter(function (product) { return product.kind === "Clásico"; })
    .map(productCard)
    .join("");

  comboGrid.innerHTML = PRODUCTS
    .filter(function (product) { return product.kind === "Combinado"; })
    .map(productCard)
    .join("");

  const searchInput = document.querySelector("#searchInput");
  const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
  const emptyState = document.querySelector("#emptyState");
  let activeFilter = "todos";

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    document.querySelectorAll(".product-card").forEach(function (card) {
      const matchesSearch = !query || card.dataset.search.includes(query);
      const matchesCategory =
        activeFilter === "todos" || card.dataset.category.includes(activeFilter);
      const show = matchesSearch && matchesCategory;

      card.hidden = !show;
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

  document.title = product.name + " | Licuados Locos";
  document.querySelector("#productImage").src = product.image;
  document.querySelector("#productImage").alt = product.name;
  document.querySelector("#productKind").textContent = product.kind;
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
