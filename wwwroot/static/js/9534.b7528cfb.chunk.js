"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[9534],{49534:(n,e,s)=>{s.r(e),s.d(e,{default:()=>t});var a=s(61225),i=(s(65043),s(70579));function t(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.L8,{code:'[MapTable("base_table")]\n internal class Super\n {\n     [MapPrimaryKey("id",Generator.Assigned)]\n     public Guid Id { get; set; }= Guid.NewGuid();\n     \n }\n\n internal class Sub : Super\n {\n     [MapColumn("name")]\n     public string Name { get; set; }\n }\n\n internal class Final : Sub\n {\n     [MapColumn("age")]\n     public int Age { get; set; }\n\n     public static void Create(ISession session)\n     {\n         session.DropTableIfExists<Final>();\n         session.TableCreate<Final>();\n     }\n }\n\nFinal.Create(session);\nsession.Insert(new Final { Name = "Name2", Age = 30 });\nsession.Insert(new Sub { Name = "NameSub" });\n\nvar resSub = session.Query<Sub>().ToList();// count 2\nvar resFinal=session.Query<Final>().ToList();// count 3'})}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{children:(0,i.jsx)(a.L8,{code:'internal class Super\n{\n    [MapPrimaryKey("id", Generator.Assigned)]\n    public Guid Id { get; set; } = Guid.NewGuid();\n\n    [MapColumn("name")] \n    public string Name { get; set; }\n\n    [MapColumn("age")] \n    public int Age { get; set; }\n\n\n    public static void Create(ISession session)\n    {\n        session.DropTableIfExists<Table1>();\n        session.TableCreate<Table1>();\n        session.DropTableIfExists<Table2>();\n        session.TableCreate<Table2>();\n    }\n}\n\n[MapTable("table1")]\ninternal class Table1 : Super\n{\n}\n\n[MapTable("table2")]\ninternal class Table2 : Super\n{\n  \n}\n\nSuper.Create(session);\nsession.Insert(new Table1 { Name = "Name2", Age = 31 });\nsession.Insert(new Table2 { Name = "NameSub",Age = 32});\n\nvar resSub = session.Query<Table1>().ToList();// count 1\nvar resFinal=session.Query<Table2>().ToList();// count 1'})})]})}}}]);
//# sourceMappingURL=9534.b7528cfb.chunk.js.map