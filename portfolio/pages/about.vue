<template>
	<section id="about" class="py-16 px-4 bg-gray-100 dark:bg-gray-800" :class="{ 'dark-mode': isDarkMode }">
		<div class="container mx-auto">
			<h2 class="section-title text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">{{
				$t('about.title') }}</h2>
			<div class="flex flex-wrap items-center">
				<div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
					<img src="~/assets/images/anabel_profile_2.png" alt="Anabel Jesús Lorenzo"
						class="rounded-lg shadow-lg w-full" :class="{ 'dark-mode': isDarkMode }"
						aria-label="Another picture of Anabel">
				</div>
				<div class="w-full md:w-1/2 px-4">
					<p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6" :class="{ 'dark-mode': isDarkMode }"
						aria-label="About me description">
						{{ $t('about.description1') }}
					</p>
					<p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6" :class="{ 'dark-mode': isDarkMode }"
						aria-label="More about me">
						{{ $t('about.description2') }}
					</p>
					<p class="text-gray-700 dark:text-gray-300 leading-relaxed" :class="{ 'dark-mode': isDarkMode }"
						aria-label="Even more about me">
						{{ $t('about.description3') }}
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