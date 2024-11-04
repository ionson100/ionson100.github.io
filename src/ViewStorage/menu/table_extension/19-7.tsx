import React, {useRef} from "react";
import {CellFooter, Column, DataRow, RowFooter, Table} from "bsr-table-extension";
import 'bsr-table-extension/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code=`import React, {useRef} from "react";
import {CellFooter, Column, DataRow, RowFooter, Table} from "bsr-table-extension";
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

    const refTable = useRef<Table>(null)
    return (
        <>
            <button onClick={() => {
                fill(0);
                refTable.current?.Refresh()
            }}>0 row
            </button>

            <button onClick={() => {
                fill(5);
                refTable.current?.Refresh()
            }}>5 row
            </button>

            <button onClick={() => {
                fill(30);
                refTable.current?.Refresh()
            }}>30 row
            </button>

            <button onClick={() => {
                refTable.current!.height = 400
            }}>scrolling
            </button>

            <button onClick={() => {
                refTable.current!.height = undefined

            }}>no scrolling
            </button>

            <Table ref={refTable} rowItems={list} style={{width: "50%", marginTop: 20}}>
                <Column nameProperty={'firstName'}>First Name</Column>
                <Column nameProperty={'lastName'}>Last Name</Column>
                <Column nameProperty={'age'} style={{width: "50px"}}>Age</Column>
                <Column nameProperty={'email'}>Email</Column>
                <RowFooter>
                    <CellFooter colspan={3}>total:</CellFooter>
                    <CellFooter>{() => {
                        return list.length
                    }}</CellFooter>
                </RowFooter>
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
const list: DataRow<User, User>[] = []

function fill(count: number) {
    list.length = 0
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

export default function P19_7() {

    const refTable = useRef<Table>(null)
    return (
        <>
            <button onClick={() => {
                fill(0);
                refTable.current?.Refresh()
            }}>0 row
            </button>

            <button onClick={() => {
                fill(5);
                refTable.current?.Refresh()
            }}>5 row
            </button>

            <button onClick={() => {
                fill(30);
                refTable.current?.Refresh()
            }}>30 row
            </button>

            <button onClick={() => {
                refTable.current!.height = 400
            }}>scrolling
            </button>

            <button onClick={() => {
                refTable.current!.height = undefined

            }}>no scrolling
            </button>

            <Table ref={refTable} rowItems={list} style={{width: "50%", marginTop: 20}}>
                <Column nameProperty={'firstName'}>First Name</Column>
                <Column nameProperty={'lastName'}>Last Name</Column>
                <Column nameProperty={'age'} style={{width: "50px"}}>Age</Column>
                <Column nameProperty={'email'}>Email</Column>
                <RowFooter>
                    <CellFooter colspan={3}>total:</CellFooter>
                    <CellFooter>{() => {
                        return list.length
                    }}</CellFooter>
                </RowFooter>
            </Table>
            <CodeSnippetJavaScript code={code}/>
        </>
    )
}