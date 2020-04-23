window.onload = start;

Commands_images_pathes = [
    'img/arrow_up.png',
    'img/question.jpg',
    'img/cycle.png'
]

function start() {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	field = new Field(ctx, M = 8, N = 6, Cell_size = 80, Indent = 50);
	field.grid.draw();

	let img = new Image();
	img.src = 'img/robot.png';
	
	document.getElementById('change_btn').onclick = function() {
		field.add_robot_random(img);
    }
    
    queue = new Queue($('#queue'));
    queue.draw();
    queue.draw();

    let $commands_images = []
    for (let i = 0; i < Commands_images_pathes.length; i++) {
        let command_img = new Image();
        command_img.src = Commands_images_pathes[i];
        $commands_images.push($(command_img));
    }

    panel = new Panel($('#panel'), $commands_images, queue);
    panel.draw();
}