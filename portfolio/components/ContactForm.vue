<template>
	<form @submit.prevent="handleSubmit" :class="{ 'dark-mode': isDarkMode }"
		class="bg-light dark:bg-dark p-6 rounded-lg shadow-md" tabindex="0">
		<div class="mb-4">
			<label for="name" class="block text-gray-700 dark:text-gray-300 mb-2"
				:class="{ 'sr-only': !isLabelVisible }">Name:</label>
			<input type="text" id="name" v-model="name" required
				class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
				:class="{ 'dark-mode': isDarkMode, 'bg-gray-100 dark:bg-gray-900': !isDarkMode, 'bg-gray-800 dark:bg-gray-200': isDarkMode }"
				:aria-required="true" :aria-labelledby="nameLabel" @keydown.tab.exact="onInputFocus('name')"
				@keydown.shift.tab="onInputFocus('name')" />
			<span id="nameLabel" class="sr-only">Enter your name</span>
		</div>
		<div class="mb-4">
			<label for="email" class="block text-gray-700 dark:text-gray-300 mb-2"
				:class="{ 'sr-only': !isLabelVisible }">Email:</label>
			<input type="email" id="email" v-model="email" required
				class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
				:class="{ 'dark-mode': isDarkMode, 'bg-gray-100 dark:bg-gray-900': !isDarkMode, 'bg-gray-800 dark:bg-gray-200': isDarkMode }"
				:aria-required="true" :aria-labelledby="emailLabel" @keydown.tab.exact="onInputFocus('email')"
				@keydown.shift.tab.exact="onInputFocus('email')" />
			<span id="emailLabel" class="sr-only">Enter your email</span>
		</div>
		<div class="mb-4">
			<label for="message" class="block text-gray-700 dark:text-gray-300 mb-2"
				:class="{ 'sr-only': !isLabelVisible }">Message:</label>
			<textarea id="message" v-model="message" required
				class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
				:class="{ 'dark-mode': isDarkMode, 'bg-gray-100 dark:bg-gray-900': !isDarkMode, 'bg-gray-800 dark:bg-gray-200': isDarkMode }"
				:aria-required="true" :aria-labelledby="messageLabel" @keydown.tab.exact="onInputFocus('message')"
				@keydown.shift.tab.exact="onInputFocus('message')"></textarea>
			<span id="messageLabel" class="sr-only">Enter your message</span>
		</div>
		<button type="submit"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			:aria-label="isSubmitting ? 'Submitting...' : 'Submit'" :disabled="isSubmitting">
			{{ isSubmitting ? 'Processing...' : 'Submit' }}
		</button>
		<div v-if="submitStatus" class="mt-4" :aria-live="assertive">
			<p v-if="submitStatus === 'success'" class="text-green-500">Message received! (Email not sent)</p>
			<p v-else-if="submitStatus === 'error'" class="text-red-500">Error submitting form. Please try again.</p>
		</div>
	</form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import emailjs from 'emailjs-com'; // Comment out or remove EmailJS import
import sendSound from '~/assets/sounds/send.mp3';

const props = defineProps({
	isDarkMode: {
		type: Boolean,
		default: false
	}
});

const name = ref('');
const email = ref('');
const message = ref('');
const isSubmitting = ref(false);
const submitStatus = ref(null); // 'success' | 'error' | null
const isLabelVisible = ref(false);
let sendAudio = null;

onMounted(() => {
	// emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID); // Comment out or remove EmailJS initialization
	sendAudio = new Audio(sendSound);
});

const handleSubmit = async () => {
	isSubmitting.value = true;
	submitStatus.value = null;

	try {
		// Simulate form submission delay (remove in the future when you implement actual email sending)
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Comment out or remove the EmailJS sending logic
		// const templateParams = {
		//   from_name: name.value,
		//   from_email: email.value,
		//   message: message.value,
		//   to_email: 'anabel99.anabel99@gmail.com'
		// };

		// await emailjs.send(
		//   import.meta.env.VITE_EMAILJS_SERVICE_ID,
		//   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
		//   templateParams
		// );

		if (sendAudio) sendAudio.play();
		console.log('Form submitted (Email sending disabled)');
		submitStatus.value = 'success';
		name.value = '';
		email.value = '';
		message.value = '';
	} catch (error) {
		console.error('Error submitting form (Email sending disabled):', error);
		submitStatus.value = 'error';
	} finally {
		isSubmitting.value = false;
	}
};

const onInputFocus = (inputName) => {
	isLabelVisible.value = true;
};
</script>