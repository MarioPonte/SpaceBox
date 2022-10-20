


// Notifications

async function showNotification(){

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    
    const formattedToday = dd + '/' + mm + '/' + yyyy;

	  const reg = await navigator.serviceWorker.getRegistration();

    const timestamp = new Date().getTime() + 5 * 1000; // now plus 5000ms
      reg.showNotification(
        'Nova foto astronómica do dia!',
        {
          tag: 'apodNotification', // a unique ID
          body: 'Foto do dia ' + formattedToday, // content of the push notification
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