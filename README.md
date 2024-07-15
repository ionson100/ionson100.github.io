

- ### React component Menu (bsr-menu)
  npm: [https://www.npmjs.com/package/bsr-menu](https://www.npmjs.com/package/bsr-menu)\
  Repository: [https://github.com/ionson100/bsr-menu](https://github.com/ionson100/bsr-menu)\
  [Props, Function](https://ionson100.github.io/wwwroot/index.html#mode=bsrmenu&page=bsrmenu&state=true)\
  [Examples, Help pages](https://ionson100.github.io/wwwroot/index.html#mode=bsrmenu&page=1-1)
- ### React component simple avatar uploader (bsr-sau)
  npm: [https://www.npmjs.com/package/bsr-sau](https://www.npmjs.com/package/bsr-sau)\
  Repository: [https://github.com/ionson100/bsr-sau](https://github.com/ionson100/bsr-sau)\
  [Props, Function](https://ionson100.github.io/wwwroot/index.html#mode=bsrsau&page=bsrsau&state=true)\
  [Examples, Help pages](https://ionson100.github.io/wwwroot/index.html#mode=bsrsau&page=3-5)
- ### React component async modal dialog (bsr-modaldialog)
  npm: [https://www.npmjs.com/package/bsr-modaldialog](https://www.npmjs.com/package/bsr-modaldialog)\
  Repository: [https://github.com/ionson100/bsr-modaldialog](https://github.com/ionson100/bsr-modaldialog)\
  [Props, Function](https://ionson100.github.io/wwwroot/index.html#mode=bsrdialog&page=bsrdialog&state=true)\
  [Examples, Help pages](https://ionson100.github.io/wwwroot/index.html#mode=bsrdialog&page=4-1)
- ### React component tree (bsr-tree-virtual)
  npm: [https://www.npmjs.com/package/bsr-tree-virtual](https://www.npmjs.com/package/bsr-tree-virtual)\
  Repository: [https://github.com/ionson100/bsr-tree-virtual](https://github.com/ionson100/bsr-tree-virtual)\
  [Props, Function](https://ionson100.github.io/wwwroot/index.html#page=bsrtree)\
  [Examples, Help pages](https://ionson100.github.io/wwwroot/index.html#page=5-1)
- ### React component sidebar menu (bsr-left-sidebar)
-   npm: [https://www.npmjs.com/package/bsr-left-sidebar](https://www.npmjs.com/package/bsr-left-sidebar)\
    Repository: [https://github.com/ionson100/bsr-left-sidebar](https://github.com/ionson100/bsr-left-sidebar)\
    [Props, Function](https://ionson100.github.io/wwwroot/index.html#page=sidebar)\
    [Examples, Help pages](https://ionson100.github.io/wwwroot/index.html#page=7-2)
- ### Orm C# bitnic.orm
  ORM library, for databases: Postgres,MySql,MsSql,Sqlite.\
  The library supports: LINQ to SQL Queries (not fully),\
  Transactions,\
  Free SQL Queries,\
  Working with flat geographic features,\
  Working with the Json type.\
  All examples in this guide are based on working with the Postgres database.

  #### Note:
  All bases must be created before use, with the exception of Sqlite,\
  if the file does not exist, the ORM will create it.\
  Write to log file-debug mode only.\
  install database provider from NuGet: (Npgsql, Mysql.Data, System.Data.SQLite, System.Data.SqlClient).\
  Enum type is stored in the database as an integer.\
  Presence of a primary key field:required.\
  Primary key is Allowed on one field.\

  Restrictions for PostgreSQL.\
  The date is stored in the olden mode.\
  Correction:\
  AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);\
  AppContext.SetSwitch("Npgsql.DisableDateTimeInfinityConversions", true);\
  ORM adds itself. 
  Repository: [https://github.com/ionson100/ORM-1_21-](https://github.com/ionson100/ORM-1_21-)\
  [Examples, Help pages](https://ionson100.github.io/wwwroot/index.html#page=orm)\
  [NuGet](https://www.nuget.org/packages/bitnic.orm)
