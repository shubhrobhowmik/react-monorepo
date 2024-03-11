module.exports = {
	'*.{ts,js,json,md,html,css,scss}': ['nx affected:lint --uncommitted --fix', 'nx format:write --uncommitted'],
};
