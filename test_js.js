var speeds = new Array();
var xspeeds = new Array();
var frame = 0
var cubenum = new Array();
var gravity=-9.81
var times=new Array();
var col = 0
var randomness = 0.0;
var randsize = 0;
var camerapos = -300;
var emit = true;
var params = {
	randomness: 0,
	randsize: 0,
	camerapos: -300,
	emit: true
};

var WIDTH = 800,
    HEIGHT = 800;


var VIEW_ANGLE = 30,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 0.1,
    FAR = 10000;

var $container = $('#container');

var renderer = new THREE.WebGLRenderer();
var camera = new THREE.Camera(  VIEW_ANGLE,
                                ASPECT,
                                NEAR,
                                FAR  );
var scene = new THREE.Scene();

camera.position.z = camerapos;
camera.position.x = -0;
camera.position.y=0;

// start the renderer
renderer.setSize(WIDTH, HEIGHT);

$container.append(renderer.domElement);

// Create Lights
var pointLight = new THREE.PointLight( 0x999999 );
var pointLight2 = new THREE.DirectionalLight( 0xFFFFFF, 0.2, 100 );
pointLight2.castShadow = true;
// set light positions
pointLight.position.x = - 10;
pointLight.position.y = - 20;
pointLight.position.z = - 250;

pointLight2.position.x = 0;
pointLight2.position.y = 10;
pointLight2.position.z = 0;

// add to the scene
scene.addLight(pointLight);
scene.addLight(pointLight2);

var sphereMaterial1 = new THREE.MeshPhongMaterial(
{
    color: '0xFFFFFF'
});
var planeMaterial = new THREE.MeshPhongMaterial(
{		ambient: 0xFFFFFF,
    color: '0xFFFFFF'
});
var plane = new THREE.Mesh(
	new THREE.CubeGeometry(100,1,100,1), planeMaterial);
var cube1 = new THREE.Mesh(
  new THREE.CubeGeometry(5, 2, 5, 1),
  sphereMaterial1);
scene.addChild(plane)
scene.addChild(cube1)
// draw!
plane.position.y=-2;

$('#container').click(function(){
	for(p=0;p<cubenum.length;p++){
		xspeeds[p]=xspeeds[p] * (20)
		speeds[p]=speeds[p] * (1.1)
	}
});
function drawCube(){
		if (params.emit == true){
			col++;
		var sphereMaterial = new THREE.MeshPhongMaterial(
		{
		    color: '0x'+ Math.floor((col%256-256)*(-1)).toString(16)+ Math.floor(col%128).toString(16)+ Math.floor(col%256).toString(16)
			//color: '0xFFFFFF'
		});
		var sphere = new THREE.Mesh(
		  new THREE.CubeGeometry(1 + Math.random()*params.randsize / 100, 1 + Math.random()*randsize / 100, 1 + Math.random()*randsize / 100, 1),
		  sphereMaterial);
			sphere.overdraw = true;
			sphere.position.x=0;
			sphere.position.y=0;
			sphere.position.z=0;
			sphere.rotation.x=Math.random()+359;
			sphere.rotation.y=Math.random()+359;
			sphere.rotation.z=Math.random()+359;

			// add the sphere to the scene
			times.push(1);
			//speeds.push(Math.random()*.5+5);
			speeds.push(5.5 + Math.random()*params.randomness / 100);
			//speeds.push(5.0);

			cubenum.push(sphere);

			xspeeds.push(Math.sin(cubenum.length/20)*2);
			scene.addChild(sphere);
			renderer.render(scene, camera);

	}
}

$('#container').mousemove(function(e){
	
		if(cubenum.length == 0){
			animate();
	}
	camera.position.y = e.clientY / 2 - 40;
	camera.position.x = e.clientX / 4 - 200;
	

})

function animate() {
	//cube1.rotation.y+=0.02;
	camera.position.z = params.camerapos;
	drawCube();
	for(q=0; q<cubenum.length;q++){
	times[q] += 0.001;
	//cubenum[q].position.x = cubenum[q].position.x / speed;
	cubenum[q].position.y += speeds[q] * times[q] + 0.5 * (gravity) * times[q] * times[q];
	cubenum[q].position.z = cubenum[q].position.z-0.8
	cubenum[q].position.x += xspeeds[q]/10;
	cubenum[q].rotation.y += 0.1;
	cubenum[q].rotation.x += 0.1;
	if (cubenum[q].position.y < (-20)){
		scene.removeChild(cubenum[q])
	}
	if (cubenum[q].position.y > (140)){
		scene.removeChild(cubenum[q])
	}
}
	renderer.render( scene, camera );
	requestAnimFrame(animate);
};

