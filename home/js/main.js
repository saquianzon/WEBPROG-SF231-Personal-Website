const app = Vue.createApp({
    data() {
      return {
        hobbiesGallery: [
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/digital%20drawing.png?raw=true",
            alt: "Digital Drawing",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/digital%20drawing.png?raw=true",
            description: "Digital Drawing",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/gahoole.jpg?raw=true",
            alt: "Reading Novels",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/gahoole.jpg?raw=true",
            description: "Reading Novels",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/doors%20figure.png?raw=true",
            alt: "Video Games",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/doors%20figure.png?raw=true",
            description: "Video Games",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/cat.png?raw=true",
            alt: "Cats",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/cat.png?raw=true",
            description: "Cats",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/dinosaurs.png?raw=true",
            alt: "Dinosaurs",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/dinosaurs.png?raw=true",
            description: "Dinosaurs",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/nature.png?raw=true",
            alt: "Nature",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/nature.png?raw=true",
            description: "Nature",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/godzilla.jpg?raw=true",
            alt: "Watching Movies/Shows",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/godzilla.jpg?raw=true",
            description: "Watching Movies/Shows",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/ukulele.png?raw=true",
            alt: "Playing/Listening to Music",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/ukulele.png?raw=true",
            description: "Playing/Listening to Music",
          },
        ],
        artGallery: [
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Stray.png?raw=true",
            alt: "Cat and B12",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Stray.png?raw=true",
            description: "Stray Fanart",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/A%20Quiet%20Place%20fanart%20.png?raw=true",
            alt: "A Quiet Place Fanart",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/A%20Quiet%20Place%20fanart%20.png?raw=true",
            description: "A Quiet Place Fanart",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/BB-8%20and%20D-0%20-%20Art%20Activity.png?raw=true",
            alt: "BB8 & D-0",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/BB-8%20and%20D-0%20-%20Art%20Activity.png?raw=true",
            description: "BB8 & D-0",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/The%20Eagle%20and%20the%20Turtle.png?raw=true",
            alt: "The Eagle and Turtle",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/The%20Eagle%20and%20the%20Turtle.png?raw=true",
            description: "The Eagle and Turtle",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/JWD%20Blue%20&%20Beta.png?raw=true",
            alt: "Blue & Beta from Jurassic World",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/JWD%20Blue%20&%20Beta.png?raw=true",
            description: "Blue & Beta from Jurassic World",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/anniversary%20gift.png?raw=true",
            alt: "19th Anniversary Gift for Parents",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/anniversary%20gift.png?raw=true",
            description: "19th Anniversary Gift for Parents",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Pure%20Vessel.png?raw=true",
            alt: "Hollow Knight Pure Vessel Fanart",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Pure%20Vessel.png?raw=true",
            description: "Hollow Knight Pure Vessel Fanart",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/HK%20OC%20-%20Vale.png?raw=true",
            alt: "Hollow Knight Vale OC",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/HK%20OC%20-%20Vale.png?raw=true",
            description: "Hollow Knight Vale OC",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Little%20Ghost.png?raw=true",
            alt: "Hollow Knight The Knight Fanart",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Little%20Ghost.png?raw=true",
            description: "Hollow Knight The Knight Fanart",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Hornet.jpg?raw=true",
            alt: "Hollow Knight Hornet Fanart",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Hornet.jpg?raw=true",
            description: "Hollow Knight Hornet Fanart",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Silver%20.png?raw=true",
            alt: "Cat Sona OC",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Silver%20.png?raw=true",
            description: "Cat Sona OC",
          },
          {
            src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Spring3.png?raw=true",
            alt: "Spring Season",
            link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/Spring3.png?raw=true",
            description: "Spring Season",
          },
        ],
      };
    },
    methods: {
      renderGallery(containerId, gallery) {
        const container = document.getElementById(containerId);
  
        // Clear previous content
        container.innerHTML = "";
  
        // Ensure the container exists
        if (!container) {
          console.error(`Container with ID ${containerId} not found.`);
          return;
        }
  
        // Apply flexbox styles to the container
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.gap = "20px";
        container.style.flexWrap = "wrap";
        container.style.marginTop = "20px";
  
        // Append gallery items
        gallery.forEach((item) => {
          const galleryItem = document.createElement("div");
          galleryItem.style.flex = "0 1 auto";
          galleryItem.style.textAlign = "center";
          galleryItem.style.marginBottom = "10px";
  
          const link = document.createElement("a");
          link.href = item.link;
          link.target = "_blank";
  
          const image = document.createElement("img");
          image.src = item.src;
          image.alt = item.alt;
          image.style.width = "320px";
          image.style.height = "280px";
          image.style.objectFit = "cover";
          image.style.display = "block";
          image.style.margin = "auto";
          image.style.borderRadius = "5px";
  
          const desc = document.createElement("div");
          desc.style.padding = "15px";
          desc.style.textAlign = "center";
          desc.innerText = item.description;
  
          link.appendChild(image);
          galleryItem.appendChild(link);
          galleryItem.appendChild(desc);
  
          container.appendChild(galleryItem);
        });
      },
    },
    mounted() {
      this.renderGallery("hobbies-gallery", this.hobbiesGallery);
      this.renderGallery("art-gallery", this.artGallery);
    },
  });
  
  app.mount("#app");
  