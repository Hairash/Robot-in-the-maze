window.onload = start;

function start() {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	field = new Field(ctx, M = 8, N = 6, Cell_size = 80, Indent = 50);
	field.grid.draw();

	var img = new Image();
	img.src = 'img/robot.png';
	
	document.getElementById('change_btn').onclick = function() {
		field.add_robot_random(img);
    }
    
    queue = new Queue($('#queue'));
    queue.draw();
    queue.draw();
}