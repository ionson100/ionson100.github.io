"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[8323],{8323:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l});var r=t(92073),s=t(30799),a=(t(93221),t(61225)),o=t(70579);const i='import {v4 as uuid} from \'uuid\'\nimport {Table, Column, ColumnGroup, HeaderGroup, DataRow, RowFooter, CellFooter} from \'bsr-table-extension\'\nimport \'bsr-table-extension/dist/index.css\'\n\ntype User = {\n        firstName: string\n        lastName: string\n        email: string\n        age: number\n        id: string\n    }\n\n    function fill(count: number) {\n        const list: DataRow<User, any>[] = []\n        for (let i = 0; i < count; i++) {\n            const user: User = {\n                id: uuid(),\n                age: 5 + i,\n                email: "user" + i + "@user.com",\n                firstName: "User" + i,\n                lastName: "User LN:" + i\n            }\n            const d: DataRow = {\n                id: user.id,\n                style: {backgroundColor: "green"},\n                title: user.firstName,\n                onClick: (u, e) => {\n                    console.log(u.tag)\n                },\n                className: \'"myClass\',\n                tag: user,\n                getView: () => {\n                    return {\n                        firstName: <div style={{fontSize: 20}}>{user.firstName}</div>,\n                        lastName: <div style={{fontSize: 20, color: "red"}}>{user.firstName}</div>,\n                        age: user.age,\n                        email: "no date"\n                    }\n                }\n            }\n            list.push(d)\n        }\n        return list\n    }\n    \nexport function App() {\n    return(\n     <Table caption={"see log"} rowItems={fill(5)} style={{width: "50%"}} useRowSelection>\n        <Column nameProperty={\'firstName\'}>First Name:</Column>\n        <Column nameProperty={\'lastName\'}>Last Name:</Column>\n        <Column style={{width: 50}} nameProperty={\'age\'}>Age:</Column>\n        <Column nameProperty={\'email\'}>Email:</Column>\n      </Table>   \n    )\n}\n\n';function l(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{marginTop:20},children:[(0,o.jsx)("br",{}),(0,o.jsx)(a.MM,{code:"\n            class DataRow<T =any,V =any>{\n            public title?:string;\n            public style?: React.CSSProperties | undefined\n            public className?: string;\n            public onClick?:(dataRow:DataRow,target: EventTarget)=>void\n            public id?:string\n            public tag?:T\n            public getView?:()=>V"}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:"\u041f\u0440\u0435\u043a\u0446\u0438\u044f"}),(0,o.jsx)(a.MM,{code:'\n             const d: DataRow = {\n                id: user.id,\n                style: {backgroundColor: "yellow"},\n                title: user.firstName,\n                onClick: (u, e) => {\n                    console.log(u.tag)\n                },\n                className: \'myClass\',\n                tag: user,\n                getView: () => {\n                    return {\n                        firstName:<div style={{fontSize:20}}>{user.firstName}</div>,\n                        lastName:<div style={{fontSize:20,color:"red"}}>{user.firstName}</div>,\n                        age:user.age,\n                        email:"no date"\n                    }\n                }\n                \n                <tr id="d55b357f-2e2e-46c9-beb0-70ef187c2b62" class="myClass" title="User0" data-row-index="0"  style="background-color: green;">\n                  <td data-property-name="firstName"><div style="font-size: 20px;">User0</div></td>\n                  <td data-property-name="lastName"><div style="font-size: 20px; color: red;">User0</div></td>\n                  <td data-property-name="age" style="width: 50px;">5</td>\n                  <td data-property-name="email">no date</td>\n                </tr>\n                '})]}),(0,o.jsxs)(s.XI,{caption:"see log",rowItems:function(e){const n=[];for(let t=0;t<e;t++){const e={id:(0,r.A)(),age:5+t,email:"user"+t+"@user.com",firstName:"User"+t,lastName:"User LN:"+t},s={id:e.id,style:{backgroundColor:"yellow"},title:e.firstName,onClick:(e,n)=>{console.log(e.tag)},className:'"myClass',tag:e,getView:()=>({firstName:(0,o.jsx)("div",{style:{fontSize:20},children:e.firstName}),lastName:(0,o.jsx)("div",{style:{fontSize:20,color:"red"},children:e.firstName}),age:e.age,email:"no date"})};n.push(s)}return n}(5),style:{width:"50%"},useRowSelection:!0,children:[(0,o.jsx)(s.VP,{nameProperty:"firstName",children:"First Name:"}),(0,o.jsx)(s.VP,{nameProperty:"lastName",children:"Last Name:"}),(0,o.jsx)(s.VP,{style:{width:50},nameProperty:"age",children:"Age:"}),(0,o.jsx)(s.VP,{nameProperty:"email",children:"Email:"})]}),(0,o.jsx)(a.MM,{code:i})]})}},92073:(e,n,t)=>{t.d(n,{A:()=>u});const r={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var s,a=new Uint8Array(16);function o(){if(!s&&!(s="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(a)}for(var i=[],l=0;l<256;++l)i.push((l+256).toString(16).slice(1));function d(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(i[e[n+0]]+i[e[n+1]]+i[e[n+2]]+i[e[n+3]]+"-"+i[e[n+4]]+i[e[n+5]]+"-"+i[e[n+6]]+i[e[n+7]]+"-"+i[e[n+8]]+i[e[n+9]]+"-"+i[e[n+10]]+i[e[n+11]]+i[e[n+12]]+i[e[n+13]]+i[e[n+14]]+i[e[n+15]]).toLowerCase()}const u=function(e,n,t){if(r.randomUUID&&!n&&!e)return r.randomUUID();var s=(e=e||{}).random||(e.rng||o)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,n){t=t||0;for(var a=0;a<16;++a)n[t+a]=s[a];return n}return d(s)}}}]);
//# sourceMappingURL=8323.ce062a27.chunk.js.map