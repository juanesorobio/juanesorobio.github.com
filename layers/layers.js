var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_comunas_wgs84_0 = new ol.format.GeoJSON();
var features_comunas_wgs84_0 = format_comunas_wgs84_0.readFeatures(json_comunas_wgs84_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunas_wgs84_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_comunas_wgs84_0.addFeatures(features_comunas_wgs84_0);var lyr_comunas_wgs84_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comunas_wgs84_0, 
                style: style_comunas_wgs84_0,
    title: 'comunas_wgs84<br />\
    <img src="styles/legend/comunas_wgs84_0_0.png" /> 1<br />\
    <img src="styles/legend/comunas_wgs84_0_1.png" /> 2<br />\
    <img src="styles/legend/comunas_wgs84_0_2.png" /> 3<br />\
    <img src="styles/legend/comunas_wgs84_0_3.png" /> 4<br />\
    <img src="styles/legend/comunas_wgs84_0_4.png" /> 5<br />\
    <img src="styles/legend/comunas_wgs84_0_5.png" /> 6<br />\
    <img src="styles/legend/comunas_wgs84_0_6.png" /> 7<br />\
    <img src="styles/legend/comunas_wgs84_0_7.png" /> 8<br />\
    <img src="styles/legend/comunas_wgs84_0_8.png" /> 9<br />\
    <img src="styles/legend/comunas_wgs84_0_9.png" /> 10<br />\
    <img src="styles/legend/comunas_wgs84_0_10.png" /> 11<br />\
    <img src="styles/legend/comunas_wgs84_0_11.png" /> 12<br />\
    <img src="styles/legend/comunas_wgs84_0_12.png" /> 13<br />\
    <img src="styles/legend/comunas_wgs84_0_13.png" /> 14<br />\
    <img src="styles/legend/comunas_wgs84_0_14.png" /> 15<br />\
    <img src="styles/legend/comunas_wgs84_0_15.png" /> 16<br />\
    <img src="styles/legend/comunas_wgs84_0_16.png" /> 17<br />\
    <img src="styles/legend/comunas_wgs84_0_17.png" /> 18<br />\
    <img src="styles/legend/comunas_wgs84_0_18.png" /> 19<br />\
    <img src="styles/legend/comunas_wgs84_0_19.png" /> 20<br />\
    <img src="styles/legend/comunas_wgs84_0_20.png" /> 21<br />\
    <img src="styles/legend/comunas_wgs84_0_21.png" /> 22<br />\
    <img src="styles/legend/comunas_wgs84_0_22.png" /> <br />'
        });

lyr_comunas_wgs84_0.setVisible(true);
var layersList = [baseLayer,lyr_comunas_wgs84_0];
lyr_comunas_wgs84_0.set('fieldAliases', {'comuna': 'comuna', 'nombre': 'nombre', 'zona_recol': 'zona_recol', 'area': 'area', 'perimetro': 'perimetro', });
lyr_comunas_wgs84_0.set('fieldImages', {'comuna': 'TextEdit', 'nombre': 'TextEdit', 'zona_recol': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_comunas_wgs84_0.set('fieldLabels', {'comuna': 'inline label', 'nombre': 'no label', 'zona_recol': 'no label', 'area': 'no label', 'perimetro': 'no label', });
lyr_comunas_wgs84_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});