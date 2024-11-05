import {Column, DataRow, Table, HeaderGroup, ColumnGroup} from "bsr-table-extension";
import 'bsr-table-extension/dist/index.css'
import React from "react";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code=`import {Column, DataRow, Table, HeaderGroup, ColumnGroup} from "bsr-table-extension";
import 'bsr-table-extension/dist/index.css'
import React from "react";


type User = {
    firstName: string
    lastName: string
    email: string
    age: number
}

function fill(count: number) {
    const list: DataRow<User, User>[] = []
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

export default function App() {
    return (
        <>
            <Table
                style={{marginTop: 20, width: "50%"}}
                rowItems={fill(3)}>

                <ColumnGroup style={{color:"#0b91b6"}}>
                    <Column nameProperty={'firstName'}>First Name</Column>
                    <Column nameProperty={'lastName'}>Last Name</Column>
                </ColumnGroup>


                <ColumnGroup  style={{color:"#57ad09",fontWeight:"bold",textAlign:"center"}}>
                    <Column nameProperty={'age'} style={{width: "50px"}}>Age</Column>
                </ColumnGroup>

                <ColumnGroup style={{color:"rgba(187,161,52,0.94)"}}>
                    <Column nameProperty={'email'}>Email</Column>
                </ColumnGroup>
            </Table>
        </>
    )
}`


















type User = {
    firstName: string
    lastName: string
    email: string
    age: number
}

function fill(count: number) {
    const list: DataRow<User, User>[] = []
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

export default function P19_11() {
    return (
        <>
            <Table
                style={{marginTop: 20, width: "50%"}}
                rowItems={fill(3)}>

                <ColumnGroup style={{color:"#0b91b6"}}>
                    <Column nameProperty={'firstName'}>First Name</Column>
                    <Column nameProperty={'lastName'}>Last Name</Column>
                </ColumnGroup>


                <ColumnGroup  style={{color:"#57ad09",fontWeight:"bold",textAlign:"center"}}>
                    <Column nameProperty={'age'} style={{width: "50px"}}>Age</Column>
                </ColumnGroup>

                <ColumnGroup style={{color:"rgba(187,161,52,0.94)"}}>
                    <Column nameProperty={'email'}>Email</Column>
                </ColumnGroup>

            </Table>
            <CodeSnippetJavaScript code={code}/>

        </>
    )
}