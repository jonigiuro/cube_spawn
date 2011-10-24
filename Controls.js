$(document).ready(function(){
$('#randpiu').click(function(){
	randomness += 5
	document.getElementById('randvalue').innerHTML = randomness;
	return false;
})
$('#randmeno').click(function(){
	randomness = randomness - 5
	document.getElementById('randvalue').innerHTML = randomness;
	return false;
})
$('#sizeplus').click(function(){
	randsize += 5
	document.getElementById('sizevalue').innerHTML = randsize;
	return false;
})
$('#sizeminus').click(function(){
	randsize -= 5
	document.getElementById('sizevalue').innerHTML = randsize;
	return false;
})

$('#reset').click(function(){
	randomness = 0
	randsize = 0
	document.getElementById('sizevalue').innerHTML = 0;
	document.getElementById('randvalue').innerHTML = 0;
	return false;
})
})