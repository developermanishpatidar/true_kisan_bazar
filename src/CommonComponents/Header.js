import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo  from '../assets/images/logo.svg'

const Header = () => {

  useEffect(()=> {
      var accountPopupCleanup;
      (function () {
        "use strict";

        function initAccountPopup() {
          var toggle = document.getElementById("accountMenuToggle");
          var popup = document.getElementById("accountPopup");
          var backdrop = document.getElementById("accountPopupBackdrop");
          if (!toggle || !popup) {
            return function cleanupNoop() {};
          }

          // Guard against double-initialization. React 18 Strict Mode
          // (and any accidental double-mount of this component) runs this
          // effect twice, which used to attach two click listeners to the
          // same button. One click would then open AND immediately close
          // the popup in the same tick, making it look like nothing happened.
          if (toggle.dataset.tkbAccountInit === "true") {
            return function cleanupNoop() {};
          }
          toggle.dataset.tkbAccountInit = "true";

          function closePopup() {
            popup.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            if (backdrop) {
              backdrop.classList.remove("is-open");
            }
          }

          function openPopup() {
            popup.classList.add("is-open");
            toggle.setAttribute("aria-expanded", "true");
            if (backdrop) {
              backdrop.classList.add("is-open");
            }
          }

          function handleToggleClick(event) {
            event.preventDefault();
            event.stopPropagation();
            if (popup.classList.contains("is-open")) {
              closePopup();
            } else {
              openPopup();
            }
          }

          function handleKeydown(event) {
            if (event.key === "Escape") {
              closePopup();
            }
          }

          function stopPropagation(event) {
            event.stopPropagation();
          }

          toggle.addEventListener("click", handleToggleClick);

          if (backdrop) {
            backdrop.addEventListener("click", closePopup);
          }

          document.addEventListener("keydown", handleKeydown);

          popup.addEventListener("click", stopPropagation);

          // Cleanup so a re-run of this effect (Strict Mode's
          // mount -> cleanup -> mount, or an unmount) removes exactly the
          // listeners this call added, and clears the guard flag.
          return function cleanup() {
            toggle.removeEventListener("click", handleToggleClick);
            if (backdrop) {
              backdrop.removeEventListener("click", closePopup);
            }
            document.removeEventListener("keydown", handleKeydown);
            popup.removeEventListener("click", stopPropagation);
            delete toggle.dataset.tkbAccountInit;
          };
        }

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

        function initLogin() {
          var form = document.getElementById("loginPhoneForm");
          if (!form) {
            return;
          }

          var terms = document.getElementById("acceptTerms");
          var nextBtn = document.getElementById("loginNextBtn");
          var phoneStep = document.getElementById("loginPhoneStep");
          var otpStep = document.getElementById("loginOtpStep");
          var phoneInput = document.getElementById("mobileNumber");
          var stepPhone = document.getElementById("stepPhone");
          var stepOtp = document.getElementById("stepOtp");

          function syncNext() {
            if (nextBtn && terms && phoneInput) {
              nextBtn.disabled = !(terms.checked && phoneInput.value.replace(/\D/g, "").length >= 10);
            }
          }

          if (terms) {
            terms.addEventListener("change", syncNext);
          }
          if (phoneInput) {
            phoneInput.addEventListener("input", syncNext);
          }
          syncNext();

          form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (nextBtn && nextBtn.disabled) {
              return;
            }
            if (phoneStep) {
              phoneStep.hidden = true;
            }
            if (otpStep) {
              otpStep.hidden = false;
            }
            if (stepPhone) {
              stepPhone.classList.add("is-done");
              stepPhone.classList.remove("is-current");
            }
            if (stepOtp) {
              stepOtp.classList.add("is-current");
            }
          });

          var otpForm = document.getElementById("loginOtpForm");
          if (otpForm) {
            var otpInputs = otpForm.querySelectorAll(".tkb-otp-inputs input");
            otpInputs.forEach(function (input, index) {
              input.addEventListener("input", function () {
                input.value = input.value.replace(/\D/g, "").slice(0, 1);
                if (input.value && otpInputs[index + 1]) {
                  otpInputs[index + 1].focus();
                }
              });
              input.addEventListener("keydown", function (event) {
                if (event.key === "Backspace" && !input.value && otpInputs[index - 1]) {
                  otpInputs[index - 1].focus();
                }
              });
            });

            otpForm.addEventListener("submit", function (event) {
              event.preventDefault();
              window.location.href = "profile.html";
            });
          }
        }

        accountPopupCleanup = initAccountPopup();
        initProductList();
        initLogin();
      })();

      return function () {
        if (typeof accountPopupCleanup === "function") {
          accountPopupCleanup();
        }
      };
  },[])

  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
            <defs>
                <symbol xmlns="http://www.w3.org/2000/svg" id="menu" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6.032a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 5.033a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2z"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="user" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="9" r="3"/><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"/></g></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="wishlist" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16.09v-4.992c0-4.29 0-6.433-1.318-7.766C18.364 2 16.242 2 12 2C7.757 2 5.636 2 4.318 3.332C3 4.665 3 6.81 3 11.098v4.993c0 3.096 0 4.645.734 5.321c.35.323.792.526 1.263.58c.987.113 2.14-.907 4.445-2.946c1.02-.901 1.529-1.352 2.118-1.47c.29-.06.59-.06.88 0c.59.118 1.099.569 2.118 1.47c2.305 2.039 3.458 3.059 4.445 2.945c.47-.053.913-.256 1.263-.579c.734-.676.734-2.224.734-5.321Z"/><path stroke-linecap="round" d="M15 6H9"/></g></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="shopping-bag" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301C4.378 9 6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154c.901 1.153.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z"/><path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"/><path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M8 13v4m8-4v4m-4-4v4"/></g></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="fruits" viewBox="0 0 48 48"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M18.88 7.566a1 1 0 0 1 1 1v6.6a1 1 0 1 1-2 0v-6.6a1 1 0 0 1 1-1"/><path d="M11.78 13.905c1.13-.27 2.283-.065 3.48.553c.975.505 1.667.736 2.206.847c.538.112.966.114 1.483.114v2h-.02c-.516 0-1.12 0-1.868-.155c-.757-.157-1.622-.462-2.72-1.03c-.878-.453-1.54-.517-2.096-.384c-.584.14-1.201.53-1.912 1.264c-1.632 1.688-2.139 3.426-2.316 4.762c-.1 1.644.197 4.89 1.668 8.063c.5 1.08 1.21 2.57 2.076 3.737c.432.582.866 1.03 1.283 1.306c.405.267.741.34 1.046.288c3.123-.538 3.71-.551 4.319-.551h1.037v2H18.38c-.422 0-.92 0-3.95.522c-.94.162-1.787-.127-2.488-.59c-.689-.455-1.284-1.106-1.787-1.783c-1.005-1.353-1.791-3.024-2.284-4.088c-1.638-3.532-1.972-7.137-1.848-9.064l.003-.032l.004-.032c.212-1.644.844-3.839 2.866-5.928c.845-.874 1.783-1.556 2.885-1.82"/><path d="M14.64 11.41c1.496 1.431 2.307 3.166 2.307 4.51a1 1 0 1 0 2 0c0-2.05-1.168-4.275-2.925-5.956C14.244 8.265 11.743 7 8.896 7a1 1 0 0 0 0 2c2.244 0 4.268.999 5.743 2.41"/><path d="M8.574 7.009a1 1 0 0 1 1.116.868c.492 3.93 3.945 6 6.734 7.115a1 1 0 0 1-.743 1.857c-2.869-1.147-7.335-3.604-7.975-8.724a1 1 0 0 1 .868-1.116m17.188 6.894c-1.152-.264-2.334-.066-3.57.548c-1.02.506-1.747.74-2.317.853c-.57.113-1.022.115-1.56.115a1 1 0 0 0 0 2h.019c.537 0 1.16 0 1.93-.153c.781-.155 1.676-.458 2.816-1.024c.924-.458 1.632-.528 2.236-.39c.626.144 1.277.542 2.017 1.277c1.716 1.703 2.235 3.452 2.414 4.784a1 1 0 0 0 1.982-.266c-.222-1.653-.884-3.85-2.987-5.938c-.881-.874-1.85-1.548-2.98-1.806m.945 20.377a1 1 0 0 0-1.414.027c-.757.786-1.393 1.05-1.931.962c-3.252-.538-3.86-.55-4.485-.55a1 1 0 0 0 0 2h.028c.447 0 .967 0 4.13.523c1.522.252 2.785-.599 3.699-1.548a1 1 0 0 0-.027-1.415"/><path d="M32.65 16.103c-1.003 1.81-1.263 3.709-.864 4.992a1 1 0 1 1-1.91.594c-.609-1.959-.153-4.43 1.025-6.556c1.193-2.152 3.206-4.101 5.925-4.947a1 1 0 1 1 .594 1.91c-2.143.666-3.78 2.222-4.77 4.007"/><path d="M34.719 17.379c-1.168 1.71-2.748 2.793-4.073 3.013a1 1 0 1 0 .326 1.973c2.023-.335 4.027-1.851 5.398-3.858c1.388-2.032 2.227-4.706 1.762-7.515a1 1 0 1 0-1.974.326c.367 2.214-.288 4.375-1.44 6.06"/><path d="M31.78 23a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-4.5 2.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"/><path d="M37.845 18.09a4.5 4.5 0 0 1 2.716 5.755a1 1 0 1 1-1.883-.675a2.5 2.5 0 1 0-4.706-1.69a1 1 0 0 1-1.882-.675a4.5 4.5 0 0 1 5.755-2.715"/><path d="M36.253 23.176a4.501 4.501 0 0 1 3.822 8.014a1 1 0 1 1-1.144-1.64a2.5 2.5 0 1 0-3.008-3.99a1 1 0 1 1-1.262-1.552a4.501 4.501 0 0 1 1.592-.832M27.78 29a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-4.5 2.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"/><path d="M35.78 29a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-4.5 2.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"/><path d="M31.78 35a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-4.5 2.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"/><path d="M37.834 33.966a1 1 0 0 1 1.278-.606a4.5 4.5 0 1 1-4.675 7.44a1 1 0 1 1 1.405-1.423a2.5 2.5 0 1 0 2.598-4.133a1 1 0 0 1-.606-1.278"/></g></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="dairy" viewBox="0 0 48 48"><g fill="none"><path d="M0 0h48v48H0z"/><path fill="currentColor" fill-rule="evenodd" d="M10 5a1 1 0 0 1 1-1h18.571a1 1 0 0 1 .559.17l7.428 5A1 1 0 0 1 38 10v33a1 1 0 0 1-1 1H18.429a1 1 0 0 1-.559-.17l-7.428-5A1 1 0 0 1 10 38zm2 1.878v2.494a2 2 0 0 0 .168.802l1.985 4.539a1 1 0 0 0 1.67.258l.682-.781A2 2 0 0 0 17 12.873v-2.63zM19 11v31h17V11zm14.723-2h-14.99l-4.456-3h14.99zM36 23a8 8 0 1 0-16 0a8 8 0 0 0 16 0M17 40.833V16.61a2.964 2.964 0 0 1-2 .702v22.175zm-4-2.692V16.5h.012a2.997 2.997 0 0 1-.691-.986L12 14.781v22.687zM28 17a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-4 5a1 1 0 0 1 1-1h6v2h-6a1 1 0 0 1-1-1m2 3a1 1 0 0 1 1-1h2v2h-2a1 1 0 0 1-1-1" clip-rule="evenodd"/></g></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="meat" viewBox="0 0 48 48"><g fill="currentColor"><path d="M14 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/><path fill-rule="evenodd" d="M15.086 6c1.26-1.26 3.414-.368 3.414 1.414V9h1.586c1.782 0 2.674 2.154 1.414 3.414l-1.793 1.793a1.138 1.138 0 0 1-.037.036l3.456 5.847a4 4 0 0 0 4.08 1.914l12.58-2.027c1.63-.263 2.74 1.609 1.728 2.914c-.97 1.251-1.459 2.85-1.812 4.6C38.384 34.02 32.854 39.052 26 39.88V42h2.5v2H19v-2h5v-2c-5.414 0-10.21-2.607-13.107-6.608c-2.324-3.21-1.946-7.335-1.006-10.767l.495-1.805a6.996 6.996 0 0 0 .181-2.822L10.5 18H7.914C6.132 18 5.24 15.846 6.5 14.586zm5 5l-1.466 1.466l-.73-1.233a4.55 4.55 0 0 0-.307-.455c.275.142.586.222.917.222zM16.5 9c0 .334.082.65.227.926a4.548 4.548 0 0 0-1.894-.845L16.5 7.414zm-8.586 7l1.595-1.594c.04.208.096.416.168.624l.334.97zm3.654-1.622a2.548 2.548 0 0 1 4.601-2.127l5.236 8.857a6 6 0 0 0 6.119 2.87l12.148-1.957c-1.082 1.557-1.589 3.383-1.93 5.075a13.09 13.09 0 0 1-1.419 3.815a.999.999 0 0 0-.247.222C34.183 33.513 31.378 35 28.264 35C22.654 35 18 30.136 18 24a1 1 0 0 0-2 0c0 7.12 5.432 13 12.264 13c.4 0 .794-.02 1.184-.06A14.402 14.402 0 0 1 24 38c-4.763 0-8.96-2.291-11.487-5.78c-1.766-2.439-1.6-5.773-.697-9.066l.495-1.806a8.998 8.998 0 0 0-.171-5.311z" clip-rule="evenodd"/></g></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="seafood" viewBox="0 0 24 24"><path fill="currentColor" d="M13.497 4.564c1.649-.906 3.859-1.137 6.669-.694c.119.685.221 1.711.147 2.86c-.102 1.572-.53 3.278-1.602 4.656l-.165.212l-.036.263v.002l-.002.014l-.013.074a9.298 9.298 0 0 1-1.294 3.217l-.84-1.688l-.96.72C13.65 15.513 10.903 16 9 16H8v1c0 .77-.004 1.293-.106 1.804a3.722 3.722 0 0 1-.147.53l-4.011-4.012a8.2 8.2 0 0 1 .978-.209A10.285 10.285 0 0 1 5.985 15H7v-1c0-2.697.864-3.993 1.83-5.442L9.202 8L7.428 5.339a9.688 9.688 0 0 1 1.765-.411c.609-.088 1.228-.13 1.773-.123c.202.002.385.012.548.026c.09.768.373 1.643.861 2.475c.725 1.236 1.938 2.442 3.774 3.13l.936.351l.703-1.872l-.937-.351c-1.364-.512-2.234-1.39-2.75-2.27c-.385-.655-.557-1.28-.604-1.73m6.947 7.845c1.285-1.759 1.752-3.81 1.865-5.55c.117-1.806-.14-3.371-.344-4.121l-.164-.605l-.616-.116c-3.425-.643-6.471-.492-8.855.91a7.649 7.649 0 0 0-1.338-.122c-.66-.009-1.383.042-2.083.143c-.698.1-1.397.252-2.004.455c-.575.193-1.193.471-1.612.89l-.58.58L6.8 8.003c-.813 1.256-1.6 2.711-1.767 5.054c-.19.02-.4.045-.622.08c-.857.131-2.032.409-2.965 1.03l-1.015.678l7.725 7.725l.676-1.015c.563-.845.87-1.59 1.024-2.359c.083-.413.118-.823.133-1.231c1.704-.117 3.837-.545 5.612-1.523l1.12 2.25l.983-.983c1.188-1.189 1.88-2.582 2.273-3.653a11.298 11.298 0 0 0 .467-1.646M17.5 4.58l1.417 1.417L17.5 7.414l-1.417-1.417z"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="bakery" viewBox="0 0 24 24"><path fill="currentColor" d="M19.87 17.412q.828.436 1.365-.206q.536-.643.138-1.414l-1.911-3.584l-1.666 4.123zm-5.308-.912h2.084l2.439-6.027q.228-.565.077-.914q-.15-.35-.57-.52l-2-.8q-.455-.19-.88-.047q-.424.145-.474.639zm-7.208 0h2.084l-.676-7.746q-.05-.39-.455-.548q-.405-.158-.9.032l-2 .8q-.45.19-.527.598q-.078.406.112.914zm-3.223.912l2.073-1.081l-1.627-4.123l-1.95 3.661q-.437.79.148 1.366q.585.575 1.356.177m6.307-.912h3.124l.788-8.912q.05-.455-.228-.772q-.278-.316-.772-.316h-2.7q-.373 0-.709.288t-.291.724zM3.53 18.538q-.87 0-1.45-.595q-.579-.595-.579-1.44q0-.28.068-.548q.069-.268.194-.524L4.077 11q-.33-.865-.08-1.715q.25-.85 1.045-1.173l2-.8q.427-.183.873-.185q.447-.002.797.265q.08-.782.628-1.337q.548-.555 1.34-.555h2.67q.78 0 1.338.526t.677 1.29q.293-.281.739-.225q.446.057.854.22l2 .8q.807.324 1.092 1.164q.285.84-.088 1.675l2.315 4.43q.111.218.186.437t.075.456q0 .933-.647 1.6q-.647.665-1.57.665q-.227 0-.431-.052q-.205-.053-.41-.16l-1.626-.826H6.134l-1.515.788q-.248.137-.524.194q-.276.056-.566.056m8.49-6.519"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="canned" viewBox="0 0 32 32"><g fill="none"><g fill="currentColor" clip-path="url(#fluentEmojiHighContrastCannedFood0)"><path d="M8 5.04h16v5.03h-2.239a7.977 7.977 0 0 0-5.771-2.46a7.977 7.977 0 0 0-5.771 2.46H8zm13.846 16.02H24v5.98H8v-5.98h2.134a7.978 7.978 0 0 0 5.856 2.55a7.978 7.978 0 0 0 5.856-2.55m-8.196-8.265a2.232 2.232 0 0 1-1.7-2.165h2.29c.71 0 1.344.333 1.752.852a2.232 2.232 0 0 1 1.768-.862h2.28a2.233 2.233 0 0 1-1.723 2.172a3.952 3.952 0 0 1-.757 7.828h-3.14c-2.18 0-3.95-1.77-3.95-3.95a3.954 3.954 0 0 1 3.18-3.875"/><path d="M3 3.52A3.52 3.52 0 0 1 6.52 0h18.3a3.52 3.52 0 0 1 2.17 6.292v19.5a3.532 3.532 0 0 1 1.35 2.778a3.52 3.52 0 0 1-3.52 3.52H6.52A3.52 3.52 0 0 1 3 28.57a3.54 3.54 0 0 1 2-3.185V6.696A3.52 3.52 0 0 1 3 3.52M24.82 2H6.52a1.52 1.52 0 1 0 0 3.04H7v22h-.48c-.84 0-1.52.69-1.52 1.53c0 .84.68 1.52 1.52 1.52h18.3c.84 0 1.52-.68 1.52-1.52c0-.78-.585-1.43-1.34-1.52V5.03A1.52 1.52 0 0 0 24.82 2"/></g><defs><clipPath id="fluentEmojiHighContrastCannedFood0"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs></g></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="frozen" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v3c0 3.771 0 5.657-1.172 6.828C17.657 21 15.771 21 12 21c-3.771 0-5.657 0-6.828-1.172C4 18.657 4 16.771 4 13z"/><path stroke-linejoin="round" d="M17 21v1h-1v-1m-8 0v1H7v-1"/><path d="M20 11.5H4"/><path stroke-linecap="round" d="M17 7v2m0 5v2"/></g></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="pasta" viewBox="0 0 32 32"><path fill="currentColor" d="m11.414 15l-8-8L2 8.414L8.586 15H2v1a14 14 0 0 0 28 0v-1ZM16 28A12.017 12.017 0 0 1 4.042 17h23.917A12.017 12.017 0 0 1 16 28"/><path fill="currentColor" d="M22 8a5.005 5.005 0 0 0-1.57.255A8.024 8.024 0 0 0 14 5a7.936 7.936 0 0 0-4.906 1.68L4.414 2L3 3.414l6.05 6.05l.707-.707A5.96 5.96 0 0 1 14 7a6.02 6.02 0 0 1 4.688 2.264a5.06 5.06 0 0 0-.59.61A2.99 2.99 0 0 1 15.754 11H12v2h3.754a4.98 4.98 0 0 0 3.904-1.874A3 3 0 0 1 25 13h2a5.006 5.006 0 0 0-5-5"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="breakfast" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1408 592q-26 0-45-19t-19-45q0-51 19-98t56-83l79-80q38-38 38-91q0-26 19-45t45-19q26 0 45 19t19 45q0 51-19 98t-56 83l-79 80q-38 38-38 91q0 26-19 45t-45 19m-384 0q-26 0-45-19t-19-45q0-51 19-98t56-83l79-80q38-38 38-91q0-26 19-45t45-19q26 0 45 19t19 45q0 51-19 98t-56 83l-79 80q-38 38-38 91q0 26-19 45t-45 19m832 176q40 0 75 15t61 41t41 61t15 75v384q0 40-15 75t-41 61t-61 41t-75 15h-57q-2 7-3 13t-4 12v39q0 66-25 124t-69 102t-102 69t-124 25h-384q-78 0-144-35t-110-93H334q-66 0-124-25t-102-68t-69-102t-25-125v-64h256q0-79 30-149t83-122t122-83t149-30q30 0 58 5t56 14V640h1024v128zM654 1152q-53 0-99 20t-82 55t-55 81t-20 100h370v-228q-26-13-54-20t-60-8m-320 512h441q-7-29-7-64v-64H153q10 28 28 51t41 41t52 26t60 10m463 67v1l1 2v-1zm867-131V768H896v832q0 40 15 75t41 61t61 41t75 15h384q40 0 75-15t61-41t41-61t15-75m256-256V960q0-26-19-45t-45-19h-64v512h64q26 0 45-19t19-45"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="snacks" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M6 14h36V8h-4l-2-4H12l-2 4H6z"/><path stroke-linecap="round" d="m36 44l2-30H10l2 30z"/></g></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="beverages" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h3.323l1.2 3H3v2h2.118l.827 14.059a1 1 0 0 0 .998.941h10.114a1 1 0 0 0 .998-.941L18.882 7H21V5H10.677l-2-5H4zm3.3 8.025L7.12 7h9.758l-.292 4.967c-2.307-.114-3.164-.475-4.216-.896c-1.092-.436-2.4-.936-5.072-1.046m.117 2.008c2.304.114 3.172.48 4.223.9c1.06.424 2.316.905 4.83 1.031L16.113 20H7.886z"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="spices" viewBox="0 0 24 24"><path fill="currentColor" d="M14.178 9.766a9.981 9.981 0 0 0 4.827-2.622V4.003h-14v3.141a9.98 9.98 0 0 0 4.827 2.622a2.5 2.5 0 0 1 4.346 0m.208 2a2.501 2.501 0 0 1-4.762 0a11.941 11.941 0 0 1-4.62-2.015v10.252h14V9.75a11.942 11.942 0 0 1-4.618 2.016M4.005 2.004h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="baby" viewBox="0 0 512 512"><path fill="currentColor" d="M425.39 200.035A184.3 184.3 0 0 0 290.812 91.289l26.756-42.809l-27.136-16.96l-35.305 56.488A184.046 184.046 0 0 0 86.61 200.035a71.978 71.978 0 0 0 0 143.93a184.071 184.071 0 0 0 338.78 0a71.978 71.978 0 0 0 0-143.93m27.152 99.975a39.77 39.77 0 0 1-27.76 11.961l-20.725.394l-8.113 19.074a152.066 152.066 0 0 1-279.887 0l-8.114-19.074l-20.725-.394a39.978 39.978 0 0 1 0-79.942l20.725-.394l8.114-19.074a152.067 152.067 0 0 1 279.887 0l8.113 19.074l20.725.394a39.974 39.974 0 0 1 27.76 67.981"/><path fill="currentColor" d="M168 232h40v40h-40zm136 0h40v40h-40zm-48 152a80 80 0 0 0 80-80H176a80 80 0 0 0 80 80"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="health" viewBox="0 0 24 24"><path fill="currentColor" d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3zM12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6 2.25z"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="household" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.36 6H1.64a1 1 0 0 0-1 1.13l.73 5.5a1 1 0 0 0 1 .87h9.24a1 1 0 0 0 1-.87l.73-5.5A1.001 1.001 0 0 0 12.36 6M4.5 8.5V11M7 8.5V11m2.5-2.5V11"/><path d="M9.48 1.54A2.79 2.79 0 0 1 11.78 4L12 6M2 6l.22-2a2.79 2.79 0 0 1 2.3-2.44"/><path d="M9.5 1.75A1.25 1.25 0 0 1 8.25 3h-2.5a1.25 1.25 0 0 1 0-2.5h2.5A1.25 1.25 0 0 1 9.5 1.75"/></g></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="personal" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22.012 14.74a3.504 3.504 0 0 1-7.008 0c0-2.628 3.5-7.009 3.5-7.009s3.508 4.381 3.508 7.009M9.998 9.233H3.99a2.002 2.002 0 0 0-2.002 2.002v10.013c0 1.106.896 2.002 2.002 2.002h6.008A2.002 2.002 0 0 0 12 21.248V11.235a2.002 2.002 0 0 0-2.002-2.002M4.766 6.23h4.456a.776.776 0 0 1 .778.775v2.228H3.99V7.005a.776.776 0 0 1 .776-.775M14 2.752l-.447-.895A2 2 0 0 0 11.764.75H2.989m4.005 13.489v4.005m-2.002-2.002h4.004M6.994.75v5.48"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="pet" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 9.5c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5s-1 .672-1 1.5s.448 1.5 1 1.5m3-4.5c.552 0 1-.672 1-1.5S5.052 2 4.5 2s-1 .672-1 1.5s.448 1.5 1 1.5m5 0c.552 0 1-.672 1-1.5S10.052 2 9.5 2s-1 .672-1 1.5s.448 1.5 1 1.5m3 4.5c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5s-1 .672-1 1.5s.448 1.5 1 1.5M10 10c0 1.38-1.62 2-3 2s-3-.62-3-2s1-3.5 3-3.5s3 2.12 3 3.5"/></symbol>
            </defs>
        </svg>
      {/* <div className="preloader-wrapper">
      <div className="preloader">
      </div>
    </div> */}

    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasCart">
      <div className="offcanvas-header justify-content-center">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Growers cider</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Fresh grapes</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Heinz tomato ketchup</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
  
          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </div>
      </div>
    </div>
    
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">

      <div className="offcanvas-header justify-content-between">
        <h4 className="fw-normal text-uppercase fs-6">Menu</h4>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body">
    
        <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
          <li className="nav-item border-dashed active">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#fruits"></use></svg>
              <span>Fruits and vegetables</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#dairy"></use></svg>
              <span>Dairy and Eggs</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#meat"></use></svg>
              <span>Meat and Poultry</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#seafood"></use></svg>
              <span>Seafood</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#bakery"></use></svg>
              <span>Bakery and Bread</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#canned"></use></svg>
              <span>Canned Goods</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#frozen"></use></svg>
              <span>Frozen Foods</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#pasta"></use></svg>
              <span>Pasta and Rice</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#breakfast"></use></svg>
              <span>Breakfast Foods</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#snacks"></use></svg>
              <span>Snacks and Chips</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <button className="btn btn-toggle dropdown-toggle position-relative w-100 d-flex justify-content-between align-items-center text-dark p-2" data-bs-toggle="collapse" data-bs-target="#beverages-collapse" aria-expanded="false">
              <div className="d-flex gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#beverages"></use></svg>
                <span>Beverages</span>
              </div>
            </button>
            <div className="collapse" id="beverages-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal ps-5 pb-1">
                <li className="border-bottom py-2"><Link to="#" className="dropdown-item">Water</Link></li>
                <li className="border-bottom py-2"><Link to="#" className="dropdown-item">Juice</Link></li>
                <li className="border-bottom py-2"><Link to="#" className="dropdown-item">Soda</Link></li>
                <li className="border-bottom py-2"><Link to="#" className="dropdown-item">Tea</Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#spices"></use></svg>
              <span>Spices and Seasonings</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#baby"></use></svg>
              <span>Baby Food and Formula</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#health"></use></svg>
              <span>Health and Wellness</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#household"></use></svg>
              <span>Household Supplies</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#personal"></use></svg>
              <span>Personal Care</span>
            </Link>
          </li>
          <li className="nav-item border-dashed">
            <Link to="#" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#pet"></use></svg>
              <span>Pet Food and Supplies</span>
            </Link>
          </li>
        </ul>
      
      </div>

    </div>
      <header>
        <div className="container-fluid">
            <div className="row py-3 border-bottom">
            
            <div className="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
                <div className="d-flex align-items-center my-3 my-sm-0">
                <Link to="/">
                    <img src={logo} alt="logo" className="img-fluid" />
                </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#menu"></use></svg>
                </button>
            </div>
            
            <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
                <div className="search-bar row bg-light p-2 rounded-4">
                <div className="col-md-4 d-none d-md-block">
                    <select className="form-select border-0 bg-transparent">
                    <option>All Categories</option>
                    <option>Groceries</option>
                    <option>Drinks</option>
                    <option>Chocolates</option>
                    </select>
                </div>
                <div className="col-11 col-md-7">
                    <form id="search-form" className="text-center" action="index.html" method="post">
                    <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
                    </form>
                </div>
                <div className="col-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
                </div>
                </div>
            </div>

            <div className="col-lg-4">
                <ul className="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-center mb-0 fw-bold text-uppercase text-dark">
                <li className="nav-item active">
                    <Link to="#" className="nav-link">Home</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle pe-3" role="button" id="pages" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
                    <ul className="dropdown-menu border-0 p-3 rounded-0 shadow" aria-labelledby="pages">
                    <li><Link to="#" className="dropdown-item">About Us </Link></li>
                    <li><Link to="#" className="dropdown-item">Shop </Link></li>
                    <li><Link to="#" className="dropdown-item">Single Product </Link></li>
                    <li><Link to="#" className="dropdown-item">Cart </Link></li>
                    <li><Link to="#" className="dropdown-item">Checkout </Link></li>
                    <li><Link to="#" className="dropdown-item">Blog </Link></li>
                    <li><Link to="#" className="dropdown-item">Single Post </Link></li>
                    <li><Link to="#" className="dropdown-item">Styles </Link></li>
                    <li><Link to="#" className="dropdown-item">Contact </Link></li>
                    <li><Link to="#" className="dropdown-item">Thank You </Link></li>
                    <li><Link to="#" className="dropdown-item">My Account </Link></li>
                    <li><Link to="#" className="dropdown-item">404 Error </Link></li>
                    </ul>
                </li>
                </ul>
            </div>
            
            {/* <div className="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
                <ul className="d-flex justify-content-end list-unstyled m-0">
                <li>
                    <Link to="#" className="p-2 mx-1">
                    <svg width="24" height="24"><use xlinkHref="#user"></use></svg>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="p-2 mx-1">
                    <svg width="24" height="24"><use xlinkHref="#wishlist"></use></svg>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                    <svg width="24" height="24"><use xlinkHref="#shopping-bag"></use></svg>
                    </Link>
                </li>
                </ul>
            </div> */}
              <div className="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
                <div className="tkb-header-actions">
                  <Link to="/enquiry" className="tkb-btn-buy-sell">Buy &amp; Sell</Link>
                  <div className="tkb-account-wrap">
                    <button type="button" className="tkb-btn-account" id="accountMenuToggle" aria-expanded="false" aria-controls="accountPopup">
                      <span className="tkb-btn-account-icon" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="12" cy="8" r="3.2"/>
                          <path d="M5.5 19c.6-3.4 3.1-5.2 6.5-5.2s5.9 1.8 6.5 5.2"/>
                        </svg>
                      </span>
                      Account
                    </button>
                    <div className="tkb-account-popup" id="accountPopup" role="menu" aria-label="Your Account">
                      <h3 className="tkb-account-popup-title">Your Account</h3>
                      <ul className="tkb-account-popup-list">
                        <li>
                          <Link to="/profile" role="menuitem">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.2"/><path d="M5.5 19c.6-3.4 3.1-5.2 6.5-5.2s5.9 1.8 6.5 5.2"/></svg>
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="#" role="menuitem">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M7 7V5.8A5 5 0 0 1 17 7"/></svg>
                            Subscription
                          </Link>
                        </li>
                        <li>
                          <Link to="/enquiry" role="menuitem">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>
                            My Enquiry List
                          </Link>
                        </li>
                        <li>
                          <Link to="/login" role="menuitem">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/><path d="M21 21V3"/></svg>
                            Logout
                          </Link>
                        </li>
                      </ul>
                      <div className="tkb-account-follow">
                        <span className="tkb-account-follow-label">Follow us</span>
                        <div className="tkb-account-social">
                          <Link to="#" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.2C12.3 3 11 4.4 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7z"/></svg></Link>
                          <Link to="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg></Link>
                          <Link to="#" aria-label="X"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14.7 10.3 22 2h-2.2l-6.2 7-5-7H2.5l7.7 10.8L2 22h2.2l6.8-7.7L16.3 22H22l-7.3-11.7Zm-2.4 2.7-1.1-1.5-6.2-8.3h2.7l4.9 6.6 1.1 1.5 6.5 8.7h-2.7l-5.2-7z"/></svg></Link>
                          <Link to="#" aria-label="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 9H4V20h2.5zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.6c0-1.7-.7-2.3-1.7-2.3s-1.9.8-1.9 2.4V20H11.4s.1-9.3 0-10.3H14v1.6c.6-1 1.7-1.9 3.5-1.9 2.4 0 4.1 1.6 4.1 5.1z"/></svg></Link>
                          <Link to="#" aria-label="YouTube"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12.2s-.2-3.4-1-4.2c-.9-1-2-1-2.5-1.1C16.4 6.6 12 6.6 12 6.6h0s-4.4 0-7.5.3c-.5.1-1.6.1-2.5 1.1-.8.8-1 4.2-1 4.2S.8 15.6 1.6 16.5c.9 1 2.1.9 2.6 1C6.8 17.8 12 17.9 12 17.9s4.4 0 7.5-.3c.5-.1 1.7-.1 2.5-1.1.8-.9 1-4.3 1-4.3zM9.8 15.3V9.2l5.5 3.05z"/></svg></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tkb-account-backdrop" id="accountPopupBackdrop"></div>
            </div>
        </div>
        </header>
    </div>
  )
}

export default Header;