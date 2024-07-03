import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_14() {
    return (

        <>

            <p>The ability to work with geographic objects is implemented only for databases: Postgres, MySql MSSql,<br/>
                Through the implementation of the IGeoShape interface.<br/>
                Geographical objects implemented.
                </p>



            <div>
                <CodeSnippetDotNet code={`public enum GeoType
 {
     None,
     Point,
     LineString,
     Polygon,
     MultiPoint,
     MultiLineString,
     MultiPolygon,
     GeometryCollection,
     CircularString,
     PolygonWithHole,
     Empty
 }`}/>
            </div>
            <p>Geographic Feature Methods:</p>
            <CodeSnippetDotNet code={`IGeoShape SetSrid(int srid);
GeoType GeoType { get; }
List<GeoPoint> ListGeoPoints { get; }
object GetGeoJson(object properties = null);
List<IGeoShape> MultiGeoShapes { get; }
string StAsText();
string StGeometryType();
Task<string> StGeometryTypeAsync(CancellationToken cancellationToken = default);
double? StArea();
Task<double?> StAreaAsync(CancellationToken cancellationToken = default);
bool? StWithin(IGeoShape shape);
Task<bool?> StWithinAsync(IGeoShape shape, CancellationToken cancellationToken = default);
byte[] StAsBinary();
Task<byte[]> StAsBinaryAsync(CancellationToken cancellationToken = default);
IGeoShape StBoundary();
Task<IGeoShape> StBoundaryAsync(CancellationToken cancellationToken = default);
IGeoShape StBuffer(float distance);
Task<IGeoShape> StBufferAsync(float distance, CancellationToken cancellationToken = default);
IGeoShape StCentroid();
Task<IGeoShape> StCentroidAsync(CancellationToken cancellationToken = default);
IGeoShape StEndPoint();
Task<IGeoShape> StEndPointAsync(CancellationToken cancellationToken = default);
IGeoShape StEnvelope();
Task<IGeoShape> StEnvelopeAsync(CancellationToken cancellationToken = default);
IGeoShape StStartPoint();
Task<IGeoShape> StStartPointAsync(CancellationToken cancellationToken = default);
IGeoShape StSymDifference(IGeoShape shape);
Task<IGeoShape> StSymDifferenceAsync(IGeoShape shape, CancellationToken cancellationToken = default);
IGeoShape StUnion(IGeoShape shape);
Task<IGeoShape> StUnionAsync(IGeoShape shape, CancellationToken cancellationToken = default);
bool? StContains(IGeoShape shape);
Task<bool?> StContainsAsync(IGeoShape shape, CancellationToken cancellationToken=default);
bool? StCrosses(IGeoShape shape);
Task<bool?> StCrossesAsync(IGeoShape shape, CancellationToken cancellationToken = default);
IGeoShape StDifference(IGeoShape shape);
Task<IGeoShape> StDifferenceAsync(IGeoShape shape, CancellationToken cancellationToken = default);
int? StDimension();
Task<int?> StDimensionAsync(CancellationToken cancellationToken = default);
bool? StDisjoint(IGeoShape shape);
Task<bool?> StDisjointAsync(IGeoShape shape, CancellationToken cancellationToken = default);
double? StDistance(IGeoShape shape);
Task<double?> StDistanceAsync(IGeoShape shape, CancellationToken cancellationToken = default);
bool? StEquals(IGeoShape shape);
Task<bool?> StEqualsAsync(IGeoShape shape, CancellationToken cancellationToken = default);
bool? StIntersects(IGeoShape shape);
Task<bool?> StIntersectsAsync(IGeoShape shape, CancellationToken cancellationToken = default);
bool? StOverlaps(IGeoShape shape);
Task<bool?> StOverlapsAsync(IGeoShape shape, CancellationToken cancellationToken = default);
int? StSrid();
bool? StTouches(IGeoShape shape);
Task<bool?> StTouchesAsync(IGeoShape shape, CancellationToken cancellationToken = default);
int? StNumGeometries();
Task<int?> StNumGeometriesAsync(CancellationToken cancellationToken = default);
int? StNumInteriorRing();
Task<int?> StNumInteriorRingAsync(CancellationToken cancellationToken = default);
bool? StIsSimple();
Task<bool?> StIsSimpleAsync(CancellationToken cancellationToken = default);
bool? StIsValid();
Task<bool?> StIsValidAsync(CancellationToken cancellationToken = default);
double? StLength();
Task<double?> StLengthAsync(CancellationToken cancellationToken = default);
bool? StIsClosed();
Task<bool?> StIsClosedAsync(CancellationToken cancellationToken = default);
int? StNumPoints();
Task<int?> StNumPointsAsync(CancellationToken cancellationToken = default);
double? StPerimeter();
Task<double?> StPerimeterAsync(CancellationToken cancellationToken = default);
IGeoShape StTranslate(float deltaX, float deltaY);
Task<IGeoShape> StTranslateAsync(float deltaX, float deltaY, CancellationToken cancellationToken = default);
IGeoShape SetSession(ISession session);
IGeoShape StConvexHull();
Task<IGeoShape> StConvexHullAsync(CancellationToken cancellationToken = default);
IGeoShape StCollect(params IGeoShape[] shapes);
IGeoShape StPointN(int n);
Task<IGeoShape> StPointNAsync(int n, CancellationToken cancellationToken = default);
IGeoShape StPointOnSurface();
Task<IGeoShape> StPointOnSurfaceAsync(CancellationToken cancellationToken = default);
IGeoShape StInteriorRingN(int n);
Task<IGeoShape> StInteriorRingNAsync(int n, CancellationToken cancellationToken = default);
double? StX();
Task<double?> StXAsync(CancellationToken cancellationToken = default);
double? StY();
Task<double?> StYAsync(CancellationToken cancellationToken=default);
IGeoShape StTransform(int srid);
Task<IGeoShape> StTransformAsync(int srid, CancellationToken cancellationToken = default);
IGeoShape StSetSRID(int srid);
string StAsLatLonText(string format =null );
Task<object> StAsLatLonTextAsync(string format, CancellationToken cancellationToken = default);
IGeoShape StReverse();
Task<IGeoShape> StReverseAsync(CancellationToken cancellationToken = default);
string StIsValidReason();
Task<string> StIsValidReasonAsync(CancellationToken cancellationToken = default);
IGeoShape StMakeValid();
Task<IGeoShape> StMakeValidAsync(CancellationToken cancellationToken = default);
string StAsGeoJson();
Task<string> StAsGeoJsonAsync(CancellationToken cancellationToken = default);
IGeoShape StLineSubstring(float startfraction, float endfraction);
IGeoShape StLineInterpolatePoint(float f);
 double StLineLocatePoint(IGeoShape point);
 IGeoShape StIntersection( IGeoShape b);`}/>

        </>


    )
}