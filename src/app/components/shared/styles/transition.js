export default {
	easeOutFunctin: 'cubic-bezier(0.23, 1, 0.32, 1)',
	easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
	easeOut(property, duration, easeOutFunctin, delay) {
		duration = duration || '450ms',
		easeOutFunctin = easeOutFunctin || this.easeOutFunctin,
		delay = delay || '0ms';
		property = property || 'all';
		property = [].concat(property);
		let transition = '';
		const length = property.length;
		for(let i = 0;i < length;i++) {
			if(transition) transition += ',';
			transition += `${property[i]} ${duration} ${easeOutFunctin} ${delay}`; 
		}
		return transition;
	}
}