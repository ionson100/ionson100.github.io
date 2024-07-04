import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_6() {
    return (

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
                <summary >FreeSql and sql request</summary>
                <div>
                    <CodeSnippetDotNet code={`var sql = $"select * from {session.TableName<MyClass>()}";
//select * from "m_t_123"
var sql = $"select {session.StarSql<MyClass>()} from {session.TableName<MyClass>()}";
//select "id", "name", "age", "des", "date" from "m_t_123"

var sql = $"select {session.StarSql<MyClass>()} from {session.TableName<MyClass>()} where {session.ColumnName<MyClass>(a=>a.Age)} > 20";
//sql="select \\"id\\", \\"name\\", \\"age\\", \\"des\\", \\"date\\" from \\"m_t_123\\" where \\"age\\" > 20"

var res =session.FreeSql<MyClass>(sql).ToList();`}/>
                </div>
            </details>
            <br/>

            <details>
                <summary >FreeSql as dynamic</summary>
                <div>
                    <CodeSnippetDotNet code={`var sql = $"select * from {session.TableName<MyClass>()} ";
var res =session.FreeSql<dynamic>(sql).ToList();
res.ForEach(WriteLineClass);

var sql = $"SELECT  tt.name AS tt_name, tt1.name AS tt1_name FROM m_t_123 AS tt JOIN m_t_123 AS tt1  ON tt.age=tt1.age";
var res =session.FreeSql<dynamic>(sql).ToList();
res.ForEach(WriteLineClass);`}/>
                </div>
            </details>
            <br/>

            <details>
                <summary >FreeSql as other type</summary>
                <div>
                    <CodeSnippetDotNet code={`var sql = $"SELECT  age FROM m_t_123 ";
var res =session.FreeSql<int>(sql).ToList();
res.ForEach(Console.WriteLine);

var sql = $"SELECT  date FROM m_t_123 ";
var res =session.FreeSql<DateTime>(sql).ToList();
res.ForEach(a =>
{
    Console.WriteLine(a.ToString("D"));
});`}/>
                </div>
            </details>

            <br/>

            <details>
                <summary >FreeSql custom type with constructor</summary>
                <div>
                    <CodeSnippetDotNet code={`//(using attribute:MapReceiverFreeSqlAttribute) the presence of a constructor with parameters
[MapReceiverFreeSql]
class MyFreeSql
{
    public long IdGuid { get; }
    public string Name { get; }
    public int Age { get; }
    public MyFreeSql(long idGuid, string myName, int myAge)
    {
        IdGuid = idGuid;
        Name = myName;
        Age = myAge;

    }
}
//Caution!
//Sequence of types from select: select id,name,age,enum 
//Must match the sequence of constructor parameter types.: MyFreeSql(long id, string myName, int myAge)


var sql = $"SELECT id, name as \\"myName\\", age as \\"myAge\\" from {session.TableName<MyClass>()}";
var res =session.FreeSql<MyFreeSql>(sql).ToList();
res.ForEach(WriteLineClass);`}/>
                </div>
            </details>

            <br/>

            <details>
                <summary >FreeSql custom type </summary>
                <div>
                    <CodeSnippetDotNet code={`class MyFreeSql
{
    public long id { get; set; }
    public string name { get; set; }

var sql = $"SELECT id,name from {session.TableName<MyClass>()}";
var res =session.FreeSql<MyFreeSql>(sql).ToList();
res.ForEach(WriteLineClass);`}/>
                </div>
            </details>

            <br/>

            <details>
                <summary >FreeSql anonymous type</summary>
                <div>
                    <CodeSnippetDotNet code={`static List<T> TempSql<T>(T t,string sql)
{
    return Configure.Session.FreeSql<T>(sql).ToList();
}

var sql = "SELECT name, age from m_t_123";
var res=TempSql(new { name = "", age = 0 }, sql);
res.ForEach(WriteLineClass);`}/>
                </div>
            </details>

        </>


    )
}
