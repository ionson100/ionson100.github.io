// import {Feature} from "ol";
// import {PropsBsrMap} from "bsr-osm/dist/cjs/map/mapCore";
// import {VectorLayer} from "ol/dist/ol";
// import VectorSource from "ol/source/Vector";
// import {OptionOSM} from "bsr-osm";
// import {Geometry} from "ol/geom";

export const d = ''

// export class BsrMap extends React.Component<PropsBsrMap, any> {
//
//     /**
//      * Disposal of a map object
//      * @param callback callback function
//      */
//     Dispose(callback?: () => void) {}
//
//     /**
//      * Getting a div that contains a card
//      */
//     public GetDivMap(): HTMLDivElement {}
//
//
//     /**
//      * Getting the current map projection
//      */
//     public GetCurrentEPSGProjection(): string {}
//
//     /**
//      * Canceling a geometry creation operation
//      * @param callback callback function
//      */
//     public CancelCreate(callback?: () => void):void {}
//
//     /**
//      * Rotate the map
//      * @param rotation rotation magnitude
//      */
//     public Rotation(rotation: number):void {}
//
//     /**
//      * Getting ol.VectorLayer
//      */
//     public GetVectorLayer(): VectorLayer {}
//
//     /**
//      * Getting ol.VectorSource
//      */
//     public GetVectorSource(): VectorSource {}
//
//     /**
//      * Getting ol.Map
//      */
//     public GetMap(): Map {}
//
//     /**
//      * Redrawing Feature Styles
//      */
//     public RefreshStyleFeatures():void {}
//
//     /**
//      * Overloading option styles is usually required if you have changed styles programmatically.
//      */
//     public RefreshStyleSettings():void {}
//
//     /**
//      * Redrawing feature styles into selected styles
//      * @param feature target Feature
//      */
//     public SelectFeature(feature: Feature):void {}
//
//
//     /**
//      * Redrawing features styles into selected styles
//      * @param features target Features
//      */
//     public SelectFeatures(features: Feature[]):void
//
//     /**
//      * Redrawing a card to a new position
//      * @param center center map
//      * @param zoom zoom map
//      * @param rotation rotation map
//      */
//     public GoTo(center: number[], zoom?: number, rotation?: number):void {}
//
//
//     /**
//      * Getting the current map display coordinates
//      */
//     public GetMapCoordinate(): { center?: number[], zoom?: number, rotation: number } {}
//
//     /**
//      * Getting the coordinates of a square, displaying a map in a browser, can be obtained as an object or as a json string
//      * @param isJson request as json
//      */
//     public GetBound(isJson?: boolean):{ p1?: number[], p2?: number[], p3?: number[], p4?: number[], p5?: number[] }|string {}
//
//     /**
//      * Getting features from a map, you can select the geometry type, when selecting undefined all features are selected
//      * @param geometry  'Point' | 'LineString' | 'Polygon' | 'Circle' | undefined
//      */
//     public GetFeatures(geometry: 'Point' | 'LineString' | 'Polygon' | 'Circle' | undefined):Feature[]|undefined {}
//
//     /**
//      * Adding Features to a Map
//      */
//     public AddFeatures(f: Feature[]):void {}
//
//     /**
//      * Adding Feature to a Map
//      * @param data Feature or GeoJson as string
//      */
//     public AddFeature(data: Feature | string):void {}
//
//     /**
//      * Removing Feature from a Map
//      * @param f Feature to be removed
//      */
//     public DeleteFeature(f: Feature):void {}
//
//     /**
//      * Deleting all features from the map
//      * @param callback callback function
//      */
//     public DeleteAllFeatures(callback?: () => void):void {}
//
//     /**
//      * Getting the center of feature
//      */
//     public GetCenterFeature(feature: Feature): Array<number> {}
//
//     /**
//      * Getting Feature Coordinates
//      */
//     public GetCoordinateFeature(feature: Feature):Array<any> {}
//
//     /**
//      * Getting  Feature flat Coordinates
//      */
//     public GetFlatCoordinateFeature(feature: Feature):number[] {}
//
//     /**
//      * Getting options from props
//      */
//     public GetOptions():OptionOSM {}
//
//     /**
//      * remove last point when creating a feature
//      */
//     public Undo():void {}
//
//     /**
//      * Build, create feature
//      * @param geometry 'Polygon' | 'LineString' | 'Point' | 'Circle'
//      * @return Promise<{barMap:BsrMap,isCancel:boolean,feature:Feature|undefined,geometry:string}>
//      */
//     public CreateFeature(geometry: 'Polygon' | 'LineString' | 'Point' | 'Circle'): Promise<{bsrMap: BsrMap, isCancel: boolean, feature?: Feature}>  {}
//
//     /**
//      * start edit feature
//      * @param feature Feature<Geometry>
//      * @param callback callback function
//      */
//     public StartEditFeature(feature: Feature<Geometry>, callback?: () => void):void {}
//
//
//     /**
//      * Get the map state, whether the map is in geometry editing state
//      */
//     public get IsEdit():boolean {}
//
//     /**
//      * Get the state of the map, whether the map is in the state of creating geometry
//      */
//     public get IsCreate():boolean {}
//
//     /**
//      * Subscribe to feature edit events, returns a key that can be used to unsubscribe
//      */
//     public AddEvenStateEditingFeature(fun: (stateStart: boolean, f?: Feature<Geometry>) => void):string {}
//
//     /**
//      * Unsubscribing to Feature Editing Events
//      * @param key event key
//      */
//     public RemoveEvenStateEditingFeature(key: string):void {}
//
//     /**
//      * Subscribe to feature creation events, returns a key that can be used to unsubscribe
//      */
//     public AddEventStateCreatingFeature(fun: (stateStart: boolean, f?: Feature<Geometry>) => void):string {}
//
//     /**
//      * Unsubscribing to geometry creation events
//      * @param key event key
//      */
//     public RemoveEventStateCreatingFeature(key: string):void {}
//
//     /**
//      * end of editing feature
//      */
//     public EndEditFeature(callback?: () => void):void {}
//
//     /**
//      * Transforming Feature into  geo json
//      */
//     public FeatureToJson(f: Feature):string {}
//
//     /**
//      * Transforming Feature into  geo json collection
//      */
//     public FeaturesToJson(features: Feature<Geometry>[]):string {}
//
//     /**
//      * Redrawing features styles
//      */
//     public RefreshStyleFeature(feature: Feature) {}
//
// }