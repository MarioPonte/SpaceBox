


// Notifications

async function showNotification(){
	const reg = await navigator.serviceWorker.getRegistration();

    const timestamp = new Date().getTime() + 5 * 1000; // now plus 5000ms
      reg.showNotification(
        'Demo Push Notification',
        {
          tag: timestamp, // a unique ID
          body: 'Hello World', // content of the push notification
		  showTrigger: new TimestampTrigger(timestamp), // set the time for the push notification
          data: {
            url: window.location.href, // pass the current url to the notification
          },
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