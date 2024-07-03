import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_9() {
    return (

        <>
            <div>
                <p>By default, creating an object from the database occurs without calling the default public constructor.<br/>
                    To connect a constructor call, the object type must be assigned the MapUsageActivatorAttribute attribute.</p>
                <CodeSnippetDotNet code={`[MapUsageActivator]
[MapTable("m_t_123")]
class MyClass
{
    public MyClass()
    {
        Console.WriteLine("call ctor.");
    }
}`}/>
    </div>


    </>


)
}
