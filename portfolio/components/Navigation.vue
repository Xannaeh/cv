<template>
	<nav class="fixed w-full z-10" :class="{ 'dark-mode': isDarkMode, 'bg-light': !isDarkMode, 'bg-dark': isDarkMode }">
		<div class="container mx-auto px-4 py-2 flex justify-between items-center">
			<a href="/" class="font-bold text-xl link-light dark:link-dark" @keydown.enter="handleLinkClick"
				@click="handleLinkClick" tabindex="0" aria-label="Home">Anabel JL</a>
			<ul class="flex space-x-6">
				<li>
					<NuxtLink to="/about" class="link-light dark:link-dark" @click="handleLinkClick"
						@keydown.enter="handleLinkClick" tabindex="0" aria-label="About">About</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/experience" class="link-light dark:link-dark" @click="handleLinkClick"
						@keydown.enter="handleLinkClick" tabindex="0" aria-label="Experience">Experience</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/skills" class="link-light dark:link-dark" @click="handleLinkClick"
						@keydown.enter="handleLinkClick" tabindex="0" aria-label="Skills">Skills</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/projects" class="link-light dark:link-dark" @click="handleLinkClick"
						@keydown.enter="handleLinkClick" tabindex="0" aria-label="Projects">Projects</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/contact" class="link-light dark:link-dark" @click="handleLinkClick"
						@keydown.enter="handleLinkClick" tabindex="0" aria-label="Contact">Contact</NuxtLink>
				</li>
			</ul>
			<ThemeToggle @toggle-theme="toggleTheme" :isDarkMode="isDarkMode" />
		</div>
	</nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import ThemeToggle from '~/components/ThemeToggle.vue';
import clickSound from '~/assets/sounds/click.mp3'; // Path to your click sound

const isDarkMode = ref(false);
let audio = null; // Declare audio outside onMounted

const handleLinkClick = () => {
	if (audio) {
		audio.play(); // Play sound effect
	}
};

onMounted(() => {
	// Check for saved theme preference on load
	const savedTheme = localStorage.getItem('theme');
	isDarkMode.value = savedTheme === 'dark';
	audio = new Audio(clickSound); // Initialize audio in onMounted
});

// Watch for changes in isDarkMode and update localStorage and body class
watch(isDarkMode, (newVal) => {
	localStorage.setItem('theme', newVal ? 'dark' : 'light');
	if (newVal) {
		document.body.classList.add('dark-mode');
	} else {
		document.body.classList.remove('dark-mode');
	}
});

const toggleTheme = () => {
	isDarkMode.value = !isDarkMode.value;
};
</script>