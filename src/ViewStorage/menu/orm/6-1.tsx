import React from "react";
import {CodeSnippetDotNet, CodeSnippetJavaScript, CodeSnippetSql} from "../../codeSnippetJavaScript";
const code=`
using Newtonsoft.Json;
using ORM_1_21_;

//Attention, the log file is not cleared, use only for debugging purposes,
//there may be problems due to the large file size;
string? path = null;
#if DEBUG
path = "SqlLog.txt";
#endif

//creation only at program startup
var _ = new Configure("Server=localhost;Port=5432;Database=test123;User Id=postgres;Password=postgres;",
    ProviderName.PostgreSql, path);

using var ses = Configure.Session;
ses.TableCreate<MyClass>();
List<MyClass> classes = new List<MyClass>
{
    new() { Name = "NAME1", Description = "DES1", Age = 30 },
    new() { Name = "NAME2", Description = "DES2", Age = 31 }
};
ses.InsertBulk(classes);
ses.Query<MyClass>().ToList().ForEach(a => { Console.WriteLine(JsonConvert.SerializeObject(a)); });
ses.DropTable<MyClass>();

Console.ReadKey();

[MapTable("m_t_123")]
class MyClass
{
    [MapPrimaryKey("id", Generator.Assigned)]
    public Guid Id { get; set; } = Guid.NewGuid();

    [MapColumn("name")] public string? Name { get; set; }

    [MapColumn("age")] [MapIndex] public int Age { get; set; }

    [MapColumnType("text")]
    [MapColumn("des")]
    public string? Description { get; set; }

    [MapColumn("date")] public DateTime DateTime { get; set; } = DateTime.UtcNow;
}
`
const sqlCode=`
ORM: CREATE TABLE IF NOT EXISTS "m_t_123" (
 "id" UUID  PRIMARY KEY,
 "name" VARCHAR(256) NULL ,
 "age" INTEGER NOT NULL DEFAULT '0' ,
 "des" text NULL ,
 "date" TIMESTAMP NOT NULL DEFAULT '0001-01-01 00:00:00.000' );
CREATE INDEX IF NOT EXISTS  "INDEX_m_t_123_age" ON "m_t_123" ("age");

ORM: INSERT INTO "m_t_123" ( "id","name","age","des","date") VALUES('ccaf8544-dc2b-404a-9ca2-8a967041f1e9',
'NAME1',30,'DES1','2024-06-24 11:19:39.480'),
('40393af7-6224-41ce-8362-8024ca3d61ec','NAME2',31,'DES2','2024-06-24 11:19:39.481')
ORM: SELECT "m_t_123"."id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123";
ORM: DROP TABLE  "m_t_123";

`

export default function P6_1(){
    return(
        <div>
            <p>
                NuGet Package Manager<br/>
                install bitnik.orm<br/>
                install Npgsql<br/>
                Attention, the log file is not cleared, use only for debugging purposes,<br/>
                there may be problems due to the large file size;<br/>
            </p>
            <br/>
            <div>
                <CodeSnippetDotNet code={code}/>
            </div>
            <br/>
            <div>
                <CodeSnippetSql code={sqlCode}/>
            </div>
        </div>


    )
}