import React from 'react';
import createFragment from 'react-addons-create-fragment';

export function createChildFragment(fragments) {
	let validChildCount = 0;
	let firstKey;
	for(let key in fragments) {
		let currentChild = fragments[key];
		if(currentChild) {
			if(validChildCount === 0) {
				firstKey = key;
			}
			validChildCount++;
		}
	}

	if(validChildCount === 0) return undefined;
	if(validChildCount === 1) return fragments[firstKey]
	return createFragment(fragments)
}
