<template>
    <div class="gallery-container">
      <div class="gallery" v-for="(image, index) in galleryImages" :key="index">
        <a :href="image.link" target="_blank">
          <img :src="image.src" :alt="image.alt" />
        </a>
        <div class="desc">{{ image.description }}</div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: "ImageGallery",
    props: {
      galleryImages: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .gallery-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .gallery img {
    width: 320px;
    height: 280px;
    object-fit: cover;
    display: block;
    margin: auto;
    border-radius: 5px;
  }
  
  .gallery {
    flex: 0 1 auto;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .desc {
    padding: 15px;
    text-align: center;
  }
  </style>
  