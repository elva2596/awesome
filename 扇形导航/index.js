/*
    transitionend 事件会在 CSS transition 结束后触发. 当transition完成前移除transition时，
    比如移除css的transition-property 属性，事件将不会被触发.如在transition完成前设置 display: none，
    事件同样不会被触发;
    IE10以上
    可以冒泡
    没有默认行为
*/

window.addEventListener('load',function (){
  var home = document.querySelector(".home")
  var aImg =document.querySelectorAll('.menu_list li')
  var arr =Array.prototype.slice.call(aImg,0)//类数组->数组
  console.log(Array.isArray(arr))

  home.addEventListener('click',function (){
    this.style.WebkitTransform = "rotate(-360deg)"
  },false)
},false)
