toastr.options = {
    positionClass: "toast-bottom-right",
    timeOut: "1000"
  }

// $("#tel").click(function(){
//     navigator.clipboard.readText();
//     navigator.clipboard.writeText($("#tel").text());
//     toastr.success("成功複製電話號碼！");
// })

$("#mail").click(function(){
    navigator.clipboard.readText();
    navigator.clipboard.writeText($("#mail").text());
    toastr.success("成功複製電子郵件！");
})

const tel = document.querySelector('#tel');
tel.addEventListener('click', ()=> {
    navigator.clipboard.readText();
    navigator.clipboard.writeText(tel.textContent);
    toastr.success("成功複製電話號碼！");
})