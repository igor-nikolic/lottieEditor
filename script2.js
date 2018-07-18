
var anim;
var JSONdata;
var bgVideo;
$.getJSON("data60fps.json", function (data) {
    console.log('json loaded');
    JSONdata = data;
    start();
});
function start() {//this is svg renderer
    var elem = document.getElementById("lottie");
    // var elem = document.getElementsByClassName('control-anim')[0];
    var animData = {
        container: elem,
        renderer: "svg",
        loop: true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad: false,
            preserveAsceptRatio: 'xMidYMid meet'
        },
        animationData: JSONdata
    };
    anim = lottie.loadAnimation(animData);
    if(anim) console.log("started");
}

function start2() { //this is canvas renderer
     var elem = document.getElementById("lottie");
    var elem = document.getElementsByClassName('control-anim')[0];
    var kanvas = document.getElementById("animcanvas");
    var ctx = kanvas.getContext("2d");
    var animData = {
        container: elem,
        renderer: "canvas",
        loop: false,
        autoplay: true,
        rendererSettings: {
            //context: ctx,
            progressiveLoad: false,
            scaleMode: "noScale",
            preserveAsceptRatio: 'xMaxYMax meet',
            clearCanvas: true,
            hideOnTransparent: true,
            className: "classForCanvas"
        },
        animationData: JSONdata
    };
    anim = lottie.loadAnimation(animData);
    if (anim) console.log("started");
    var canvas = document.getElementsByClassName('classForCanvas')[0];
    console.log("animStarted");
}
function numHex(s) {
    let a = s.toString(16);
    if ((a.length % 2) > 0) { a = "0" + a; }
    return a;
}
function getColor(color) {
    let R = color[0];
    let G = color[1];
    let B = color[2];
    R = Math.round(R * 255);
    G = Math.round(G * 255);
    B = Math.round(B * 255);
    let colorHex = "#" + numHex(R) + numHex(G) + numHex(B);
    return colorHex;
}
$(document).on('click','#text-position ul li',function(){
    updatePosition();
});
function restartLottie() {
    console.log("restartujem lottie");
    if(anim) anim.destroy();
    // bgVideo.currentTime = 0;
    // bgVideo.play();
    start();
    //anim.play();
}
$(document).on('change','#fontList',function () {
    let api = "https://fonts.googleapis.com/css?family=";
    let fontApi = $(this).val();
    console.log("value",fontApi);
    let fontName = fontApi.split(":")[0].split("+").join(" ");
    let font = JSONdata.fonts.list[0];
    font.origin = 1;
    font.fPath = api+fontApi;
    font.fStyle="Regular";
    font.fName= fontName;
    font.fFamily = fontName;
    JSONdata.layers[1].t.d.k[0].s.f = fontName; 
    restartLottie();
})
$(document).ready(function () {
    // $('.moveable').draggable({
    //     start:function () {
    //         $(this).removeClass(function (index, className) {
    //             return (className.match (/\banim-\S+/g) || []).join(' ');
    //         })
    //     }
    // }).resizable({
    //     aspectRatio: 16 / 9
    // });
    let fontList=["Aclonica",
    "Allan",
    "Annie+Use+Your+Telescope",
    "Anonymous+Pro",
    "Allerta+Stencil",
    "Allerta",
    "Amaranth",
    "Anton",
    "Architects+Daughter",
    "Arimo",
    "Artifika",
    "Arvo",
    "Asset",
    "Astloch",
    "Bangers",
    "Bentham",
    "Bevan",
    "Bigshot+One",
    "Bowlby+One",
    "Bowlby+One+SC",
    "Brawler",
    "Buda:300",
    "Cabin",
    "Calligraffitti",
    "Candal",
    "Cantarell",
    "Cardo",
    "Carter One",
    "Caudex",
    "Cedarville+Cursive",
    "Cherry+Cream+Soda",
    "Chewy",
    "Coda",
    "Coming+Soon",
    "Copse",
    "Corben:700",
    "Cousine",
    "Covered+By+Your+Grace",
    "Crafty+Girls",
    "Crimson+Text",
    "Crushed",
    "Cuprum",
    "Damion",
    "Dancing+Script",
    "Dawning+of+a+New+Day",
    "Didact+Gothic",
    "Droid+Sans",
    "Droid+Sans+Mono",
    "Droid+Serif",
    "EB+Garamond",
    "Expletus+Sans",
    "Fontdiner+Swanky",
    "Forum",
    "Francois+One",
    "Geo",
    "Give+You+Glory",
    "Goblin+One",
    "Goudy+Bookletter+1911",
    "Gravitas+One",
    "Gruppo",
    "Hammersmith+One",
    "Holtwood+One+SC",
    "Homemade+Apple",
    "Inconsolata",
    "Indie+Flower",
    "IM+Fell+DW+Pica",
    "IM+Fell+DW+Pica+SC",
    "IM+Fell+Double+Pica",
    "IM+Fell+Double+Pica+SC",
    "IM+Fell+English",
    "IM+Fell+English+SC",
    "IM+Fell+French+Canon",
    "IM+Fell+French+Canon+SC",
    "IM+Fell+Great+Primer",
    "IM+Fell+Great+Primer+SC",
    "Irish+Grover",
    "Irish+Growler",
    "Istok+Web",
    "Josefin+Sans",
    "Josefin+Slab",
    "Judson",
    "Jura",
    "Jura:500",
    "Jura:600",
    "Just+Another+Hand",
    "Just+Me+Again+Down+Here",
    "Kameron",
    "Kenia",
    "Kranky",
    "Kreon",
    "Kristi",
    "La+Belle+Aurore",
    "Lato:100",
    "Lato:100italic",
    "Lato:300", 
    "Lato",
    "Lato:bold",  
    "Lato:900",
    "League+Script",
    "Lekton",  
    "Limelight",  
    "Lobster",
    "Lobster Two",
    "Lora",
    "Love+Ya+Like+A+Sister",
    "Loved+by+the+King",
    "Luckiest+Guy",
    "Maiden+Orange",
    "Mako",
    "Maven+Pro",
    "Maven+Pro:500",
    "Maven+Pro:700",
    "Maven+Pro:900",
    "Meddon",
    "MedievalSharp",
    "Megrim",
    "Merriweather",
    "Metrophobic",
    "Michroma",
    "Miltonian Tattoo",
    "Miltonian",
    "Modern Antiqua",
    "Monofett",
    "Molengo",
    "Mountains of Christmas",
    "Muli:300", 
    "Muli", 
    "Neucha",
    "Neuton",
    "News+Cycle",
    "Nixie+One",
    "Nobile",
    "Nova+Cut",
    "Nova+Flat",
    "Nova+Mono",
    "Nova+Oval",
    "Nova+Round",
    "Nova+Script",
    "Nova+Slim",
    "Nova+Square",
    "Nunito:light",
    "Nunito",
    "OFL+Sorts+Mill+Goudy+TT",
    "Old+Standard+TT",
    "Open+Sans:300",
    "Open+Sans",
    "Open+Sans:600",
    "Open+Sans:800",
    "Open+Sans+Condensed:300",
    "Orbitron",
    "Orbitron:500",
    "Orbitron:700",
    "Orbitron:900",
    "Oswald",
    "Over+the+Rainbow",
    "Reenie+Beanie",
    "Pacifico",
    "Patrick+Hand",
    "Paytone+One", 
    "Permanent+Marker",
    "Philosopher",
    "Play",
    "Playfair+Display",
    "Podkova",
    "PT+Sans",
    "PT+Sans+Narrow",
    "PT+Sans+Narrow:regular,bold",
    "PT+Serif",
    "PT+Serif Caption",
    "Puritan",
    "Quattrocento",
    "Quattrocento+Sans",
    "Radley",
    "Raleway:100",
    "Redressed",
    "Rock+Salt",
    "Rokkitt",
    "Ruslan+Display",
    "Schoolbell",
    "Shadows+Into+Light",
    "Shanti",
    "Sigmar+One",
    "Six+Caps",
    "Slackey",
    "Smythe",
    "Sniglet:800",
    "Special+Elite",
    "Stardos+Stencil",
    "Sue+Ellen+Francisco",
    "Sunshiney",
    "Swanky+and+Moo+Moo",
    "Syncopate",
    "Tangerine",
    "Tenor+Sans",
    "Terminal+Dosis+Light",
    "The+Girl+Next+Door",
    "Tinos",
    "Ubuntu",
    "Ultra",
    "Unkempt",
    "UnifrakturCook:bold",
    "UnifrakturMaguntia",
    "Varela",
    "Varela Round",
    "Vibur",
    "Vollkorn",
    "VT323",
    "Waiting+for+the+Sunrise",
    "Wallpoet",
    "Walter+Turncoat",
    "Wire+One",
    "Yanone+Kaffeesatz",
    "Yanone+Kaffeesatz:300",
    "Yanone+Kaffeesatz:400",
    "Yanone+Kaffeesatz:700",
    "Yeseva+One",
    "Zeyada"];
    var selectFont = "<select id='fontList'>"
    for(let i=0;i<fontList.length;i++){
        let fontName = fontList[i];
        fontName = fontName.replace(/[\+|:]/g, ' ');
        selectFont+="<option value='"+fontList[i]+"'>"+fontName+"</option>"
    }
    selectFont+='</select>';
    $('#utility').html(selectFont);
});
function lottieUpdateTextValue(text){
    JSONdata.layers[1].t.d.k[0].s.t=text;
    console.log("text iz update",text);
    restartLottie();
}
function lottieUpdateTextColor(hex,alpha) {
    var clr= hex;
    var alpha = alpha;
    console.log("hex iz update",hex,"alpha iz update",alpha);
    let clrarray = [];
    let R = parseInt(clr.substr(1, 2), 16);
    let G = parseInt(clr.substr(3, 2), 16);
    let B = parseInt(clr.substr(5, 2), 16);
    R = R / 255;
    G = G / 255;
    B = B / 255;
    clrarray.push(R, G, B, 1);
    JSONdata.layers[1].t.d.k[0].s.fc= clrarray;
    if(JSONdata.layers[1].ks.o.a==0){
        JSONdata.layers[1].ks.o.k=alpha;
    }
    if(JSONdata.layers[1].ks.o.a==1){
        for(let i =0;i<JSONdata.layers[1].ks.o.k.length;i++){
            if(JSONdata.layers[1].ks.o.k[i].s && JSONdata.layers[1].ks.o.k[i].e){
                if(JSONdata.layers[1].ks.o.k[i].s!=0){
                    JSONdata.layers[1].ks.o.k[i].s[0]=alpha;
                }
                if(JSONdata.layers[1].ks.o.k[i].e!=0){
                    JSONdata.layers[1].ks.o.k[i].e[0]=alpha;
                }
            }
        }
    }

    restartLottie();
}
function updatePosition(){
    let position = $('#text-position li.active').data('position');
        // let parent = document.getElementsByClassName('moveable')[0];
    let parent = $('.moveable');
        switch (position) {
            case 'top-left':
                parent.removeClass(function (index, className) {
                    return (className.match (/\banim-\S+/g) || []).join(' ');
                }).addClass('anim-top-left');
                break;
            case 'top-center':
                parent.removeClass(function (index, className) {
                    return (className.match (/\banim-\S+/g) || []).join(' ');
                }).addClass('anim-top-center');
                break;
            case 'top-right':
                parent.removeClass(function (index, className) {
                    return (className.match (/\banim-\S+/g) || []).join(' ');
                }).addClass('anim-top-right');
                break;
            case 'center-left':
                parent.removeClass(function (index, className) {
                    return (className.match (/\banim-\S+/g) || []).join(' ');
                }).addClass('anim-center-left');
                break;
            case 'center-center':
                parent.removeClass(function (index, className) {
                    return (className.match (/\banim-\S+/g) || []).join(' ');
                }).addClass('anim-center-center');
                break;
            case 'center-right':
                parent.removeClass(function (index, className) {
                    return (className.match (/\banim-\S+/g) || []).join(' ');
                }).addClass('anim-center-right');
                break;
            case 'bottom-left':
                parent.removeClass(function (index, className) {
                    return (className.match (/\banim-\S+/g) || []).join(' ');
                }).addClass('anim-bottom-left');
                break;
            case 'bottom-center':
                parent.removeClass(function (index, className) {
                    return (className.match (/\banim-\S+/g) || []).join(' ');
                }).addClass('anim-bottom-center');
                break;
            case 'bottom-right':
                parent.removeClass(function (index, className) {
                    return (className.match (/\banim-\S+/g) || []).join(' ');
                }).addClass('anim-bottom-right');
                break;
        }
    restartLottie();
    }
$(document).on('click','#text-justify ul li',function () {
   let justification = $(this).data('align');
   switch (justification){
       case 'left':
           JSONdata.layers[1].t.d.k[0].s.j=0;
           break;
       case 'center':
           JSONdata.layers[1].t.d.k[0].s.j=2;
           break;
       case 'right':
           JSONdata.layers[1].t.d.k[0].s.j=1;
           break;
       default:
           JSONdata.layers[1].t.d.k[0].s.j=0;
           break;
   }
    restartLottie();
});
$(document).on('change','#font-size',function () {
   let size = $(this).val();
    JSONdata.layers[1].t.d.k[0].s.s = size;
    let lineHeight = parseInt(size)*1.2;
    console.log(size,typeof size,lineHeight,typeof lineHeight);
    JSONdata.layers[1].t.d.k[0].s.lh = lineHeight;
    restartLottie();
});
function lottieUpdateFont(fontStyle){
    console.log(fontStyle);
    var fontStyle = fontStyle;
    //JSONdata.layers[1].t.d.k[0].s.f=fontStyle;
    //restartLottie();
}
// function updatePosition2(object) {
//     let Py = object.position().top;
//     let Px = object.position().left;
//     let sceneWidth = object.offsetParent().innerWidth();
//     let sceneHeight = object.offsetParent().innerHeight();
//     let compWidth = JSONdata.w;
//     let compHeight = JSONdata.h;
//     let compX = (compWidth/sceneWidth)*Px;
//     let compY = (compHeight/sceneHeight)*Py+30*(compHeight/sceneHeight);
//
//
//     console.log("nove! koordinate")
//     console.log("compX:",compX,"compY:",compY);
//     console.log("")
//
//     if(textToChange==1){
//     JSONdata.layers[5].ks.p.k[0]=compX;
//     JSONdata.layers[5].ks.p.k[1]=compY;
//
//     }
//     if(textToChange==2){
//         JSONdata.layers[7].ks.p.k[0]=compX;
//         JSONdata.layers[7].ks.p.k[1]=compY;
//         console.log()
//     }
//     restartLottie();
// }
// $(document).on('click','.preview-btn p',function () {
//    start();
// });