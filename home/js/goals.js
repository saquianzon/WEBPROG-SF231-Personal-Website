const app2 = Vue.createApp({
    data() {
      return {
        goalsIntro: [
          {
            heading: "Goals in Life/Dreams",
            paragraph1:
              "An international volunteer and one of Jehovah's Witnesses, sharing Bible-based advice and God's promises for a future free of suffering, sickness, and even death.",
            paragraph2:
              "My love for God, Jehovah, and for people motivates me to spread this hope alongside fellow volunteers from over 240 lands.",
          },
        ],
        preachingGallery: [
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
        ],
        personalGallery: [
          {
            src: "https://i.pinimg.com/564x/59/59/9c/59599c11c023caa2612a987c96e3a326.jpg",
            alt: "Cat and Piano",
            link: "https://i.pinimg.com/564x/59/59/9c/59599c11c023caa2612a987c96e3a326.jpg",
            description: "Learning to Play Piano",
          },
          {
            src: "https://soranews24.com/wp-content/uploads/sites/3/2019/10/gs-2.png",
            alt: "Travel to Japan",
            link: "https://soranews24.com/wp-content/uploads/sites/3/2019/10/gs-2.png",
            description:
              "Travel to Japan for their Cherry Blossoms and Godzilla attractions",
            width: "400px",
            height: "280px",
          },
          {
            src: "https://media.tenor.com/sh_5zpuzWs4AAAAM/cat-pull-cat-snatch.gif",
            alt: "catnapped",
            link: "https://media.tenor.com/sh_5zpuzWs4AAAAM/cat-pull-cat-snatch.gif",
            description: "Have a cat (TOP PRIORITY)",
          },
        ],
      };
    },
  });
  
  app2.component("goals-intro", {
    props: ["intro"],
    template: `
      <div>
        <h2 class="w3-padding-16 w3-center w3-text-light-grey">{{ intro.heading }}</h2>
        <hr style="width:200px" class="center-line">
        <p class="w3-center">{{ intro.paragraph1 }}</p>
        <p class="w3-center">{{ intro.paragraph2 }}</p>
      </div>
    `,
  });
  
  app2.component("gallery-container", {
    props: ["items", "className"],
    template: `
      <div :class="className">
        <div v-for="item in items" :key="item.src" class="gallery">
          <a :href="item.link" target="_blank">
            <img
              :src="item.src"
              :alt="item.alt"
              :style="{ width: item.width || '320px', height: item.height || '280px' }"
            />
          </a>
          <div class="desc">{{ item.description }}</div>
        </div>
      </div>
    `,
  });
  
  app2.mount("#app2");
  