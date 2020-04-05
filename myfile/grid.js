window.onload = function(){
  // 基本型
  // document.getElementById("cards").innerHTML = "New text!";

  // 重複性文字
  var str="";
  for(var i=0;i<12;i+=1){
    str+=
      '<div class="col-1">'+
        '<div class="card">'+
          '<img class="card-img-top" src="https://via.placeholder.com/400.png/09f/fff"> '+ 
          '<div class="card-body">'+
            '<p>'+i+'</p>'+
          '</div>'+
        '</div>'+
      '</div>';
  }
  document.getElementById("cards").innerHTML = str;
}