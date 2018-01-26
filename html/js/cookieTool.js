function setCookie(ckName, ckValue){
	document.cookie = ckName+'='+ckValue+";";
}
function getCookie(ckName){
	var values = document.cookie.match(new RegExp("(^|)"+ckName+"=([^;]*)(;|$)"));
	if(values){
		return values[2];
	}
	return null;
}
function deleteCookie(ckName){
	document.cookie = ckName +"=;expires="+new Date(0).toUTCString();
}