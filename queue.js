class Queue {
    constructor($queue, length = 10) {
        this.length = length;
        this.$queue = $queue;
        this.cur_cell = 0;
        this.$cells = []
    }

    draw() {
        length = this.length;
        let $queue = this.$queue;
        for (let i = 0; i < length; i++) {
            let $cell = $('<div class = "cell">').appendTo($queue);
            this.$cells.push($cell);
        }
    }

    add_command($img) {
        let $new_img = $img.clone();
        this.$cells[this.cur_cell].append($new_img);
        this.cur_cell++;
    }
}