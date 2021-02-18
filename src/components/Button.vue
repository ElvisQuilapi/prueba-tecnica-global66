<template>
  <button
    :style="{
      width: width + 'px',
      height: height + 'px',
      'border-radius': radius + 'px',
      'background-color': '#' + background,
      margin: margin
    }"
  >
    <font-awesome-icon :icon="iconName" v-if="disabledIcon" />
    <span v-if="disabledText">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Undefined",
    },
    disabledText: {
      type: Boolean,
      default: true,
    },
    disabledIcon: {
      type: Boolean,
      default: true,
    },
    iconName: {
      type: String,
      default: "star",
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    radius: {
      type: Number,
    },
    background: {
      type: String,
    },
    margin: {
      type: String,
      default: '0 10px'
    }
  },
};
</script>

<style lang="scss">
button {
  border: none;
  outline: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
}
</style>