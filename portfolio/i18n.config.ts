import { defineI18nConfig } from '#imports';

export default defineI18nConfig(() => ({
	legacy: false, // Use Composition API mode
	locale: 'en',
	fallbackLocale: 'en',
}));
