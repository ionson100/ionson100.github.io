import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_7() {
    return (

        <>
            <div>
                <CodeSnippetDotNet code={`  /// <summary>
  /// Tracking the modification  of an object in the database
  /// </summary>
  /// <typeparam name="T">Type object</typeparam>
  public interface IMapAction<in T> where T : class
  {
      /// <summary>
      /// Modification event
      /// </summary>
      /// <param name="item">Modification object</param>
      /// <param name="mode">Modification type</param>
      void ActionCommand(T item, CommandMode mode);
  }

/// <summary>
/// Modification type
/// </summary>
public enum CommandMode
{
    /// <summary>
    /// None
    /// </summary>
    None,
    /// <summary>
    /// Before Update
    /// </summary>
    BeforeUpdate,
    /// <summary>
    /// Before Insert
    /// </summary>
    BeforeInsert,
    /// <summary>
    /// Before Delete
    /// </summary>
    BeforeDelete,
    /// <summary>
    /// After Update
    /// </summary>
    AfterUpdate,
    /// <summary>
    /// After Insert
    /// </summary>
    AfterInsert,
    /// <summary>
    /// After Delete
    /// </summary>
    AfterDelete,
}
//Event initialization occurs only in the methods:
//session.Insert
//session.Save
//session.Update
//sesion.Delete
`}/>
            </div>


        </>


    )
}
