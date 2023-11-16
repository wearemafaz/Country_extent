var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Diff_Gee_polyIsl_50K_1 = new ol.format.GeoJSON();
var features_Diff_Gee_polyIsl_50K_1 = format_Diff_Gee_polyIsl_50K_1.readFeatures(json_Diff_Gee_polyIsl_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diff_Gee_polyIsl_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diff_Gee_polyIsl_50K_1.addFeatures(features_Diff_Gee_polyIsl_50K_1);
var lyr_Diff_Gee_polyIsl_50K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diff_Gee_polyIsl_50K_1, 
                style: style_Diff_Gee_polyIsl_50K_1,
                interactive: true,
                title: '<img src="styles/legend/Diff_Gee_polyIsl_50K_1.png" /> Diff_Gee_poly&Isl_50K'
            });
var format_Island_dis_50k_2 = new ol.format.GeoJSON();
var features_Island_dis_50k_2 = format_Island_dis_50k_2.readFeatures(json_Island_dis_50k_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Island_dis_50k_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Island_dis_50k_2.addFeatures(features_Island_dis_50k_2);
var lyr_Island_dis_50k_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Island_dis_50k_2, 
                style: style_Island_dis_50k_2,
                interactive: true,
                title: '<img src="styles/legend/Island_dis_50k_2.png" /> Island_dis_50k'
            });
var format_Bay_area_50K_3 = new ol.format.GeoJSON();
var features_Bay_area_50K_3 = format_Bay_area_50K_3.readFeatures(json_Bay_area_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bay_area_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bay_area_50K_3.addFeatures(features_Bay_area_50K_3);
var lyr_Bay_area_50K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bay_area_50K_3, 
                style: style_Bay_area_50K_3,
                interactive: true,
                title: '<img src="styles/legend/Bay_area_50K_3.png" /> Bay_area_50K'
            });
var format_Lagoon_area_50K_4 = new ol.format.GeoJSON();
var features_Lagoon_area_50K_4 = format_Lagoon_area_50K_4.readFeatures(json_Lagoon_area_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lagoon_area_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagoon_area_50K_4.addFeatures(features_Lagoon_area_50K_4);
var lyr_Lagoon_area_50K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lagoon_area_50K_4, 
                style: style_Lagoon_area_50K_4,
                interactive: true,
                title: '<img src="styles/legend/Lagoon_area_50K_4.png" /> Lagoon_area_50K'
            });
var format_Country_line_GEE_5 = new ol.format.GeoJSON();
var features_Country_line_GEE_5 = format_Country_line_GEE_5.readFeatures(json_Country_line_GEE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Country_line_GEE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Country_line_GEE_5.addFeatures(features_Country_line_GEE_5);
var lyr_Country_line_GEE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Country_line_GEE_5, 
                style: style_Country_line_GEE_5,
                interactive: true,
                title: '<img src="styles/legend/Country_line_GEE_5.png" /> Country_line_GEE'
            });
var format_Country_poly_GEE_6 = new ol.format.GeoJSON();
var features_Country_poly_GEE_6 = format_Country_poly_GEE_6.readFeatures(json_Country_poly_GEE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Country_poly_GEE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Country_poly_GEE_6.addFeatures(features_Country_poly_GEE_6);
var lyr_Country_poly_GEE_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Country_poly_GEE_6, 
                style: style_Country_poly_GEE_6,
                interactive: true,
                title: '<img src="styles/legend/Country_poly_GEE_6.png" /> Country_poly_GEE'
            });
var format_Countyr_poly_gee_LgnBy_7 = new ol.format.GeoJSON();
var features_Countyr_poly_gee_LgnBy_7 = format_Countyr_poly_gee_LgnBy_7.readFeatures(json_Countyr_poly_gee_LgnBy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Countyr_poly_gee_LgnBy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Countyr_poly_gee_LgnBy_7.addFeatures(features_Countyr_poly_gee_LgnBy_7);
var lyr_Countyr_poly_gee_LgnBy_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Countyr_poly_gee_LgnBy_7, 
                style: style_Countyr_poly_gee_LgnBy_7,
                interactive: true,
                title: '<img src="styles/legend/Countyr_poly_gee_LgnBy_7.png" /> Countyr_poly_gee_Lgn&By'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Diff_Gee_polyIsl_50K_1.setVisible(true);lyr_Island_dis_50k_2.setVisible(true);lyr_Bay_area_50K_3.setVisible(true);lyr_Lagoon_area_50K_4.setVisible(true);lyr_Country_line_GEE_5.setVisible(true);lyr_Country_poly_GEE_6.setVisible(true);lyr_Countyr_poly_gee_LgnBy_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Diff_Gee_polyIsl_50K_1,lyr_Island_dis_50k_2,lyr_Bay_area_50K_3,lyr_Lagoon_area_50K_4,lyr_Country_line_GEE_5,lyr_Country_poly_GEE_6,lyr_Countyr_poly_gee_LgnBy_7];
lyr_Diff_Gee_polyIsl_50K_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'area_sqr_k': 'area_sqr_k', });
lyr_Island_dis_50k_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'area_sqr_k': 'area_sqr_k', });
lyr_Bay_area_50K_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Bay_Name': 'Bay_Name', 'Sheet_No': 'Sheet_No', 'Name': 'Name', 'Additional': 'Additional', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'R': 'R', });
lyr_Lagoon_area_50K_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'HG_Nm_Hydr': 'HG_Nm_Hydr', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Sheet_No': 'Sheet_No', 'Source': 'Source', 'Source_2': 'Source_2', });
lyr_Country_line_GEE_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'FID_EDGE_D': 'FID_EDGE_D', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Country_poly_GEE_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'area_sqr_k': 'area_sqr_k', });
lyr_Countyr_poly_gee_LgnBy_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'area_sqr_k': 'area_sqr_k', });
lyr_Diff_Gee_polyIsl_50K_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'area_sqr_k': 'TextEdit', });
lyr_Island_dis_50k_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'area_sqr_k': 'TextEdit', });
lyr_Bay_area_50K_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Bay_Name': 'TextEdit', 'Sheet_No': 'TextEdit', 'Name': 'TextEdit', 'Additional': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'R': 'TextEdit', });
lyr_Lagoon_area_50K_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'HG_Nm_Hydr': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Sheet_No': 'TextEdit', 'Source': 'TextEdit', 'Source_2': 'TextEdit', });
lyr_Country_line_GEE_5.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'FID_EDGE_D': '', 'Id': '', 'Shape_Leng': '', 'Shape_Le_1': '', });
lyr_Country_poly_GEE_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'area_sqr_k': 'TextEdit', });
lyr_Countyr_poly_gee_LgnBy_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'area_sqr_k': 'TextEdit', });
lyr_Diff_Gee_polyIsl_50K_1.set('fieldLabels', {'OBJECTID': 'no label', 'area_sqr_k': 'no label', });
lyr_Island_dis_50k_2.set('fieldLabels', {'OBJECTID': 'no label', 'area_sqr_k': 'no label', });
lyr_Bay_area_50K_3.set('fieldLabels', {'OBJECTID': 'no label', 'Bay_Name': 'no label', 'Sheet_No': 'no label', 'Name': 'no label', 'Additional': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'R': 'no label', });
lyr_Lagoon_area_50K_4.set('fieldLabels', {'OBJECTID': 'no label', 'HG_Nm_Hydr': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Sheet_No': 'no label', 'Source': 'no label', 'Source_2': 'no label', });
lyr_Country_line_GEE_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'FID_EDGE_D': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Country_poly_GEE_6.set('fieldLabels', {'OBJECTID': 'no label', 'area_sqr_k': 'no label', });
lyr_Countyr_poly_gee_LgnBy_7.set('fieldLabels', {'OBJECTID': 'no label', 'area_sqr_k': 'no label', });
lyr_Countyr_poly_gee_LgnBy_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});