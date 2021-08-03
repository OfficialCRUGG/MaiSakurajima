import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app }) => {
    app.i18n = new VueI18n({
        locale: localStorage.getItem("maisakurajima-lang") || 'en',
        fallbackLocale: 'en',
        messages: getMessages()
    });
}

function getMessages() {
    const locales = require.context("~/languages", true, /[A-Za-z0-9-_,\s]+\.json$/i)
	const messages = {};
	locales.keys().forEach(key => {
		let matched = key.match(/(?<=\.\/)[a-z-]*(?=\.json)/g)[0];
		if(matched && matched.length > 1) messages[matched] = locales(key);
	});
	console.log(messages);
	return messages;
}