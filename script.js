//variables pour site 'predefinis'
var imgur = /http[s]*:\/\/i.imgur.com\/.+.(jpg|gif|png)/; //Image Imgur
var chanpic = /http[s]*:\/\/i.4cdn.org\/.+.(jpg|gif|png)/; //Image 4Chan
var chanpic2 = /http[s]*:\/\/is2.4chan.org\/.+.(jpg|gif|png)/; //Image 4Chan
var chanWebm = /http[s]*:\/\/i.4cdn.org\/.+.(webm)/; //Webm 4Chan
var webMShare = /http[s]*:\/\/webmshare.com\/.+./; //Webm
//variables pour n'importe quel site
var anywebM = /http[s]*:\/\/.+.\/.+.(webm)/; //tous les webms
var anyimage = /http[s]*:\/\/.+.\/.+.(jpg|gif|png)/; //toutes les images

// variable de la taille
//var taille = "25%";
var taille = "100%";

var liens_hypertext = document.getElementsByClassName("xXx");

for (i in liens_hypertext) {
  if (imgur.test(liens_hypertext[i].innerHTML) || chanpic.test(liens_hypertext[i].innerHTML) || chanpic2.test(liens_hypertext[i].innerHTML) || anyimage.test(liens_hypertext[i].innerHTML)) {

    console.log(liens_hypertext[i])
    console.log($(liens_hypertext[i]).attr('target'));

    if ($(liens_hypertext[i]).attr('target') != "_blank") {

      var miniature = document.createElement("img");
      miniature.className = "img-script";
      miniature.setAttribute("src", liens_hypertext[i].getAttribute("href"));
      miniature.setAttribute("alt", "L'image à peut-être été supprimé ou déplacé");
      miniature.setAttribute("width", taille);
      miniature.setAttribute("height", taille);
      //ou cette dimension
      // miniature.setAttribute("height", "500vh");
      liens_hypertext[i].innerText = "";
      liens_hypertext[i].appendChild(miniature);
      $('[alt]').css({
        color: 'red',
        textDecoration: 'underline',
        fontSize: '20px'
      });
    }

  }

  if (chanWebm.test(liens_hypertext[i].innerHTML) || anywebM.test(liens_hypertext[i].innerHTML)) {
    // console.log('webm');
    var video = document.createElement("video");
    video.className = "webm-video";
    video.setAttribute("controls", "true");
    video.setAttribute("width", taille);
    video.setAttribute("height", taille);
    var source = document.createElement("source");
    video.className = "webm-source";
    video.setAttribute("src", liens_hypertext[i].getAttribute("href"));
    video.setAttribute("type", "video/webm")
    liens_hypertext[i].innerText = "";
    liens_hypertext[i].appendChild(video);
    video.appendChild(source);
  }

  if (webMShare.test(liens_hypertext[i].innerHTML)) {
    // console.log('webmShare');
    var prelink = liens_hypertext[i].getAttribute("href").split('/');
    // console.log(prelink);
    var prelink_L = prelink.length;
    // console.log(prelink_L);
    var link = prelink[prelink_L - 1];
    // console.log(link);
    var linkWebm = "https://s1.webmshare.com/" + link + ".webm";
    // console.log(linkWebm);
    var video = document.createElement("video");
    video.className = "webm-video";
    video.setAttribute("controls", "true");
    video.setAttribute("width", taille);
    video.setAttribute("height", taille);
    var source = document.createElement("source");
    video.className = "webm-source";
    video.setAttribute("src", linkWebm);
    video.setAttribute("type", "video/webm")
    liens_hypertext[i].innerText = "";
    liens_hypertext[i].appendChild(video);
    video.appendChild(source);
    source.after("Le webm a probablement été supprimé");
  }
}
