let ProductService = {





  GetProductById: function (id) {
    fetch(`http://localhost/Web-Project/backend/products/product/${id}`)
      .then((res) => {


        return res.json();
      })
      .then((item) => {

        const itemview = document.getElementById('itemview');

        itemview.innerHTML = "";

        itemview.innerHTML +=
          `
        <!-- Title + price -->
        <div class="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
          <div class="flex items-start justify-between gap-6">
            <div>
              <h1 class="text-2xl md:text-3xl font-extrabold text-white">
              ${item.name}</h1>
              <p class="mt-1 text-zinc-400">${item.category_name}</p>
              <div class="mt-2 flex items-center gap-3 text-sm">
                <div class="flex items-center gap-0.5 text-yellow-400" aria-label="4.8 out of 5 stars">
                  ★★★★☆
                </div>
                <span class="text-zinc-500">(284 reviews)</span>
              </div>
            </div>
            <button aria-label="Add to Wishlist"
              class="rounded-xl border border-zinc-800 bg-black px-3 py-2 text-sm font-semibold text-zinc-200 hover:border-zinc-700">
              ♥
            </button>
          </div>

          <div class="mt-4 flex items-baseline gap-3">
            <p class="text-3xl font-extrabold text-white">$${item.price}</p>
            <span
              class="rounded-full bg-purple-600/15 px-2 py-0.5 text-xs font-semibold text-purple-300 ring-1 ring-purple-800/40">Free
              Shipping</span>
          </div>
        </div>

        <!-- Color & Size -->
        <div class="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
          <!-- Colors -->
          <div>
            <p class="mb-2 text-sm font-medium text-zinc-300">Color</p>
            <div id="colorGroup" class="flex flex-wrap gap-2">
              <button data-color="Lakers Purple" title="Lakers Purple"
                class="h-9 w-9 rounded-full border-2 border-transparent bg-purple-600 ring-2 ring-purple-600/40 hover:ring-purple-600"></button>
              <button data-color="Black" title="Black"
                class="h-9 w-9 rounded-full border-2 border-transparent bg-black ring-2 ring-zinc-700 hover:ring-zinc-600"></button>
              <button data-color="City White" title="City White"
                class="h-9 w-9 rounded-full border-2 border-zinc-700 bg-zinc-100 ring-2 ring-zinc-700 hover:ring-zinc-600"></button>
            </div>
          </div>

          <!-- Sizes -->
          <div class="mt-6">
            <div class="mb-2 flex items-center justify-between">
              <p class="text-sm font-medium text-zinc-300">Size (EU)</p>
              <a href="#size-guide" class="text-xs font-semibold text-purple-400 hover:underline">Size guide</a>
            </div>
            <div id="sizeGroup" class="grid grid-cols-5 gap-2">
              <button
                class="rounded-xl border border-zinc-800 bg-black px-0 py-2 text-sm font-semibold text-zinc-200 hover:border-zinc-700">S</button>
              <button
                class="rounded-xl border border-zinc-800 bg-black px-0 py-2 text-sm font-semibold text-zinc-200 hover:border-zinc-700">M</button>
              <button
                class="rounded-xl border border-zinc-800 bg-black px-0 py-2 text-sm font-semibold text-zinc-200 hover:border-zinc-700">L</button>
              <button
                class="rounded-xl border border-zinc-800 bg-black px-0 py-2 text-sm font-semibold text-zinc-200 hover:border-zinc-700">XL</button>
              <button
                class="rounded-xl border border-zinc-800 bg-black px-0 py-2 text-sm font-semibold text-zinc-200 hover:border-zinc-700">XXL</button>
            </div>
          </div>
        </div>

        <!-- Quantity + CTAs -->
        <div class="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
          <div class="flex flex-wrap items-center gap-3">
            <div class="flex items-center rounded-xl border border-zinc-800 bg-black">
              <button class="h-11 w-11 rounded-l-xl text-lg hover:bg-zinc-900">−</button>
              <input type="number" min="1" value="1"
                class="h-11 w-14 border-x border-zinc-800 bg-black text-center text-white outline-none" />
              <button class="h-11 w-11 rounded-r-xl text-lg hover:bg-zinc-900">+</button>
            </div>
            <button
              class="inline-flex h-11 flex-1 items-center justify-center rounded-2xl bg-purple-600 px-6 text-sm font-semibold text-white shadow-sm ring-1 ring-purple-800/20 transition hover:bg-purple-700 active:scale-[0.98]">
              Add to Cart
            </button>
            <button
              class="inline-flex h-11 flex-1 items-center justify-center rounded-2xl border border-zinc-800 bg-black px-6 text-sm font-semibold text-zinc-100 transition hover:border-zinc-700 hover:shadow-sm">
              Buy Now
            </button>
          </div>

          <!-- Trust badges -->
          <div class="mt-4 flex flex-wrap items-center gap-2">
            <span class="rounded-full bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300">30-day returns</span>
            <span class="rounded-full bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300">2-year warranty</span>
            <span class="rounded-full bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300">Carbon neutral
              shipping</span>
          </div>
        </div>

        <!-- Feature callouts -->
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
            <p class="text-sm font-semibold text-white">Pro Fabric</p>
            <p class="mt-1 text-sm text-zinc-400">Lightweight mesh with heat-applied name & number for reduced bulk.</p>
          </div>
          <div class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
            <p class="text-sm font-semibold text-white">Game-Day Cut</p>
            <p class="mt-1 text-sm text-zinc-400">Athletic fit with room to move and layer over base tops.</p>
          </div>
          <div class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
            <p class="text-sm font-semibold text-white">Breathable Zones</p>
            <p class="mt-1 text-sm text-zinc-400">Targeted ventilation mapped to high-heat areas.</p>
          </div>
        </div>

        <!-- Accordions (dark) -->
        <div class="overflow-hidden rounded-3xl border border-zinc-800">
          <details class="group p-5 open:bg-zinc-900/40">
            <summary class="flex cursor-pointer items-center justify-between text-sm font-semibold text-white">
              Description
              <span class="ml-2 text-zinc-500 group-open:rotate-180 transition">⌃</span>
            </summary>
            <p class="mt-3 text-sm leading-relaxed text-zinc-300">
              The LeBron Statement Jersey pairs pro-grade details with breathable performance fabric. Designed for
              full-court intensity and everyday style.
            </p>
          </details>
          <div class="h-px bg-zinc-800"></div>
          <details class="group p-5 open:bg-zinc-900/40">
            <summary class="flex cursor-pointer items-center justify-between text-sm font-semibold text-white">
              Shipping & Returns
              <span class="ml-2 text-zinc-500 group-open:rotate-180 transition">⌃</span>
            </summary>
            <p class="mt-3 text-sm leading-relaxed text-zinc-300">
              Free standard shipping. Returns accepted within 30 days in new condition. Some exclusions apply.
            </p>
          </details>
          <div class="h-px bg-zinc-800"></div>
          <details class="group p-5 open:bg-zinc-900/40">
            <summary class="flex cursor-pointer items-center justify-between text-sm font-semibold text-white">
              Materials & Care
              <span class="ml-2 text-zinc-500 group-open:rotate-180 transition">⌃</span>
            </summary>
            <p class="mt-3 text-sm leading-relaxed text-zinc-300">
              Body: 100% polyester mesh. Trim: heat-applied. Machine wash cold inside-out. Line dry.
            </p>
          </details>
        </div>

        `
        console.log(data);
      })

  },

  GetProductByCategory: function (categoryname) {
    fetch(`http://localhost/Web-Project/backend/category/${categoryname}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        const lebronmerch = document.getElementById('lebron-merch');

        lebronmerch.innerHTML = "";

        for (let item of data) {
          lebronmerch.innerHTML += `
                      <article
        class="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 transition hover:-translate-y-0.5 hover:border-zinc-700"
        onclick="ProductService.GetProductById(${item.id})"
        >
        <div class="relative">
          <span
            class="absolute left-3 top-3 rounded-full bg-purple-600 px-2.5 py-1 text-xs font-semibold text-white">New</span>
          <img
            src="https://www.hoopsheaven.com.au/cdn/shop/files/AURORA_DO9530-508_PHSFH001-2000_3024x.png?v=1693381566"
            alt="LeBron Statement Jersey — LA #23"
            class="mx-auto h-48 w-full object-contain transition duration-300 group-hover:scale-[1.03]">
        </div>
        <div class="mt-4">
          <h3 class="text-sm font-semibold">${item.name}</h3>
          <p class="mt-1 text-sm text-zinc-400">${item.category_name}</p>
          <p class="mt-2 text-base font-bold">$${item.price}</p>
        </div>
        <a href="#view_item"
          class="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-zinc-800 bg-black px-4 py-2.5 text-sm font-semibold text-zinc-100 hover:border-zinc-700">
          View
        </a>
      </article>
                    `
        }
      })
  }
  ,
  GetLebronProducts: function () {

    fetch("http://localhost/Web-Project/backend/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);


        const lebronmerch = document.getElementById('lebron-merch');

        lebronmerch.innerHTML = "";

        for (let item of data) {
          lebronmerch.innerHTML += `
                      <article
        class="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 transition hover:-translate-y-0.5 hover:border-zinc-700"
        onclick="ProductService.GetProductById(${item.id})"
        >
        <div class="relative">
          <span
            class="absolute left-3 top-3 rounded-full bg-purple-600 px-2.5 py-1 text-xs font-semibold text-white">New</span>
          <img
            src="https://www.hoopsheaven.com.au/cdn/shop/files/AURORA_DO9530-508_PHSFH001-2000_3024x.png?v=1693381566"
            alt="LeBron Statement Jersey — LA #23"
            class="mx-auto h-48 w-full object-contain transition duration-300 group-hover:scale-[1.03]">
        </div>
        <div class="mt-4">
          <h3 class="text-sm font-semibold">${item.name}</h3>
          <p class="mt-1 text-sm text-zinc-400">${item.category_name}</p>
          <p class="mt-2 text-base font-bold">$${item.price}</p>
        </div>
        <a href="#view_item"
          class="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-zinc-800 bg-black px-4 py-2.5 text-sm font-semibold text-zinc-100 hover:border-zinc-700">
          View
        </a>
      </article>
                    `
        }
      })
  }
}