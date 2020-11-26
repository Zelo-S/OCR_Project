// how to make html2canvas data into downloadable png ---> https://stackoverflow.com/questions/31656689/how-to-save-img-to-users-local-computer-using-html2canvas
// event listener for button click
fs = require('fs');
document.getElementById('screenshot').addEventListener('click', takeScreenshot);

function takeScreenshot(){
    html2canvas(document.querySelector('#capture')).then((canvas) => {
        //console.log(canvas);
        // save with png ext
        //saveAs(canvas.toDataURL(), 'test.png');
        
        
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        console.log(image);
        fs.writeFile('test.png', image, 'base64', (err) => {
            if(err) console.log(err);
            console.log('file donwloadded');
        });
        window.location.href = image;

    });
}




/*
function saveAs(uri, filename){
    var link = document.createElement('a');
    if(typeof link.download === 'string'){
        link.href = uri;
        link.download = filename;
        
        
        
        
        
        var linkAnc = document.createTextNode('This is a link');
        link.appendChild(linkAnc);
        document.body.appendChild(link);
        link.click();
    }else{
        window.open(uri);
    }
}*/