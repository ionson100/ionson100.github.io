import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_3(){
    return(

        <>
            <p> standard: </p>
    <div>
    <CodeSnippetDotNet code={`
using var session = Configure.Session;
var mClass = new MyClass { Name = "Name1" };

var res=session.Insert(mClass);
Console.WriteLine($"insert: {res}");
//ORM: INSERT INTO "m_t_123" ("name") VALUES (@p1)  RETURNING "Id"; params:  @p1='Name1' 

mClass = session.Query<MyClass>().First();
mClass.Name = "Name2";
res = session.Update(mClass);
Console.WriteLine($"update: {res}");
//ORM: UPDATE "m_t_123" SET  "name" = @p1 WHERE "Id" = @p2 ; params:  @p1='Name2'  @p2=1 

res = session.Delete(mClass);
Console.WriteLine($"delete: {res}");
//ORM: DELETE FROM "m_t_123" WHERE "m_t_123"."Id" = @p1 params:  @p1=1 
                `}/>
    </div>
    <br/>
    <p> Use Save:<br/>

        Sometimes in the process of work we cannot determine what we need to do to insert or update.<br/>
        In this case, we can use the Save method,<br/>
        the program itself will decide what to do with the object: update or insert.<br/>
        To do this, the object type must be marked with the MapUsagePersistentAttribute attribute.<br/>
        Please note that using this attribute lengthens the time required to fetch large data arrays from the database!</p>
    <div>
    <CodeSnippetDotNet code={`
[MapUsagePersistent]//!!
[MapTable("m_t_123")]
class MyClass
{
     [MapPrimaryKey( Generator.Native)]
     public long Id { get; set; } 

     [MapColumn("name")]
     public string? Name { get; set; }
}
using var session = Configure.Session;
var mClass = session.Query<MyClass>().First();
mClass.Name = "Name2";
//... 
//...
//there is a lot of code where we can forget where 
//this object comes from: from the database or new
//... 

var res = session.Save(mClass);
Console.WriteLine($"save: {res}");


//When using the MapUsagePersistentAttribute attribute, 
//you can already determine where the object came from

if (session.IsPersistent(mClass))
{
    session.Update(mClass);// from database
}
else
{
    session.Insert(mClass);// as new
}

//We can also mark the new object as if we got it from the database
mClass = new MyClass();
session.ToPersistent(mClass);


 
                `}/>
    </div>

    <p>Example: Delete, Update, UpdateSql. </p>
    <div>
    <CodeSnippetDotNet code={`
using var session = Configure.Session;
var res=session.Query<MyClass>().Delete(a => a.Id == 1);
Console.WriteLine($"delete by id: {res}");
//ORM: DELETE FROM "m_t_123" WHERE ("m_t_123"."Id" = 1);


using var session = Configure.Session;
 var res=session.Query<MyClass>().Where(a=>a.Id==1).Update(s=>new Dictionary<object, object>
 {
     {s.Name,"new Name"},
     ...,
     ...,
 });
Console.WriteLine($"update  by id : {res}");
//ORM: UPDATE  "m_t_123" SET  "name" = @p1    WHERE  ("Id" = 1) ; params:  @p1='new Name' 

// as raw sql UpdateSql
using var session = Configure.Session;

var res = session.Query<MyClass>().Where(d=>d.Id==1)
    .UpdateSql(a => $"{a.Name}=@1 , {a.DateTime} = @2", 
        new SqlParam("@1", "test name"),new SqlParam("@2",DateTime.Now));
Console.WriteLine($"update  : {res}");
//UPDATE  "m_t_123" SET  "name"=@1 , "date" = @2    WHERE  ("Id" = 1) ;
//params:  @1='test name'  @2=6/26/2024 11:56:17 AM  
                `}/>
    </div>

    </>



)
}
