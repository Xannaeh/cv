<template>
	<div :class="{ 'dark-mode': isDarkMode }">
		<section class="projects py-16 px-4 bg-gray-100 dark:bg-gray-800">
			<div class="container mx-auto">
				<h2 class="section-title text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">{{
					$t('projects.title') }}</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<ProjectCard v-for="project in visibleProjects" :key="project.slug" :slug="project.slug"
						:title="project.title" :image="project.image" :shortDescription="project.shortDescription"
						:technologies="project.technologies" :isDarkMode="isDarkMode" @navigate="navigateToProject" />
				</div>
				<div class="load-more mt-8 text-center" v-if="hasMoreProjects">
					<button @click="loadMoreProjects"
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						:class="{ 'dark-mode': isDarkMode }" aria-label="Load More Projects">
						{{ $t('projects.viewMore') }}
					</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import { useRouter } from 'vue-router';
import ProjectCard from '~/components/ProjectCard.vue';
import projectsData from '~/data/projectsData';
import { useI18n } from 'vue-i18n';

const isDarkMode = inject('isDarkMode');
const router = useRouter();
const projectsPerPage = 6;
const currentPage = ref(1);
const { t, locale } = useI18n();

const visibleProjects = computed(() => {
	const start = 0;
	const end = currentPage.value * projectsPerPage;
	return projectsData.slice(start, end);
});

const hasMoreProjects = computed(() => {
	return currentPage.value * projectsPerPage < projectsData.length;
});

const loadMoreProjects = () => {
	currentPage.value++;
};

const navigateToProject = (slug) => {
	router.push(`/projects/${slug}`);
};

onMounted(() => {
	// Preload project images to improve loading performance
	projectsData.forEach(project => {
		const img = new Image();
		img.src = project.image;
	});
});
</script>

<style scoped>
.projects {
	@apply bg-gray-100;
	@apply dark:bg-gray-800;
}

.section-title {
	@apply text-center;
}
</style>