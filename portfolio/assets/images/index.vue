<template>
	<div :class="{ 'dark-mode': isDarkMode }">
		<section class="hero bg-light dark:bg-dark py-16 px-4">
			<div class="container mx-auto flex flex-col md:flex-row items-center">
				<div class="hero-text text-center md:text-left mb-8 md:mb-0 md:mr-12">
					<h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4"
						aria-label="Welcome to Anabel's Portfolio">
						Hi, I'm <span class="text-blue-500">Anabel Jesús Lorenzo</span>
					</h1>
					<h2 class="text-2xl md:text-3xl text-gray-700 dark:text-gray-300"
						aria-label="Python Software Developer">
						Python Software Developer
					</h2>
					<p class="mt-4 text-lg text-gray-600 dark:text-gray-400" aria-label="Introduction">
						Welcome to my portfolio! I'm a passionate software developer with expertise in Python,
						backend development, and creating engaging user experiences. Explore my projects and
						skills to learn more about my work.
					</p>
					<div class="mt-8" aria-label="Navigation Buttons">
						<NuxtLink to="/projects"
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded inline-block mr-4"
							:class="{ 'dark-mode': isDarkMode, 'bg-light': !isDarkMode, 'bg-dark': isDarkMode }"
							aria-label="View Projects">
							View Projects
						</NuxtLink>
						<NuxtLink to="/contact"
							class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded inline-block"
							:class="{ 'dark-mode': isDarkMode }" :aria-label="Get in Touch">
							Get in Touch
						</NuxtLink>
					</div>
				</div>
				<div class="hero-image">
					<img src="~/assets/images/anabel_profile.png" alt="Anabel Jesús Lorenzo"
						class="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover"
						aria-label="Profile Picture of Anabel">
				</div>
			</div>
		</section>
		<section id="about" class="py-16 px-4 bg-gray-100 dark:bg-gray-800" :class="{ 'dark-mode': isDarkMode }">
			<div class="container mx-auto">
				<h2 class="section-title text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">About Me
				</h2>
				<div class="flex flex-wrap items-center">
					<div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
						<img src="~/assets/images/anabel_profile_2.jpg" alt="Anabel Jesús Lorenzo"
							class="rounded-lg shadow-lg w-full" :class="{ 'dark-mode': isDarkMode }"
							aria-label="Another picture of Anabel">
					</div>
					<div class="w-full md:w-1/2 px-4">
						<p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
							:class="{ 'dark-mode': isDarkMode }" aria-label="About me description">
							I'm a dedicated Python Software Developer with a strong foundation in video game design and
							development. My journey in tech is driven by a passion for creating innovative and efficient
							solutions. With experience in developing microservices, APIs, and a keen interest in the
							intersection of gaming and software engineering, I strive to bring a unique perspective to
							every project.
						</p>
						<p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
							:class="{ 'dark-mode': isDarkMode }" aria-label="More about me">
							My academic background in Video Game Design and Development has equipped me with a creative
							problem-solving approach, which I apply to develop user-friendly and engaging software
							applications. I am always eager to learn new technologies and methodologies to enhance my
							skills and contribute to impactful projects.
						</p>
						<p class="text-gray-700 dark:text-gray-300 leading-relaxed" :class="{ 'dark-mode': isDarkMode }"
							aria-label="Even more about me">
							Outside of work, I enjoy exploring new trends in technology, playing video games, and
							contributing to open-source projects. I believe in continuous growth and collaboration, and
							I'm excited to connect with like-minded professionals and explore new opportunities.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section id="hidden-content" class="hidden-content py-16 px-4 bg-gray-200 dark:bg-gray-900"
			:class="{ 'dark-mode': isDarkMode }" aria-hidden="true">
			<div class="container mx-auto text-center">
				<p class="text-gray-700 dark:text-gray-300 mb-4" :class="{ 'dark-mode': isDarkMode }">
					"The only way to do great work is to love what you do." - Steve Jobs
				</p>
				<p class="text-gray-700 dark:text-gray-300" :class="{ 'dark-mode': isDarkMode }">
					"Every artist was first an amateur." - Ralph Waldo Emerson
				</p>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';

const isDarkMode = inject('isDarkMode');

onMounted(() => {
	// Check if the user has clicked anywhere on the homepage
	const body = document.querySelector('body');
	body.addEventListener('click', handleBodyClick);
});

const handleBodyClick = () => {
	// Show the hidden content section
	const hiddenContent = document.getElementById('hidden-content');
	hiddenContent.classList.remove('hidden-content');
	hiddenContent.setAttribute('aria-hidden', 'false');

	// Remove the event listener to avoid multiple triggers
	document.body.removeEventListener('click', handleBodyClick);
};
</script>

<style scoped>
.hero {
	@apply relative;
}

.hero-text h1 {
	@apply text-shadow;
}

.hero-text h2 {
	@apply font-semibold;
}

.section-title {
	@apply text-center;
}

.text-shadow {
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hidden-content {
	@apply hidden;
}

/* Add more styles for other icons */
</style>