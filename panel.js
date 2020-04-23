class Panel {
    constructor($panel, $images_arr, queue) {
        this.$panel = $panel;
        this.length = $images_arr.length;
        this.$images_arr = $images_arr;
        this.$cells = [];
        this.queue = queue;
    }

    add_command_to_queue() {
        // console.log($(this).find('img'));
        queue.add_command($(this).find('img'));
    }

    draw() {
        length = this.length;
        let $panel = this.$panel;
        for (let i = 0; i < length; i++) {
            let $div = $('<div class = "cell">').appendTo($panel);
            $div.append(this.$images_arr[i]);
            $div.click(this.add_command_to_queue);
            this.$cells.push($div);
        }
    }


}