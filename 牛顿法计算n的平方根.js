
var input = +prompt(); //输入的数
var y1 = input;
var x1 = y1;//第一次带入的值
var derivative = 0;
while (Math.abs(x1 * x1 - input) > 0.00000000000001) {

    y1 = x1 * x1 - input; //求出在X1的Y值
    /****以下部分是开始求导***************/

    derivative = 2 * x1; //在x1的导数
    var b = y1 - derivative * x1;//求出导数在y轴的焦点

    /********以下需要求出导数在X轴的焦点****/
    /*********y1=dervitive * x + b********************/
    x1 = -b / derivative;
    y1 = x1 * x1 - input;
}
console.log(x1);
