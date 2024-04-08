var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_adm_prov__1 = new ol.format.GeoJSON();
var features_adm_prov__1 = format_adm_prov__1.readFeatures(json_adm_prov__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_prov__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_prov__1.addFeatures(features_adm_prov__1);
var lyr_adm_prov__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_prov__1, 
                style: style_adm_prov__1,
                popuplayertitle: "adm_prov_",
                interactive: true,
    title: 'adm_prov_<br />\
    <img src="styles/legend/adm_prov__1_0.png" /> DIBAWAH IR RATA-RATA NASIONAL<br />\
    <img src="styles/legend/adm_prov__1_1.png" /> DIATAS IR RATA-RATA NASIONAL<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_adm_prov__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_adm_prov__1];
lyr_adm_prov__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'IR DBD': 'IR DBD', });
lyr_adm_prov__1.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINSI': 'TextEdit', 'IR DBD': 'TextEdit', });
lyr_adm_prov__1.set('fieldLabels', {'OBJECTID': 'no label', 'PROVINSI': 'no label', 'IR DBD': 'no label', });
lyr_adm_prov__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});