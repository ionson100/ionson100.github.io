"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[468],{60468:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var o=t(65043),r=t(60913),s=t(6720),i=t(60184),u=t(61225),c=t(78973);const l={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var m,d=new Uint8Array(16);function a(){if(!m&&!(m="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(d)}for(var p=[],b=0;b<256;++b)p.push((b+256).toString(16).slice(1));function f(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(p[e[n+0]]+p[e[n+1]]+p[e[n+2]]+p[e[n+3]]+"-"+p[e[n+4]]+p[e[n+5]]+"-"+p[e[n+6]]+p[e[n+7]]+"-"+p[e[n+8]]+p[e[n+9]]+"-"+p[e[n+10]]+p[e[n+11]]+p[e[n+12]]+p[e[n+13]]+p[e[n+14]]+p[e[n+15]]).toLowerCase()}const h=function(e,n,t){if(l.randomUUID&&!n&&!e)return l.randomUUID();var o=(e=e||{}).random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n){t=t||0;for(var r=0;r<16;++r)n[t+r]=o[r];return n}return f(o)};var g=t(70579);const v='\nimport React, {useRef} from "react";\nimport {MenuItem, TreeMenu} from "bsr-tree-virtual";\nimport {CreateItem} from "bsr-tree-virtual";\nimport "bsr-tree-virtual/dist/index.css"\nimport {MdOutlineSubdirectoryArrowRight} from "react-icons/md";\nimport {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";\n\n\nfunction getListItem() {\n    const listItem: MenuItem[] = [];\n    const m = new MenuItem();\n    m.content = "root"\n    {\n        const sub_m = new MenuItem();\n        sub_m.content = "sub_item:1"\n        m.items?.push(sub_m)\n    }\n    {\n        const sub_m = new MenuItem();\n        sub_m.content = "sub_item:2"\n        m.items?.push(sub_m)\n    }\n\n    listItem.push(m)\n    return listItem;\n}\nexport default function P5_30() {\n    const mRefTree = useRef<InstanceType<typeof TreeMenu>>(null);\n\n    return (\n        <div style={{width: 600}}>\n            <TreeMenu\n                ref={mRefTree}\n                wight={600}\n                style={{marginTop: 5}}\n                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}\n                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}\n                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}\n                items={getListItem()}\n                onClickMenuItem={(s, o) => {\n                    console.log(\'clicked: \' + o.item.id)\n                }}\n            />\n            <br/>\n            <p>press the key Alt+Shift+2+2</p>\n            <button onClick={() => {\n                const menu = new MenuItem()\n                menu.icon = <CgMenuBoxed color={\'blue\'}/>\n                menu.content = <div>added</div>\n                menu.id = uuidv4();\n                menu.style = {color: "red",fontWeight:"bold"}\n                menu.accessKey = "22"\n                menu.title = \'added\'\n                menu.url = \'https://www.google.com/\'\n                menu.target = \'_blank\'\n                menu.isOpen=true;\n                menu.selected=true;\n                menu.items?.push(CreateItem({content: "sub",selected:true}))\n                mRefTree.current.AddItems(menu)\n            }}>Add Item\n            </button>\n        </div>\n    )\n}\n\n\n\n';function w(){const e=[],n=new r.Dr;n.content="root";{var t;const e=new r.Dr;e.content="sub_item:1",null===(t=n.items)||void 0===t||t.push(e)}{var o;const e=new r.Dr;e.content="sub_item:2",null===(o=n.items)||void 0===o||o.push(e)}return e.push(n),e}function y(){const e=(0,o.useRef)(null);return(0,g.jsxs)("div",{style:{width:600},children:[(0,g.jsx)(r.sQ,{ref:e,useCheckBox:!0,wight:600,style:{marginTop:5},iconTree:(0,g.jsx)(s.UqJ,{color:"black",size:20}),iconClose:(0,g.jsx)(i.fFF,{color:"black",size:20}),iconOpen:(0,g.jsx)(i.vli,{color:"black",size:20}),items:w(),onClickMenuItem:(e,n)=>{console.log("clicked: "+n.item.id)}}),(0,g.jsx)("br",{}),(0,g.jsx)("p",{children:"press the key Alt+Shift+2+2"}),(0,g.jsx)("button",{onClick:()=>{var n;const t=new r.Dr;t.icon=(0,g.jsx)(c.a49,{color:"blue"}),t.content=(0,g.jsx)("div",{children:"added"}),t.id=h(),t.style={color:"red",fontWeight:"bold"},t.accessKey="22",t.title="added",t.url="https://www.google.com/",t.target="_blank",t.isOpen=!0,t.selected=!0,null===(n=t.items)||void 0===n||n.push((0,r.iZ)({content:"sub",selected:!0})),e.current.AddItems(t)},children:"Add Item"}),(0,g.jsx)("div",{children:(0,g.jsx)(u.MM,{code:v})})]})}}}]);
//# sourceMappingURL=468.a8e0bad0.chunk.js.map