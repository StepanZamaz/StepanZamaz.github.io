var center = SMap.Coords.fromWGS84(16.5983228, 50.0782592);
var map = new SMap(JAK.gel("map"), center, 12);
map.addDefaultLayer(SMap.DEF_BASE).enable();
map.addDefaultControls();

var layer = new SMap.Layer.Marker();
map.addLayer(layer);
layer.enable();

var studene = new SMap.Card();
studene.getHeader().innerHTML = "<strong>Studenecké skály</strong>";
studene.getBody().innerHTML = "1. Pejrova skála <br>2. Meziskalí <br>3. Titanic <br>4. Dívčí skála <br>5. Vyhlídka <br>6. Slunečná <br>7. Skála nad ohništěm <br>8. Skála u buku";

var mladkov = new SMap.Card();
mladkov.getHeader().innerHTML = "<strong>Mladkov</strong>";
mladkov.getBody().innerHTML = "1. Mariánská skála <br>2. Prasečí očka <br>3. Ementálové";

var zemskaBrana = new SMap.Card();
zemskaBrana.getHeader().innerHTML = "<strong>Zemská brána</strong>";
zemskaBrana.getBody().innerHTML = "1. Stěna nad mostem <br>2. Strážce <br>3. Říční vyhlídka <br>4. Královská vyhlídka <br>5. Bleskový kámen <br>6. Ledřičkova skála";

var studenePosition = SMap.Coords.fromWGS84(16.5983228, 50.0782592);
var mladkovPosition = SMap.Coords.fromWGS84(16.6380194, 50.0969692);
var zemskaBranaPosition = SMap.Coords.fromWGS84(16.5784558, 50.1416767);

var optionsStudene = { 
    title: "Studenecké skály"
};
var optionsMladkov = { 
    title: "Mariánská skála"
};
var optionsZemskaBrana = { 
    title: "Zemská brána"
};

var marker1 = new SMap.Marker(studenePosition, "marker1", optionsStudene);
marker1.decorate(SMap.Marker.Feature.Card, studene);
layer.addMarker(marker1);

var marker2 = new SMap.Marker(mladkovPosition, "marker2", optionsMladkov);
marker2.decorate(SMap.Marker.Feature.Card, mladkov);
layer.addMarker(marker2);

var marker3 = new SMap.Marker(zemskaBranaPosition, "marker3", optionsZemskaBrana);
marker3.decorate(SMap.Marker.Feature.Card, zemskaBrana)
layer.addMarker(marker3);