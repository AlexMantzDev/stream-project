const form = document.getElementById("login-form");
form.addEventListener("submit", onFormSubmit);

async function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const loginData = Object.fromEntries(data.entries());
	console.log(loginData);

	const options = {
		method: "POST",
		body: loginData,
	};

	try {
		const res = await fetch("http://mantztech.com/auth/login", options);
		console.log(res);
	} catch (err) {
		console.log(RangeError);
	}
}
