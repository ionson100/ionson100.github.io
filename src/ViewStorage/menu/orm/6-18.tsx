import {CodeSnippetDotNet, CodeSnippetJavaScript, CodeSnippetJson} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_18() {
    return (

        <>
            <details>
                <summary style={{cursor:"pointer"}}>Source client</summary>
                <div>

                    <CodeSnippetJavaScript code={`import {Component} from "react";
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
                        alert("client id:"+feature.values_.features[0].get('id') +"price:     "+feature.values_.features[0].get('price'))
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
         fetch('GetFeatures').then(response=>{
             const format = new GeoJSON();
             const features = format.readFeatures(response.json());
             this.source.addFeatures(features)
         })
    }

    render() {
        return (<div style={{width: "100%", height: "100%"}} id={'my-map'}></div>)
    }
}`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Source server</summary>
                <div>
                    <CodeSnippetDotNet code={`[MapTable("sale_map")]
class SaleMap
{
    [MapPrimaryKey("id", Generator.Assigned)]
    public Guid Id { get; set; } = Guid.NewGuid();

    [MapColumn("price")]
    public decimal Price { get; set; }

    [MapColumn("id_p")]
    public Guid PublicId { get; set; }

    [MapColumn("geo_shape")] public IGeoShape Shape { get; set; }

}

async Task<string> GetFeatures()
{
    using var session = await Configure.SessionAsync;
    var listSale = await session.Query<SaleMap>().ToListAsync();
    List<object> listFeature = new(listSale.Count);
    foreach (SaleMap saleMap in listSale)
    {
        string p = $"{saleMap.Price:C0}";
        listFeature.Add(saleMap.Shape.GetGeoJson(new { id = saleMap.PublicId.ToString(), price = p }));
    }
    var collection = FactoryGeo.GetFeatureCollection(listFeature);
    var res = JsonConvert.SerializeObject(collection);
    return res;
}`}/>

                </div>
            </details>

            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>GeoJson Features</summary>
                <div>

                    <CodeSnippetJson code={`{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1608195.40566334,
          6461203.24980751
        ]
      },
      "properties": {
        "id": "1e62e9ad-9575-4641-a25a-f2870412adc1",
        "price": "$357,001"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1606073.01192508,
          6463206.85285146
        ]
      },
      "properties": {
        "id": "8985a34d-3b4e-4f9d-854b-ed6d67e7d58e",
        "price": "$90,864"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1606397.70648952,
          6463191.01409222
        ]
      },
      "properties": {
        "id": "42370d22-8bc8-44d6-ae5f-4ab5b1f7ea69",
        "price": "$469,839"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1606627.36849851,
          6463396.91796235
        ]
      },
      "properties": {
        "id": "ac6ccb88-9c4f-4252-9cdb-ca4e58ddd5bd",
        "price": "$138,881"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1606967.90182219,
          6463682.01562868
        ]
      },
      "properties": {
        "id": "da7c4d67-b3ec-4960-812f-38dd024f69bd",
        "price": "$11,824"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1606999.57934067,
          6463301.8854069
        ]
      },
      "properties": {
        "id": "42a8c98f-e114-4eb1-a67f-81de57e69635",
        "price": "$39,236"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1606714.48167433,
          6462319.88233398
        ]
      },
      "properties": {
        "id": "4ec64f60-f820-4232-9b03-75308a66a30c",
        "price": "$90,665"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1607245.0801089,
          6462288.2048155
        ]
      },
      "properties": {
        "id": "70f4853d-9c6f-4379-b7e7-246ead4d2c31",
        "price": "$351,594"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1606532.33594307,
          6462058.54280651
        ]
      },
      "properties": {
        "id": "c845f1ae-23ae-415f-9a00-2d94cbaa92f4",
        "price": "$124,766"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1607878.63047853,
          6460767.68392839
        ]
      },
      "properties": {
        "id": "040dacc3-096a-422f-a553-82eddb110bba",
        "price": "$43,764"
      }
    }
  ]
}`}/>
                </div>
            </details>

        </>


    )
}