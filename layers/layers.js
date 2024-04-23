var wms_layers = [];


        var lyr_OSMHumanitarian_0 = new ol.layer.Tile({
            'title': 'OSM Humanitarian',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIGraylight_2 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_PotentialsitesforbrickfactorybyPROECCO_3 = new ol.format.GeoJSON();
var features_PotentialsitesforbrickfactorybyPROECCO_3 = format_PotentialsitesforbrickfactorybyPROECCO_3.readFeatures(json_PotentialsitesforbrickfactorybyPROECCO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotentialsitesforbrickfactorybyPROECCO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotentialsitesforbrickfactorybyPROECCO_3.addFeatures(features_PotentialsitesforbrickfactorybyPROECCO_3);
var lyr_PotentialsitesforbrickfactorybyPROECCO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotentialsitesforbrickfactorybyPROECCO_3, 
                style: style_PotentialsitesforbrickfactorybyPROECCO_3,
                popuplayertitle: "Potential sites for brick factory by PROECCO",
                interactive: true,
                title: '<img src="styles/legend/PotentialsitesforbrickfactorybyPROECCO_3.png" /> Potential sites for brick factory by PROECCO'
            });
var format_ClayvalleysconfirmedbyPROECCO_4 = new ol.format.GeoJSON();
var features_ClayvalleysconfirmedbyPROECCO_4 = format_ClayvalleysconfirmedbyPROECCO_4.readFeatures(json_ClayvalleysconfirmedbyPROECCO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClayvalleysconfirmedbyPROECCO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClayvalleysconfirmedbyPROECCO_4.addFeatures(features_ClayvalleysconfirmedbyPROECCO_4);
var lyr_ClayvalleysconfirmedbyPROECCO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClayvalleysconfirmedbyPROECCO_4, 
                style: style_ClayvalleysconfirmedbyPROECCO_4,
                popuplayertitle: "Clay valleys confirmed by PROECCO",
                interactive: true,
                title: '<img src="styles/legend/ClayvalleysconfirmedbyPROECCO_4.png" /> Clay valleys confirmed by PROECCO'
            });
var format_Fuelsources_5 = new ol.format.GeoJSON();
var features_Fuelsources_5 = format_Fuelsources_5.readFeatures(json_Fuelsources_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fuelsources_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fuelsources_5.addFeatures(features_Fuelsources_5);
var lyr_Fuelsources_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fuelsources_5, 
                style: style_Fuelsources_5,
                popuplayertitle: "Fuel sources",
                interactive: true,
    title: 'Fuel sources<br />\
    <img src="styles/legend/Fuelsources_5_0.png" /> Coffee husk<br />\
    <img src="styles/legend/Fuelsources_5_1.png" /> Rice husk<br />\
    <img src="styles/legend/Fuelsources_5_2.png" /> Sawdust<br />\
    <img src="styles/legend/Fuelsources_5_3.png" /> Woodchip<br />\
    <img src="styles/legend/Fuelsources_5_4.png" /> Woodchip and Sawdust<br />'
        });
var format_DistrictsWGS84_6 = new ol.format.GeoJSON();
var features_DistrictsWGS84_6 = format_DistrictsWGS84_6.readFeatures(json_DistrictsWGS84_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictsWGS84_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictsWGS84_6.addFeatures(features_DistrictsWGS84_6);
var lyr_DistrictsWGS84_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictsWGS84_6, 
                style: style_DistrictsWGS84_6,
                popuplayertitle: "Districts WGS84",
                interactive: true,
                title: '<img src="styles/legend/DistrictsWGS84_6.png" /> Districts WGS84'
            });
var format_Modernbrickyards_7 = new ol.format.GeoJSON();
var features_Modernbrickyards_7 = format_Modernbrickyards_7.readFeatures(json_Modernbrickyards_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Modernbrickyards_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Modernbrickyards_7.addFeatures(features_Modernbrickyards_7);
var lyr_Modernbrickyards_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Modernbrickyards_7, 
                style: style_Modernbrickyards_7,
                popuplayertitle: "Modern brickyards",
                interactive: true,
    title: 'Modern brickyards<br />\
    <img src="styles/legend/Modernbrickyards_7_0.png" /> improved kiln<br />\
    <img src="styles/legend/Modernbrickyards_7_1.png" /> zigzag<br />'
        });

lyr_OSMHumanitarian_0.setVisible(true);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_ESRIGraylight_2.setVisible(true);lyr_PotentialsitesforbrickfactorybyPROECCO_3.setVisible(true);lyr_ClayvalleysconfirmedbyPROECCO_4.setVisible(true);lyr_Fuelsources_5.setVisible(false);lyr_DistrictsWGS84_6.setVisible(true);lyr_Modernbrickyards_7.setVisible(true);
var layersList = [lyr_OSMHumanitarian_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,lyr_ESRIGraylight_2,lyr_PotentialsitesforbrickfactorybyPROECCO_3,lyr_ClayvalleysconfirmedbyPROECCO_4,lyr_Fuelsources_5,lyr_DistrictsWGS84_6,lyr_Modernbrickyards_7];
lyr_PotentialsitesforbrickfactorybyPROECCO_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Area (sqm)', });
lyr_ClayvalleysconfirmedbyPROECCO_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Clay_Volume_tons': 'Clay volume in tons', 'label_volume': 'label_volume', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Fuelsources_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Cluster': 'Cluster', 'Name': 'Name', 'District': 'District', 'Sector': 'Sector', 'Phone': 'Phone', 'Legal_Status': 'Legal Status', 'Fuel_types': 'Fuel types', 'Fuel_clients': 'Fuel clients', 'Date_': 'Date', });
lyr_DistrictsWGS84_6.set('fieldAliases', {'NOMDISTR': 'NOMDISTR', 'PROV': 'PROV', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Modernbrickyards_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Brickyard Name', 'Country': 'Country name', 'brickyard_id': 'Brickyard Id', 'distr_comm': 'District name', 'Province': 'Province name', 'Production_Status': 'Production status', 'Product1': 'Product 1', 'URL1': 'URL1', 'Active_Modern_brick_production': 'Active modern brick production', 'phone': 'Phone number', 'kiln_type': 'Type of kiln', });
lyr_PotentialsitesforbrickfactorybyPROECCO_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ClayvalleysconfirmedbyPROECCO_4.set('fieldImages', {'OBJECTID': 'Hidden', 'Clay_Volume_tons': 'Range', 'label_volume': 'Hidden', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Fuelsources_5.set('fieldImages', {'OBJECTID': 'Hidden', 'Cluster': 'Hidden', 'Name': 'TextEdit', 'District': 'TextEdit', 'Sector': 'TextEdit', 'Phone': 'TextEdit', 'Legal_Status': 'TextEdit', 'Fuel_types': 'TextEdit', 'Fuel_clients': 'Hidden', 'Date_': 'Hidden', });
lyr_DistrictsWGS84_6.set('fieldImages', {'NOMDISTR': 'TextEdit', 'PROV': 'TextEdit', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_Modernbrickyards_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Country': 'Hidden', 'brickyard_id': 'Hidden', 'distr_comm': 'TextEdit', 'Province': 'TextEdit', 'Production_Status': 'TextEdit', 'Product1': 'Hidden', 'URL1': 'Hidden', 'Active_Modern_brick_production': 'TextEdit', 'phone': 'TextEdit', 'kiln_type': 'TextEdit', });
lyr_PotentialsitesforbrickfactorybyPROECCO_3.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'inline label - always visible', });
lyr_ClayvalleysconfirmedbyPROECCO_4.set('fieldLabels', {'Clay_Volume_tons': 'inline label - always visible', });
lyr_Fuelsources_5.set('fieldLabels', {'Name': 'inline label - always visible', 'District': 'inline label - always visible', 'Sector': 'inline label - always visible', 'Phone': 'inline label - always visible', 'Legal_Status': 'hidden field', 'Fuel_types': 'inline label - always visible', });
lyr_DistrictsWGS84_6.set('fieldLabels', {'NOMDISTR': 'no label', 'PROV': 'no label', });
lyr_Modernbrickyards_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'distr_comm': 'inline label - always visible', 'Province': 'inline label - always visible', 'Production_Status': 'inline label - always visible', 'Active_Modern_brick_production': 'inline label - always visible', 'phone': 'inline label - always visible', 'kiln_type': 'hidden field', });
lyr_Modernbrickyards_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});