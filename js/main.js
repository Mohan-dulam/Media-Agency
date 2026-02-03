// SERVICES DATA
const services = [
  { title: "Performance Marketing", desc: "Google & Meta Ads" },
  { title: "SEO Optimization", desc: "Rank higher organically" },
  { title: "Analytics & GTM", desc: "GA4, GTM, Meta CAPI" }
];

const serviceContainer = document.getElementById("services-container");

services.forEach(service => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${service.title}</h3><p>${service.desc}</p>`;
  serviceContainer.appendChild(div);
});

// BLOG DATA
const blogs = [
  "How GTM Works",
  "GA4 Event Tracking",
  "Meta Pixel vs CAPI"
];

const blogContainer = document.getElementById("blog-container");

blogs.forEach(blog => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h4>${blog}</h4><button class="read-btn">Read More</button>`;
  blogContainer.appendChild(div);
});

// FORM SUBMIT (for GTM trigger)
document.getElementById("lead-form").addEventListener("submit", function () {
  console.log("Lead form submitted");
});
