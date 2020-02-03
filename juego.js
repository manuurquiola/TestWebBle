function setup() {createCanvas(1000, 800);
}

var X;
var Y;
X=0;
Y=0;



function draw() {
	fill(0);
	ellipse(X, Y, 3, 3);
}


var microBit;

microBit= new uBit();

microBit.onConnect(function(){
	console.log("connected");
});


microBit.onDisconnect(function(){
	console.log("disconnected");
});
	
function searchDevice(){
	microBit.searchDevice();
}

microBit.onBleNotify(function(){
	X= X + microBit.getAccelerometer().x / 1024;
	Y= Y + microBit.getAccelerometer().y / 1024;
	if (microBit.getButtonA()) {
	}
})