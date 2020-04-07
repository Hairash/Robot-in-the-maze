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


function start() {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	let grid = new Grid(ctx, M = 8, N = 6, Cell_size = 80, Indent = 50);
	grid.draw();

	var img = new Image();
	img.src = 'img/robot.png';
	img.onload = function() {
		ctx.drawImage(img, grid.Indent, grid.Indent,
			grid.Cell_size, grid.Cell_size);
	}

}













