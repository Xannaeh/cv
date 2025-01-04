<template>
	<div :class="{ 'dark-mode': isDarkMode }" class="timeline-item mb-8 flex items-start"
		:aria-label="`${type} ${getLocalizedTitle(title)} at ${getLocalizedInstitution(institution)}`" tabindex="0">
		<div class="relative">
			<div class="timeline-bullet bg-blue-500 dark:bg-blue-300"
				:class="{ 'z-10': isExpanded, 'z-0': !isExpanded }"></div>
			<div :class="{ 'line': !lastItem, 'dark-mode': isDarkMode }"
				class="absolute top-full left-1/2 w-0.5 bg-gray-300 dark:bg-gray-600 h-full transform -translate-x-1/2 transition-all duration-300 ease-in-out">
			</div>
		</div>

		<div class="ml-4 flex-1">
			<div @click="toggleDetails" class="cursor-pointer select-none" :aria-expanded="isExpanded"
				:aria-controls="`content-${id}`">
				<h3 class="font-semibold text-lg text-light dark:text-dark">{{ getLocalizedTitle(title) }}</h3>
				<p class="text-gray-700 dark:text-gray-300">{{ getLocalizedInstitution(institution) }}</p>
				<p class="text-sm text-gray-600 dark:text-gray-400">{{ formattedDate }}</p>
			</div>
			<div :id="`content-${id}`" v-show="isExpanded" class="mt-2" :aria-hidden="!isExpanded">
				<p class="text-gray-800 dark:text-gray-200">{{ getLocalizedDescription(description) }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue';
import expandSound from '~/assets/sounds/expand.mp3';
import closeSound from '~/assets/sounds/close.mp3';
import { useI18n } from 'vue-i18n';

const props = defineProps({
	id: {
		type: [Number, String],
		required: true
	},
	type: {
		type: String,
		default: 'job' // 'job' or 'education'
	},
	title: {
		type: Object, // Expects { en: "...", es: "..." }
		required: true
	},
	institution: {
		type: Object, // Expects { en: "...", es: "..." }
		required: true
	},
	startDate: {
		type: String,
		required: true
	},
	endDate: {
		type: String,
		default: null
	},
	description: {
		type: Object, // Expects { en: "...", es: "..." }
		required: true
	},
	isDarkMode: {
		type: Boolean,
		default: false
	},
	lastItem: {
		type: Boolean,
		default: false
	}
});

const isExpanded = ref(false);
let expandAudio = null;
let closeAudio = null;
const { locale } = useI18n(); // Use i18n for translations

const formattedDate = computed(() => {
	const start = new Date(props.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
	const end = props.endDate ? new Date(props.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'Present';
	return `${start} - ${end}`;
});

const toggleDetails = () => {
	isExpanded.value = !isExpanded.value;
	if (isExpanded.value) {
		if (expandAudio) expandAudio.play();
	} else {
		if (closeAudio) closeAudio.play();
	}
};

const emit = defineEmits(['item-expanded']);

watch(isExpanded, (newVal) => {
	if (newVal) {
		emit('item-expanded', props.id);
		nextTick(() => { // Use nextTick here to wait for DOM updates
			if (!props.lastItem) {
				const element = document.querySelector(`#content-${props.id}`);
				if (element) {
					const height = element.offsetHeight;
					const lineElement = document.querySelector(`.timeline-item:nth-child(${props.id}) .line`);
					if (lineElement) {
						lineElement.style.height = `${height}px`;
					}
				}
			}
		});
	}
});

onMounted(() => {
	expandAudio = new Audio(expandSound);
	closeAudio = new Audio(closeSound);
});

// Helper functions to get translations based on the current locale
const getLocalizedTitle = (title) => {
	return title[locale.value] || title['en']; // Fallback to English
};

const getLocalizedInstitution = (institution) => {
	return institution[locale.value] || institution['en']; // Fallback to English
};

const getLocalizedDescription = (description) => {
	return description[locale.value] || description['en']; // Fallback to English
};
</script>