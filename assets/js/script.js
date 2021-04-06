
var slide_title = document.getElementsByClassName('blog-slider__title')
var slide_big_title = document.getElementsByClassName('blog-slider__text')
var slide_img = document.getElementsByClassName('blog-slider__img')
var slide_date = document.getElementsByClassName('blog-slider__code')
var readmore = document.getElementsByClassName('blog-slider__button')

var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
        var data = xhttp.responseXML
        for(var i = 0; i <6; i++)
        {
            var img = document.createElement("img")
            img.setAttribute("src", data.getElementsByTagName("enclosure")[i].getAttribute("url"))
            slide_title[i].innerHTML = data.getElementsByTagName("title")[i].textContent
            slide_img[i].innerHTML = ''
            slide_img[i].appendChild(img)
            slide_date[i].innerHTML = data.getElementsByTagName("pubDate")[i].textContent.split('+')[0]
            slide_big_title[i].innerHTML = data.getElementsByTagName("description")[i].textContent.split('.')[0]
            readmore[i].setAttribute("href", data.getElementsByTagName("guid")[i].textContent)
        }
    }
}

xhttp.open("GET", "https://www.01net.com/rss/actualites/securite/", true)
xhttp.send()