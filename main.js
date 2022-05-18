function dividirSomar() {

    
  var max = document.getElementById('max').value
  document.getElementById('max').value = ''
  var mult5 = 0;
  var mult3 = 0;

  if(!max){
    max = 1000
  }
  
  for (let i = 0; i < max; i++) {
    if (i % 3 === 0) {
      mult3++;
    }
    if (i % 5 === 0) {
      mult5++;
    }

    document.getElementById('maxNum').innerHTML = max


    document.getElementById('mult5').innerHTML = `
            <div class="mult">
              <p>
               existem ${mult5} multiplos de 5 até ${max}
              </p>
             </div>
             `;

    document.getElementById('mult3').innerHTML = `
     <div class="mult">
       <p>
         existem ${mult3}  multiplos de 5 até ${max}
       </p>
     </div>`;
  }
}
dividirSomar();
