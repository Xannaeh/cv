<template>
	<button @click="toggleTheme" class="bg-gray-400 p-2 rounded-lg focus:outline-none"
		:aria-label="isDarkMode ? 'Activate light mode' : 'Activate dark mode'" tabindex="0"
		@keydown.enter="toggleTheme">
		<span v-if="isDarkMode">🌙</span>
		<span v-else>☀️</span>
	</button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import toggleOnSound from '~/assets/sounds/on.mp3';
import toggleOffSound from '~/assets/sounds/off.mp3';

const isDarkMode = ref(false);
let toggleOnAudio = null; // Declare outside
let toggleOffAudio = null; // Declare outside
const emit = defineEmits(['toggle-theme']);

onMounted(() => {
	// Check for saved theme preference on load
	const savedTheme = localStorage.getItem('theme');
	isDarkMode.value = savedTheme === 'dark';

	toggleOnAudio = new Audio(toggleOnSound); // Initialize in onMounted
	toggleOffAudio = new Audio(toggleOffSound); // Initialize in onMounted
});

watch(isDarkMode, (newVal) => {
	if (newVal) {
		if (toggleOnAudio) toggleOnAudio.play(); // Play "on" sound with conditional check
		document.body.classList.add('dark-mode');
	} else {
		if (toggleOffAudio) toggleOffAudio.play(); // Play "off" sound with conditional check
		document.body.classList.remove('dark-mode');
	}
	emit('toggle-theme');
});

const toggleTheme = () => {
	isDarkMode.value = !isDarkMode.value;
};

defineExpose({
	isDarkMode,
});
</script>