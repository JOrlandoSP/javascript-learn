console.log("Start");

function loginUser(email, password, callback){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		resolve( {userEmail: email} );
		}, 2000);
	})
}

function getUserVideos(email, callback) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		resolve(["Video1","Video2","Video3","Video4","Video5"])
		}, 2000)
	})
}

function getVideoDetails(video, callback) {
	return new Promise((resolve, reject) =>{
		setTimeout(() => {
		resolve("Title of the videoi1")
		},3000)
	})
}

loginUser("bobbafet@sw.com", "pa$$word")
.then(user => getUserVideos(user.email))
.then(videos => getVideoDetails(videos[0]))
.then(details => console.log(details))

 
