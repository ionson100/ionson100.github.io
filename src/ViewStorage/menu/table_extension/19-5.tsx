import React from "react";
import {Table, Column, DataRow, CellFooter, RowFooter} from 'bsr-table-extension'
import 'bsr-table-extension/dist/index.css'
import './index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
import {ColumnGroup} from "bsr-table";

const code=`import React from "react";
import {Table, Column, DataRow} from 'bsr-table-extension'
import 'bsr-table-extension/dist/index.css'


type User = {
    firstName: string
    lastName: string
    email: string
    age: number
}

function fid(count: number) {
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

export default function App(){
    return (
        <Table rowItems={fid(10)} style={{width:"50%"}}>
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

function fid(count: number) {
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

export default function P19_5(){

    return (
        <>
            <Table rowItems={fid(5)} style={{width: "50%"}} caption={'table4 column group'}>

                <Column nameProperty={'firstName'}>First Name:</Column>
                <Column nameProperty={'lastName'}>Last Name:</Column>


                <ColumnGroup style={{backgroundColor: "green"}}>
                    <Column style={{width: 50}} nameProperty={'age'}>Age:</Column>
                    <Column nameProperty={'email'}>Email:</Column>
                </ColumnGroup>

                <RowFooter>
                    <CellFooter colspan={3}>total:</CellFooter>
                    <CellFooter>5</CellFooter>
                </RowFooter>
            </Table>
        </>

    )
}