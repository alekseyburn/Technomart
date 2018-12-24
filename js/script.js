var link = document.querySelector(".write-btn");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=e-mail]");
var textarea = popup.querySelector("[name=text]");
var mapLink = document.querySelector(".map-btn");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
var cartPopup = document.querySelector(".modal-added-to-card");
var cartClose = cartPopup.querySelector(".modal-close");
var cartBook = document.querySelectorAll(".to-bookmarks-btn");
var cartBuy = document.querySelectorAll(".buy-btn");
var cartCon = document.querySelector(".continue-btn");
var bookmarkBlock = document.querySelector(".bookmarks");
var cartBlock = document.querySelector(".cart");
var output = document.querySelectorAll("output");
var bookmarksPlus = 0;
var cartPlus = 0;
var isStorageSupport = true;
var storage = {
  login: "",
  email: ""
};

for (var i = 0; i < cartBuy.length; i++) {
  cartBuy[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
    cartPlus++;
    output[1].innerHTML = cartPlus;
    cartBlock.classList.add("not-empty");
  });
}

for (var i = 0; i < cartBook.length; i++) {
  cartBook[i].addEventListener("click", function(evt){
    evt.preventDefault();
    bookmarksPlus++;
    output[0].innerHTML = bookmarksPlus;
    bookmarkBlock.classList.add("not-empty");
  });
}

try {
  storage.login = localStorage.getItem("login");
  storage.email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

if (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage.login) {
      login.value = storage.login;
      {
        if (storage.email) {
          email.value = storage.email;
          textarea.focus();
        } else {
          email.focus();
        }
      }
    } else {
      login.focus();
    }
  });
}

if (form) {
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!login.value || !email.value || !textarea.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
      }
    }
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
    if (modalCart.classList.contains("modal-show")) {
      modalCart.classList.remove("modal-show");
    }
  }
});

if (close) {
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
}

if (mapLink) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });
}

if (mapClose) {
  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
}

if (cartClose) {
  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });
}

if (cartCon) {
  cartCon.onclick = function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  };
}
