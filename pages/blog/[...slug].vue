<script setup>
/* const route = useRoute();

const { data: article } = await useAsyncData("article", () =>
  queryContent("/articles")
    .where({ _path: route.path })
    .findOne()
); */
</script>

<template>
  <div>
    <ContentDoc />
  </div>
</template>
