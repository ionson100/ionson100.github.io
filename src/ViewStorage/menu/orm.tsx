import React from "react";
import {CodeSnippetDotNet} from "../codeSnippetJavaScript";

export default function Orm(){
    return(<div>
        <p>ORM library, for databases: Postgres,MySql,MsSql,Sqlite.<br/>
            The library supports:
            LINQ to SQL Queries (not fully),<br/>
            Transactions,<br/>
            Free SQL Queries,<br/>
            Working with flat geographic features,<br/>
            Working with the Json type.<br/>
            All examples in this guide are based on working with the Postgres database.<br/>
            <br/>
            Note: <br/>
            All bases must be created before use, with the exception of Sqlite, <br/>
            if the file does not exist, the ORM will create it. <br/>
            Write to log file-debug mode only. <br/>
            install database provider from NuGet: (Npgsql, Mysql.Data, System.Data.SQLite, System.Data.SqlClient). <br/>
            Enum type is stored in the database as an integer.<br/>
            Presence of a primary key field:required.<br/>
            Primary key is Allowed on one field. <br/>
            <br/>
            Restrictions for PostgreSQL.<br/>
            The date is stored in the olden mode.<br/>
            Correction:<br/>
            <CodeSnippetDotNet code={`AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
AppContext.SetSwitch("Npgsql.DisableDateTimeInfinityConversions", true);`}/>

            ORM adds itself.<br/>

            </p>
            <a href={'https://github.com/ionson100/ORM-1_21-'} target={'_blank'}>GitHub project</a>
    </div>)
}