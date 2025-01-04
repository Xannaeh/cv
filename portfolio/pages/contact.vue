<template>
	<div :class="{ 'dark-mode': isDarkMode }">
		<section class="contact py-16 px-4">
			<div class="container mx-auto">
				<h2 class="section-title text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">{{
					$t('contact.title') }}</h2>
				<div class="flex flex-wrap justify-center">
					<div class="w-full md:w-1/2 px-4">
						<ContactForm :isDarkMode="isDarkMode" />
					</div>
					<div class="w-full md:w-1/2 px-4 mt-8 md:mt-0">
						<div class="bg-light dark:bg-dark p-6 rounded-lg shadow-md" :class="{ 'dark-mode': isDarkMode }">
							<h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{{
								$t('contact.otherWays') }}</h3>
							<ul class="text-gray-700 dark:text-gray-300">
								<li class="mb-2">
									<span class="font-medium">{{ $t('contact.email') }}:</span> <a
										href="mailto:anabel99.anabel99@gmail.com"
										class="text-blue-500 hover:underline"
										:class="{ 'dark-mode': isDarkMode, 'text-blue-400': isDarkMode, 'hover:text-blue-600': isDarkMode }">anabeljesuslorenzo@example.com</a>
								</li>
								<li class="mb-2">
									<span class="font-medium">{{ $t('contact.linkedin') }}:</span> <a
										href="https://linkedin.com/in/anabeljl" target="_blank"
										rel="noopener noreferrer" class="text-blue-500 hover:underline"
										:class="{ 'dark-mode': isDarkMode, 'text-blue-400': isDarkMode, 'hover:text-blue-600': isDarkMode }">linkedin.com/in/anabeljesuslorenzo</a>
								</li>
								<li class="mb-2">
									<span class="font-medium">{{ $t('contact.github') }}:</span> <a
										href="https://github.com/xannaeh" target="_blank"
										rel="noopener noreferrer" class="text-blue-500 hover:underline"
										:class="{ 'dark-mode': isDarkMode, 'text-blue-400': isDarkMode, 'hover:text-blue-600': isDarkMode }">github.com/anabeljesuslorenzo</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { inject } from 'vue';
import ContactForm from '~/components/ContactForm.vue';
import { useI18n } from 'vue-i18n';

const isDarkMode = inject('isDarkMode');
const { t, locale } = useI18n();
</script>

<style scoped>
.contact {
	@apply bg-gray-100;
	@apply dark:bg-gray-800;
}

.section-title {
	@apply text-center;
}
</style>