<template>
	<footer :class="{ 'dark-mode': isDarkMode }" class="footer bg-light dark:bg-dark py-6">
		<div class="container mx-auto px-4 text-center">
			<p class="text-sm text-gray-600 dark:text-gray-400" :aria-label="footerText">
				© {{ currentYear }} Anabel Jesús Lorenzo. All rights reserved.
			</p>
			<div class="mt-2" aria-label="Contact Information">
				<a href="mailto:anabeljesuslorenzo@example.com" class="text-blue-500 hover:underline"
					:class="{ 'dark-mode': isDarkMode, 'text-blue-400': isDarkMode, 'hover:text-blue-600': isDarkMode }">Email</a>
				|
				<a href="https://linkedin.com/in/anabeljesuslorenzo" target="_blank" rel="noopener noreferrer"
					class="text-blue-500 hover:underline"
					:class="{ 'dark-mode': isDarkMode, 'text-blue-400': isDarkMode, 'hover:text-blue-600': isDarkMode }">LinkedIn</a>
				|
				<a href="https://github.com/anabeljesuslorenzo" target="_blank" rel="noopener noreferrer"
					class="text-blue-500 hover:underline"
					:class="{ 'dark-mode': isDarkMode, 'text-blue-400': isDarkMode, 'hover:text-blue-600': isDarkMode }">GitHub</a>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	isDarkMode: {
		type: Boolean,
		default: false
	}
});

const currentYear = computed(() => new Date().getFullYear());
const footerText = computed(() => `Copyright ${currentYear}, Anabel Jesús Lorenzo. All rights reserved.`);
</script>

<style scoped>
.footer {
	@apply border-t;
	@apply border-gray-200;
	/* Light mode border */
}

.dark-mode .footer {
	@apply border-gray-700;
	/* Dark mode border */
}
</style>