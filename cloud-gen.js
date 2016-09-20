$( document ).ready(function() {

console.log('cloud-gen script loaded.');

	// insert random clouds

	var numberOfClouds = 40;

	var maxCloudY = 50;
	var minCloudY = 10;

	var maxCloudXZ = 50;
	var minCloudXZ = -50;

	var minCloudScale = 1;
	var maxCloudScale = 3;

	// constants
	var entityOpen = '<a-entity ';
	var entityClose = '></a-entity>';

	generateClouds();

	function generateClouds(){

		console.log('generateClouds called');
		console.log('numberOfClouds = ' + numberOfClouds);

		var cloudContainer = $('#cloud-container');

		for(var i = 0; i < numberOfClouds; i++) {

			// select a random int between 1 and 3 to
			// set the cloud type
			var cloudType = randomIntFromInterval(1,3);

			// set cloud Position
			var cloudYPos = randomIntFromInterval(minCloudY, maxCloudY);
			var cloudXPos = randomIntFromInterval(minCloudXZ, maxCloudXZ);
			var cloudZPos = randomIntFromInterval(minCloudXZ, maxCloudXZ);

			// rotation
			var cloudYRot = randomIntFromInterval(0, 360);
			var cloudXRot = 0;
			var cloudZRot = 0;

			// scale
			var cloudScale = randomFloatFromInterval(minCloudScale, maxCloudScale);

			// assemble attribute strings
			var objModelAttr = 'obj-model="obj: #cloud' + cloudType + '-obj; mtl: #cloud' + cloudType + '-mtl" ';
			var scalAttr = 'scale="' + cloudScale + ' ' + cloudScale + ' ' + cloudScale + '" ';
			var posAttr = 'position="' + cloudXPos + ' ' + cloudYPos + ' ' + cloudZPos + '" ';
			var rotAttr = 'rotation="' + cloudXRot + ' ' + cloudYRot + ' ' + cloudZRot + '" ';

			// create the cloud entity
			var cloudEntity = entityOpen + objModelAttr + scalAttr + posAttr + rotAttr + entityClose;
			console.log(cloudEntity);

			// create a cloud entity
			console.log('looping');
			cloudContainer.append(cloudEntity);

		}

	}

	console.log('cloud-gen script ended.');

	function randomIntFromInterval(min,max)
	{
	    return Math.floor(Math.random()*(max-min+1)+min);
	}
	
	function randomFloatFromInterval(min,max)
	{
		return (Math.random() * (max - min) + min).toFixed(4)
	}

});