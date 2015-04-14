/**
 * Created by John.Harris on 09/04/2015.
 */
function JohnsTestImp(int)
{
    return int + 2;
}

function calculateCircumference(r){
    return 2*Math.PI*r;
}

function optimalBezierDistance(n){
  return  (4/3)*Math.tan(Math.PI/(2*n) );
}

function degreesToRadians(degrees){
    return degrees * Math.PI / 180
}

function radiansToDegrees(radians){
    return (Math.PI * 180) / radians;
}
function playWithCircles(){
    var cx = document.getElementById("mainCanvas").getContext("2d"),
        radius = 336,
        radius = 336,
        centerX = 500,
        centerY= 500,
        angle = degreesToRadians(360/20),
        circumference;
circumference = calculateCircumference(radius);

    console.log(2*Math.PI);

        cx.beginPath();
        cx.arc(centerX, centerY, radius, 0, 2*Math.PI);
        cx.fillStyle = 'red'
        cx.stroke();

    cx.beginPath();
    cx.moveTo(centerX, centerY);
    cx.lineTo(centerX + radius, centerY);
    var x = Math.cos(angle) * radius + centerX;
    var y = Math.sin(angle) * radius + centerY;
    cx.moveTo(centerX, centerY);
    cx.lineTo(x , y);
    cx.quadraticCurveTo(x + optimalBezierDistance(20), y , centerX + radius,centerY);
    cx.closePath();
    cx.fillStyle = 'purple';
    cx.fill();

    cx.beginPath();
    cx.arc(500,500,320,0,2*Math.PI);
    cx.stroke();

    cx.beginPath();
    cx.arc(500,500,121,0,2*Math.PI);
    cx.stroke();

    cx.beginPath();
    cx.arc(500,500,105,0,2*Math.PI);
    cx.stroke();

    cx.beginPath();
    cx.arc(500,500,12.7,0,2*Math.PI);
    cx.stroke();


    cx.beginPath();
    cx.arc(500,500,31,0,(2*Math.PI)/20);
    cx.fill();
};

playWithCircles();