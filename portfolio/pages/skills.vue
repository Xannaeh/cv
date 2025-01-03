<template>
	<div :class="{ 'dark-mode': isDarkMode }">
		<section class="skills py-16 px-4 bg-gray-100 dark:bg-gray-800" :class="{ 'dark-mode': isDarkMode }">
			<div class="container mx-auto">
				<h2 class="section-title text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Skills
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Skill v-for="(skill, index) in skillsData" :key="index" :name="skill.name"
						:category="skill.category" :proficiency="skill.proficiency" :experience="skill.experience"
						:rank="skill.rank" :isDarkMode="isDarkMode" :lastSkill="index === skillsData.length - 1" />
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { inject } from 'vue';
import Skill from '~/components/Skill.vue';
import skillsData from '~/data/skillsData';

const isDarkMode = inject('isDarkMode');
</script>

<style scoped>
.skills {
	@apply bg-gray-100;
	@apply dark:bg-gray-800;
}

.section-title {
	@apply text-center;
}
</style>