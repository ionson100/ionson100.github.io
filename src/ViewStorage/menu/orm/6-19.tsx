import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_19(){
    return(

        <>
            <p> Head page: </p>
            <div>
                <CodeSnippetDotNet code={`using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ORM_1_21_;

[MapTable("m_json")]
class MJson
{
    [MapPrimaryKey("id", Generator.Assigned)]
    public Guid Id { get; set; } = Guid.NewGuid();

    [MapColumn("name")]
    public string Name { get; set; }

    [MapColumn("json")]
    [MapColumnTypeJson]
    // or [MapColumnTypeJson(TypeReturning.AsString)]
    [MapIndex]
    public object Json { get; set; }
    
}

string? path = null;
#if DEBUG
path = "SqlLog.txt";
#endif
var _ = new Configure("Server=localhost;Port=5432;Database=test_json;User Id=postgres;Password=postgres;",
    ProviderName.PostgreSql, path);
using var session = Configure.Session;

session.DropTableIfExists<MJson>();
session.TableCreate<MJson>();
//ORM: CREATE TABLE IF NOT EXISTS "m_json" (
//"id" UUID PRIMARY KEY,
//"name" VARCHAR(256) NULL ,
//"json" jsonb NULL );
//CREATE INDEX IF NOT EXISTS "idx_m_json_json_json" ON "m_json" USING GIN("json");`}/>
            </div>

            <br/>
            <details>
                <summary >Insert Update</summary>
                <div>
                    <CodeSnippetDotNet code={`session.Insert(new MJson { Name = "NAME1", Json = new { name = "assa1", count = 34 } });
session.Insert(new MJson { Name = "NAME1", Json = new { name = new { simple = "simple" }, count = 25, count2 = 30 } });
session.Insert(new MJson { Name = "LIST", Json = new List<int> { 1, 2, 3, 4 } });
session.Insert(new MJson { Name = "LIST2", Json = JsonConvert.SerializeObject(new List<int> { 1, 2, 3, 4 })} );

session.Query<MJson>().Where(a => a.Name == "NAME1").Update(d => new Dictionary<object, object>
{
    { d.Json, new { name = "name new", count3 = 40 } }
});

session.Query<MJson>().Where(a => a.Name == "NAME1").Update(d => new Dictionary<object, object>
{
    { d.Json, JsonConvert.SerializeObject(new { name = "name new", count3 = 45 }) }
});

session.Query<MJson>().Where(a => a.Name == "NAME1").UpdateSql(d =>
    $"{d.Json} = '{JsonConvert.SerializeObject(new { name = "name new", count3 = 46 })}'");`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary >Select</summary>
                <div>
                    <p>Please note what type of output you ordered when declaring type Json.<br/>
                        [MapColumnTypeJson(TypeReturning.AsString)] or [MapColumnTypeJson(TypeReturning.AsObject)].<br/>
                        Example as [MapColumnTypeJson(TypeReturning.AsObject)]
                    </p>
                    <a href={'https://postgrespro.ru/docs/postgresql/9.5/functions-json'} target={'_blank'}>functions-json</a>
                    <CodeSnippetDotNet code={`session.Insert(new MJson { Name = "NAME1", Json = new { name = "assa1", count = 34 } });
session.Insert(new MJson { Name = "NAME2", Json = new { name = new { simple = "simple" }, count = 25, count2 = 30 } });

session.Query<MJson>().SelectSqlE(a => $"{a.Json} -> 'name'").ForEach(Console.WriteLine);
List<MJson> res=session.Query<MJson>().WhereSql(a => $"{a.Json}? 'name'").ToList();

session.Insert(new MJson { Name = "LIST1", Json = new List<int> { 1, 2, 3, 4 } });
session.Insert(new MJson { Name = "LIST2", Json = JsonConvert.SerializeObject(new List<int> { 1, 2, 3, 4 })} );

session.Query<MJson>().Where(a=>a.Name.StartsWith("LIST")).SelectSqlE(a => $"jsonb_array_length({a.Json})").ForEach(Console.WriteLine);

var json = session.Query<MJson>().First(a => a.Name == "LIST2").Json;

foreach (JToken o in (json as JArray)!)
{
    Console.WriteLine(o.Value<int>());
}`}/>
                </div>
            </details>



        </>



    )
}