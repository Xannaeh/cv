<template>
	<div :class="{ 'dark-mode': isDarkMode }">
		<section class="project-detail py-16 px-4 bg-gray-100 dark:bg-gray-800">
			<div class="container mx-auto">
				<button @click="$router.go(-1)"
					class="back-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8 focus:outline-none focus:shadow-outline"
					:class="{ 'dark-mode': isDarkMode }" aria-label="Go back to projects">
					← {{ $t('projects.backToProjects') }}
				</button>
				<div v-if="project" class="project-content bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6">
					<h1 class="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4"
						:aria-label="`Project title: ${getLocalizedProjectTitle(project.title)}`">{{
							getLocalizedProjectTitle(project.title) }}</h1>
					<img :src="project.image" :alt="getLocalizedProjectTitle(project.title)"
						class="w-full h-auto rounded-lg mb-6"
						:aria-label="`Image for ${getLocalizedProjectTitle(project.title)}`">
					<div class="meta-info mb-6" aria-label="Project meta information">
						<p class="text-gray-700 dark:text-gray-300" :aria-label="`Date: ${project.date}`"><strong>{{
							$t('projects.date') }}:</strong> {{ project.date }}</p>
						<p class="text-gray-700 dark:text-gray-300"
							:aria-label="`Technologies: ${project.technologies.join(', ')}`">
							<strong>{{ $t('projects.technologies') }}:</strong> {{ project.technologies.join(', ') }}
						</p>
					</div>
					<div class="description text-gray-700 dark:text-gray-300" :aria-label="`Project description`">
						<p v-for="(paragraph, index) in getLocalizedProjectFullDescription(project.fullDescription)"
							:key="index" class="mb-4">{{ paragraph }}</p>
					</div>
					<div class="links mt-8" aria-label="Project links">
						<a v-if="project.liveLink" :href="project.liveLink" target="_blank" rel="noopener noreferrer"
							class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline"
							:class="{ 'dark-mode': isDarkMode }"
							:aria-label="`View live project: ${getLocalizedProjectTitle(project.title)}`">
							{{ $t('projects.liveDemo') }}
						</a>
						<a v-if="project.codeLink" :href="project.codeLink" target="_blank" rel="noopener noreferrer"
							class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							:class="{ 'dark-mode': isDarkMode }"
							:aria-label="`View project code: ${getLocalizedProjectTitle(project.title)}`">
							{{ $t('projects.sourceCode') }}
						</a>
					</div>
				</div>
				<div v-else>
					<p class="text-red-500">{{ $t('projects.projectNotFound') }}</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import { useRoute } from 'vue-router';
import projectsData from '~/data/projectsData';
import { useI18n } from 'vue-i18n';

const isDarkMode = inject('isDarkMode');
const route = useRoute();
const project = ref(null);
const { t, locale } = useI18n();

onMounted(() => {
	const slug = route.params.slug;
	project.value = projectsData.find(p => p.slug === slug);
});

const getLocalizedProjectTitle = (title) => {
	return title[locale.value] || title['en'];
};

const getLocalizedProjectFullDescription = (fullDescription) => {
	return fullDescription[locale.value] || fullDescription['en'];
};
</script>

<style scoped>
.project-detail {
	@apply bg-gray-100;
	@apply dark:bg-gray-800;
}
</style>