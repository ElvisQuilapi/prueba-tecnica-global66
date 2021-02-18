<template>
  <main>
    <section>
      <picture>
        <img src="src/assets/images/Pokemon.png" alt="" />
      </picture>
      <article>
        <h3>Welcome to Pokédex</h3>
        <p>
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.
        </p>

        <router-link to="/pokemones">
          <buttonComponent
            text="Get started"
            :disabledIcon="false"
            :width="131"
            :height="44"
            :radius="60"
            background="F22539"
        /></router-link>
      </article>
    </section>
  </main>
</template>

<script>
import ButtonComponent from "@/components/Button";
export default {
  components: {
    ButtonComponent,
  },
};
</script>

<style lang="scss">
section {
  margin: 0 auto;
  width: 95%;
  max-width: 570px;
  text-align: center;
  margin-top: 3em;

  article {
    h3 {
      margin: 0;
      font-size: 26px;
    }
    p {
      font-size: 18px;
      line-height: 27px;
      font-weight: normal;
    }
  }
}
</style>