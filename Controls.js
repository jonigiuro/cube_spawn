$(document).ready(function(){
	var gui = new DAT.GUI({
	    height : 7 * 32 - 1
	});
	gui.add(params, 'randomness').min(0).max(40).step(1).name("Y speed randomness")
	gui.add(params, 'randsize').min(0).max(1000).step(1).name("Random cubes size")
	gui.add(params, 'camerapos').min(-500).max(-50).step(1).name("Camera position")
	gui.add(params, 'rotation').min(0).max(0.1).step(0.01).name("Cubes rotation")
	gui.add(params, 'wavelength').min(3).max(40).step(1).name("Wavelength")
	//gui.add(params, 'sin_abs').options({'sin(x)': true, 'abs(sin(x))': false}).name("Formula")
	gui.add(params, 'sin_abs').name("Formula")
	gui.add(params, 'emit').name("Emit")
})