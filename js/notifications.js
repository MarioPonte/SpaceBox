


// Notifications

async function showNotification(){
	const reg = await navigator.serviceWorker.getRegistration();

    const timestamp = new Date().getTime() + 5 * 1000; // now plus 5000ms
      reg.showNotification(
        'Nova foto astronómica do dia!',
        {
          tag: 'apodNotification', // a unique ID
          body: 'Foto do dia 19/10/2022', // content of the push notification
		      //showTrigger: new TimestampTrigger(timestamp),
          data: {
            url: window.location.href, // pass the current url to the notification
          },
          icon: './images/icon.png',
          timeout: 4000,
        }
      );
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