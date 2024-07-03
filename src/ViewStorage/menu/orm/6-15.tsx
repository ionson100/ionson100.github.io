import {CodeSnippetDotNet, CodeSnippetJson} from "../../codeSnippetJavaScript";
import React from "react";




export default function P6_15(){
    return(

        <>
            <p> head part: </p>
            <div>
                <CodeSnippetDotNet code={`[MapTable("m_geo")]
[MapTable("m_geo")]
class MGeo
{
    [MapPrimaryKey("id", Generator.Assigned)]
    public Guid Id { get; set; } = Guid.NewGuid();

    [MapColumn("name")]
    public string Name { get; set; }
   
    [MapIndex]
    [MapColumn("shape")]
    public IGeoShape Shape { get; set; }

    //or only Point
    //[MapIndex]
    //[MapColumnType("geography(POINT)")]
    //[MapColumn("shape")]
    //public IGeoShape Shape { get; set; } = FactoryGeo.Point(0, 0);

}

using ORM_1_21_;
using ORM_1_21_.geo;

string? path = null;
#if DEBUG
path = "SqlLog.txt";
#endif
var _ = new Configure("Server=localhost;Port=5432;Database=test123;User Id=postgres;Password=postgres;",
    ProviderName.PostgreSql, path);

using var session = Configure.Session;
//session.ExecuteNonQuery("CREATE EXTENSION postgis"); 
session.DropTableIfExists<MGeo>();
session.TableCreate<MGeo>();

//ORM: CREATE TABLE IF NOT EXISTS "m_geo" (
// "id" UUID  PRIMARY KEY,
// "name" VARCHAR(256) NULL ,
// "shape" geometry NULL );
//CREATE INDEX IF NOT EXISTS  "idx_m_geo_shape_geom" ON "m_geo" USING gist ("shape");

`}/>
            </div>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Create geo shape, insert to table</summary>
                <div>

                    <CodeSnippetDotNet code={`var mGeo = new MGeo{Name = "LineString",Shape = FactoryGeo.LineString(new GeoPoint(1,2),new GeoPoint(2,3))};
session.InsertBulk(new List<MGeo>{mGeo});
//ORM: INSERT INTO "m_geo" ( "id","name","shape") VALUES('f0c1f8ce-d108-46d8-ac9c-d009fc248bce','LineString',ST_GeomFromText('LINESTRING(1 2, 2 3)', 4326))

var mGeo = new MGeo{Name = "LineString",Shape = FactoryGeo.LineString(new GeoPoint(1,2),new GeoPoint(2,3))};
session.Insert(mGeo);
//ORM: INSERT INTO "m_geo" ("id", "name", "shape") VALUES (@p1,@p2,ST_GeomFromText(@p3, @srid3)) ;
//params:  @p1='970b0705-f7ee-4ef4-8658-534b360cf805'  @p2='LineString'  @srid3=4326  @p3='LINESTRING(1 2, 2 3)'`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Srid</summary>
                <div>
                    <p>
                        Default srid:4326<br/>
                        EPSG4326 A common CRS among GIS enthusiasts. Uses simple Equirectangular projection<br/>
                        You can change the default srid:
                    </p>

                    <CodeSnippetDotNet code={`FactoryGeo.DefaultSrid = 3857`}/>
                    <p>Change the srid for an individual object:</p>
                    <CodeSnippetDotNet code={`var mGeo = new MGeo
{
    Name = "LineString",
    Shape = FactoryGeo.LineString(new GeoPoint(1,2),new GeoPoint(2,3)).SetSrid(4326)
};`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Get type geometry</summary>
                <div>

                    <CodeSnippetDotNet code={`session.Insert(new MGeo { Name = "LineString", Shape = FactoryGeo.LineString(new GeoPoint(1, 2), new GeoPoint(2, 3)) });
session.Insert(new MGeo { Name = "Point", Shape = FactoryGeo.Point(new GeoPoint(1, 2)) });
var geoList = session.Query<MGeo>().Select(a => a.Shape.StGeometryType()).ToList();
geoList.ForEach(Console.WriteLine);
//ORM: SELECT ST_GeometryType("m_geo"."shape") FROM "m_geo";

// get only Point
var points = session.Query<MGeo>().Where(a => a.Shape.StGeometryType()=="ST_Point").ToList();
points.ForEach(a=>Console.WriteLine(a.Name));
//SELECT "m_geo"."id", "m_geo"."name", coalesce(CONCAT('SRID=',ST_SRID("m_geo"."shape"),';',ST_AsText("m_geo"."shape")),null) as "shape" FROM "m_geo"
//WHERE ( ST_GeometryType("m_geo"."shape") = @p1); params:  @p1='ST_Point' 



`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>StArea</summary>
                <div>
                    <a target={"_blank"} href={'https://postgis.net/docs/ST_Area.html'}>ST_Area</a>

                    <CodeSnippetDotNet code={`session.Insert(new MGeo { Name = "polygon1", Shape = FactoryGeo.Polygon("POLYGON((743238 2967416,743238 2967450, 743265 2967450,743265.625 2967416,743238 2967416))") });

var res = session.Query<MGeo>().Select(a=>new {a.Name,s=a.Shape.StArea()}).ToList();
var res1 = session.Query<MGeo>().Where(a => a.Shape.StArea() > 800).ToList();
var res2 = session.Query<MGeo>().SelectSqlE(a => $"Concat({a.Name},': ', ST_Area({a.Shape}))").ToList();
var shape = FactoryGeo.Polygon(
    "POLYGON((743238 2967416,743238 2967450, 743265 2967450,743265.625 2967416,743238 2967416))");
var s = shape.SetSession(session).StArea();
//ORM: INSERT INTO "m_geo" ("id", "name", "shape") VALUES (@p1,@p2,ST_GeomFromText(@p3, @srid3)) ;
//params:  @p1='26338f5a-e5d8-42a5-a8f5-661ea924ee42'  @p2='polygon1'  @srid3=4326  @p3='POLYGON((743238 2967416,743238 2967450, 743265 2967450,743265.625 2967416,743238 2967416))' 
//ORM: SELECT "m_geo"."name" , ST_Area("m_geo"."shape") FROM "m_geo";
//ORM: SELECT "m_geo"."id", "m_geo"."name", coalesce(CONCAT('SRID=',ST_SRID("m_geo"."shape"),';',ST_AsText("m_geo"."shape")),null) as "shape" FROM "m_geo" WHERE ( ST_Area("m_geo"."shape") > 800);
//ORM: SELECT Concat("m_geo"."name",': ', ST_Area("m_geo"."shape")) FROM "m_geo";
//ORM:  select ST_Area(ST_GeomFromText(@1, @2)) params:  @1='POLYGON((743238 2967416,743238 2967450, 743265 2967450,743265.625 2967416,743238 2967416))'  @2=4326 
`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>StAsBinary</summary>
                <div>
                    <a target={"_blank"} href={'https://postgis.net/docs/ST_AsBinary.html'}>ST_AsBinary</a>
                    <CodeSnippetDotNet code={`session.Insert(new MGeo { Name = "polygon1", Shape = FactoryGeo.Polygon("POLYGON((743238 2967416,743238 2967450, 743265 2967450,743265.625 2967416,743238 2967416))") });
var res = session.Query<MGeo>().Select(a=>new {a.Name,s=a.Shape.StAsBinary()}).ToList();
var shape = FactoryGeo.Polygon(
    "POLYGON((743238 2967416,743238 2967450, 743265 2967450,743265.625 2967416,743238 2967416))");
var s = shape.SetSession(session).StAsBinary();
//ORM: SELECT "m_geo"."name" , ST_AsBinary("m_geo"."shape") FROM "m_geo";
//ORM: select ST_AsBinary(ST_GeomFromText(@1, @2))
//params:  @1 = 'POLYGON((743238 2967416,743238 2967450, 743265 2967450,743265.625 2967416,743238 2967416))'  @2 = 4326`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>StAsText</summary>
                <div>
                    <a target={"_blank"} href={'https://postgis.net/docs/ST_AsText.html'}>StAsText</a>
                    <CodeSnippetDotNet code={`session.Insert(new MGeo { Name = "polygon1", Shape = FactoryGeo.Polygon("POLYGON((743238 2967416,743238 2967450, 743265 2967450,743265.625 2967416,743238 2967416))") });
var res = session.Query<MGeo>().Select(a=>new {a.Name,s=a.Shape.StAsText()}).ToList();
var shape = FactoryGeo.Polygon(
    "POLYGON((743238 2967416,743238 2967450, 743265 2967450,743265.625 2967416,743238 2967416))");
var s = shape.StAsText();
//ORM: SELECT "m_geo"."name" , ST_AsText("m_geo"."shape") FROM "m_geo";`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>StWithin</summary>
                <div>
                    <a target={"_blank"} href={'https://postgis.net/docs/ST_Within.html'}>ST_Within</a>
                    <p>Find all objects in the database that are contained in a container</p>
                    <CodeSnippetDotNet code={`session.Insert(new MGeo { Name = "point1", Shape = FactoryGeo.Point(-122.12824857332558, 47.6395516675712) });
session.Insert(new MGeo { Name = "point2", Shape = FactoryGeo.Point(0, 0) });
var container = FactoryGeo.Polygon(new[]
{
    -122.13236581015025,
    47.64606476313813,

    -122.13221982500913,
    47.633757091363975,

    -122.11840598103835,
    47.641749416109235,

    -122.12061400629656,
    47.64589264786028,

    -122.13236581015025,
    47.64606476313813
});
var listGeo = session.Query<MGeo>().Where(a => a.Shape.StWithin(container) == true).ToList();`}/>

                    <p>Find out if a point can be inside a container</p>
                    <CodeSnippetDotNet code={`var point = FactoryGeo.Point(-122.12824857332558, 47.6395516675712);
var container = FactoryGeo.Polygon(new[]
{
    -122.13236581015025,
    47.64606476313813,

    -122.13221982500913,
    47.633757091363975,

    -122.11840598103835,
    47.641749416109235,

    -122.12061400629656,
    47.64589264786028,

    -122.13236581015025,
    47.64606476313813
});
var isWithin = point.SetSession(session).StWithin(container) ;`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>STContains</summary>
                <div>
                    <a target={"_blank"} href={'https://postgis.net/docs/ST_Contains.html'}>ST_Contains</a>
                    <CodeSnippetDotNet code={`var p= FactoryGeo.Polygon("polygon ((0 0, 0 10, 10 10, 10 0, 0 0))");
var p1 =  FactoryGeo.Polygon("polygon ((-1 -1, -1 11, 11 11, 11 -1, -1 -1))") ;
var p2 = FactoryGeo.Polygon("polygon ((-2 -2, -2 11, 12 12, 12 -2, -2 -2))");
session.Insert(new MGeo { Name = "container1", Shape = p1 });
session.Insert(new MGeo { Name = "container2", Shape = p2 });

var res = session.Query<MGeo>().Where(a => a.Shape.StContains(p) == true).ToList();
var isContains = p1.SetSession(session).StContains(p) ;`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>StCrosses</summary>
                <div>
                    <a target={"_blank"} href={'https://postgis.net/docs/ST_Crosses.html'}>ST_Crosses</a>
                    <CodeSnippetDotNet code={`var p= FactoryGeo.LineString("linestring (20 20, 60 60)");
var p1 =  FactoryGeo.LineString("linestring (40 50, 50 40)") ;
session.Insert(new MGeo { Name = "line", Shape = p });

var res = session.Query<MGeo>().Where(a => a.Shape.StCrosses(p1) == true).ToList();
var isCrosses = p.SetSession(session).StCrosses(p1) ;`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>StOverlaps</summary>
                <div>
                    <a target={"_blank"} href={'https://postgis.net/docs/ST_Overlaps.html'}>ST_Overlaps</a>
                    <CodeSnippetDotNet code={`var p= FactoryGeo.Polygon("POLYGON ((40 170, 90 30, 180 100, 40 170))");
var p1 =  FactoryGeo.Polygon("POLYGON ((110 180, 20 60, 130 90, 110 180))") ;
session.Insert(new MGeo { Name = "polygon", Shape = p });


var res = session.Query<MGeo>().Where(a => a.Shape.StOverlaps(p1) == true).ToList();
var isOverlap = p.SetSession(session).StOverlaps(p1) ;`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>GetGeoJson</summary>
                <div>

                    <CodeSnippetDotNet code={`var geo1 = FactoryGeo.CreateGeo("POINT(1 2)").SetSrid(4326);
var gei2 = FactoryGeo.CreateGeo("POINT(-2 3)").SetSrid(4326);
var gei3 = FactoryGeo.CreateGeo("POLYGON((0 0, 0 5, 20 5, 10 0,0 0))").SetSrid(4326);
var col = FactoryGeo.GeometryCollection(geo1, gei2, gei3);
var jObject = col.GetGeoJson(new { id = Guid.NewGuid(), name = "gc1" });
string json = JsonConvert.SerializeObject(jObject, Formatting.Indented);

`}/>
                    <CodeSnippetJson code={`{
  "type": "GeometryCollection",
  "geometries": [
    {
      "type": "Point",
      "coordinates": [
        1.0,
        2.0
      ]
    },
    {
      "type": "Point",
      "coordinates": [
        -2.0,
        3.0
      ]
    },
    {
      "type": "Polygon",
      "coordinates": [
        [
          [
            0.0,
            0.0
          ],
          [
            0.0,
            5.0
          ],
          [
            20.0,
            5.0
          ],
          [
            10.0,
            0.0
          ],
          [
            0.0,
            0.0
          ]
        ]
      ]
    }
  ],
  "properties": {
    "id": "8e1be472-2609-4ef9-9933-942d4c4fbabc",
    "name": "collection"
  }
}`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>FactoryGeo.GetFeatureCollection</summary>
                <div>

                    <CodeSnippetDotNet code={`var geo1 = FactoryGeo.CreateGeo("POINT(1 2)").SetSrid(4326);
var geo2 = FactoryGeo.CreateGeo("POINT(-2 3)").SetSrid(4326);
var geo3 = FactoryGeo.CreateGeo("POLYGON((0 0, 0 5, 20 5, 10 0,0 0))").SetSrid(4326);

var feature1 = geo1.GetGeoJson(new { name = "geo1", id = Guid.NewGuid() });
var feature2 = geo2.GetGeoJson(new { name = "geo2", id = Guid.NewGuid() });
var feature3 = geo3.GetGeoJson(new { name = "geo2", id = Guid.NewGuid() });
var coll = FactoryGeo.GetFeatureCollection(new List<object> { feature1, feature2, feature3 });
var json = JsonConvert.SerializeObject(coll, Formatting.Indented);`}/>
                    <CodeSnippetJson code={`{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.0,
          2.0
        ]
      },
      "properties": {
        "name": "geo1",
        "id": "96a83842-8a3d-4703-a478-c4b00807ba84"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -2.0,
          3.0
        ]
      },
      "properties": {
        "name": "geo2",
        "id": "99cce012-05c5-4817-80d8-cc5f75785519"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              0.0,
              0.0
            ],
            [
              0.0,
              5.0
            ],
            [
              20.0,
              5.0
            ],
            [
              10.0,
              0.0
            ],
            [
              0.0,
              0.0
            ]
          ]
        ]
      },
      "properties": {
        "name": "geo2",
        "id": "238d0884-fe1b-4ab9-9f29-66b3fc1cdff8"
      }
    }
  ]
}`}/>
                </div>
            </details>






        </>



    )
}