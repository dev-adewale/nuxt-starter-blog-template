<script setup>
const { data: articles } = await useAsyncData("articles", () =>
  queryContent("/articles")
    .where({ published: { $ne: false } })
    .find()
);
</script>

<template>
  <div>
    <!-- Header -->
    <header class="flex flex-col justify-center items-center gap-2 h-80">
      <!-- Image -->
      <div>
        <img
          class="bg-blackAlt rounded-full shadow-lg p-1 w-28 h-28"
          src="../assets/images/img.jpg"
          width="150px"
        />
      </div>

      <!-- Simple text -->
      <div class="text-center">
        <h1 class="text-3xl font-bold mb-2">Nuxt Blog Starter</h1>
        <p class="text-nuxtGrey">
          A simple & minimalistic starter template for
          <a
            href="https://nuxt.com"
            target="_blank"
            class="text-nuxtGreen font-bold decoration-wavy underline underline-offset-2"
            >Nuxt v3
          </a>
          <br />
          that uses Markdown for content.
        </p>
      </div>
    </header>

    <!-- Article lists -->
    <main class="flex flex-col justify-center items-center mb-10 gap-10">
      <article
        class="bg-blackAlt flex flex-col gap-3 rounded-sm p-5 w-2/4"
        v-for="article in articles"
        :key="article._id"
      >
        <h2
          class="text-lg font-medium decoration-nuxtGreen decoration-wavy underline underline-offset-4"
        >
          <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
        </h2>

        <p class="text-nuxtGrey text-sm">
          {{ article.description }}
        </p>

        <p
          class="bg-bgBlack rounded-md shadow-lg pl-1 w-[20%]"
          v-for="tag in article.tags"
        >
          🏷️{{ tag }}
        </p>
      </article>
    </main>
  </div>
</template>
