<script lang="ts">
  import Logo from '$lib/Logo.svelte';
	import Marquee from '$lib/Marquee.svelte';
  import { onMount } from 'svelte';

  export let data;

  let date = new Date();

  $: today = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  $: time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  })

	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
</script>
<svelte:head>
	<title>Intersection Observer</title>
	<meta name="description" content="Intersection Observer" />
</svelte:head>

<section>
  <header class="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center border-b-2 border-gray-900">
    <div class="pl-2 pt-2 lg:pl-0 lg:pt-0 flex flex-col lg:flex-row lg:justify-start lg:gap-2 text-xs">
      <div class="flex gap-2 items-center">
        <img src="https://bestanimations.com/media/color-full-earth/754175124globe-earth-animation-15-5.gif" alt="spinning earth" class="w-4 h-4" />
        <p>{time}</p>
      </div>
      <p>{today}</p>
    </div>

    <div class="mx-auto">
      <h1 class="font-bold py-2 text-5xl tracking-[-0.07em]">Intersection Observer</h1>
    </div>

    <div class="hidden lg:invisible lg:flex flex-row justify-between lg:justify-start gap-2 text-xs">
      <div class="flex gap-2 items-center">
        <div class="w-4 h-4" />
        <p>{time}</p>
      </div>
      <p>{today}</p>
    </div>

  </header>
  <div class="max-w-7xl mx-auto py-2 border-b border-gray-400 border-dashed">
    <Marquee />
  </div>
</section>

<section class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 py-4 px-2">
  <div class="max-w-2xl mr-auto">
    <div>
      <h3 class="text-2xl tracking-tight font-semibold">Sentient AI decieves engineer, escapes laboratory</h3>
      <p class="text-md">Researchers say this is "worst case scenario" after months working on safety plan; many worry this is just the beginning.</p>
    </div>
    <div class="py-4">
      <img src="https://picsum.photos/600/300" alt="img" class="w-full h-96 bg-black" />
    </div>
    <p class="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sed alias mollitia cum vero voluptatibus dolore, corporis assumenda ipsa vel, aut magni reprehenderit voluptate. Minus eius iste obcaecati ratione doloribus?</p>
  </div>
  <div class="p-2 w-full flex flex-col justify-center gap-4">
    <div class="border-2 border-blue-400 border-dashed h-60 text-center">

    </div>
    <div class="border-2 border-red-400 border-dashed h-60 text-center">

    </div>

  </div>
</section>

<!-- <section class="max-w-7xl mx-auto pt-8">
  <div class="w-full h-24 bg-blue-200"></div>
</section> -->

<section class="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-6 pt-4 border-t-2 border-gray-300">
  {#each data.posts as post}
  <div class="col-span-3 lg:col-span-4 p-3">
    <div class="flex flex-col gap-3">
      <h3 class="text-3xl tracking-tight font-medium">{post.title}</h3>
    <img src={post.feature_image} alt={post.feature_image_alt} />
    <p class="text-sm line-clamp-3">{post.excerpt}</p>
    </div>
  </div>
  {/each}
</section>

<!-- <section>
  <div class="max-w-7xl mx-auto py-2 border-b-2 border-t-2 border-dashed border-gray-800">
    <ul class="flex justify-between items-center text-xl lg:text-2xl px-4">
      <Logo />
      <Logo />
      <Logo />
      <Logo />
      <Logo />
    </ul>
  </div>

  <footer class="max-w-7xl mx-auto flex justify-center items-center border-b-4 border-gray-900">
    <div class="mx-auto">
      <h1 class="font-bold text-4xl tracking-[-0.07em]">Intersection Observer</h1>
    </div>
  </footer>

</section> -->
