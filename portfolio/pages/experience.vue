<template>
	<div :class="{ 'dark-mode': isDarkMode }">
		<section class="experience py-16 px-4">
			<div class="container mx-auto">
				<h2 class="section-title text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
					Experience & Education</h2>
				<div class="timeline relative">
					<div v-for="(item, index) in sortedExperience" :key="index">
						<TimelineItem :id="index + 1" :type="item.type" :title="item.title"
							:institution="item.institution" :startDate="item.startDate" :endDate="item.endDate"
							:description="item.description" :isDarkMode="isDarkMode"
							:lastItem="index === sortedExperience.length - 1" @item-expanded="handleItemExpanded" />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import TimelineItem from '~/components/TimelineItem.vue';
import experienceData from '~/data/experienceData';

const isDarkMode = inject('isDarkMode');

const sortedExperience = computed(() => {
	return [...experienceData].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
});

const handleItemExpanded = (itemId) => {
	// You can add logic here if you want to do something when an item is expanded
	// For example, scroll to the expanded item
	const element = document.getElementById(`item-${itemId}`);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
	}
};
</script>

<style scoped>
.experience {
	@apply bg-gray-100;
	@apply dark:bg-gray-800;
}

.section-title {
	@apply text-center;
}

.timeline::before {
	content: '';
	@apply absolute;
	@apply w-1;
	@apply bg-gray-300;
	@apply dark:bg-gray-600;
	@apply top-0;
	@apply bottom-0;
	left: 30px;
}

/* Add more styles as needed */
</style>