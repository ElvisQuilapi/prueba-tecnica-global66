<template>
  <div>
    <section class="wrapper">
      <loaderComponent v-if="this.statusLoading" />
      <searchComponent v-model="elementSearch" />

      {{ elementSearch }}
      <listsPokemonesComponent
        v-if="isPokemones"
        :elements="resultsPokemones"
        category="Personaje"
      />
      <listsPokemonesComponent
        v-else
        :elements="allFavorites"
        category="Favorito"
      />
    </section>

    <footer class="footer-bottom">
      <section>
        <buttonComponent
          iconName="list"
          text="All"
          :width="275"
          :height="44"
          :radius="60"
          background="BFBFBF"
          @click.native="isPokemones = !isPokemones"
          :style="isPokemones ? { 'background-color': '#F22539' } : null"
        />
        <buttonComponent
          iconName="star"
          text="Favorites"
          :width="275"
          :height="44"
          :radius="60"
          background="BFBFBF"
          @click.native="isPokemones = !isPokemones"
          :style="!isPokemones ? { 'background-color': '#F22539' } : null"
        />
      </section>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import LoaderComponent from "@/components/Loader";
import SearchComponent from "@/components/Search";
import ListsPokemonesComponent from "@/components/ListsPokemones";
import ButtonComponent from "@/components/Button";

export default {
  data() {
    return {
      elementSearch: "",
      isPokemones: true,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(["loadPokemones"]),
  },
  created() {
    if (this.allPokemones == "") {
      this.loadPokemones();
    }
  },
  computed: {
    ...mapGetters(["allPokemones", "statusLoading"]),
    resultsPokemones() {
      if (this.elementSearch) {
        return this.allPokemones.filter((elm) => {
          return this.elementSearch
            .toLowerCase()
            .split(" ")
            .every((v) => elm.name.toLowerCase().includes(v));
        });
      } else {
        return this.allPokemones;
      }
    },
    allFavorites() {
      return this.allPokemones.filter((item) => item.favorites === true);
    },
  },
  components: {
    LoaderComponent,
    SearchComponent,
    ListsPokemonesComponent,
    ButtonComponent,
  },
};
</script>

<style lang="scss">
.wrapper {
  background: #fafafa;
  width: 95%;
  max-width: 570px;
  margin: 0 auto;
  margin-top: 2em;
  margin-bottom: 6em;
}

.footer-bottom {
  background-color: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
  width: 100%;
  section {
    max-width: 570px;
    margin: 0 auto;
    width: 95%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
}
</style>