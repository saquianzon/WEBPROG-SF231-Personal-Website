import { createApp } from "vue";
import App from "./App.vue";
import ImageGallery from "vue/ImageGallery.vue";

const app = createApp({
  components: {
    ImageGallery,
  },
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
        // Add more hobbies images
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
          link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/artworks/The%20Eagle%20and%20the%20Turtle.png?raw=true,
          description: "The Eagle and Turtle",
        }
        // Add more art gallery images
      ]
    };
  },
  template: `
    <div>
      <hobbies-gallery :gallery-images="hobbiesGallery" />
      <art-gallery :gallery-images="artGallery" />
    </div>
  `,
});

app.mount("#app");
