import React, { useEffect } from 'react';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';

const ProductList = () => {
  useEffect(() => {
      (function () {

        var PEOPLE = [
          { name: "Akash", location: "Aurangabad, Maharashtra", role: "farmer", category: "wheat" },
          { name: "Rakesh Jagdish patil", location: "Dhule, Maharashtra", role: "farmer", category: "rice" },
          { name: "Ajinkya Deshpande", location: "Jalna, Maharashtra", role: "farmer", category: "millets" },
          { name: "Harshu", location: "Aurangabad, Maharashtra", role: "farmer", category: "barley" },
          { name: "Krishna Sonawane", location: "Aurangabad, Maharashtra", role: "farmer", category: "maize" },
          { name: "Bhushan Patil", location: "Dhule, Maharashtra", role: "farmer", category: "sorghum" },
          { name: "Sanket gopal", location: "Pune, Maharashtra", role: "farmer", category: "oats" },
          { name: "Sarthak Kulkarni", location: "Pune, Maharashtra", role: "farmer", category: "tamarind" },
          { name: "Vijay Patidar", location: "Shajapur, Madhya Pradesh", role: "farmer", category: "wheat" },
          { name: "Rahul Sharma", location: "Indore, Madhya Pradesh", role: "farmer", category: "rice" },
          { name: "Suresh Kale", location: "Nashik, Maharashtra", role: "farmer", category: "millets" },
          { name: "Priya More", location: "Nagpur, Maharashtra", role: "farmer", category: "barley" },
          { name: "Amit Joshi", location: "Kolhapur, Maharashtra", role: "farmer", category: "maize" },
          { name: "Ganesh Pawar", location: "Solapur, Maharashtra", role: "farmer", category: "sorghum" },
          { name: "Deepak Yadav", location: "Bhopal, Madhya Pradesh", role: "farmer", category: "oats" },
          { name: "Manoj Singh", location: "Jaipur, Rajasthan", role: "farmer", category: "wheat" },
          { name: "Anil Chavan", location: "Satara, Maharashtra", role: "farmer", category: "rice" },
          { name: "Rohit Deshmukh", location: "Ahmednagar, Maharashtra", role: "farmer", category: "millets" },
          { name: "Nitin Bhosale", location: "Sangli, Maharashtra", role: "farmer", category: "barley" },
          { name: "Kiran Patil", location: "Jalgaon, Maharashtra", role: "farmer", category: "maize" },
          { name: "Sunil Gaikwad", location: "Latur, Maharashtra", role: "farmer", category: "sorghum" },
          { name: "Prakash Shinde", location: "Osmanabad, Maharashtra", role: "farmer", category: "oats" },
          { name: "Mahesh Jadhav", location: "Beed, Maharashtra", role: "farmer", category: "tamarind" },
          { name: "Arjun Rathod", location: "Nanded, Maharashtra", role: "farmer", category: "wheat" },
          { name: "Meera Traders", location: "Mumbai, Maharashtra", role: "buyer", category: "wheat" },
          { name: "Agro Mart", location: "Pune, Maharashtra", role: "buyer", category: "rice" },
          { name: "Hari Om Traders", location: "Indore, Madhya Pradesh", role: "buyer", category: "millets" },
          { name: "Green Basket Co.", location: "Nashik, Maharashtra", role: "buyer", category: "barley" },
          { name: "Kisan Buyers Hub", location: "Nagpur, Maharashtra", role: "buyer", category: "maize" },
          { name: "Shree Grain Buyers", location: "Jaipur, Rajasthan", role: "buyer", category: "sorghum" },
          { name: "Fresh Harvest Traders", location: "Surat, Gujarat", role: "buyer", category: "oats" },
          { name: "Bharat Agri Buy", location: "Ahmedabad, Gujarat", role: "buyer", category: "tamarind" },
          { name: "AgriTech Mills", location: "Pune, Maharashtra", role: "manufacturer", category: "wheat" },
          { name: "Golden Grain Foods", location: "Rajkot, Gujarat", role: "manufacturer", category: "rice" },
          { name: "NutriFlakes Pvt Ltd", location: "Hyderabad, Telangana", role: "manufacturer", category: "millets" },
          { name: "Harvest Pack Co.", location: "Bengaluru, Karnataka", role: "manufacturer", category: "barley" },
          { name: "MaizePlus Industries", location: "Indore, Madhya Pradesh", role: "manufacturer", category: "maize" },
          { name: "Jowar Foods Ltd", location: "Solapur, Maharashtra", role: "manufacturer", category: "sorghum" },
          { name: "Oats & Co.", location: "Chennai, Tamil Nadu", role: "manufacturer", category: "oats" },
          { name: "Tamarind Works", location: "Nagpur, Maharashtra", role: "manufacturer", category: "tamarind" }
        ];

        var ROLE_LABEL = {
          farmer: "Farmer",
          buyer: "Buyer",
          manufacturer: "Manufacturer"
        };

        function personCard(person) {
          var roleLabel = ROLE_LABEL[person.role] || person.role;
          return (
            '<a class="tkb-person-card" href="product-details.html" data-role="' + person.role + '" data-category="' + person.category + '">' +
              '<span class="tkb-person-badge">' + roleLabel + "</span>" +
              '<div class="tkb-person-avatar" aria-hidden="true">' +
                '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">' +
                  '<circle cx="12" cy="8" r="3.2"/><path d="M5.5 19c.6-3.4 3.1-5.2 6.5-5.2s5.9 1.8 6.5 5.2"/>' +
                "</svg>" +
              "</div>" +
              '<h3 class="tkb-person-name">' + person.name + "</h3>" +
              '<p class="tkb-person-location">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-7.2 7-11.2A7 7 0 0 0 5 9.8C5 13.8 12 21 12 21z"/><circle cx="12" cy="10" r="2.4"/></svg>' +
                person.location +
              "</p>" +
            "</a>"
          );
        }

        function initProductList() {
          var grid = document.getElementById("productGrid");
          var pagination = document.getElementById("productPagination");
          var title = document.getElementById("productListTitle");
          if (!grid || !pagination) {
            return;
          }

          var state = {
            role: "farmer",
            category: "all",
            page: 1,
            perPage: 8
          };

          function filtered() {
            return PEOPLE.filter(function (person) {
              var roleOk = person.role === state.role;
              var categoryOk = state.category === "all" || person.category === state.category;
              return roleOk && categoryOk;
            });
          }

          function render() {
            var items = filtered();
            var totalPages = Math.max(1, Math.ceil(items.length / state.perPage));
            if (state.page > totalPages) {
              state.page = totalPages;
            }

            var start = (state.page - 1) * state.perPage;
            var pageItems = items.slice(start, start + state.perPage);
            grid.innerHTML = pageItems.map(personCard).join("");

            if (title) {
              title.textContent = "All Products – " + (ROLE_LABEL[state.role] + "s");
            }

            var buttons = [];
            buttons.push(
              '<button type="button" class="tkb-page-btn" data-page="prev" ' +
                (state.page === 1 ? "disabled" : "") +
                ">Previous</button>"
            );

            for (var i = 1; i <= totalPages; i++) {
              buttons.push(
                '<button type="button" class="tkb-page-btn' +
                  (i === state.page ? " is-active" : "") +
                  '" data-page="' + i + '">' + i + "</button>"
              );
            }

            buttons.push(
              '<button type="button" class="tkb-page-btn" data-page="next" ' +
                (state.page === totalPages ? "disabled" : "") +
                ">Next</button>"
            );

            pagination.innerHTML = buttons.join("");
          }

          document.querySelectorAll(".tkb-role-tab").forEach(function (tab) {
            tab.addEventListener("click", function () {
              document.querySelectorAll(".tkb-role-tab").forEach(function (item) {
                item.classList.remove("is-active");
              });
              tab.classList.add("is-active");
              state.role = tab.getAttribute("data-role");
              state.page = 1;
              render();
            });
          });

          document.querySelectorAll(".tkb-category-btn").forEach(function (btn) {
            btn.addEventListener("click", function () {
              document.querySelectorAll(".tkb-category-btn").forEach(function (item) {
                item.classList.remove("is-active");
              });
              btn.classList.add("is-active");
              state.category = btn.getAttribute("data-category");
              state.page = 1;
              render();
            });
          });

          var categorySearch = document.getElementById("categorySearch");
          if (categorySearch) {
            categorySearch.addEventListener("input", function () {
              var query = categorySearch.value.toLowerCase().trim();
              document.querySelectorAll(".tkb-category-list li").forEach(function (item) {
                var label = item.textContent.toLowerCase();
                item.style.display = !query || label.indexOf(query) !== -1 ? "" : "none";
              });
            });
          }

          pagination.addEventListener("click", function (event) {
            var button = event.target.closest("[data-page]");
            if (!button || button.disabled) {
              return;
            }
            var value = button.getAttribute("data-page");
            if (value === "prev") {
              state.page -= 1;
            } else if (value === "next") {
              state.page += 1;
            } else {
              state.page = parseInt(value, 10);
            }
            render();
            grid.scrollIntoView({ behavior: "smooth", block: "start" });
          });

          render();
        }
        initProductList();
      })();

  }, [])

  return (
    <div>
     <Header />
      <main className="tkb-products-main">
        <div className="container-lg">
            <div className="tkb-products-shell">
            <aside className="tkb-category-panel">
                <h2 className="tkb-category-heading">All Categories</h2>
                <input type="search" id="categorySearch" className="tkb-category-search" placeholder="Search categories..." />
                <ul className="tkb-category-list">
                <li><button type="button" className="tkb-category-btn is-active" data-category="all">All Categories</button></li>
                <li><button type="button" className="tkb-category-btn" data-category="wheat">Wheat</button></li>
                <li><button type="button" className="tkb-category-btn" data-category="rice">Rice</button></li>
                <li><button type="button" className="tkb-category-btn" data-category="millets">Millets</button></li>
                <li><button type="button" className="tkb-category-btn" data-category="barley">Barley</button></li>
                <li><button type="button" className="tkb-category-btn" data-category="maize">Maize (Corn)</button></li>
                <li><button type="button" className="tkb-category-btn" data-category="sorghum">Sorghum (Jowar)</button></li>
                <li><button type="button" className="tkb-category-btn" data-category="oats">Oats</button></li>
                <li><button type="button" className="tkb-category-btn" data-category="tamarind">Tamarind seeds</button></li>
                </ul>
            </aside>

            <section>
                <h1 className="tkb-products-title" id="productListTitle">All Products – Farmers</h1>
                <div className="tkb-role-tabs" role="tablist" aria-label="User type">
                <button type="button" className="tkb-role-tab is-active" data-role="farmer">Farmers</button>
                <button type="button" className="tkb-role-tab" data-role="buyer">Buyers</button>
                <button type="button" className="tkb-role-tab" data-role="manufacturer">Manufacturers</button>
                </div>
                <div className="tkb-product-grid" id="productGrid"></div>
                <nav className="tkb-pagination" id="productPagination" aria-label="Product list pages"></nav>
            </section>
            </div>
        </div>
        </main>
        <Footer />
    </div>
  )
}

export default ProductList;
