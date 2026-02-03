let cartCount = localStorage.getItem("cart") || 0;
document.querySelectorAll("#cart-count").forEach(el => el.innerText = cartCount);

// ADD TO CART
document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    localStorage.setItem("cart", cartCount);
    document.querySelectorAll("#cart-count").forEach(el => el.innerText = cartCount);

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "add_to_cart",
      plan: btn.dataset.plan
    });
  });
});

// LEAD FORM
const form = document.getElementById("lead-form");
if (form) {
  form.addEventListener("submit", function () {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({ event: "lead_submit" });
    window.location.href = "thankyou.html";
  });
}

// CTA CLICK
document.querySelectorAll(".cta").forEach(btn => {
  btn.addEventListener("click", () => {
    dataLayer.push({
      event: "cta_click",
      location: btn.dataset.cta
    });
  });
});
