import {Table, Column, ColumnGroup, HeaderGroup, DataRow, RowFooter, CellFooter} from 'bsr-table-extension'
import 'bsr-table-extension/dist/index.css'
import './index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
import React from "react";

const code = `import React from "react";
import {Table, Column} from 'bsr-table-extension'
import 'bsr-table-extension/dist/index.css'

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
export function P19_3(){
    return (
        <Table rowItems={fill(100)} style={{width:"50%"}} height={200}>
            <Column nameProperty={'firstName'}>First Name</Column>
            <Column nameProperty={'lastName'}>Last Name</Column>
            <Column nameProperty={'age'} style={{width:"50px"}}>Age</Column>
            <Column nameProperty={'email'}>Email</Column>
        </Table>
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

export function P19_3() {
    return (
        <>
            <Table rowItems={fill(100)} style={{width: "50%", paddingTop: 20}} height={200}>
                <Column nameProperty={'firstName'}>First Name</Column>
                <Column nameProperty={'lastName'}>Last Name</Column>
                <Column nameProperty={'age'} style={{width: "50px"}}>Age</Column>
                <Column nameProperty={'email'}>Email</Column>
            </Table>
            <CodeSnippetJavaScript code={code}/>
        </>

    )
}