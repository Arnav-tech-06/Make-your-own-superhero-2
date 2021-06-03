var canvas = new fabric.Canvas('mycanvas');
player_x = 10;
player_y = 10;
super_image_width = 30;
super_image_height = 30;
var player_object = "";
var super_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    })
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
       super_image_object = Img;
        super_image_object.scaleToWidth(super_image_width);
        super_image_object.scaleToHeight(super_image_height);
       super_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(super_image_object);
    })
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey && keypressed == '80') {
        console.log("shift key and p pressed together");
        super_image_height += 10;
        super_image_width += 10;
        document.getElementById("current_width").innerHTML = super_image_width;
        document.getElementById("current_height").innerHTML = super_image_height;

    }
    if (e.shiftKey && keypressed == '77') {
        console.log("shift key and m pressed together");
        super_image_height -= 10;
        super_image_width -= 10;
        document.getElementById("current_width").innerHTML = super_image_width;
        document.getElementById("current_height").innerHTML = super_image_height;

    }
    if (keypressed == '38') {
        console.log("up");
        up();
    }
    if (keypressed == '37') {
        console.log("left");
        left();
    }
    if (keypressed == '39') {
        console.log("right");
        right();
    }
    if (keypressed == '40') {
        console.log("down");
        down();
    }
    if (keypressed == '70') {
        new_image('ironman_head.png');
        console.log("f");
    }
    if (keypressed == '72') {
        new_image('hulk_face.png');
        console.log("h");
    }
    if (keypressed == '84') {
        new_image('thor_face.png');
        console.log("t");
    }
    if (keypressed == '83') {
        new_image('spiderman_face.png');
        console.log("s");
    }
    if (keypressed == '82') {
        new_image('ironman_right_hand.png');
        console.log("r");
    }
    if (keypressed == '85') {
        new_image('hulk_right_hand.png');
        console.log("u");
    }
    if (keypressed == '66') {
        new_image('thor_right_hand.png');
        console.log("b");
    }
    if (keypressed == '67') {
        new_image('spiderman_right_hand.png');
        console.log("c");

    }
    if (keypressed == '79') {
        new_image('ironman_left_hand');
        console.log("o");
    }
    if (keypressed == '76') {
        new_image('hulk_left_hand.png');
        console.log("e");

    }
    if (keypressed == '90') {
        new_image('thor_left_hand.png');
        console.log("z");

    }
    if (keypressed == '88') {
        new_image('spiderman_left_hand.png');
        console.log("x");

    }
    if (keypressed == '78') {
        new_image('ironman_body.png');
        console.log("n");
    }
    if (keypressed == '77') {
        new_image('ironman_legs.png');
        console.log("m");
    }
    if (keypressed == '75') {
        new_image('hulk_body.png');
        console.log("k");
    }
    if (keypressed == '71') {
        new_image('hulk_legs.png');
        console.log("g");
    }
    if (keypressed == '89') {
        new_image('spiderman_body.png');
        console.log("y");

    }
    if (keypressed == '68') {
        new_image('spiderman_legs.png');
        console.log("d");

    }
}