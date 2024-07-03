import {Circle as CircleStyle, Fill, Icon, Stroke, Style} from "ol/style";










export const mySelectPolygon = new Style({
    fill: new Fill({
        color: 'rgba(236,227,227,0.2)'
    }),
    stroke: new Stroke({
        color: '#f53d14',
        width: 3
    }),
    image: new CircleStyle({
        radius: 7,
        fill: new Fill({
            color: '#ffcc33'
        })
    })
})

export function styleFunction(feature) {

    return styles[feature.getGeometry().getType()];

}

export const styles = ({

    'LineString': new Style({
        fill: new Fill({
            color: 'rgb(167,81,81)'
        }),
        stroke: new Stroke({
            color: '#179a1c',
            width: 4
        }),
        image: new CircleStyle({
            radius: 7,
            fill: new Fill({
                color: '#ffcc33'
            })
        })
    }),
    'Polygon': new Style({
        fill: new Fill({
            color: hexToRgbA(),
        }),
        stroke: new Stroke({
            color: '#03e80e',
            width: 3
        }),
        image: new CircleStyle({
            radius: 7,
            fill: new Fill({
                color: '#ffcc33'
            })
        })
    }),
    'Circle': new Style({
        fill: new Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new Stroke({
            color: '#03e80e',
            width: 3
        }),
        image: new CircleStyle({
            radius: 7,
            fill: new Fill({
                color: '#ffcc33'
            })
        })
    }),

    'Point': new Style({
        fill: new Fill({
            color: 'rgba(182,85,85,0.2)'
        }),
        stroke: new Stroke({
            color: '#03e80e',
            width: 3
        }),
        image: new CircleStyle({
            radius: 12,
            fill: new Fill({
                color: '#a88007'
            })
        })
    }),

});

export function selectStyle() {

    return new Style({

        stroke: new Stroke({
            color: 'rgba(229,39,39,0.7)',
            width: 4,
        }),
        image: new CircleStyle({
            radius: 12,
            fill: new Fill({
                color: 'rgba(229,39,39,0.7)',
            })
        })

    });
}


export function hexToRgbA(){
    const hex='#F1F7DB'
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.2)';
    }
    throw new Error('Bad Hex');
}

