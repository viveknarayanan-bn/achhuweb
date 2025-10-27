var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Aranmula1AranmulaAnganawadi01shp_2 = new ol.format.GeoJSON();
var features_Aranmula1AranmulaAnganawadi01shp_2 = format_Aranmula1AranmulaAnganawadi01shp_2.readFeatures(json_Aranmula1AranmulaAnganawadi01shp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aranmula1AranmulaAnganawadi01shp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aranmula1AranmulaAnganawadi01shp_2.addFeatures(features_Aranmula1AranmulaAnganawadi01shp_2);
var lyr_Aranmula1AranmulaAnganawadi01shp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aranmula1AranmulaAnganawadi01shp_2, 
                style: style_Aranmula1AranmulaAnganawadi01shp_2,
                popuplayertitle: 'Aranmula (1) — Aranmula/Anganawadi01.shp',
                interactive: true,
                title: '<img src="styles/legend/Aranmula1AranmulaAnganawadi01shp_2.png" /> Aranmula (1) — Aranmula/Anganawadi01.shp'
            });
var format_Aranmula1AranmulaLocationshp_3 = new ol.format.GeoJSON();
var features_Aranmula1AranmulaLocationshp_3 = format_Aranmula1AranmulaLocationshp_3.readFeatures(json_Aranmula1AranmulaLocationshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aranmula1AranmulaLocationshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aranmula1AranmulaLocationshp_3.addFeatures(features_Aranmula1AranmulaLocationshp_3);
var lyr_Aranmula1AranmulaLocationshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aranmula1AranmulaLocationshp_3, 
                style: style_Aranmula1AranmulaLocationshp_3,
                popuplayertitle: 'Aranmula (1) — Aranmula/Location.shp',
                interactive: true,
                title: '<img src="styles/legend/Aranmula1AranmulaLocationshp_3.png" /> Aranmula (1) — Aranmula/Location.shp'
            });
var format_Aranmula1AranmulaRationShopshp_4 = new ol.format.GeoJSON();
var features_Aranmula1AranmulaRationShopshp_4 = format_Aranmula1AranmulaRationShopshp_4.readFeatures(json_Aranmula1AranmulaRationShopshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aranmula1AranmulaRationShopshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aranmula1AranmulaRationShopshp_4.addFeatures(features_Aranmula1AranmulaRationShopshp_4);
var lyr_Aranmula1AranmulaRationShopshp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aranmula1AranmulaRationShopshp_4, 
                style: style_Aranmula1AranmulaRationShopshp_4,
                popuplayertitle: 'Aranmula (1) — Aranmula/RationShop.shp',
                interactive: true,
                title: '<img src="styles/legend/Aranmula1AranmulaRationShopshp_4.png" /> Aranmula (1) — Aranmula/RationShop.shp'
            });
var format_Aranmula1AranmulaRoad01shp_5 = new ol.format.GeoJSON();
var features_Aranmula1AranmulaRoad01shp_5 = format_Aranmula1AranmulaRoad01shp_5.readFeatures(json_Aranmula1AranmulaRoad01shp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aranmula1AranmulaRoad01shp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aranmula1AranmulaRoad01shp_5.addFeatures(features_Aranmula1AranmulaRoad01shp_5);
var lyr_Aranmula1AranmulaRoad01shp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aranmula1AranmulaRoad01shp_5, 
                style: style_Aranmula1AranmulaRoad01shp_5,
                popuplayertitle: 'Aranmula (1) — Aranmula/Road01.shp',
                interactive: true,
                title: '<img src="styles/legend/Aranmula1AranmulaRoad01shp_5.png" /> Aranmula (1) — Aranmula/Road01.shp'
            });
var format_Aranmula1AranmulaTransformer1shp_6 = new ol.format.GeoJSON();
var features_Aranmula1AranmulaTransformer1shp_6 = format_Aranmula1AranmulaTransformer1shp_6.readFeatures(json_Aranmula1AranmulaTransformer1shp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aranmula1AranmulaTransformer1shp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aranmula1AranmulaTransformer1shp_6.addFeatures(features_Aranmula1AranmulaTransformer1shp_6);
var lyr_Aranmula1AranmulaTransformer1shp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aranmula1AranmulaTransformer1shp_6, 
                style: style_Aranmula1AranmulaTransformer1shp_6,
                popuplayertitle: 'Aranmula (1) — Aranmula/Transformer1.shp',
                interactive: true,
                title: '<img src="styles/legend/Aranmula1AranmulaTransformer1shp_6.png" /> Aranmula (1) — Aranmula/Transformer1.shp'
            });
var format_Aranmula1AranmulaWardBoundaryshp_7 = new ol.format.GeoJSON();
var features_Aranmula1AranmulaWardBoundaryshp_7 = format_Aranmula1AranmulaWardBoundaryshp_7.readFeatures(json_Aranmula1AranmulaWardBoundaryshp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aranmula1AranmulaWardBoundaryshp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aranmula1AranmulaWardBoundaryshp_7.addFeatures(features_Aranmula1AranmulaWardBoundaryshp_7);
var lyr_Aranmula1AranmulaWardBoundaryshp_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aranmula1AranmulaWardBoundaryshp_7, 
                style: style_Aranmula1AranmulaWardBoundaryshp_7,
                popuplayertitle: 'Aranmula (1) — Aranmula/WardBoundary.shp',
                interactive: true,
    title: 'Aranmula (1) — Aranmula/WardBoundary.shp<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_0.png" /> ARANMULA<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_1.png" /> ARANMULA WEST<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_2.png" /> ARATTUPUZHA<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_3.png" /> EDASSERIMALA<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_4.png" /> EDAYARANMULA NORTH<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_5.png" /> ERUMAKKADU<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_6.png" /> GURUKKANKUNNU<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_7.png" /> KALARIKKODU<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_8.png" /> KIDANGANNUR EAST<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_9.png" /> KIDANGANNUR WEST<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_10.png" /> KOTTA EAST<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_11.png" /> KOTTA WEST<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_12.png" /> KOTTAKAKAM<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_13.png" /> KURICHIMUTTAM NORTH<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_14.png" /> KURICHIMUTTAM SOUTH<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_15.png" /> MALAKKARA<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_16.png" /> NALKALIKKAL<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_17.png" /> NEERVILAKAM<br />\
    <img src="styles/legend/Aranmula1AranmulaWardBoundaryshp_7_18.png" /> VALLANA<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Aranmula1AranmulaAnganawadi01shp_2.setVisible(true);lyr_Aranmula1AranmulaLocationshp_3.setVisible(true);lyr_Aranmula1AranmulaRationShopshp_4.setVisible(true);lyr_Aranmula1AranmulaRoad01shp_5.setVisible(true);lyr_Aranmula1AranmulaTransformer1shp_6.setVisible(true);lyr_Aranmula1AranmulaWardBoundaryshp_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Aranmula1AranmulaAnganawadi01shp_2,lyr_Aranmula1AranmulaLocationshp_3,lyr_Aranmula1AranmulaRationShopshp_4,lyr_Aranmula1AranmulaRoad01shp_5,lyr_Aranmula1AranmulaTransformer1shp_6,lyr_Aranmula1AranmulaWardBoundaryshp_7];
lyr_Aranmula1AranmulaAnganawadi01shp_2.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_Aranmula1AranmulaLocationshp_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_Aranmula1AranmulaRationShopshp_4.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_Aranmula1AranmulaRoad01shp_5.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_Aranmula1AranmulaTransformer1shp_6.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_Aranmula1AranmulaWardBoundaryshp_7.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_Aranmula1AranmulaAnganawadi01shp_2.set('fieldImages', {'id': '', 'AssetName': '', 'Location': '', 'Date': '', 'LULC': '', 'Remarks': '', 'Photo': '', 'Surveyor': '', 'layer': '', 'path': '', });
lyr_Aranmula1AranmulaLocationshp_3.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'address': 'TextEdit', 'is_in': 'TextEdit', 'place': 'TextEdit', 'man_made': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Aranmula1AranmulaRationShopshp_4.set('fieldImages', {'id': '', 'AssetName': '', 'Location': '', 'Date': '', 'LULC': '', 'Remarks': '', 'Photo': '', 'Surveyor': '', 'layer': '', 'path': '', });
lyr_Aranmula1AranmulaRoad01shp_5.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_Aranmula1AranmulaTransformer1shp_6.set('fieldImages', {'id': '', 'AssetName': '', 'Location': '', 'Date': '', 'LULC': '', 'Remarks': '', 'Photo': '', 'Surveyor': '', 'layer': '', 'path': '', });
lyr_Aranmula1AranmulaWardBoundaryshp_7.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_Aranmula1AranmulaAnganawadi01shp_2.set('fieldLabels', {'id': 'no label', 'AssetName': 'no label', 'Location': 'inline label - visible with data', 'Date': 'no label', 'LULC': 'no label', 'Remarks': 'no label', 'Photo': 'no label', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Aranmula1AranmulaLocationshp_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_Aranmula1AranmulaRationShopshp_4.set('fieldLabels', {'id': 'no label', 'AssetName': 'no label', 'Location': 'inline label - always visible', 'Date': 'no label', 'LULC': 'no label', 'Remarks': 'no label', 'Photo': 'no label', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Aranmula1AranmulaRoad01shp_5.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_Aranmula1AranmulaTransformer1shp_6.set('fieldLabels', {'id': 'no label', 'AssetName': 'no label', 'Location': 'inline label - visible with data', 'Date': 'no label', 'LULC': 'no label', 'Remarks': 'no label', 'Photo': 'no label', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Aranmula1AranmulaWardBoundaryshp_7.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - visible with data', 'LSGD': 'inline label - always visible', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - visible with data', 'Lsgd_Type': 'inline label - visible with data', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_Aranmula1AranmulaWardBoundaryshp_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});