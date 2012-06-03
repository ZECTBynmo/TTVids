var container = document.body;
if (document.getElementById("ttapi")) {
	return container.removeChild(document.getElementById("ttapi"));
}
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
container.appendChild(obj);