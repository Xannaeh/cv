<template>
	<div :class="{ 'dark-mode': isDarkMode, 'bg-light': !isDarkMode, 'bg-dark': isDarkMode }">
		<Navigation :isDarkMode="isDarkMode" @toggle-theme="toggleTheme" ref="navigation" />
		<main class="pt-20">
			<NuxtPage />
			<div class="progress-bar" ref="progressBar"></div>
		</main>
		<Footer class="mt-8 py-4 text-center text-gray-600 dark:text-gray-400" :isDarkMode="isDarkMode" />
	</div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue';
import Navigation from '~/components/Navigation.vue';
import Footer from '~/components/Footer.vue';

const isDarkMode = ref(false);

onMounted(() => {
	// Initialize dark mode based on saved preference or system preference
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
		isDarkMode.value = savedTheme === 'dark';
	} else {
		isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
	}
	updateBodyClass();
});

const toggleTheme = () => {
	isDarkMode.value = !isDarkMode.value;
	localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
	updateBodyClass();
};

const updateBodyClass = () => {
	if (isDarkMode.value) {
		document.body.classList.add('dark-mode');
	} else {
		document.body.classList.remove('dark-mode');
	}
};

// Provide isDarkMode to all child components
provide('isDarkMode', isDarkMode);
</script>