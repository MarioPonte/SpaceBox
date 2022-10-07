
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").then(registration => {
        console.log("sw registed");
        console.log(registration);
    }).catch(error => {
        console.log("sw registation failed");
        console.log(error);
    });
}else{
    console.log(navigator);
}