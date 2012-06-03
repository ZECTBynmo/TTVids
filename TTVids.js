var container = document.body;
var vidPlayer;

if (document.getElementById("ttapi")) {
	container.removeChild(document.getElementById("ttapi"));
}

// Start up the SWF object
google.load("swfobject", "2.1");

// allowScriptAccess must be set to allow the Javascript from one 
// domain to access the swf on the youtube domain
var params = { allowScriptAccess: "always", bgcolor: "#cccccc" };
// this sets the id of the object or embed tag to 'myytplayer'.
// You then use this id to access the swf and make calls to the player's API
var atts = { id: "myytplayer" };
var playerWidth= screen.width / 3;
var playerHeight= screen.height / 3;
swfobject.embedSWF("http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=ytplayer", 
				 "ytapiplayer", playerWidth, playerHeight, "8", null, null, params, atts);		
				 
				 
// Called when the youtube player has initialized
function onYouTubePlayerReady(playerId) {
	// Give the video player reference to the UI youtube player now that it's loaded
	vidPlayer= document.getElementById( "myytplayer" );

	// Initialize the rest of the UI now that the video player is ready
	initUI();
}


// Set up our UI
function initUI() {
	var obj = document.createElement("div");
	obj.id = "ttapi";
	obj.style.position = "absolute";
	obj.style.top = "20px";
	obj.style.left = "20px";
	obj.style.width = "500px";
	obj.style.height = "100px";
	obj.style.padding = "10px";
	obj.style.zIndex = 20000;
	obj.style.backgroundColor = "#fff";
	obj.style.fontSize = "13px";
	var auth = document.createElement("div");
	auth.innerHTML = "Auth: "
	turntable.user.auth;
	var userid = document.createElement("div");
	userid.innerHTML = "UserId: "
	turntable.user.id;

	for (var i in turntable) {
		if (turntable[i].roomId) {
			var rid = turntable[i].roomId;
			break;
		}
	}

	var roomid = document.createElement("div");
	roomid.innerHTML = "RoomId: "
	rid;
	obj.appendChild(auth);
	obj.appendChild(userid);
	obj.appendChild(roomid);
	obj.appendChild( vidPlayer );
	container.appendChild(obj);
}