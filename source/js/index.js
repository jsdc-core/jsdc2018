// function doMove (obj, attr, dir, target, endFn) {
//     console.log('obj=',obj, 'attr=',attr, 'dir=',dir, 'target=', target, 'endFn=',endFn)
//     function _getStyle (obj, attr) {
//         return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
//     }
//     dir = parseInt(_getStyle(obj, attr)) < target ? dir : -dir;
//     console.log('_getStyle-dir:', dir)
//     clearInterval(obj.timer);
//     obj.timer = setInterval(function () {

//         var speed = parseInt(_getStyle(obj, attr)) + dir;
//         console.log('_getStyle-speed=', speed)
//         if (speed > target && dir > 0 ||  speed < target && dir < 0 ) {
//             target = speed;
//         }
//         obj.style[attr] = speed + 'px';

//         if (speed == target) {
//             clearInterval(obj.timer);

//             /*
//             if (endFn) {
//                 endFn();
//             }
//             */
//             endFn && endFn();

//         }
//     }, 30);
// }
// window.onload = function () {
//     var time = document.getElementById('time');
//     var oLi = time.getElementsByTagName('li');
//     var len = oLi.length;
//     var timer = '';
//     var str = '';
//     var oldTime = getTime();

//     if(!time) return;

//     timeImg();
//     clearInterval(timer);
//     timer = setInterval(timeImg, 1000);
//     function getTime() {
//         var myTime = new Date();   //获取当前的系统时间
//         var myHour = myTime.getHours();     //时
//         var myMin = myTime.getMinutes();    //分
//         var mySec = myTime.getSeconds();    //秒
//         str = toTwo(myHour) + ':' + toTwo(myMin) + ':' + toTwo(mySec);
//         return str;
//     }
//     function toTwo(a) {
//         return a<10 ? '0'+a : ''+a;
//     }
//     function timeImg(){
//         getTime();
//         console.log(oldTime +'--'+ str);
//         for(var i=0; i<len; i++){
//             oLi[i].getElementsByTagName('div')[0].style.top = 0;
//             if(i==2 || i==5){
//                 oLi[i].getElementsByTagName('img')[0].src = 'images/number/colon.png';
//                 oLi[i].getElementsByTagName('img')[1].src = 'images/number/colon.png';
//             }else{
//                 oLi[i].getElementsByTagName('img')[0].src = 'images/number/'+oldTime.charAt(i)+'.png';
//                 if(oldTime.charAt(i) == 9){
//                     oLi[i].getElementsByTagName('img')[1].src = 'images/number/0.png';
//                 }else{
//                     oLi[i].getElementsByTagName('img')[1].src = 'images/number/'+str.charAt(i)+'.png';
//                 }
//             }
//             if(str.charAt(i) !== oldTime.charAt(i)){
//                 doMove(oLi[i].getElementsByTagName('div')[0], 'bottom', -20, -90);
//                 // doMove(oLi[i].getElementsByTagName('div')[0], 'top', 20, -173);
//             }
//         }
//         oldTime = str;
//     }
// }