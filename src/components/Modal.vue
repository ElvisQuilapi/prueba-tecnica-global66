<template>
  <div class="modal" @click="$emit('close')">
    <div class="modal-container" @click.stop>
      <buttonComponent
        :disabledText="false"
        :radius="50"
        :width="25"
        :height="25"
        iconName="times"
        @click.native="$emit('close')"
        class="boton-close"
      />

      <div class="heading">
        <div class="banner">
          <img width="100%" src="/src/assets/images/Banner.svg" alt="" />
        </div>
        <img :src="imageCover" :alt="elements.name" />
      </div>

      <div class="section-pokemon">
        <ul>
          <li>
            <span><strong>Name:</strong> {{ elements.name }}</span>
          </li>
          <li>
            <span><strong>Weight:</strong> {{ elements.weight }}</span>
          </li>
          <li>
            <span><strong>Height:</strong> {{ elements.height }}</span>
          </li>
          <li>
            <span
              ><strong>Types: </strong>
              <i v-for="(item, index) in elements.types" :key="index">
                <span class="types">{{ item.type.name }}</span
                ><span v-if="index + 1 < elements.types.length">, </span>
              </i>
            </span>
          </li>
        </ul>
      </div>
      <div class="actions-footer">
        <buttonComponent
          text="Share to my friends"
          :radius="50"
          :width="195"
          :height="44"
          background="F22539"
          :disabledIcon="false"
          class="button-share"
          @click.native="clipboard"
          :margin="0"
        />
        <font-awesome-icon
          icon="star"
          class="icon-star-detail"
          :style="elements.favorites ? { color: '#ECA539' } : null"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "./Button";
export default {
  data() {
    return { imageCover: "" };
  },
  props: {
    elements: {
      type: [Array, Object],
    },
  },
  methods: {
    clipboard() {
      const { name, types } = this.elements;
      let atributos = [];
      types.forEach((element) => {
        atributos.push(element.type.name);
      });

      navigator.clipboard.writeText(name + "," + atributos);
      try {
        console.log("Copiado!");
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    elements(value) {
      this.imageCover = value.sprites.other.dream_world.front_default;
    },
  },
  components: {
    ButtonComponent,
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-container {
    height: 506px;
    max-width: 570px;
    width: 92%;
    border-radius: 5px;
    background: #ffffff;
    position: relative;

    .boton-close {
      position: absolute;
      right: 15px;
      top: 15px;
      font-size: 14px;
      z-index: 5;
      color: #79c9f8;
    }

    .heading {
      height: 220px;
      box-sizing: border-box;
      width: 100%;
      background-size: cover;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      padding: 10px;

      .banner {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        img {
          box-sizing: border-box;
          width: 100%;
          height: 220px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
      }

      img {
        width: 180px;
        height: 180px;
        display: block;
        margin: 0 auto;
        z-index: 5;
        position: relative;
      }
    }

    .section-pokemon {
      padding: 20px;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-direction: column;
          font-size: 16px;
          border-bottom: solid 1px #e8e8e8;
          padding: 12px 0;
          span {
            strong {
              font-weight: 700;
            }
            i {
              position: relative;
              // .types {
              //   padding-right: 3px;
              //   &::after {
              //     content: ",";
              //     position: absolute;
              //     left: -5px;
              //   }
              // }
            }
          }
        }
      }
    }

    .actions-footer {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      position: absolute;
      bottom: 0;
      width: 100%;

      .icon-star-detail {
        font-size: 22px;
        background-color: #f5f5f5;
        padding: 10px;
        border-radius: 50px;
        color: #bfbfbf;
      }
    }
  }
}
</style>