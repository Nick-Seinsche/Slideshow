//BUILD THE PRESENTATION

//Translate Tag Function
function translateAlias(fromTag, toTag, toClass, toID, otherAttribs, adAt = undefined){
    fromElements = document.getElementsByTagName(fromTag);

    while(fromElements.length > 0){
        var elem = document.createElement(toTag);
        if (toClass != undefined && toClass != null){
            for (var i = 0 ; i < toClass.split(" ").length ; i++){
                elem.classList.add(toClass.split(" ")[i])
            }
        }
        if (toID != undefined && toID != null) elem.id = toID
        if (otherAttribs){
            for (var i = 0 ; i < fromElements[0].attributes.length ; i++){
                if(fromElements[0].attributes[i].name != "style")
                    if(fromElements[0].attributes[i].name != "id")
                        if(fromElements[0].attributes[i].name != "class")
                            elem.setAttribute(fromElements[0].attributes[i].name,fromElements[0].attributes[i].value)
                        else {
                            elem.classList.add(fromElements[0].attributes[i].value);
                        }
            }
        }
        if(adAt != undefined){
            for(var i = 0 ; i < adAt.length ; i++){
                elem.setAttribute(adAt[i][0], adAt[i][1]);
            }
        }
        elem.innerHTML = fromElements[0].innerHTML;
        fromElements[0].parentNode.replaceChild(elem, fromElements[0]);

    }
}

if(document.currentScript.getAttribute('build') != "false"){
    //TRANSLATE
    translateAlias("heading", "h1", "title", undefined, false);
    translateAlias("slide", "div", "slide", undefined, false);
    translateAlias("text", "p", "text", undefined, false);
    translateAlias("cite", "blockquote", "cite", undefined, false);

    //Image
    imgElements = document.getElementsByTagName("img");
    for (var i = 0 ; i < imgElements.length ; i++){
        if (!imgElements[i].classList.contains("image")) imgElements[i].classList.add("image")
    }

    translateAlias("dotlist", "ul", "table_of_contents", undefined, true);
    translateAlias("numberlist", "ol", "table_of_contents", undefined, true);
    translateAlias("listitem", "li", undefined, undefined, false);
    translateAlias("video", "iframe", "video", undefined, true, [["frameborder","0"],["allowfullscreen", true],["allow","autoplay; encrypted-media"]])
    translateAlias("annotation", "sup", undefined, undefined, false);
    translateAlias("note", "p", "note", undefined, false);
    translateAlias("author", "p", undefined, "author", false);

    //BUILD

    //1: headlinks
    var elem = document.createElement("link");
    elem.rel = "stylesheet";
    elem.type = "text/css";
    //elem.href = "https://drive.google.com/uc?export=download&id=1rF6ZhMMjg0o_3RhkmosxDX4tDtoIFsOP";
    elem.href = "style.css"
    document.head.appendChild(elem);

    elem = document.createElement("link");
    elem.rel = "icon";
    elem.href = "http://i.imgur.com/1qzj6Sb.png";
    document.head.appendChild(elem);

    elem = document.createElement("link");
    elem.rel = "stylesheet";
    elem.href = "https://fonts.googleapis.com/css?family=Exo+2:300";
    document.head.appendChild(elem);

    if(document.currentScript.getAttribute('maths') != "false"){
        elem = document.createElement("script");
        elem.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML";
        elem.async = true;
        document.head.appendChild(elem);
    }


    document.body.spellcheck = false;

    //2: Slider
    slider = document.createElement("div");
    slider.id = "slider";
    document.body.insertBefore(slider, document.body.childNodes[0])

    //3. Slider childs
    elem = document.createElement("p");
    elem.id = "pages";
    elem.innerHTML = "1 / 1";
    slider.appendChild(elem);

    elem = document.createElement("button");
    elem.id = "btn_edit";
    elem.innerHTML = "EDIT";
    slider.appendChild(elem);

    sidenav = document.createElement("div");
    sidenav.id = "mySidenav";
    sidenav.classList.add("sidenav");
    slider.appendChild(sidenav);

    elem = document.createElement("button");
    elem.id = "btn_darkmode_enable";
    elem.innerHTML = "Darkmode on";
    sidenav.appendChild(elem);

    elem = document.createElement("button");
    elem.id = "btn_darkmode_disable";
    elem.innerHTML = "Darkmode off";
    sidenav.appendChild(elem);

    elem = document.createElement("button");
    var elem2 = document.createElement("a");
    elem2.href = "https://drive.google.com/uc?export=download&id=1EAoEQIu5LwNZAKmVy_sAhholiL2OGBQk";
    //elem2.href = "https://docs.google.com/document/d/1EAoEQIu5LwNZAKmVy_sAhholiL2OGBQk/export?format=html";
    elem2.target = "_blank"
    elem2.innerHTML = "Help Page";
    elem.appendChild(elem2)
    sidenav.appendChild(elem);


    slidelist = document.getElementsByClassName('slide');
    //console.log(slidelist)
    for (var i = 0 ; i < slidelist.length ; i++){
        slider.appendChild(slidelist[i])
        var con = document.createElement("div");
        con.classList.add("content");
        while(slidelist[i].childNodes.length > 0){
            con.appendChild(slidelist[i].childNodes[0]);
        }
        slidelist[i].appendChild(con);

    }

    var btn = document.createElement("button");
    btn.id = "btn_prev";
    slider.appendChild(btn);

    btn = document.createElement("button");
    btn.id = "btn_next";
    slider.appendChild(btn);
}

//_______________________________________________

var slideIndex = 1;
showDivs(slideIndex);

/*
    CHANGES SLIDES BY N
*/
function plusDivs(n) {
    showDivs(slideIndex + n);
    update();
}

/*
    SHOWS SLIDE N
*/
function showDivs(n) {
    var slides = document.getElementsByClassName("slide");
    slideIndex = n;
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length} ;
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    update();
}

/*
    UPDATES PAGE INFO
*/
function update(){
    var pages = document.getElementsByClassName("slide").length;
    document.getElementById("pages").innerHTML = slideIndex + " / " + pages;
}

/*
    >>KEYLISTENER
    1. FOR CHANGING PAGES WITH KEYS
        - 37 [keycode] = '<-'
        - 39 [keycode] = '->'
        - 49 ... 57 [keycodes] = 1 ... 9
        -
    2.
*/
document.addEventListener('keydown', function (e) {
    // 1.
    if (!editingMode){
        switch (e.keyCode){
            case 37:
               plusDivs(-1);
               break;
           case 39:
               plusDivs(+1);
               break;
        }
        // 1.
        var key = e.keyCode;
        if (key >= 49 && key <= 57){
            key = key - 48;
            plusDivs(key - slideIndex);
        }
    }
});

/*
    BUTTON CLICK LISTENER > CHANGE SLIDE
*/
document.getElementById("btn_prev").addEventListener("click", function(){
    plusDivs(-1);
});
document.getElementById("btn_next").addEventListener("click", function(){
    plusDivs(+1);
});

/*
    CLICKLISTENER FOR EDITING BUTTON
*/
document.getElementById("btn_edit").addEventListener("click", function(){
    editingMode = !editingMode
    setEditable(editingMode);
});

/*
    STOP VIDEOS ON INACTIVE SLIDES
*/
function stopVids(){
    //var slides = document.getElementsByClassName("slide");
    //var vids = document.getElementsByClassName("video");
    //for (var i = 0 ; i < vids.length ; i++){
    //    vids[i].pause();
    //}
}

/*
    >> MOUSELISTENER (click) for MOBILE
    FOR:
    1. BACK: CLICK ON THE LEFT SIDE OF THE PAGE (MOBILE)
    1. FORWARD: CLOCK ON THE RIGHT SIDE OF THE PAGE (MOBILE)
*/

document.addEventListener("mousedown", function(event){
    if (event.button == 0){
        if (on_desktop == false){
            // 1.
            if (event.clientX < window.innerWidth/3){
                plusDivs(-1);
            }else if (event.clientX >= window.innerWidth/(3/2)){
                plusDivs(+1);
            }
        }else if (on_desktop == true){
            //if (window.innerWidth - event.clientX < 75 && event.clientY < 75){}
        }
    }
});

/*
    >>MOUSELISTENER (position)
    FOR:
    1. SHOWING and UNSHOWING the EDIT BUTTON: Repositioning
*/
document.addEventListener("mousemove", function(event){
    // 1.
    if (window.innerWidth - event.clientX < 190 && event.clientY < 190){
        document.getElementById("btn_edit").style.top = -5 + "px";
        document.getElementById("btn_edit").style.right = 10 + "px"
    }else{
        document.getElementById("btn_edit").style.top = "-80px";
        document.getElementById("btn_edit").style.right = "-80px";
    }
})

/*
    CHANGE PAGE PROPERTIES @ SPECIFIC SCREEN RATIO
*/

var change_ratio = 0.875;
var on_desktop = Boolean(window.innerWidth/window.innerHeight < change_ratio);
pageState();

window.onresize = function(event) {
    pageState();
}

function pageState(){
    if (window.innerWidth/window.innerHeight < change_ratio && on_desktop == true){
        /* DESKTOP -> SMARTPHONE */
        on_desktop = false;
        document.getElementById("btn_prev").style.display = "none";
        document.getElementById("btn_next").style.display = "none";
        document.getElementById("author").style.fontSize = "36px";

        for (var i = 0 ; i < document.getElementsByClassName("content").length ; i++){
            document.getElementsByClassName("content")[i].style.width = "80%";
        }
        for (var i = 0 ; i < document.getElementsByClassName("text").length ; i++){
            document.getElementsByClassName("text")[i].style.fontSize = "125%";
        }

    }else if (window.innerWidth/window.innerHeight > change_ratio && on_desktop == false){
        /* SMARTPHONE -> DESKTOP */
        on_desktop = true;
        document.getElementById("btn_prev").style.display = "block";
        document.getElementById("btn_next").style.display = "block";
        document.getElementById("author").style.fontSize = "inherit";

        for (var i = 0 ; i < document.getElementsByClassName("content").length ; i++){
            document.getElementsByClassName("content")[i].style.width = "auto";
        }
        for (var i = 0 ; i < document.getElementsByClassName("text").length ; i++){
            document.getElementsByClassName("text")[i].style.fontSize = "inherit";
        }

    }
}

/*
    ASK CLOSE CONFIRMATION
*/
window.onbeforeunload = function(e) {
    return 'Dialog text here.';
};


/*
    DARK MODE
    NEEDS TO BE FIXED ?
*/
if ((new Date().getHours() <= 5 || new Date().getHours() >= 21) && !String(window.location.href).includes("dark=")){
    darkModeEnable(true);
}

// Sidenav button event
document.getElementById("btn_darkmode_enable").addEventListener("click", function(){darkModeEnable(true);})
document.getElementById("btn_darkmode_disable").addEventListener("click", function(){darkModeEnable(false);})

function darkModeEnable(bool){
    if (bool){
        document.body.style.backgroundColor = "#1C1C1C";
        document.body.style.color = "white";
    }else{
        document.body.style.backgroundColor = "inherit";
        document.body.style.color = "inherit";
    }
}

/*
    URL PARAMETERS
    ?
    slide=X, X is the slide that should be loaded
    dark=B, B=True/False, Enables/Disables Darkmode
*/
if (String(window.location.href).includes("?")){
    var parameters = window.location.href.split("?")[1].split("&");
    for (var i = 0 ; i < parameters.length ; i++){
        var param = parameters[i].split("=");
        if (param[0] == "slide"){
            showDivs(parseInt(param[1]));
        }else if (param[0] == "dark"){
            darkModeEnable(Boolean(param[1]));
        }
    }
    // Remove parameters from addressbar
    window.history.replaceState(null, null, window.location.pathname);
}

/*
MOBILE: NOTIFICATION ON CHANGEING SLIDE (WATERMARK ARROW LEFT/RIGHT)
*/


/*
EDIT THE PRESENTATION WHEN OPENED
*/
var editingMode = false;
function setEditable(bool){
    // get all slides
    var elements = document.getElementsByClassName("slide")
    if (bool){
        // show editing bar
        document.getElementById("mySidenav").style.width = "235px";

        // change button text to "save"
        document.getElementById("btn_edit").innerHTML = "SAVE"

        // set all slides to be allowed to be editied
        for (var i = 0 ; i < elements.length ; i++){
            elements[i].style.webkitUserModify = "read-write";
            elements[i].style.mozUserModify = "read-write";
        }

        // allow author to be edited
        document.getElementById("author").style.webkitUserModify = "read-write";
        document.getElementById("author").style.mozUserModify = "read-write";

        // move elements hidden by sidenav to the right
        document.getElementById("author").style.paddingLeft = "250px";
        document.getElementById("pages").style.paddingLeft = "250px";

    }else{
        //hide editing bar
        document.getElementById("mySidenav").style.width = "0";

        // change button text to "edit"
        document.getElementById("btn_edit").innerHTML = "EDIT";

        // disallow all slides to be edited
        for (var i = 0 ; i < elements.length ; i++){
            elements[i].style.webkitUserModify = "read-only";
            elements[i].style.mozUserModify = "read-only";
        }

        //disallow author to be edited
        document.getElementById("author").style.webkitUserModify = "read-only";
        document.getElementById("author").style.mozUserModify = "read-only";

        // move elements hiden by sidenav back to original position
        document.getElementById("author").style.paddingLeft = "50px";
        document.getElementById("pages").style.paddingLeft = "175px";
    }
}
