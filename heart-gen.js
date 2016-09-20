$( document ).ready(function() {

console.log('heart-gen script loaded.');

	// array of hearts
	var heartsArray = {

		"hearts":[

			{"posX": -2, "posY": 1.8, "posZ": -1, "rotation":"0 60 0"},
			{"posX": -1, "posY": 1.8, "posZ": -2, "rotation":"0 30 0"},

			{"posX": 2, "posY": 1.8, "posZ": -1, "rotation":"0 -60 0"},
			{"posX": 1, "posY": 1.8, "posZ": -2, "rotation":"0 -30 0"},

			{"posX": 2, "posY": 1.8, "posZ": 1, "rotation":"0 60 0"},
			{"posX": 1, "posY": 1.8, "posZ": 2, "rotation":"0 30 0"},

			{"posX": -2, "posY": 1.8, "posZ": 1, "rotation":"0 -60 0"},
			{"posX": -1, "posY": 1.8, "posZ": 2, "rotation":"0 -30 0"},			

		]

	};

	// insert random hearts

	var numberOfHearts = heartsArray.hearts.length;
	console.log('Number of hearts is ' + numberOfHearts);

	var maxheartY = 2;
	var minheartY = 2;

	var maxheartXZ = 10;
	var minheartXZ = -10;

	var minheartScale = .3;
	var maxheartScale = .3;

	// constants
	var entityOpen = '<a-entity ';
	var entityClose = '></a-entity>';

	generateHearts();

	function generateHearts(){

		console.log('generateHearts called');
		console.log('numberOfHearts = ' + numberOfHearts);

		var heartContainer = $('#heart-container');

		for(var i = 0; i < numberOfHearts; i++) {

			// even/odd distribution of hearts
			var heartType;
			if(i % 2 == 0){
				heartType = 'yellow-heart';
			} else {
				heartType = 'blue-heart';
			}

			// rotation
			var heartRot = heartsArray.hearts[i].rotation;

			// scale
			var heartScale = .2;

			// assemble attribute strings
			var objModelAttr = 'obj-model="obj: #' + heartType + '-obj; mtl: #' + heartType + '-mtl" ';
			var scalAttr = 'scale="' + heartScale + ' ' + heartScale + ' ' + heartScale + '" ';
			var posAttr = 'position="' + heartsArray.hearts[i].posX + ' ' + heartsArray.hearts[i].posY + ' ' + heartsArray.hearts[i].posZ + '" ';
			var rotAttr = 'rotation="' + heartRot + '" ';

			// create the heart entity
			var heartEntity = entityOpen + objModelAttr + scalAttr + posAttr + rotAttr + entityClose;
			console.log(heartEntity);

			// create a heart entity
			console.log('looping');
			heartContainer.append(heartEntity);

		}

	}

	console.log('heart-gen script ended.');

	function randomIntFromInterval(min,max)
	{
	    return Math.floor(Math.random()*(max-min+1)+min);
	}
	
	function randomFloatFromInterval(min,max)
	{
		return (Math.random() * (max - min) + min).toFixed(4)
	}

});