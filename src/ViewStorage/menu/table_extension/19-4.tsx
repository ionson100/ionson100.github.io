import React, {useRef} from "react";
import {Table, Column, DataRow,RowFooter,CellFooter} from 'bsr-table-extension'
import 'bsr-table-extension/dist/index.css'
import './index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code=`import React, {useRef} from "react";
import {Table, Column, DataRow,RowFooter,CellFooter} from 'bsr-table-extension'
import 'bsr-table-extension/dist/index.css'


type User = {
    firstName: string
    lastName: string
    email: string
    age: number
}
const list: DataRow<User, User>[] = []
function fid(count: number) {
    list.length=0
    for (let i = 0; i < count; i++) {
        const user: User = {
            age: 5 + i,
            email: "user" + i + "@user.com",
            firstName: "User" + i,
            lastName: "User LN:" + i
        }
        list.push({
            tag: user,
            getView: () => {
                return user
            }
        })
    }
    return list
}

export default function App(){
   const refTable=useRef<Table>(null)

    return (
        <Table ref={refTable} rowItems={fid(100)} style={{width:"50%",paddingTop:20}}  height={300}>
           <Column nameProperty={'firstName'}>First Name</Column>
           <Column nameProperty={'lastName'}>Last Name</Column>
           <Column nameProperty={'age'} style={{width:"50px"}}>Age</Column>
           <Column nameProperty={'email'}>Email</Column>
              <RowFooter>
                 <CellFooter colspan={3}>total:</CellFooter>
                 <CellFooter >{list.length}</CellFooter>
              </RowFooter>
        </Table>    
    )
}`










type User = {
    firstName: string
    lastName: string
    email: string
    age: number
}
const list: DataRow<User, User>[] = []
function fid(count: number) {
    list.length=0
    for (let i = 0; i < count; i++) {
        const user: User = {
            age: 5 + i,
            email: "user" + i + "@user.com",
            firstName: "User" + i,
            lastName: "User LN:" + i
        }
        list.push({
            tag: user,
            getView: () => {
                return user
            }
        })
    }
    return list
}

export default function P19_4(){
    const refTable=useRef<Table>(null)

    return (
        <>
            <Table ref={refTable} rowItems={fid(100)} style={{width:"50%",paddingTop:20}} height={300}>
                <Column nameProperty={'firstName'}>First Name</Column>
                <Column nameProperty={'lastName'}>Last Name</Column>
                <Column nameProperty={'age'} style={{width:"50px"}}>Age</Column>
                <Column nameProperty={'email'}>Email</Column>
                <RowFooter>
                    <CellFooter colspan={3}>total:</CellFooter>
                    <CellFooter >{list.length}</CellFooter>
                </RowFooter>
            </Table>
            <CodeSnippetJavaScript code={code}/>
        </>
    )
}