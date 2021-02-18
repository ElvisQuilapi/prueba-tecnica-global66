<template>
  <div class="loading">
    <picture class="image-loader">
      <img src="src/assets/images/Loader.svg" alt="image-loader" />
    </picture>
  </div>
</template>

<style lang="scss">
.loading {
  position: fixed;
  background-color: rgb(255, 255, 255);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  .image-loader {
    -webkit-animation: rotation 1s infinite linear;
    -moz-animation: rotation 1s infinite linear;
    -o-animation: rotation 1s infinite linear;
    animation: rotation 1s infinite linear;
    transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
  }

  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }
  @-moz-keyframes rotation {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(359deg);
    }
  }
  @-o-keyframes rotation {
    from {
      -o-transform: rotate(0deg);
    }
    to {
      -o-transform: rotate(359deg);
    }
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
}
</style>