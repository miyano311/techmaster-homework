// this function generates a random set of RGB color code
function generateRandomRGBColor() {
	var output = {
		r: 0, g: 0, b: 0
	}
	output.r = Math.floor(Math.random() * 256);
	output.g = Math.floor(Math.random() * 256);
	output.b = Math.floor(Math.random() * 256);
	return output;
}
