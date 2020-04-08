window.onload = start;


class Grid {
	constructor (ctx, M = 10, N = 8, Cell_size = 30,
		Indent = 10) {
		this.ctx = ctx;
		this.M = M;
		this.N = N;
		this.Cell_size = Cell_size;
		this.Indent = Indent;
	}

	draw() {
		let ctx = this.ctx;
		let M = this.M;
		let N = this.N;
		let Cell_size = this.Cell_size;
		let Indent = this.Indent;

		for (let i = 0; i <= N; i++) {
			let s = `M ${Indent} ${Indent + i * Cell_size}
			L ${Indent + M * Cell_size} ${Indent + i * Cell_size}`;
			// console.log(s);
			let p = new Path2D(s);
			ctx.stroke(p);
		}

		for (let i = 0; i <= M; i++) {
			let s = `M ${Indent + i * Cell_size} ${Indent}
			L ${Indent + i * Cell_size} ${Indent + N * Cell_size}`;
			// console.log(s);
			let p = new Path2D(s);
			ctx.stroke(p);
		}
	}
}


function add_robot_random(ctx, grid, img) {
	x = Math.floor(Math.random() * grid.M);
	y = Math.floor(Math.random() * grid.N);

	ctx.drawImage(img, grid.Indent + grid.Cell_size * x,
		grid.Indent + grid.Cell_size * y, grid.Cell_size,
		grid.Cell_size);
}


function add_rect_random(ctx, grid) {
	x = Math.floor(Math.random() * grid.M);
	y = Math.floor(Math.random() * grid.N);
	console.log(x);
	console.log(y);
	
	x_rect = grid.Indent + grid.Cell_size * x;
	y_rect = grid.Indent + grid.Cell_size * y;
	console.log(x_rect);
	console.log(y_rect);
	let s = `M ${x_rect} ${y_rect} h ${grid.Cell_size}
		v ${grid.Cell_size} h ${-grid.Cell_size} Z`;
	console.log(s);
	let p = new Path2D(s);
	ctx.fill(p);
}


function start() {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	let grid = new Grid(ctx, M = 8, N = 6, Cell_size = 80, Indent = 50);
	grid.draw();

	var img = new Image();
	img.src = 'img/robot.png';
	
	document.getElementById('change_btn').onclick = function() {
		add_robot_random(ctx, grid, img);
	}

}













