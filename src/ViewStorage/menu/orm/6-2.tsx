import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_2(){
    return(

        <>
            <p> Table name: </p>
            <div>
                <CodeSnippetDotNet code={`
[MapTable("m_t_123")]// native name table
class MyClass
{
    [MapPrimaryKey("id", Generator.Assigned)]
    public Guid Id { get; set; } = Guid.NewGuid();
}
//CREATE TABLE IF NOT EXISTS "m_t_123" ("id" UUID  PRIMARY KEY);
 /*--------------------------------*/
[MapTable] // class name table
class MyClass 
{
    [MapPrimaryKey("id", Generator.Assigned)]
    public Guid Id { get; set; } = Guid.NewGuid();
}
//CREATE TABLE IF NOT EXISTS "MyClass" ("id" UUID  PRIMARY KEY);
                `}/>
            </div>
            <br/>
            <p> Primary key: </p>
            <div>
                <CodeSnippetDotNet code={`
[MapTable("m_t_123")]
class MyClass
{
    [MapPrimaryKey("id", Generator.Assigned)] //the value is assigned by the user
    public Guid Id { get; set; } = Guid.NewGuid();
 }
 //CREATE TABLE IF NOT EXISTS "m_t_123" ("id" UUID  PRIMARY KEY);
 /*--------------------------------*/
[MapTable("m_t_123")]
class MyClass 
{
    [MapDefaultValue(" DEFAULT gen_random_uuid()")]
    [MapPrimaryKey("id", Generator.Native)] //the value is assigned by the database
    public Guid Id { get; set; } = Guid.NewGuid();
 }
 //CREATE TABLE IF NOT EXISTS "m_t_123" ("id" UUID   DEFAULT gen_random_uuid());
 
 class MyClass 
 {
    [MapPrimaryKey("id", Generator.Native)] //autoincrement
    public long Id { get; set; } 
 }
 //CREATE TABLE IF NOT EXISTS "MyClass" ("id" BIGSERIAL  PRIMARY KEY);
 
 class MyClass 
 {
    [MapPrimaryKey(Generator.Native)] // name table field as name property class
    public long Id { get; set; } 
 }
 //CREATE TABLE IF NOT EXISTS "MyClass" ("Id" BIGSERIAL  PRIMARY KEY);
                `}/>
            </div>

            <p> Attributes of property: </p>
            <div>
                <CodeSnippetDotNet code={`
[MapTable("m_t_123")]
class MyClass
{
    [MapPrimaryKey( Generator.Native)]
    public long Id { get; set; } 
    
    [MapColumn("name")] 
    public string? Name { get; set; }
 }
 //ORM: CREATE TABLE IF NOT EXISTS "m_t_123" (
 //  "Id" BIGSERIAL  PRIMARY KEY,
 //  "name" VARCHAR(256) NULL );
 /*--------------------------------*/
[MapTable("m_t_123")]
class MyClass
{
    [MapPrimaryKey( Generator.Native)]
    public long Id { get; set; } 
    
    [MapColumn("name")]
    [MapColumnType("TEXT")]
    [MapDefaultValue("default 'test'")]
    [MapIndex]
    public string? Name { get; set; }
}
 //ORM: CREATE TABLE IF NOT EXISTS "m_t_123" (
 //  "Id" BIGSERIAL  PRIMARY KEY,
 //  "name" TEXT default 'test' );
 // CREATE INDEX IF NOT EXISTS  "INDEX_m_t_123_name" ON "m_t_123" ("name");
 
 
                `}/>
            </div>

        </>



    )
}