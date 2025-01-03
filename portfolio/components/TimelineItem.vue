<template>
	<div :class="{ 'dark-mode': isDarkMode }" class="timeline-item mb-8 flex items-start"
		:aria-label="`${type} ${title} at ${institution}`" tabindex="0">
		<!-- Bullet Point and Line -->
		<div class="relative">
			<div class="timeline-bullet bg-blue-500 dark:bg-blue-300"
				:class="{ 'z-10': isExpanded, 'z-0': !isExpanded }"></div>
			<div :class="{ 'line': !lastItem, 'dark-mode': isDarkMode }"
				class="absolute top-full left-1/2 w-0.5 bg-gray-300 dark:bg-gray-600 h-full transform -translate-x-1/2 transition-all duration-300 ease-in-out">
			</div>
		</div>

		<!-- Content -->
		<div class="ml-4 flex-1">
			<div @click="toggleDetails" class="cursor-pointer select-none" :aria-expanded="isExpanded"
				:aria-controls="`content-${id}`">
				<h3 class="font-semibold text-lg text-light dark:text-dark">{{ title }}</h3>
				<p class="text-gray-700 dark:text-gray-300">{{ institution }}</p>
				<p class="text-sm text-gray-600 dark:text-gray-400">{{ formattedDate }}</p>
			</div>
			<div :id="`content-${id}`" v-show="isExpanded" class="mt-2" :aria-hidden="!isExpanded">
				<p class="text-gray-800 dark:text-gray-200">{{ description }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import expandSound from '~/assets/sounds/expand.mp3'; // Path to expand sound
import closeSound from '~/assets/sounds/close.mp3'; // Path to close sound

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
		type: String,
		required: true
	},
	institution: {
		type: String,
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
		type: String,
		default: ''
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
let expandAudio = null; // Declare outside
let closeAudio = null; // Declare outside

const formattedDate = computed(() => {
	const start = new Date(props.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
	const end = props.endDate ? new Date(props.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'Present';
	return `${start} - ${end}`;
});

const toggleDetails = () => {
	isExpanded.value = !isExpanded.value;
	if (isExpanded.value) {
		if (expandAudio) expandAudio.play(); // Play expand sound with conditional check
	} else {
		if (closeAudio) closeAudio.play(); // Play close sound with conditional check
	}
};

const emit = defineEmits(['item-expanded']);

watch(isExpanded, (newVal) => {
	if (newVal) {
		emit('item-expanded', props.id);
	}
});

onMounted(() => {
	expandAudio = new Audio(expandSound); // Initialize in onMounted
	closeAudio = new Audio(closeSound); // Initialize in onMounted

	// Ensure the line stretches to connect with the next item
	if (!props.lastItem) {
		const element = document.querySelector(`#content-${props.id}`);
		if (element) {
			const height = element.offsetHeight;
			document.querySelector(`.timeline-item:nth-child(${props.id}) .line`).style.height = `${height}px`;
		}
	}
});
</script>