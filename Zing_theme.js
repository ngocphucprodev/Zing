var index = 1;

changeImage = function() {
    var imgs = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    // document.getElementById('img').style.marginLeft = -1040;


    if (index == 3) {
        index = 0;

    }

}

setInterval(changeImage, 2000)


var flag = true;

function bell() {


    if (flag == true) {
        document.getElementById('show').style.display = "inline"
        document.getElementById('red').style.color = "#3a066b"
        return flag = false;
    } else {
        document.getElementById('show').style.display = "none"
        document.getElementById('red').style.color = "#fff"
        return flag = true;
    }
}