// Load locale
const getNavigatorLanguage = () =>
	navigator.languages && navigator.languages.length
		? navigator.languages[0]
		: navigator.userLanguage ||
		  navigator.language ||
		  navigator.browserLanguage ||
		  "en";

// Load messages from /locale directory
function loadMessages() {
	const locales = require.context(
		"../locales",
		true,
		/[A-Za-z0-9-_,\s]+\.json$/i
	);
	const messages = {};
	locales.keys().forEach((key) => {
		const matched = key.match(/([A-Za-z0-9-_]+)\./i);
		if (matched && matched.length > 1) {
			const locale = matched[1];
			messages[locale] = locales(key);
		}
	});
	return messages;
}

export default {
	locale: getNavigatorLanguage() || "en",
	fallbackLocale: "en",
	messages: loadMessages(),
};
