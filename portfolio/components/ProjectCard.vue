<template>
	<div :class="{ 'dark-mode': isDarkMode }" class="project-card bg-light dark:bg-dark shadow-lg rounded-lg p-4 mb-4"
		:aria-label="`Project: ${title}`" tabindex="0">
		<img :src="image" :alt="title" class="w-full h-48 object-cover rounded-t-lg" :aria-label="`Image for ${title}`">
		<div class="p-4">
			<h3 class="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200"
				:aria-label="`Project title: ${getLocalizedTitle(title)}`">{{ getLocalizedTitle(title) }}</h3>
			<p class="text-gray-700 dark:text-gray-300 mb-4"
				:aria-label="`Project description: ${getLocalizedShortDescription(shortDescription)}`">{{
					getLocalizedShortDescription(shortDescription) }}</p>
			<div class="technologies flex flex-wrap mb-4" aria-label="Technologies used">
				<span v-for="tech in technologies" :key="tech"
					class="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
					:aria-label="tech">{{ tech }}</span>
			</div>
			<button @click="goToProjectPage" @keydown.enter="goToProjectPage"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				:aria-label="`Learn more about ${getLocalizedTitle(title)}`">
				{{ $t('projects.learnMore') }}
			</button>
		</div>
	</div>
</template>

<script setup>
import { defineEmits, onMounted, computed } from 'vue';
import clickSound from '~/assets/sounds/click.mp3'; // Path to your click sound
import { useI18n } from 'vue-i18n';

const props = defineProps({
	slug: {
		type: String,
		required: true
	},
	title: {
		type: Object, // Expect an object with 'en' and 'es' properties
		required: true
	},
	image: {
		type: String,
		required: true
	},
	shortDescription: {
		type: Object, // Expect an object with 'en' and 'es' properties
		required: true
	},
	technologies: {
		type: Array,
		required: true
	},
	isDarkMode: {
		type: Boolean,
		default: false
	}
});

const emit = defineEmits(['navigate']);
let audio = null; // Declare outside
const { t, locale } = useI18n();

const goToProjectPage = () => {
	if (audio) audio.play(); // Play sound effect with conditional check
	emit('navigate', props.slug);
};

onMounted(() => {
	audio = new Audio(clickSound); // Initialize in onMounted
});

const getLocalizedTitle = (title) => {
	return title[locale.value] || title['en']; // Fallback to English if the current locale is not available
};

const getLocalizedShortDescription = (shortDescription) => {
	return shortDescription[locale.value] || shortDescription['en']; // Fallback to English if the current locale is not available
};
</script>