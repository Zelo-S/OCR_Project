
// event listener for button click
document.getElementById('screenshot').addEventListener('click', takeScreenshot);

function takeScreenshot(){
    html2canvas(document.querySelector('#capture')).then((canvas) => {
        console.log(canvas);
        // save with png ext
        saveAs(canvas.toDataURL(), 'test.png');
    });
}

/*
function saveAs(uri, filename){
    var link = document.createElement('a');
    if(typeof link.download === 'string'){
        link.href = uri;
        link.download = filename;
        
        link.click();
        //document.body.removeChild(link);
    }else{
        window.open(uri);
    }
}*/