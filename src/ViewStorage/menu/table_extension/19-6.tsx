import {v4 as uuid} from 'uuid'
import {Table, Column, ColumnGroup, HeaderGroup, DataRow, RowFooter, CellFooter} from 'bsr-table-extension'
import 'bsr-table-extension/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code = `import {v4 as uuid} from 'uuid'
import {Table, Column, ColumnGroup, HeaderGroup, DataRow, RowFooter, CellFooter} from 'bsr-table-extension'
import 'bsr-table-extension/dist/index.css'

type User = {
        firstName: string
        lastName: string
        email: string
        age: number
        id: string
    }

    function fid(count: number) {
        const list: DataRow<User, any>[] = []
        for (let i = 0; i < count; i++) {
            const user: User = {
                id: uuid(),
                age: 5 + i,
                email: "user" + i + "@user.com",
                firstName: "User" + i,
                lastName: "User LN:" + i
            }
            const d: DataRow = {
                id: user.id,
                style: {backgroundColor: "green"},
                title: user.firstName,
                onClick: (u, e) => {
                    console.log(u.tag)
                },
                className: '"myClass',
                tag: user,
                getView: () => {
                    return {
                        firstName: <div style={{fontSize: 20}}>{user.firstName}</div>,
                        lastName: <div style={{fontSize: 20, color: "red"}}>{user.firstName}</div>,
                        age: user.age,
                        email: "no date"
                    }
                }
            }
            list.push(d)
        }
        return list
    }
    
export function App() {
    return(
     <Table caption={"see log"} rowItems={fid(5)} style={{width: "50%"}} useRowSelection>
        <Column nameProperty={'firstName'}>First Name:</Column>
        <Column nameProperty={'lastName'}>Last Name:</Column>
        <Column style={{width: 50}} nameProperty={'age'}>Age:</Column>
        <Column nameProperty={'email'}>Email:</Column>
      </Table>   
    )
}

`

export function P19_6() {

    type User = {
        firstName: string
        lastName: string
        email: string
        age: number
        id: string
    }

    function fid(count: number) {
        const list: DataRow<User, any>[] = []
        for (let i = 0; i < count; i++) {
            const user: User = {
                id: uuid(),
                age: 5 + i,
                email: "user" + i + "@user.com",
                firstName: "User" + i,
                lastName: "User LN:" + i
            }
            const d: DataRow = {
                id: user.id,
                style: {backgroundColor: "yellow"},
                title: user.firstName,
                onClick: (u, e) => {
                    console.log(u.tag)
                },
                className: '"myClass',
                tag: user,
                getView: () => {
                    return {
                        firstName: <div style={{fontSize: 20}}>{user.firstName}</div>,
                        lastName: <div style={{fontSize: 20, color: "red"}}>{user.firstName}</div>,
                        age: user.age,
                        email: "no date"
                    }
                }
            }
            list.push(d)
        }
        return list
    }

    return (
        <>
            <div style={{marginTop: 20}}>
                <br/>
                <CodeSnippetJavaScript code={`
            class DataRow<T =any,V =any>{
            public title?:string;
            public style?: React.CSSProperties | undefined
            public className?: string;
            public onClick?:(dataRow:DataRow,target: EventTarget)=>void
            public id?:string
            public tag?:T
            public getView?:()=>V`
                }/>
                <br/>
                <p>Прекция</p>
                <CodeSnippetJavaScript code={`
             const d: DataRow = {
                id: user.id,
                style: {backgroundColor: "yellow"},
                title: user.firstName,
                onClick: (u, e) => {
                    console.log(u.tag)
                },
                className: 'myClass',
                tag: user,
                getView: () => {
                    return {
                        firstName:<div style={{fontSize:20}}>{user.firstName}</div>,
                        lastName:<div style={{fontSize:20,color:"red"}}>{user.firstName}</div>,
                        age:user.age,
                        email:"no date"
                    }
                }
                
                <tr id="d55b357f-2e2e-46c9-beb0-70ef187c2b62" class="myClass" title="User0" data-row-index="0"  style="background-color: green;">
                  <td data-property-name="firstName"><div style="font-size: 20px;">User0</div></td>
                  <td data-property-name="lastName"><div style="font-size: 20px; color: red;">User0</div></td>
                  <td data-property-name="age" style="width: 50px;">5</td>
                  <td data-property-name="email">no date</td>
                </tr>
                `}/>


            </div>
            <Table caption={"see log"} rowItems={fid(5)} style={{width: "50%"}} useRowSelection>
                <Column nameProperty={'firstName'}>First Name:</Column>
                <Column nameProperty={'lastName'}>Last Name:</Column>
                <Column style={{width: 50}} nameProperty={'age'}>Age:</Column>
                <Column nameProperty={'email'}>Email:</Column>
            </Table>
            <CodeSnippetJavaScript code={code}/>
        </>

    )
}