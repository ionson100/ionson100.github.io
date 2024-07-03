import {Component} from "react";
import React from "react";
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {
    Circle as CircleStyle,
    Fill,
    Style,
    Text,
} from 'ol/style.js';
import {Cluster, OSM, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {Stroke} from "ol/style";
import {GeoJSON} from "ol/format";
import {json} from "./map/features"
import {boundingExtent} from 'ol/extent.js';

export default class MyMap extends Component {

    constructor(props) {
        super(props);
        this.source = new VectorSource({});
        this.raster = new TileLayer({
            source: new OSM(),
        });
        this.clusterSource = new Cluster({
            distance: 60,
            minDistance: 0,
            source: this.source,
        });
        this.clusters = new VectorLayer({
            source: this.clusterSource,
            style: this.styleFunction,
        });
        this.map = new Map({
            layers: [this.raster, this.clusters],
            view: new View({
                center: [1608429.01, 6461053.51],
                zoom: 14.34,
            }),
        });
        this.map.on("pointermove", function (evt) {
            const hit = this.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
                return true;
            });
            if (hit) {
                this.getTargetElement().style.cursor = 'pointer';
            } else {
                this.getTargetElement().style.cursor = '';
            }
        });
        this.map.on('click', (e) => {
            this.clusters.getFeatures(e.pixel).then((clickedFeatures) => {

                if (clickedFeatures.length > 0) {

                    const features = clickedFeatures[0].get('features');
                    const extent = boundingExtent(
                        features.map((r) => r.getGeometry().getCoordinates())
                    );
                    this.map.getView().fit(extent, {duration: 300, padding: [300, 300, 300, 300]});
                } else {
                    const feature = this.map.forEachFeatureAtPixel(e.pixel,
                        function (feature) {
                            console.log(feature)
                            return feature;
                        });
                    if (feature)
                        alert(`client id: ${feature.values_.features[0].get('id')} \nprice:      ${feature.values_.features[0].get('price')}`)
                }
            });
        });
    }

    styleFunction(feature) {
        const size = feature.get('features').length;
        if (size > 1) {
            return new Style({
                image: new CircleStyle({
                    radius: 20,
                    fill: new Fill({
                        color: 'rgb(61,88,224)',
                    }),
                }),
                text: new Text({
                    text: size.toString(),
                    font: 'bold 15px sans-serif',
                    fill: new Fill({
                        color: 'rgba(248,245,215,0.94)'
                    })
                }),
            });
        } else {
            const originalFeature = feature.get('features')[0];
            const str = originalFeature.get('price');
            return new Style({
                text: new Text({
                    text: str,
                    font: 'bold 20px Calibri,sans-serif',
                    fill: new Fill({
                        color: 'black',
                    }),
                    stroke: new Stroke({
                        color: 'yellow',
                        width: 10,
                    }),
                }),
            });
        }
    }

    componentWillUnmount() {

    }

    componentDidMount() {
        this.map.setTarget('my-map')
        // fetch('GetFeatures').then(response=>{
        //     const format = new GeoJSON();
        //     const features = format.readFeatures(response.json());
        //     this.source.addFeatures(features)
        // })

        const format = new GeoJSON();
        const features = format.readFeatures(json);
        this.source.addFeatures(features)

    }

    render() {
        return (<div style={{width: "100%", height: "100%"}} id={'my-map'}></div>)
    }
}