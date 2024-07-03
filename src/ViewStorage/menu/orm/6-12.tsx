import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_12() {
    return (

        <>

            <p>In this example I connect to another database (Postgres), <br/>
                create a table, and copy data from one database to another,  <br/>
                the other database could be database: MySql, MSSQL, Sqlite</p>

            <br/>

            <div>
                <CodeSnippetDotNet code={` internal class Super
 {
     [MapPrimaryKey("id", Generator.Assigned)]
     public Guid Id { get; set; } = Guid.NewGuid();

     [MapColumn("name")] 
     public string Name { get; set; }

     [MapColumn("age")] 
     public int Age { get; set; }

 }

 [MapTable("table_12")]
 internal class Table1 : Super
 {
 }

 [MapTable("table_12")]
 internal class Table2 : Super
 {
   
 }

 public class MyDbPostgres : IOtherDataBaseFactory
 {
     private static readonly Lazy<DbProviderFactory> DbProviderFactory =
         new Lazy<DbProviderFactory>(() => Npgsql.NpgsqlFactory.Instance);
     public ProviderName GetProviderName()
     {
         return ProviderName.PostgreSql;
     }
     public string GetConnectionString()
     {
         return "Server=localhost;Port=5432;Database=test123_1;User Id=postgres;Password=postgres;";
     }

     public DbProviderFactory GetDbProviderFactories()
     {
         return DbProviderFactory.Value;
     }
 }
 
 //---------------------------------//
 
using ORM_1_21_;
 
string? path = null;
#if DEBUG
path = "SqlLog.txt";
#endif
var _ = new Configure("Server=localhost;Port=5432;Database=test123;User Id=postgres;Password=postgres;",
    ProviderName.PostgreSql, path);

// create table from database:test123
using var session = Configure.Session;
session.DropTableIfExists<Table1>();
session.TableCreate<Table1>();

// create table from database:test123_1
using var sessionOther = Configure.GetSession<MyDbPostgres>();
sessionOther.DropTableIfExists<Table2>();
sessionOther.TableCreate<Table2>();

// insert data to table database test123
for (int i = 0; i < 10; i++)
{
    session.Insert(new Table1 { Name = $"Name_{i}", Age = 10 + i });
}

var listTable1 = session.Query<Table1>().ToList();

//Copying data from one database to another
foreach (Table1 table1 in listTable1)
{
    sessionOther.Insert(new Table2 { Name = table1.Name,Age = table1.Age });
}
var listTable2=sessionOther.Query<Table2>().ToList();`}/>
            </div>

        </>


    )
}