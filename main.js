canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

bg_img="mars.jpg";
rover_img="rover.png";
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=90;

nasa_mars_images_array= ["nasa_img_1.jpg","nasa_img_2.jpg","nasa_img_3.jpg","nasa_img_4.jpg","nasa_img_5.jpg"];
random_number= Math.floor(Math.random()*5);
bg_img= nasa_mars_images_array[random_number];

function add(){
    bg_imgTag= new Image();
    bg_imgTag.src= bg_img;
    bg_imgTag.onload= uploadbg;
    
    rover_imgTag= new Image();
    rover_imgTag.src= rover_img;
    rover_imgTag.onload= uploadrover;
}

function uploadbg(){
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
      if(keyPressed=='38')
      {
        up();
        console.log("up");
      }

      if(keyPressed=='40')
      {
        down();
        console.log("down");
      }

      if(keyPressed=='37')
      {
       left();
        console.log("left");
      }

      if(keyPressed=='39')
      {
        right();
        console.log("right");
      }

}

function up()
{
  if(rover_y>=0)
  {
    rover_y=rover_y-10;
    console.log("when up arrow is pressed, x="+ rover_x+" | y ="+rover_y);
    uploadbg();
    uploadrover();
  }
}

function down()
{
  if(rover_y <=300)
  {
    rover_y=rover_y+10;
    console.log("when down arrow is pressed, x="+ rover_x+" | y ="+rover_y);
    uploadbg();
    uploadrover();
  }
}

function left()
{
  if(rover_x >=0)
  {
    rover_x=rover_x - 10;
    console.log("when left arrow is pressed, x="+ rover_x+" | y ="+rover_y);
    uploadbg();
    uploadrover();
  }
}

function right()
{
  if(rover_x <=700)
  {
    rover_x=rover_x + 10;
    console.log("when right arrow is pressed, x="+ rover_x+" | y ="+rover_y);
    uploadbg();
    uploadrover();
  }
}
