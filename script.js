function showHide(element){
    console.log("testing")
    var x = document.getElementById(element);
    console.log(x)
    if (x.style.display == 'none'){
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

