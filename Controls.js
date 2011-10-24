$(document).ready(function(){
	var gui = new DAT.GUI({
	    height : 5 * 32 - 1
	});
	gui.add(params, 'randomness').min(0).max(40).step(1)
	gui.add(params, 'randsize').min(0).max(1000).step(1)
	gui.add(params, 'camerapos').min(-500).max(-50).step(1)
	gui.add(params, 'rotation').min(0).max(0.1).step(0.01)
	gui.add(params, 'emit')
})