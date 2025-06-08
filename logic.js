    let gridsize=document.getElementById('gridinput')
    let container=document.getElementById('container')
    let okbutton=document.getElementById('generate')
    let newbutton=document.getElementById('reset')
    let opacityMode= false
    let opacityToggle = document.getElementById('opac');
    let palette=document.getElementById(`palette`);
    let selectedColor='Black';

    opacityToggle.addEventListener('click', function () {
    opacityMode = !opacityMode;
});




    okbutton.addEventListener('click',function(){
        let num=parseInt(gridsize.value)
        if (num<=100){
            
            let size=640/num
            container.innerHTML=''   

            for(let i=0;i<num*num;i++){
                let square=document.createElement('div')
                square.style.width = size + 'px';
                square.style.height = size + 'px';
                square.style.border = '1px solid #ccc';
                square.style.boxSizing = 'border-box';

                square.dataset.opacity=0;

                square.addEventListener('mouseover', function () {
                    if (opacityMode){
                        let opacity=parseFloat(square.dataset.opacity)
                        if(opacity<=1){
                            opacity+=0.1
                            square.dataset.opacity=opacity.toFixed(1)
                            const [r, g, b] = colorMap[selectedColor];
                            square.style.backgroundColor = `rgba(${r},${g},${b},${opacity})`;
                        }
                    }
                    else{
                        const [r, g, b] = colorMap[selectedColor];
                        square.style.backgroundColor = `rgb(${r},${g},${b})`;
                    }
                    
        });
                container.append(square);
        }}
        else{
            alert("Enter number less than or = 100")
        }

    })

    newbutton.addEventListener('click',function(){
        container.innerHTML='' 
    })

    

    palette.addEventListener('click', function (e) {
  if (e.target.classList.contains('color-opt')) {
    selectedColor = e.target.dataset.color;
  }
})


    const colorMap = {
  Black: [0, 0, 0],
  White: [255, 255, 255],
  Red: [255, 0, 0],
  Orange: [255, 165, 0],
  Blue: [0, 0, 255],
  Yellow: [255, 255, 0],
  Green: [0, 128, 0],
  Purple: [128, 0, 128],
  Brown: [165, 42, 42],
  Grey: [128, 128, 128],
  Pink: [255, 192, 203],
  Cyan: [0,255,255]
};

