const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("We got the user!");
		resolve({ user: "frank"});
	}, 2000)
});

promise.then(user => {
	console.log(user)
});
