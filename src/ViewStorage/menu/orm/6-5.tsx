import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_5(){
    return(

        <>
            <p> head part: </p>
            <div>
                <CodeSnippetDotNet code={`using Newtonsoft.Json;
using ORM_1_21_;

[MapTable("m_t_123")]
class MyClass
{
    [MapPrimaryKey("id", Generator.Native)]
    public long Id { get; set; };

    [MapColumn("name")] public string? Name { get; set; }

    [MapColumn("age")] [MapIndex] public int Age { get; set; }

    [MapColumnType("text")]
    [MapColumn("des")]
    public string? Description { get; set; }

    [MapColumn("date")] public DateTime DateTime { get; set; } = DateTime.UtcNow;
}

void WriteLineClass(object a)
{
    Console.WriteLine(JsonConvert.SerializeObject(a));
}

using var session = Configure.Session;
session.DropTableIfExists<MyClass>();

session.TableCreate<MyClass>();
 List<MyClass> classes = new List<MyClass>
 {
     new() { Name = "NAME1",DateTime  = DateTime.Now,Age = 10},
     new() { Name = "NAME2",DateTime  = DateTime.Now,Age = 20}
 };
session.InsertBulk(classes);
                `}/>
            </div>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Where</summary>
                <div>

                    <CodeSnippetDotNet code={`
session.Query<MyClass>().Where(a=>a.DateTime.Day==DateTime.Now.Day).ToList().
    ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//WHERE (extract( day from "m_t_123"."date") = extract( day from @p1)); params:  @p1=6/26/2024 12:53:54 PM 

session.Query<MyClass>().Where(a=>a.Name.EndsWith("2")&&a.Age==20).
    Where(s=>s.Age!=10).ToList().ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//WHERE (("m_t_123"."name" LIKE CONCAT('%',@p1)) and ("m_t_123"."age" = 20)) and ("m_t_123"."age

session.Query<MyClass>().WhereIn(a => a.Age, 10, 20).ForEach(WriteLineClass)
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//WHERE ("m_t_123"."age" IN (10, 20));

session.Query<MyClass>().WhereNotIn(a=>a.Age,20).ToList().ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//WHERE ("m_t_123"."age" NOT IN (20));

session.Query<MyClass>().WhereSql(a=>$"{a.Age} = 20").ToList().ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//WHERE "m_t_123"."age" = 20;

session.Query<MyClass>().WhereSql(a=>$"{a.Age} = @1",new SqlParam("@1",20)).ToList().ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//WHERE "m_t_123"."age" = @1; params:  @1=20
                  `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>WhereSql</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res = session.Query<MyClass>().WhereSql(a => $"{a.Age}= @1", new SqlParam("@1", 10)).ToList();
res.ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//WHERE "m_t_123"."age"= @1; params:  @1=10 
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Any</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res=session.Query<MyClass>().Any();
Console.WriteLine(res);
//ORM: SELECT EXISTS ( SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123" )

var res=session.Query<MyClass>().Any(a=>a.Age<30);
Console.WriteLine(res);
//SELECT EXISTS ( SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM
//"m_t_123" WHERE ("m_t_123"."age" < 30) ) ;
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>All</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res=session.Query<MyClass>().All(a=>a.Age>0);
Console.WriteLine(res);
//ORM: SELECT COUNT(*),(SELECT COUNT(*) FROM "m_t_123"  WHERE ("m_t_123"."age" > 0) ) FROM "m_t_123"
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Average</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res=session.Query<MyClass>().Average(a=>a.Age);
Console.WriteLine(res);
//ORM: SELECT AVG("m_t_123"."age") FROM "m_t_123";
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Distinct</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res = session.Query<MyClass>().Distinct(a => a.Name).ToList();
res.ForEach(Console.WriteLine);
//ORM: SELECT DISTINCT "m_t_123"."name" FROM "m_t_123";
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>ElementAt</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res = session.Query<MyClass>().ElementAt(1);
Console.WriteLine(JsonConvert.SerializeObject(res));
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//LIMIT 1 OFFSET 1;
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>ElementAtOrDefault</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res = session.Query<MyClass>().ElementAtOrDefault(1);
 if(res!=null)Console.WriteLine(JsonConvert.SerializeObject(res));
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//LIMIT 1 OFFSET 1 ;
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>First FirstOrDefault</summary>
                <div>

                    <CodeSnippetDotNet code={`
var ee=session.Query<MyClass>().OrderBy(a => a.Age).First();
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//ORDER BY "m_t_123"."age" LIMIT 1 ;

var res = session.Query<MyClass>().First();
 Console.WriteLine(JsonConvert.SerializeObject(res));
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123" LIMIT 1 ;
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Last LastOrDefault</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res = session.Query<MyClass>().Last();
 Console.WriteLine(JsonConvert.SerializeObject(res));
//ORM: ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//ORDER BY  "m_t_123"."Id" DESC LIMIT 1;

var res = session.Query<MyClass>().LastOrDefault();
 if(res!=null)Console.WriteLine(JsonConvert.SerializeObject(res));
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//ORDER BY  "m_t_123"."Id" DESC LIMIT 1;
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Single SingleOrDefault</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res = session.Query<MyClass>().SingleOrDefault();
 if(res!=null)Console.WriteLine(JsonConvert.SerializeObject(res));
//SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123" LIMIT 2 ;

var res = session.Query<MyClass>().Single(a=>a.Age==10);
 Console.WriteLine(JsonConvert.SerializeObject(res));
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//WHERE ("m_t_123"."age" = 10) LIMIT 2 ;
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Sum</summary>
                <div>

                    <CodeSnippetDotNet code={`
 var res = session.Query<MyClass>().Sum(a=>a.Age);
 Console.WriteLine(res);
//ORM: SELECT Sum("m_t_123"."age") FROM "m_t_123";
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Max</summary>
                <div>

                    <CodeSnippetDotNet code={`
 var res = session.Query<MyClass>().Max(a=>a.Age);
 Console.WriteLine(res);
//ORM: SELECT Max("m_t_123"."age") FROM "m_t_123";
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Min</summary>
                <div>

                    <CodeSnippetDotNet code={`
 var res = session.Query<MyClass>().Min(a=>a.Age);
 Console.WriteLine(res);
//ORM: SELECT Min("m_t_123"."age") FROM "m_t_123";
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Count</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res = session.Query<MyClass>().Count(a => a.Age == 20);
 Console.WriteLine(res);
//SELECT COUNT(*) FROM "m_t_123" WHERE ("m_t_123"."age" = 20);
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Reverse</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res = session.Query<MyClass>().Where(a=>a.Age>0).Reverse().ToList();
res.ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//WHERE ("m_t_123"."age" > 0) ORDER BY "m_t_123"."Id" DESC;
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>OrderBy OrderByDescending ThenBy ThenByDescending </summary>
                <div>

                    <CodeSnippetDotNet code={`
var res = session.Query<MyClass>().OrderBy(a=>a.Age).ToList();
res.ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//ORDER BY "m_t_123"."age";

var res = session.Query<MyClass>().OrderByDescending(a=>a.Age).ToList();
res.ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//ORDER BY "m_t_123"."age" DESC;

var res = session.Query<MyClass>().OrderBy(a=>a.Age).ThenBy(a=>a.Name).ToList();
res.ForEach(WriteLineClass);
// ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
// ORDER BY "m_t_123"."age", "m_t_123"."name";

var res = session.Query<MyClass>().OrderByDescending(a=>a.Age).ThenByDescending(a=>a.Name).ToList();
res.ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//ORDER BY "m_t_123"."age" DESC , "m_t_123"."name" DESC;
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Limit</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res = session.Query<MyClass>().Limit(1,100).ToList();
res.ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//Limit 100 OFFSET 1;
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Select</summary>
                <div>

                    <CodeSnippetDotNet code={`
List<int> res = session.Query<MyClass>().Select(a=>a.Age).ToList();
//ORM: SELECT "m_t_123"."age" FROM "m_t_123"
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Select as new object</summary>
                <div>

                    <CodeSnippetDotNet code={`
var  res = session.Query<MyClass>().Select(a=>new {name=a.Name,age=a.Age}).ToList();
res.ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."name" ,"m_t_123"."age" FROM "m_t_123";

var  res = session.Query<MyClass>().Select(a=>new {a.Name,a.Age}).ToList();
res.ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."name" ,"m_t_123"."age" FROM "m_t_123";
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>SelectSql</summary>
                <div>

                    <CodeSnippetDotNet code={`
session.Query<MyClass>().SelectSql<int>(" age*2 ").ForEach(Console.WriteLine);
//ORM: SELECT age*2 FROM "m_t_123";

session.Query<MyClass>().SelectSql<string>("Concat('name:',name,' age:', age) ").ForEach(Console.WriteLine);
//ORM: SELECT Concat('name:',name,' age:', age) FROM "m_t_123";

session.Query<MyClass>().SelectSql<string>("Concat(@1,name,' age:', age) ",new SqlParam("@1","name: ")).ForEach(Console.WriteLine);
//ORM: SELECT Concat(@1,name,' age:', age) FROM "m_t_123"; params:  @1='name: ' 
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>SelectSqlE</summary>
                <div>

                    <CodeSnippetDotNet code={`
session.Query<MyClass>().SelectSqlE(a => $"Concat('name:',{a.Name},' - age:',{a.Age})").ToList().ForEach(Console.WriteLine);
//ORM: SELECT Concat('name:',"m_t_123"."name",' - age:',"m_t_123"."age") FROM "m_t_123";

session.Query<MyClass>().SelectSqlE(a => $"Concat(@22,{a.Name},' - age:',{a.Age})",new SqlParam("@22","name: "))
.ToList().ForEach(Console.WriteLine);
//ORM: SELECT Concat(@22,"m_t_123"."name",' - age:',"m_t_123"."age") FROM "m_t_123"; params:  @22='name: ' 
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Delete</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res = session.Query<MyClass>().Delete(a=>a.Age==20);
Console.WriteLine(res);
//ORM: DELETE FROM "m_t_123" WHERE ("m_t_123"."age" = 20);
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Update</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res = session.Query<MyClass>().Update(a=>new Dictionary<object, object>
{
    {a.Age,50},
    {a.Name,"Elderly"}
});
Console.WriteLine(res);
//ORM: UPDATE  "m_t_123" SET  "age" = 50, "name" = @p1   ; params:  @p1='Elderly' 
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>UpdateSql</summary>
                <div>

                    <CodeSnippetDotNet code={`
var res = session.Query<MyClass>().UpdateSql(a=>$"{a.Age}=50, {a.Name}=@1",new SqlParam("@1", "Elderly"));
Console.WriteLine(res);
//ORM: UPDATE  "m_t_123" SET  "age"=50, "name"=@1   ; params:  @1='Elderly'
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>Between</summary>
                <div>

                    <CodeSnippetDotNet code={`
session.Query<MyClass>().Between(a=>a.DateTime,DateTime.Now.AddDays(-1),DateTime.Now.AddDays(1)).ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."Id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//WHERE "m_t_123"."date" BETWEEN @p1 AND @p2; params:  @p1=6/27/2024 11:27:43 AM  @p2=6/29/2024 11:27:43 AM 
                `}/>
                </div>
            </details>
            <br/>
            <details>
                <summary style={{cursor:"pointer"}}>
                    WhereIf WhereIfSql WhereIfIn
                </summary>
                <div>

                    <CodeSnippetDotNet code={`
public async Task<IActionResult> GetAllDetails(string? line, string? where, Guid group, Guid place,
     bool consumable, string? format)
 {
     try
     {
         var lineIf = line == null || line == "null" || line == "undefined" || line == Guid.Empty.ToString();
         using var session = await Configure.SessionAsync;
         var res = await session.Query<MDetail>()
             .WhereIf(where != null, a =>
                 (a.Name != null && a.Name.ToLower().Contains(where.Trim().ToLower())
                  || (a.PartNumber != null && a.PartNumber.Contains(where.Trim()))))
             .WhereIf(string.IsNullOrWhiteSpace(format) == false, a => a.Format == format)
             .WhereIf(place != Guid.Empty, a => a.StoragePlaceId == place)
             .WhereIf(consumable == true, a => a.IsConsumables == true)
             .WhereIf(group != Guid.Empty, a => a.GroupId == group)
             .WhereIfSql(lineIf == false, a => $" {a.Lines}::jsonb ? @111", new SqlParam("@111", line==null?"":"".Trim())) //for Eliminate Exception
             .OrderBy(s => s.Name)
             .ToListAsync();
         return Ok(res);
     }

     catch (Exception e)
     {
         Console.WriteLine(e);
         throw 
     }
 }
                `}/>
                </div>
            </details>
        </>



    )
}