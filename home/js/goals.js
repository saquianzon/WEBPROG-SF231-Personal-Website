// Goals introduction data
const goalsIntro = {
  heading: "Goals in Life/Dreams",
  paragraph1:
    "An international volunteer and one of Jehovah's Witnesses, sharing Bible-based advice and God's promises for a future free of suffering, sickness, and even death.",
  paragraph2:
    "My love for God, Jehovah, and for people motivates me to spread this hope alongside fellow volunteers from over 240 lands.",
};

// Preaching gallery data
const preachingGallery = [
  {
    src: "https://cms-imgp.jw-cdn.org/img/p/2019361/univ/art/2019361_univ_cnt_2_xl.jpg",
    alt: "Preaching the Good News",
    link: "https://cms-imgp.jw-cdn.org/img/p/2019361/univ/art/2019361_univ_cnt_2_xl.jpg",
    description: "Sharing Good News From the Bible",
    width: "460px",
    height: "280px",
  },
  {
    src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/animations.gif?raw=true",
    alt: "Animation demos",
    link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/animations.gif?raw=true",
    description: "Aspiring 2D professional artist/animator",
    width: "580px",
    height: "350px",
  },
];


// Function to render goals introduction
function renderGoalsIntro(containerId, intro) {
  const container = document.getElementById(containerId);

  if (!container) return console.error(`Container with ID ${containerId} not found.`);

  container.innerHTML = `
    <h2 class="w3-padding-16 w3-center w3-text-light-grey">${intro.heading}</h2>
    <hr style="width:200px" class="center-line">
    <p class="w3-center">${intro.paragraph1}</p>
    <p class="w3-center">${intro.paragraph2}</p>
  `;
}

// Function to render a gallery
function renderGallery(containerId, galleryItems) {
  const container = document.getElementById(containerId);

  if (!container) return console.error(`Container with ID ${containerId} not found.`);

  // Apply the class for the flex layout
  container.className = "preaching-jw";

  container.innerHTML = ""; // Clear existing content

  galleryItems.forEach((item) => {
    const galleryDiv = document.createElement("div");
    galleryDiv.className = "preaching"; // Add the class for each gallery item

    const link = document.createElement("a");
    link.href = item.link;
    link.target = "_blank";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;

    const desc = document.createElement("div");
    desc.className = "desc";
    desc.textContent = item.description;

    link.appendChild(img); // Add image inside the link
    galleryDiv.appendChild(link); // Add link to the gallery div
    galleryDiv.appendChild(desc); // Add description under the image

    container.appendChild(galleryDiv); // Append each gallery item to the container
  });
}





// Render goals introduction and galleries
renderGoalsIntro("goals-intro", goalsIntro);
renderGallery("preaching-gallery", preachingGallery);
