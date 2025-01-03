<template>
	<div ref="icon" class="animated-icon" :class="iconClasses" :aria-label="`Icon for ${name}`">
		<!-- Your icon content here -->
	</div>
</template>

<script setup>
import { ref, onMounted, } from 'vue';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);

const props = defineProps({
	name: {
		type: String,
		required: true
	},
	isDarkMode: {
		type: Boolean,
		default: false
	}
});

const icon = ref(null);

onMounted(() => {
	if (icon.value) {
		gsap.fromTo(icon.value,
			{
				scale: 0,
				opacity: 0,
				x: -20
			},
			{
				scale: 1,
				opacity: 1,
				x: 0,
				duration: 1,
				ease: "power2.out",
				repeat: -1, // Infinite loop
				yoyo: true,   // Makes the animation go back and forth
				repeatDelay: 2 // Delay between repeats
			}
		);
	}
});

const iconClasses = computed(() => {
	return {
		'python': props.name === 'Python',
		'js': props.name === 'JavaScript',
		'vue': props.name === 'Vue.js',
		'nuxt': props.name === 'Nuxt.js',
		'tailwind': props.name === 'Tailwind CSS',
		'sql': props.name === 'SQL',
		// Add more mappings as needed
	};
});
</script>

<style scoped>
.animated-icon {
	/* Common styles for all icons */
	width: 64px;
	height: 64px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
}

/* Specific styles for each icon */
.python {
	background-image: url('path/to/python-icon.svg');
	background-size: cover;
}

.js {
	background-image: url('path/to/js-icon.svg');
	background-size: cover;
}

.vue {
	background-image: url('path/to/vue-icon.svg');
	background-size: cover;
}

.nuxt {
	background-image: url('path/to/nuxt-icon.svg');
	background-size: cover;
}

.tailwind {
	background-image: url('path/to/tailwind-icon.svg');
	background-size: cover;
}

.sql {
	background-image: url('path/to/sql-icon.svg');
	background-size: cover;
}

/* Add more styles for other icons */
</style>