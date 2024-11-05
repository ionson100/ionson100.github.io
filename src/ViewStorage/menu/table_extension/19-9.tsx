import React, {useRef} from "react";
import {Column, DataRow, Table} from "bsr-table-extension";
import 'bsr-table-extension/dist/index.css'
import {v4 as uuid} from 'uuid'
import {BiSolidEdit} from "react-icons/bi";
import {codeEdit, EditUserDialog} from "./EditUser";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code = `import React, {useRef} from "react";
import {Column, DataRow, Table} from "bsr-table-extension";
import 'bsr-table-extension/dist/index.css'
import {v4 as uuid} from 'uuid'
import {BiSolidEdit} from "react-icons/bi";
import {EditUserDialog} from "./EditUser";

export type User = {
    id: string
    firstName: string
    lastName: string
    email: string
    age: number
}

export default function P19_9() {
    const refTable = useRef<Table>(null)
    const list: DataRow<User, any>[] = []

    function fill(count: number) {
        list.length = 0
        for (let i = 0; i < count; i++) {
            const user: User = {
                id: uuid(),
                age: 5 + i,
                email: "user" + i + "@user.com",
                firstName: "User" + i,
                lastName: "User LN:" + i
            }
            list.push({
                id: user.id,
                tag: user,
                style: {padding: 3},
                getView: () => {
                    return {
                        button: <div onClick={() => {
                            EditUserDialog(user).then(r => {
                                if (r.mode === '200') {
                                    refTable.current?.Refresh(() => {
                                        refTable.current?.SelectRowById([user.id])
                                    })
                                }
                            })
                        }}><BiSolidEdit size={25} color={'#036239'}/></div>,
                        age: user.age,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName
                    }
                }
            })
        }
        return list
    }

    return (
        <Table
            useRowSelection
            ref={refTable}
            rowItems={fill(5)}
            style={{width: "50%", marginTop: 20}}>
            <Column nameProperty={'button'} style={{width: 30}}></Column>
            <Column nameProperty={'firstName'}>First Name:</Column>
            <Column nameProperty={'lastName'}>Last Name:</Column>
            <Column nameProperty={'age'}>Age:</Column>
            <Column nameProperty={'email'}>Email:</Column>
        </Table>
    )
}`


export type User = {
    id: string
    firstName: string
    lastName: string
    email: string
    age: number
}

export default function App() {
    const refTable = useRef<Table>(null)
    const list: DataRow<User, any>[] = []

    function fill(count: number) {
        list.length = 0
        for (let i = 0; i < count; i++) {
            const user: User = {
                id: uuid(),
                age: 5 + i,
                email: "user" + i + "@user.com",
                firstName: "User" + i,
                lastName: "User LN:" + i
            }
            list.push({
                id: user.id,
                tag: user,
                style: {padding: 3},
                getView: () => {
                    return {
                        button: <div onClick={() => {
                            EditUserDialog(user).then(r => {
                                if (r.mode === '200') {
                                    refTable.current?.Refresh(() => {
                                        refTable.current?.SelectRowById([user.id])
                                    })
                                }
                            })
                        }}><BiSolidEdit size={25} color={'#036239'}/></div>,
                        age: user.age,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName
                    }
                }
            })
        }
        return list
    }

    return (
        <>
            <Table
                useRowSelection
                ref={refTable}
                rowItems={fill(5)}
                style={{width: "50%", marginTop: 20}}>
                <Column nameProperty={'button'} style={{width: 30}}></Column>
                <Column nameProperty={'firstName'}>First Name:</Column>
                <Column nameProperty={'lastName'}>Last Name:</Column>
                <Column nameProperty={'age'}>Age:</Column>
                <Column nameProperty={'email'}>Email:</Column>
            </Table>
            <p>19-1.tsx</p>
            <CodeSnippetJavaScript code={code}/>
            <p>EditUser.tsx</p>
            <CodeSnippetJavaScript code={codeEdit}/>

        </>

    )
}
