import {useRef} from "react";
import {Table, Column, ColumnGroup, HeaderGroup, DataRow, RowFooter, CellFooter} from 'bsr-table-extension'
import 'bsr-table-extension/dist/index.css'

import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code=`import {useRef} from "react";
import {Table, Column, ColumnGroup, HeaderGroup, DataRow, RowFooter, CellFooter} from 'bsr-table-extension'
import 'bsr-table-extension/dist/index.css'


type User = {
    firstName: string
    lastName: string
    email: string
    age: number
}
const list: DataRow<User, User>[] = []

function fill(count: number) {

    list.length = 0
    for (let i = 0; i < count; i++) {
        const user: User = {
            age: 15 + i,
            email: "user" + i + "@user.com",
            firstName: "User" + i,
            lastName: "User LN:" + i
        }
        list.push({
            title: user.firstName+ " "+ user.lastName,
            tag: user,
            getView: () => {
                return user
            }
        })
    }
    return list
}

export default function App() {
    const refTable = useRef<Table>(null)
    return (
       
            <Table ref={refTable} rowItems={fill(5)}  style={{width: "50%"}}>
                <Column nameProperty={'firstName'}>First Name:</Column>
                <Column nameProperty={'lastName'}>Last Name:</Column>
                <ColumnGroup style={{backgroundColor: "yellow"}}>
                    <Column style={{width: 50}} nameProperty={'age'}>Age:</Column>
                    <Column nameProperty={'email'}>Email:</Column>
                </ColumnGroup>
                <RowFooter>
                    <CellFooter colspan={3}>total:</CellFooter>
                    <CellFooter>{list.length}</CellFooter>
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

function fill(count: number) {

    list.length = 0
    for (let i = 0; i < count; i++) {
        const user: User = {
            age: 15 + i,
            email: "user" + i + "@user.com",
            firstName: "User" + i,
            lastName: "User LN:" + i
        }
        list.push({
            title: user.firstName+ " "+ user.lastName,
            tag: user,
            getView: () => {
                return user
            }
        })
    }
    return list
}

export default function P19_5() {
    const refTable = useRef<Table>(null)
    return (
        <>
            <Table ref={refTable} rowItems={fill(5)}  style={{width: "50%",marginTop:20}}>
                <Column nameProperty={'firstName'}>First Name:</Column>
                <Column nameProperty={'lastName'}>Last Name:</Column>
                <ColumnGroup style={{backgroundColor: "rgba(245,239,175,0.94)"}}>
                    <Column style={{width: 50}} nameProperty={'age'}>Age:</Column>
                    <Column nameProperty={'email'}>Email:</Column>
                </ColumnGroup>
                <RowFooter>
                    <CellFooter colspan={3}>total:</CellFooter>
                    <CellFooter>{list.length}</CellFooter>
                </RowFooter>
            </Table>
            <CodeSnippetJavaScript code={code}/>
        </>

    )
}