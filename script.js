var anim;
var JSONdata;
var innerHtml = "";
var parentPosX = [];
var parentPosY = [];
var layerPosX;
var layerPosY;
var layerId;
var selectText = "<select name='selectData' id='selectData'><option value='default' data-layer-id='none'>Choose data to edit</option>";
var bgVideo;

$(document).on('change', '#selectData', function () {
    var $this = $(this);
    layerId = $this.find(':selected').data('layer-id');
    let type = $this.find(':selected').data('layer-type');
    insertData(layerId, type);
});
$.getJSON("/templates/slide---blue(8)/newdata.json", function (data) {
    console.log('json loaded');
    JSONdata = data;
    //insertFields();
    start2();
});
function start() {//this is svg renderer
    //var elem = document.getElementById("lottie");
    var elem = document.getElementsByClassName('control-anim')[0];
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
    console.log("started");
}

function start2() { //this is canvas renderer
    // var elem = document.getElementById("lottie");
    var elem = document.getElementsByClassName('control-anim')[0];
    var kanvas = document.getElementById("animcanvas");
    var ctx = kanvas.getContext("2d");
    var animData = {
        container: elem,
        renderer: "canvas",
        loop: false,
        autoplay: false,
        rendererSettings: {
            context: ctx,
            progressiveLoad: false,
            scaleMode: "noScale",
            preserveAsceptRatio: 'xMidYMid meet',
            clearCanvas: true,
            hideOnTransparent: true,
            className: "classForCanvas"
        },
        animationData: JSONdata
    };
    anim = lottie.loadAnimation(animData);
}
function insertFields() {
    if (JSONdata.layers) {
        for (let i = 0, counter = 1; i < JSONdata.layers.length; i++) {
            let layer = JSONdata.layers[i];
            if (layer.t && layer.st >= 0) {
                selectText += "<option value='" + layer.t.d.k[0].s.t + "' data-layer-type='text' data-layer-id='" + i + "'>Text" + counter + "</option>";
                counter++;
            }
            if (layer.shapes) {
                selectText += "<option value='" + layer.nm + "' data-layer-type='shape' data-layer-id='" + i + "'>" + layer.nm + "</option>";
            }
        }
    }
    selectText += "</select>";
    $('#inputs').html(selectText);
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

function getPosX() {
    if (parentPosX.length) {
        var x = 0;
        for (let i = 0; i < parentPosX.length; i++) {
            x = x + parentPosX[i];
        }
        return x;
    } else return 0;
}
function getPosY() {
    if (parentPosY.length) {
        var y = 0;
        for (let i = 0; i < parentPosY.length; i++) {
            y = y + parentPosY[i];
        }
        return y;
    }
    else return 0;
}
function insertData(layerId, type) {
    if (layerId == 'none') {
        $("#data").html("");
        return false;    
    }
    parentPosX = [];
    parentPosY = [];
    layerPosX = JSONdata.layers[layerId].ks.p.k[0];
    layerPosY = JSONdata.layers[layerId].ks.p.k[1];
    console.log("layerPosX", layerPosX, "layerPosY", layerPosY);
    var anchorPosX = JSONdata.layers[layerId].ks.a.k[0];
    var anchorPosY = JSONdata.layers[layerId].ks.p.k[1];
    console.log("anchorPosX", anchorPosX, "anchorPosY", anchorPosY);
    if (JSONdata.layers[layerId].parent) {
        let parentid = JSONdata.layers[layerId].parent;
        for (let j = 0; j < JSONdata.layers.length; j++) {
            if (JSONdata.layers[j].ind == parentid) {
                parentPosX.push(JSONdata.layers[j].ks.p.k[0]);
                parentPosY.push(JSONdata.layers[j].ks.p.k[1]);
            }
        }
    }
    switch (type) {
        case 'text':

            innerHtml = "";
            if (data === 'default') {
                $('#data').html(innerHtml);
                break;
            }


            innerHtml += "<input type='text' id='textLayer' class='textLayer' value='" + JSONdata.layers[layerId].t.d.k[0].s.t + "'/>" + "<input type='color' class='inputsColorText' id='textLayerColor' value='" + getColor(JSONdata.layers[layerId].t.d.k[0].s.fc) + "'/> Position: <table id='dataPosition' class='dataPosition'><tr><td data-position='top-left'></td><td data-position='top-center'></td><td data-position='top-right'></td></tr><tr><td data-position='center-left'></td><td data-position='center-center'></td><td data-position='center-right'></td></tr><tr><td data-position='bottom-left'></td><td data-position='bottom-center'></td><td data-position='bottom-right'></td></tr></table>" + " Text align: <table id='textAlign' class='textAlign'><tr><td data-align='3'>L</td><td data-align='2'>C</td><td data-align='1'>R</td></tr></table>" + " Text opacity:<input type='range' value='" + JSONdata.layers[layerId].ks.o.k + "' min='0' max='100' class='textOpacity' id='textOpacity'> " + " Text size: <input type='number' value='" + JSONdata.layers[layerId].t.d.k[0].s.s + "' min='5' max='150' id='textSize'>" + " Rotate text: <input type='number' value='" + JSONdata.layers[layerId].ks.r.k + "' min='0' max='360' id='textRotation' class='textRotation'>" + " <button type='button' id='btnUpdateTextData'>Update Data</button>";
            $('#data').html(innerHtml);

            break;

        case 'shape':

            innerHtml = "";
            let layer = JSONdata.layers[layerId];
            if (layer.shapes) {
                for (let j = 0; j < layer.shapes.length; j++) {
                    let shape = layer.shapes[j];
                    if (shape.it) {
                        for (let k = 0; k < shape.it.length; k++) {
                            let prop = shape.it[k];
                            if (['fl', 'st'].includes(prop.ty)) {
                                if (typeof prop.c.k[0] == 'number') {
                                    innerHtml += prop.nm + " : <input type='color' class ='" + prop.ty + "' value='" + getColor(prop.c.k) + "' data-path='" + j + ";" + k + "'/>";
                                }
                            }
                        }
                    }
                }
            }
            innerHtml += "Position: <table id='dataPosition' class='dataPosition'><tr><td data-position='top-left'></td><td data-position='top-center'></td><td data-position='top-right'></td></tr><tr><td data-position='center-left'></td><td data-position='center-center'></td><td data-position='center-right'></td></tr><tr><td data-position='bottom-left'></td><td data-position='bottom-center'></td><td data-position='bottom-right'></td></tr></table>";

            innerHtml += "<button type='button' id='btnUpdateShapeData'>Update Data</button>";
            $('#data').html(innerHtml);

            break;

        case 'photo':

            break;
        default:
            break;
    }
}
$(document).on('click', '#btnUpdateTextData', function () {
    let textObject = document.getElementById('textLayer');
    let textValue = textObject.value;
    if (textValue == "") textValue = "Default text";
    let color = document.getElementById('textLayerColor').value;
    let clrarray = [];
    let R = parseInt(color.substr(1, 2), 16);
    let G = parseInt(color.substr(3, 2), 16);
    let B = parseInt(color.substr(5, 2), 16);
    R = R / 255;
    G = G / 255;
    B = B / 255;
    clrarray.push(R, G, B, 1);
    var layerPosX; //from 0 to 1920
    var layerPosY; //from 0 to 1080

    let position = $('#dataPosition tr td.active').data('position');
    if (position) {
        switch (position) {
            case 'top-left':
                // layerPosX = 360;
                // layerPosY = 240;
                layerPosX = 120;
                layerPosY = 120;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'top-center':
                // layerPosX = 960;
                // layerPosY = 240;
                layerPosX = 670;
                layerPosY = 120;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'top-right':
                // layerPosX = 1560;
                // layerPosY = 240;
                layerPosX = 1220;
                layerPosY = 120;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'center-left':
                // layerPosX = 360;
                // layerPosY = 540;
                layerPosX = 120;
                layerPosY = 480;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'center-center':
                // layerPosX = 960;
                // layerPosY = 540;
                layerPosX = 670;
                layerPosY = 480;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'center-right':
                // layerPosX = 1560;
                // layerPosY = 540;
                layerPosX = 1220;
                layerPosY = 480;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'bottom-left':
                // layerPosX = 360;
                // layerPosY = 840;
                layerPosX = 120;
                layerPosY = 840;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'bottom-center':
                // layerPosX = 960;
                // layerPosY = 840;
                layerPosX = 670;
                layerPosY = 840;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'bottom-right':
                // layerPosX = 1560;
                // layerPosY = 840;
                layerPosX = 1220;
                layerPosY = 840;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
        }
    }
    let textAlignment = $('#textAlign tr td.active').data('align');
    if (!textAlignment) {
        textAlignment = 3;
    }
    let textOpacity = document.getElementById('textOpacity').value;
    let textSize = document.getElementById('textSize').value;
    if (textSize == "") textSize = 50;
    let textRotation = document.getElementById('textRotation').value;
    if (textRotation == "") textRotation = 0;
    JSONdata.layers[layerId].t.d.k[0].s.t = textValue;
    JSONdata.layers[layerId].ks.o.k = textOpacity;
    JSONdata.layers[layerId].t.d.k[0].s.s = textSize;
    JSONdata.layers[layerId].ks.r.k = textRotation;
    JSONdata.layers[layerId].t.d.k[0].s.j = textAlignment;
    JSONdata.layers[layerId].t.d.k[0].s.fc = clrarray;
    restart();
});
$(document).on('click', '#btnUpdateShapeData', function () {
    let stColor = document.getElementsByClassName('st');
    let flColor = document.getElementsByClassName('fl');
    if (stColor) {
        for (let i = 0; i < stColor.length; i++) {
            let color = stColor[i].value;
            let clrarray = [];
            let R = parseInt(color.substr(1, 2), 16);
            let G = parseInt(color.substr(3, 2), 16);
            let B = parseInt(color.substr(5, 2), 16);
            R = R / 255;
            G = G / 255;
            B = B / 255;
            clrarray.push(R, G, B, 1);
            let path = stColor[i].dataset.path.split(";");
            console.log("path1", path[0], "path2", path[1]);
            JSONdata.layers[layerId].shapes[path[0]].it[path[1]].c.k = clrarray;
        }
    }
    if (flColor) {
        for (let i = 0; i < flColor.length; i++) {
            let color = flColor[i].value;
            let clrarray = [];
            let R = parseInt(color.substr(1, 2), 16);
            let G = parseInt(color.substr(3, 2), 16);
            let B = parseInt(color.substr(5, 2), 16);
            R = R / 255;
            G = G / 255;
            B = B / 255;
            clrarray.push(R, G, B, 1);
            let path = flColor[i].dataset.path.split(";");
            console.log("path1", path[0], "path2", path[1]);
            JSONdata.layers[layerId].shapes[path[0]].it[path[1]].c.k = clrarray;
        }
    }
    let position = $('#dataPosition tr td.active').data('position');
    if (position) {
        // JSONdata.layers[layerId].ks.a.k[0]=0;
        // JSONdata.layers[layerId].ks.a.k[1]=0;
        switch (position) {
            case 'top-left':
                // layerPosX = 360;
                // layerPosY = 240;
                layerPosX = 120;
                layerPosY = 120;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'top-center':
                // layerPosX = 960;
                // layerPosY = 240;
                layerPosX = 670;
                layerPosY = 120;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'top-right':
                // layerPosX = 1560;
                // layerPosY = 240;
                layerPosX = 1220;
                layerPosY = 120;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'center-left':
                // layerPosX = 360;
                // layerPosY = 540;
                layerPosX = 120;
                layerPosY = 480;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'center-center':
                // layerPosX = 960;
                // layerPosY = 540;
                layerPosX = 670;
                layerPosY = 480;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'center-right':
                // layerPosX = 1560;
                // layerPosY = 540;
                layerPosX = 1220;
                layerPosY = 480;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'bottom-left':
                // layerPosX = 360;
                // layerPosY = 840;
                layerPosX = 120;
                layerPosY = 840;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'bottom-center':
                // layerPosX = 960;
                // layerPosY = 840;
                layerPosX = 670;
                layerPosY = 840;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
            case 'bottom-right':
                // layerPosX = 1560;
                // layerPosY = 840;
                layerPosX = 1220;
                layerPosY = 840;
                JSONdata.layers[layerId].ks.p.k[0] = layerPosX - getPosX();
                JSONdata.layers[layerId].ks.p.k[1] = layerPosY - getPosY();
                break;
        }
    }
    restart();
});
$(document).on('click', '.dataPosition tr td', function () {
    var $this = $(this);
    $('.dataPosition tr td.active').removeClass('active');
    $this.addClass('active');
});
$(document).on('click', '#textAlign tr td', function () {
    var $this = $(this);
    $('#textAlign tr td.active').removeClass('active');
    $this.addClass('active');
});
function restartLottie() {
    anim.destroy();
    bgVideo.currentTime = 0;
    bgVideo.play();
    start2();
    anim.play();
}
$(document).ready(function () {
    bgVideo = document.getElementById('bgVideo');
    console.log(bgVideo);
});

function updateLottie(){
    if(InsertedTempladeData[1][1].inputs["text1.1"]){
        JSONdata.layers[6].t.d.k[0].s.t=InsertedTempladeData[1][1].inputs["text1.1"].value;
        let clr = InsertedTempladeData[1][1].inputs["text1.1"].color;
        let clrarray = [];
        let R = parseInt(clr.substr(1, 2), 16);
        let G = parseInt(clr.substr(3, 2), 16);
        let B = parseInt(clr.substr(5, 2), 16);
        R = R / 255;
        G = G / 255;
        B = B / 255;
        clrarray.push(R, G, B, 1);
        JSONdata.layers[6].t.d.k[0].s.fc=clrarray;

    }
    // else
    //     {
    //     JSONdata.assets[1].layers[6].t.d.k[0].s.t = "Default text";
    // }

    if(InsertedTempladeData[1][1].inputs["text1.2"]){
        JSONdata.layers[5].t.d.k[0].s.t = InsertedTempladeData[1][1].inputs["text1.2"].value;
        let clr = InsertedTempladeData[1][1].inputs["text1.2"].color;
        let clrarray = [];
        let R = parseInt(clr.substr(1, 2), 16);
        let G = parseInt(clr.substr(3, 2), 16);
        let B = parseInt(clr.substr(5, 2), 16);
        R = R / 255;
        G = G / 255;
        B = B / 255;
        clrarray.push(R, G, B, 1);
        JSONdata.layers[5].t.d.k[0].s.fc=clrarray;
    }
    // else{
    //     JSONdata.assets[1].layers[6].t.d.k[0].s.t = "Default text";
    // }
    restartLottie();
}