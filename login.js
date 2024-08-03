function checkCredentials() {
	var name = document.getElementById("name").value;
	var password = document.getElementById("password").value;
	
	if (name === "pandi" && password === "bestfriend") {
		window.location.href = "homepage.html";
	} else {
		alert("Invalid credentials");
	}
}
