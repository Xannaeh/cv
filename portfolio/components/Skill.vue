<template>
	<div :class="{ 'dark-mode': isDarkMode }"
		class="skill-container bg-light dark:bg-dark p-4 border rounded shadow-md mb-4" :aria-label="`Skill: ${name}`"
		tabindex="0">
		<div class="flex items-center">
			<AnimatedIcon :name="name" :class="{ 'skill-icon': true, 'dark-mode': isDarkMode }" class="mr-4" />
			<div class="flex-1">
				<h3 class="font-semibold text-lg text-gray-800 dark:text-gray-200">{{ name }}</h3>
				<p class="text-sm text-gray-600 dark:text-gray-400">{{ category }}</p>
				<div class="proficiency-bar mt-2 h-4 bg-gray-200 dark:bg-gray-700 rounded-full relative"
					:aria-valuenow="proficiency" aria-valuemin="0" aria-valuemax="10" @click="playLevelUpSound"
					@keydown.enter="playLevelUpSound">
					<div class="proficiency-level h-full rounded-full" :class="proficiencyColor"
						:style="{ width: proficiencyPercentage }"></div>
					<span v-if="showTooltip"
						class="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-800 dark:bg-gray-200 dark:text-gray-800 rounded shadow-md whitespace-nowrap">
						{{ tooltipText }}
					</span>
				</div>
				<div class="mt-2">
					<button @click="toggleDetails" class="text-sm text-blue-600 dark:text-blue-400 focus:outline-none"
						:aria-expanded="showDetails" :aria-controls="`details-${name}`">
						{{ showDetails ? 'Hide details' : 'Show details' }}
					</button>
					<div :id="`details-${name}`" v-show="showDetails"
						class="mt-2 text-sm text-gray-700 dark:text-gray-300" :aria-hidden="!showDetails">
						<p>{{ experience }}</p>
						<p v-if="certification">Certification: {{ certification }}</p>
						<p v-if="projects">Relevant Projects: {{ projects }}</p>
					</div>
				</div>
			</div>
		</div>
		<div v-if="!seenAll && lastSkill" class="mt-4 text-center">
			<p class="text-sm text-green-600 dark:text-green-400">You've seen all my skills! ✨</p>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import AnimatedIcon from '~/components/AnimatedIcon.vue';
import levelUpSound from '~/assets/sounds/level.mp3'; // Path to level up sound

const props = defineProps({
	name: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	proficiency: {
		type: Number,
		required: true,
		validator: (value) => value >= 0 && value <= 10
	},
	experience: {
		type: String,
		default: ''
	},
	certification: {
		type: String,
		default: null
	},
	projects: {
		type: String,
		default: null
	},
	rank: {
		type: String,
		required: true
	},
	isDarkMode: {
		type: Boolean,
		default: false
	},
	lastSkill: {
		type: Boolean,
		default: false
	}
});

const showTooltip = ref(false);
const showDetails = ref(false);
const seenAll = ref(false);
let levelUpAudio = null; // Declare outside

const proficiencyPercentage = computed(() => `${props.proficiency * 10}%`);

const proficiencyColor = computed(() => {
	if (props.proficiency >= 8) {
		return 'bg-gradient-to-r from-green-400 to-blue-500';
	} else if (props.proficiency >= 5) {
		return 'bg-yellow-500';
	} else {
		return 'bg-red-500';
	}
});

const tooltipText = computed(() => {
	switch (props.rank) {
		case 'Master':
			return "Expert level with extensive practical application.";
		case 'Advanced':
			return "High proficiency, capable of complex tasks.";
		case 'Intermediate':
			return "Solid understanding and practical experience.";
		case 'Beginner':
			return "Basic knowledge, still learning and developing.";
		default:
			return "Proficiency level information.";
	}
});

const playLevelUpSound = () => {
	if (levelUpAudio) levelUpAudio.play(); // Play level up sound with conditional check
};

const toggleDetails = () => {
	showDetails.value = !showDetails.value;
};

onMounted(() => {
	levelUpAudio = new Audio(levelUpSound); // Initialize in onMounted

	setTimeout(() => {
		showTooltip.value = true;
	}, 500); // Show tooltip after a delay

	setTimeout(() => {
		showTooltip.value = false;
	}, 3000); // Hide tooltip after a longer delay
});

watch(() => props.lastSkill, (newVal) => {
	if (newVal) {
		setTimeout(() => {
			seenAll.value = true;
		}, 2000); // Delay to ensure the user notices the message
	}
});
</script>

<style scoped>
.proficiency-bar {
	overflow: hidden;
}

.tooltip {
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
}

.proficiency-bar:hover .tooltip {
	opacity: 1;
}
</style>