<script setup>
// import anime from 'animejs';
import { onMounted } from 'vue';

import {
  zoomIn,
  zoomOut
} from './utils';

const manager = {
  startAnimationComplete: false
};

const zoomInWrap = (event) => {
  if (manager.startAnimationComplete) {
    zoomIn(event)
  }
};

const zoomOutWrap = (event) => {
  if (manager.startAnimationComplete) {
    zoomOut(event);
  }
};

defineProps({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

onMounted(() => {
  // var timeline = anime.timeline();
  // timeline.add({
  //   targets: '#intro-name',
  //   translateY: [-100, 0],
  //   opacity: 1,
  //   delay: 200,
  //   easing: 'easeInOutQuad'
  // }).add({
  //   targets: '#intro-role',
  //   opacity: 1,
  //   easing: 'easeInOutQuad'
  // }).add({
  //   targets: '#social-container',
  //   opacity: 1,
  //   easing: 'easeInOutQuad'
  // }).finished.then(() => {
  //   manager.startAnimationComplete = true
  // });
});
</script>

<template>
  <div class="d-flex flex-column align-items-center" id="intro-container">
    <h1
      id="intro-name"
      class="p-2"
      @mouseenter="zoomInWrap"
      @mouseleave="zoomOutWrap"
    >{{ name }}</h1>
    <h4
      id="intro-role"
      class="p-2"
      @mouseenter="zoomInWrap"
      @mouseleave="zoomOutWrap"
    >{{ role }}</h4>
    <div class="mt-2" id="social-container">
      <a class="link-light" target="_blank" href="https://github.com/johnpremkumar">
        <i class="fa-brands fa-github"></i>
      </a>
      <a class="link-light" target="_blank" href="https://www.facebook.com/john.premkumar.986/">
        <i class="fa-brands fa-facebook-f"></i>
      </a>
      <a class="link-light" target="_blank" href="https://twitter.com/J_O_H_N_P_K">
        <i class="fa-brands fa-twitter"></i>
      </a>
      <a class="link-light" target="_blank" href="https://www.linkedin.com/in/john-prem-kumar-s-99977386/">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>
      <a class="link-light" target="_blank" href="https://www.instagram.com/j.o.h.n.p.k/">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a class="link-light" target="_blank" href="https://account.xbox.com/Profile?gamerTag=johnpk305">
        <i class="fa-brands fa-xbox"></i>
      </a>
    </div>
    <!-- <div id="uc-container">
      <img src="../assets/uc-john.png">
    </div> -->
  </div>
</template>

<style scoped>

  #intro-container {
    margin-top: 6rem;
  }

  #intro-name,
  #intro-role,
  #social-container {
    opacity: 0;
  }

  #social-container {
    font-size: 1.5rem;
  }

  #social-container i {
    padding: 1rem;
  }
</style>
