class Queue {
    constructor($queue, length = 10) {
        this.length = length;
        this.$queue = $queue;
    }

    draw() {
        length = this.length;
        let $queue = this.$queue;
        for (let i = 0; i < length; i++) {
            $('<div class = "cell">').appendTo($queue);
        }
    }
}