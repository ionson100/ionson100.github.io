import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_11() {
    return (

        <>
            <p> Orm allows you to work simultaneously with multiple databases.(PostgresSql, MySql, SqLite, MSSql)<br/>
                To do this, you need to get the session of the selected database.</p>
            <p style={{color:"red"}}>Restrictions.<br/>
                Table mapping types should not intersect with each other,<br/>
                Each database must have its own table type.<br/>
                This is due to a possible collision when constructing SQL queries.</p>

            <div>
                <CodeSnippetDotNet code={`/// <summary>
///     Getting a session to work with another database
/// </summary>
/// <typeparam name="TF">
///     The type that the interface must implement IOtherDataBaseFactory and
///     have a default constructor
/// </typeparam>
/// <returns></returns>
public static ISession GetSession<TF>() where TF : IOtherDataBaseFactory, new()
{
  
} 
var sessionOther=Configure.GetSession<IOtherDataBaseFactory>()`}/>
            </div>
            <br/>
            <p>Database Interface Implementation IOtherDataBaseFactory Patterns</p>

            <br/>
            <details>
                <summary >Postgres</summary>
                <div>

                    <CodeSnippetDotNet code={` public class MyDbPostgres : IOtherDataBaseFactory
 {
     private static readonly Lazy<DbProviderFactory> DbProviderFactory =
         new Lazy<DbProviderFactory>(() => Npgsql.NpgsqlFactory.Instance);
     public ProviderName GetProviderName()
     {
         return ProviderName.PostgreSql;
     }
     public string GetConnectionString()
     {
         return "connectionString";
     }

     public DbProviderFactory GetDbProviderFactories()
     {
         return DbProviderFactory.Value;
     }
 }`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary >MSSql</summary>
                <div>

                    <CodeSnippetDotNet code={`public class MyDbMsSql : IOtherDataBaseFactory
{
    private static readonly Lazy<DbProviderFactory> DbProviderFactory = 
        new Lazy<DbProviderFactory>(() => System.Data.SqlClient.SqlClientFactory.Instance);
    public ProviderName GetProviderName()
    {
        return ProviderName.MsSql;
    }
    public string GetConnectionString()
    {
        return "connectionString";
    }

    public DbProviderFactory GetDbProviderFactories()
    {
        return DbProviderFactory.Value;
    }
}`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary >SQLite</summary>
                <div>

                    <CodeSnippetDotNet code={`public class MyDbSqlite : IOtherDataBaseFactory
{
    private static readonly Lazy<DbProviderFactory> DbProviderFactory = 
        new Lazy<DbProviderFactory>(() => System.Data.SQLite.SQLiteFactory.Instance);
    public ProviderName GetProviderName()
    {
        return ProviderName.SqLite;
    }
    public string GetConnectionString()
    {
        return "connectionString";
    }

    public DbProviderFactory GetDbProviderFactories()
    {
        return DbProviderFactory.Value;
    }
}`}/>
                </div>
            </details>

            <br/>
            <details>
                <summary >MySql</summary>
                <div>

                    <CodeSnippetDotNet code={` public  class MyDbMySql : IOtherDataBaseFactory
 {
   private static readonly Lazy<DbProviderFactory> DbProviderFactory = 
       new Lazy<DbProviderFactory>(() => new MySqlClientFactory());
   public ProviderName GetProviderName()
   {
       return ProviderName.MySql;
   }
   public string GetConnectionString()
   {
       return ConnectionStrings.Mysql;
   }

   public DbProviderFactory GetDbProviderFactories()
   {
       return DbProviderFactory.Value;
   }
 }`}/>
                </div>
            </details>


        </>


    )
}