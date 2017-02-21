export default {
	on(el, type, callback) {
		if(el.addEventListener) {
			el.addEventListener(type, callback);
		} else {
			// IE8+ Support
			el.attachEvent(`on${type}`, (event) => {
				callback.call(el, event);
			});
		}
	},
	off(el, type, callback) {
		if(el.removeEventListener) {
			el.removeEventListener(type, callback);
		} else {
			// IE8+ Support
			el.detachEvent(`on${type}`, callback);
		}
	},
}