import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_4(){
    return(

        <>
            <p> transaction: </p>
            <div>
                <CodeSnippetDotNet code={`
ISession session = Configure.Session;
 var transaction=session.BeginTransaction();
 try
 {
    session.Insert(new MyClass { Name="Name1"});
    transaction.Commit();
 }catch(Exception)
 {
    transaction.Rollback();
    throw;
 }
 finally
 {
    session.Dispose();
 }  
                `}/>
            </div>
            <br/>
            <p> using dispose (not recommended) </p>
            <div>
                <CodeSnippetDotNet code={`
using (ISession session = await Configure.SessionAsync)
 {
    using (var transaction = await session.BeginTransactionAsync())
    {
        // insert, update 
        // if throw error -> transaction.Rollback
    }
 }
                `}/>
            </div>
        </>
    )
}