<template>
	<div :class="{ 'dark-mode': isDarkMode }">
		<section class="hero bg-light dark:bg-dark py-16 px-4">
			<div class="container mx-auto flex flex-col md:flex-row items-center">
				<div class="hero-text text-center md:text-left mb-8 md:mb-0 md:mr-12">
					<h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4"
						aria-label="Welcome to Anabel's Portfolio">
						{{ $t('home.intro') }} <span class="text-blue-500">Anabel Jesús Lorenzo</span>
					</h1>
					<h2 class="text-2xl md:text-3xl text-gray-700 dark:text-gray-300"
						aria-label="Python Software Developer">
						{{ $t('home.title') }}
					</h2>
					<p class="mt-4 text-lg text-gray-600 dark:text-gray-400" aria-label="Introduction">
						{{ $t('home.description') }}
					</p>
					<div class="mt-8" aria-label="Navigation Buttons">
						<NuxtLink to="/projects"
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded inline-block mr-4"
							:class="{ 'dark-mode': isDarkMode }" aria-label="View Projects">
							{{ $t('projects.view') }}
						</NuxtLink>
						<NuxtLink to="/contact"
							class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded inline-block"
							:class="{ 'dark-mode': isDarkMode }" aria-label="Get in Touch">
							{{ $t('contact.getInTouch') }}
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

		<!-- Quick Overview Sections -->
		<section class="experience-overview py-16 px-4 bg-gray-100 dark:bg-gray-800">
			<div class="container mx-auto">
				<h2 class="section-title text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
					{{ $t('experience.title') }}
				</h2>
				<!-- Use the first 2 items from experienceData -->
				<div class="timeline relative">
					<div v-for="(item, index) in experienceData.slice(0, 2)" :key="index">
						<TimelineItem :id="index + 1" :type="item.type" :title="item.title"
							:institution="item.institution" :startDate="item.startDate" :endDate="item.endDate"
							:description="item.description" :isDarkMode="isDarkMode"
							:lastItem="index === experienceData.length - 1" @item-expanded="handleItemExpanded" />
					</div>
				</div>
				<div class="text-center mt-8">
					<NuxtLink to="/experience"
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						{{ $t('experience.viewMore') }}
					</NuxtLink>
				</div>
			</div>
		</section>

		<section class="skills-overview py-16 px-4">
			<div class="container mx-auto">
				<h2 class="section-title text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
					{{ $t('skills.title') }}
				</h2>
				<!-- Display a grid of the first 6 skills -->
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div v-for="(skill, index) in skillsData.slice(0, 6)" :key="index">
						<Skill :name="skill.name" :category="skill.category" :proficiency="skill.proficiency"
							:experience="skill.experience" :rank="skill.rank" :isDarkMode="isDarkMode"
							:lastSkill="index === skillsData.length - 1" />
					</div>
				</div>
				<div class="text-center mt-8">
					<NuxtLink to="/skills" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						{{ $t('skills.viewMore') }}
					</NuxtLink>
				</div>
			</div>
		</section>

		<section class="projects-overview py-16 px-4 bg-gray-100 dark:bg-gray-800">
			<div class="container mx-auto">
				<h2 class="section-title text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
					{{ $t('projects.title') }}
				</h2>
				<!-- Display a grid of the first 3 projects -->
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<ProjectCard v-for="(project, index) in projectsData.slice(0, 3)" :key="index" :slug="project.slug"
						:title="project.title" :image="project.image" :shortDescription="project.shortDescription"
						:technologies="project.technologies" :isDarkMode="isDarkMode" @navigate="navigateToProject" />
				</div>
				<div class="text-center mt-8">
					<NuxtLink to="/projects"
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						{{ $t('projects.viewMore') }}
					</NuxtLink>
				</div>
			</div>
		</section>

		<section id="hidden-content" class="hidden-content py-16 px-4 bg-gray-200 dark:bg-gray-900"
			:class="{ 'dark-mode': isDarkMode }" aria-hidden="true">
			<div class="container mx-auto text-center">
				<p class="text-gray-700 dark:text-gray-300 mb-4" :class="{ 'dark-mode': isDarkMode }">
					"{{ $t('home.quote1') }}" - Steve Jobs
				</p>
				<p class="text-gray-700 dark:text-gray-300" :class="{ 'dark-mode': isDarkMode }">
					"{{ $t('home.quote2') }}" - Ralph Waldo Emerson
				</p>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import { useI18n } from 'vue-i18n';
import experienceData from '~/data/experienceData';
import skillsData from '~/data/skillsData';
import projectsData from '~/data/projectsData';
import { useRouter } from 'vue-router';

const isDarkMode = inject('isDarkMode');
const { t } = useI18n();
const router = useRouter();

const navigateToProject = (slug) => {
	router.push(`/projects/${slug}`);
};

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