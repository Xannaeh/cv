<template>
	<nav class="fixed w-full z-10" :class="{ 'dark-mode': isDarkMode, 'bg-light': !isDarkMode, 'bg-dark': isDarkMode }">
		<div class="container mx-auto px-4 py-2 flex justify-between items-center">
			<a href="/" class="font-bold text-xl link-light dark:link-dark" @keydown.enter="handleLinkClick"
				@click="handleLinkClick" tabindex="0" aria-label="Home">Anabel JL</a>
			<ul class="flex space-x-6">
				<li>
					<NuxtLink to="/about" class="link-light dark:link-dark" @click="handleLinkClick"
						@keydown.enter="handleLinkClick" tabindex="0" aria-label="About">{{ $t('about.title') }}
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/experience" class="link-light dark:link-dark" @click="handleLinkClick"
						@keydown.enter="handleLinkClick" tabindex="0" aria-label="Experience">{{ $t('experience.title')
						}}</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/skills" class="link-light dark:link-dark" @click="handleLinkClick"
						@keydown.enter="handleLinkClick" tabindex="0" aria-label="Skills">{{ $t('skills.title') }}
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/projects" class="link-light dark:link-dark" @click="handleLinkClick"
						@keydown.enter="handleLinkClick" tabindex="0" aria-label="Projects">{{ $t('projects.title') }}
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/contact" class="link-light dark:link-dark" @click="handleLinkClick"
						@keydown.enter="handleLinkClick" tabindex="0" aria-label="Contact">{{ $t('contact.title') }}
					</NuxtLink>
				</li>
			</ul>
			<div class="flex items-center space-x-4">
				<!-- Language Switcher -->
				<select @change="changeLanguage" v-model="selectedLocale"
					class="bg-gray-400 p-2 rounded-lg focus:outline-none" aria-label="Select Language">
					<option value="en">EN</option>
					<option value="es">ES</option>
				</select>

				<ThemeToggle @toggle-theme="toggleTheme" :isDarkMode="isDarkMode" />
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import ThemeToggle from '~/components/ThemeToggle.vue';
import clickSound from '~/assets/sounds/click.mp3';
import { useI18n } from 'vue-i18n';

const isDarkMode = ref(false);
let audio = null;
const { locale } = useI18n();
const selectedLocale = ref(locale.value);

const handleLinkClick = () => {
	if (audio) {
		audio.play();
	}
};

onMounted(() => {
	const savedTheme = localStorage.getItem('theme');
	isDarkMode.value = savedTheme === 'dark';
	audio = new Audio(clickSound);
});

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

const changeLanguage = (event) => {
	locale.value = event.target.value;
	selectedLocale.value = event.target.value;
};
</script>