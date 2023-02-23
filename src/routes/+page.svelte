<script lang="ts">
  import { onMount } from 'svelte';

  export let data;

  let time = new Date();
  // these automatically update when `time`
	// changes, because of the `$:` prefix
	$: hours = time.getHours();
  $: localTime = time.toLocaleTimeString();
  $: day = time.toDateString();
  $: greeting = (hours < 12) ? "Morning" : ((hours <= 17 && hours >= 12 ) ? "Afternoon" : "Evening");

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="max-w-7xl mx-auto py-2 border-b-2 border-gray-800">
    <ul class="flex justify-between items-center text-xl lg:text-2xl">
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
    </ul>
  </div>
  <header class="max-w-7xl mx-auto flex justify-between items-center border-b-4 border-gray-900">
    <div class="hidden md:flex md:flex-col md:justify-center md:mx-auto">
      <h2>{localTime}</h2>
      <h2>{day}</h2>
    </div>
    <div class="mx-auto">
      <h1 class="font-medium text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight">Intersection Observer</h1>
    </div>
    <div class="hidden md:flex md:items-center md:mx-auto">
      <h2 class="text-xl uppercase">Subscribe</h2>
  </header>
  <div class="max-w-7xl mx-auto py-2 border-b-2 border-gray-800 border-dashed">
    *Insert Marquee Here*
  </div>
</section>

<section class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12 gap-4 pt-4">
  <div class="col-span-1 sm:col-span-2 lg:col-span-6">
    <h3 class="text-3xl tracking-tight font-medium">Title</h3>
    <img src="https://picsum.photos/600/300" alt="img" class="w-full h-96 bg-black" />
    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sed alias mollitia cum vero voluptatibus dolore, corporis assumenda ipsa vel, aut magni reprehenderit voluptate. Minus eius iste obcaecati ratione doloribus?</p>
  </div>
  <div class="col-span-1 sm:col-span-1 lg:col-span-4">
    <h3 class="text-3xl tracking-tight font-medium">Title</h3>
    <img src="https://picsum.photos/300/400" alt="img" class="w-full h-96 bg-black" />
    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sed alias mollitia cum vero voluptatibus dolore, corporis assumenda ipsa vel.</p>
  </div>
  <div class="hidden lg:block lg:col-span-2 bg-gray-200 p-2">
  </div>
</section>

<section class="max-w-7xl mx-auto pt-8">
  <div class="w-full h-24 bg-blue-200"></div>
</section>

<section class="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-6 pt-4">
  {#each data.posts as post}
  <div class="col-span-3 lg:col-span-4">
    <h3 class="text-3xl tracking-tight font-medium">{post.title}</h3>
    <img src={post.feature_image} alt={post.feature_image_alt} />
    <p class="text-sm line-clamp-3">{post.excerpt}</p>
  </div>
  {/each}
</section>
