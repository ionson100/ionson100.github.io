import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function P6_8() {
    return (

        <>
            <div>
                <CodeSnippetDotNet code={`static class Extension
{
    public static IEnumerable<object> MyWhere<TSource>(this IQueryable<TSource> source, Func<TSource, bool> func)
    {
        var res = source.Provider.Execute<IEnumerable<TSource>>(source.Expression);
        yield return res.Where(func);
    }

    public static async Task<IEnumerable<object>> FooAsync<TSource>(this IQueryable<TSource> source,
        Func<TSource, object> func, CancellationToken cancellationToken = default)
    {
        var res = await source.Provider.ExecuteAsync<IEnumerable<TSource>>(source.Expression, cancellationToken);
        return res.Select(func);
    }
}

var res = session.Query<MyClass>().Where(a=>a.Age!=0).MyWhere(s=>s.DateTime>=DateTime.Now.AddMinutes(-1)).ToList();
res.ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//WHERE ("m_t_123"."age" <> 0);

var res = await session.Query<MyClass>().Where(a=>a.Age!=0).
    MySelectAsync(s=>s.DateTime>=DateTime.Now.AddMinutes(-1));
res.ToList().ForEach(WriteLineClass);
//ORM: SELECT "m_t_123"."id", "m_t_123"."name", "m_t_123"."age", "m_t_123"."des", "m_t_123"."date" FROM "m_t_123"
//WHERE ("m_t_123"."age" <> 0);
`}/>
            </div>


        </>


    )
}
