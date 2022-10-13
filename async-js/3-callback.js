console.log("Start");

function loginUser(email, password, callback){
	setTimeout(() => {
		callback( {userEmail: email} );
	}, 2000);
}

function getUserVideos(email, callback) {
	setTimeout(() => {
		callback(["Video1","Video2","Video3","Video4","Video5"])
	}, 2000)
}

function getVideoDetails(video, callback) {
	setTimeout(() => {
		callback("Title of the videoi1")
	},3000)
}

const user = loginUser("jhondoe@contoso.com", "1234", user => {

	console.log(user)
	getUserVideos( user.userEmail, videos => {
		console.log(videos)
	getVideoDetails(videos[0], details => {
		console.log(details)
		})
	})
});

console.log("Finish");
