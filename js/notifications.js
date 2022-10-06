


// Notifications

function showNotification(){

    const dts = Math.floor(Date.now());

    var data = new Date()
	const notification = new Notification("Nova foto astronómica do dia!", {
		body: "Foto do dia " + data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear(),
		icon: "./images/icon.png",
		tag: "Foto",
	});

	notification.onclick = (e) => {
		window.location.href = "apod.html";
	}
}

console.log(Notification.permission);

if(Notification.permission === "granted"){
	showNotification();
}else if(Notification.permission !== "denied"){
	Notification.requestPermission().then(permission => {
		if(permission === "granted"){
			showNotification();
		}
	});
}