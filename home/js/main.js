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
        ],
      };
    },
    methods: {
      renderGallery(containerId, gallery) {
        const container = document.getElementById(containerId);
        gallery.forEach((item) => {
          const galleryItem = document.createElement("div");
          galleryItem.className = "gallery";
  
          const link = document.createElement("a");
          link.href = item.link;
          link.target = "_blank";
  
          const image = document.createElement("img");
          image.src = item.src;
          image.alt = item.alt;
  
          const desc = document.createElement("div");
          desc.className = "desc";
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
  