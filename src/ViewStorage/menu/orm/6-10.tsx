import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_10() {
    return (

        <>
            <div>
                <CodeSnippetDotNet code={`[MapTable("base_table")]
 internal class Super
 {
     [MapPrimaryKey("id",Generator.Assigned)]
     public Guid Id { get; set; }= Guid.NewGuid();
     
 }

 internal class Sub : Super
 {
     [MapColumn("name")]
     public string Name { get; set; }
 }

 internal class Final : Sub
 {
     [MapColumn("age")]
     public int Age { get; set; }

     public static void Create(ISession session)
     {
         session.DropTableIfExists<Final>();
         session.TableCreate<Final>();
     }
 }

Final.Create(session);
session.Insert(new Final { Name = "Name2", Age = 30 });
session.Insert(new Sub { Name = "NameSub" });

var resSub = session.Query<Sub>().ToList();// count 2
var resFinal=session.Query<Final>().ToList();// count 3`}/>
            </div>

            <br/>
            <div>
                <CodeSnippetDotNet code={`internal class Super
{
    [MapPrimaryKey("id", Generator.Assigned)]
    public Guid Id { get; set; } = Guid.NewGuid();

    [MapColumn("name")] 
    public string Name { get; set; }

    [MapColumn("age")] 
    public int Age { get; set; }


    public static void Create(ISession session)
    {
        session.DropTableIfExists<Table1>();
        session.TableCreate<Table1>();
        session.DropTableIfExists<Table2>();
        session.TableCreate<Table2>();
    }
}

[MapTable("table1")]
internal class Table1 : Super
{
}

[MapTable("table2")]
internal class Table2 : Super
{
  
}

Super.Create(session);
session.Insert(new Table1 { Name = "Name2", Age = 31 });
session.Insert(new Table2 { Name = "NameSub",Age = 32});

var resSub = session.Query<Table1>().ToList();// count 1
var resFinal=session.Query<Table2>().ToList();// count 1`}/>
            </div>


        </>


    )
}
