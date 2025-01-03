<template>
	<section id="about" class="py-16 px-4 bg-gray-100 dark:bg-gray-800" :class="{ 'dark-mode': isDarkMode }">
		<div class="container mx-auto">
			<h2 class="section-title text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">About Me</h2>
			<div class="flex flex-wrap items-center">
				<div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
					<img src="~/assets/images/anabel_profile_2.png" alt="Anabel Jesús Lorenzo"
						class="rounded-lg shadow-lg w-full" :class="{ 'dark-mode': isDarkMode }"
						aria-label="Another picture of Anabel">
				</div>
				<div class="w-full md:w-1/2 px-4">
					<p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6" :class="{ 'dark-mode': isDarkMode }"
						aria-label="About me description">
						I'm a dedicated Python Software Developer with a strong foundation in video game design and
						development. My journey in tech is driven by a passion for creating innovative and efficient
						solutions. With experience in developing microservices, APIs, and a keen interest in the
						intersection of gaming and software engineering, I strive to bring a unique perspective to
						every project.
					</p>
					<p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6" :class="{ 'dark-mode': isDarkMode }"
						aria-label="More about me">
						My academic background in Video Game Design and Development has equipped me with a creative
						problem-solving approach, which I apply to develop user-friendly and engaging software
						applications. I am always eager to learn new technologies and methodologies to enhance my
						skills and contribute to impactful projects.
					</p>
					<p class="text-gray-700 dark:text-gray-300 leading-relaxed" :class="{ 'dark-mode': isDarkMode }"
						aria-label="Even more about me">
						Outside of work, I enjoy exploring new trends in technology, playing video games, and
						contributing to open-source projects. I believe in continuous growth and collaboration, and
						I'm excited to connect with like-minded professionals and explore new opportunities.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { inject } from 'vue';

const isDarkMode = inject('isDarkMode');
</script>

<style scoped>
.section-title {
	@apply text-center;
}
</style>