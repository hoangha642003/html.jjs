let showPointBtn=document.getElementById('showPointBtn')
showPointBtn.addEventListener("click", function(){
  let mathPoint=document.getElementById('mathPoint').value;
  let literaturePoint=document.getElementById('literaturePoint').value;
  let englishPoint=document.getElementById('englishPoint').value;
  let area=document.getElementById('area').value;
  let areaPoint;
  switch (area) {
    case "KV1":
      arePoint=0.75;
      break
      case "KV2-NT":
      areaPoint=0.5;
      break
      case "KV2":
        areaPoint=0.25;
        break
        case "KV3":
          areaPoint=0;
          break
  }
  let pointHtml= mathPoint+literaturePoint+englishPoint+areaPoint
  let result=document.getElementById('result')
  result.innerHTML=`điểm la : ${pointHtml} `

})
