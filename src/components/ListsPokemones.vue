<template>
  <div>
    <div class="lists">
      <p>
        <strong>{{ elements.length }}</strong>
        <span v-if="elements.length <= 1">{{ category }}</span>
        <span v-else>{{ category + "s" }}</span>
      </p>
      <ul>
        <li
          v-for="(elm, idx) in elements"
          :key="idx"
          @click="detailPerson(elm)"
        >
          <h3>{{ elm.name }}</h3>
          <font-awesome-icon
            icon="star"
            class="icon_star"
            @click.stop="setFavorites(elm)"
            :style="elm.favorites ? { color: '#ECA539' } : null"
          />
        </li>
      </ul>
    </div>
    <modalComponent
      v-if="showModal"
      @close="showModal = false"
      :elements="items"
    />
  </div>
</template>

<script>
import { URI_API } from '@/services/index'
import ModalComponent from "./Modal";
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      showModal: false,
      items: [],
    };
  },
  props: {
    elements: {
      type: Array,
    },
    category: {
      type: String,
      default: "Undefined",
    },
  },
  methods: {
    ...mapActions(["updateFavorites"]),
    setFavorites(elm) {
      elm.favorites = !elm.favorites;
      this.updateFavorites(elm);
    },
    async detailPerson(elm) {
      this.showModal = true;
      try {
        const response = await axios.get(
          `${URI_API}v2/pokemon/${elm.name}`
        );

        const listPokemon = response.data;

        for (let i = 0; i < [listPokemon].length; i++) {
          [listPokemon][i].favorites = elm.favorites;
        }

        this.items = listPokemon;
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    ModalComponent,
  },
  watch: {
    showModal(value) {
      if (!value) {
        this.items = [];
      }
    },
  },
};
</script>

<style lang="scss">
.lists {
  ul {
    list-style: none;
    margin: 0;
    padding: 0em;
    li {
      height: 40px;
      border-radius: 5px;
      background-color: #ffffff;
      margin-bottom: 10px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      cursor: pointer;
      h3 {
        margin: 0;
        padding: 0;
        font-size: 22px;
        font-weight: 500;
      }
      .icon_star {
        color: #bfbfbf;
        font-size: 22px;
        cursor: pointer;
        background-color: #f5f5f5;
        padding: 10px 9px;
        border-radius: 50px;
      }
    }
  }
}
</style>