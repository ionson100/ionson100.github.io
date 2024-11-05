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
                <HeaderGroup caption={"names"} style={{padding: 0}}>
                    <Column nameProperty={'firstName'}>First Name</Column>
                    <Column nameProperty={'lastName'}>Last Name</Column>
                </HeaderGroup>
                <Column nameProperty={'age'} style={{width: "50px"}}>Age</Column>
                <Column nameProperty={'email'}>Email</Column>
            </Table>
            <Table
                style={{marginTop: 20, width: "50%"}}
                rowItems={fill(3)}>
                <Column nameProperty={'firstName'}>First Name</Column>
                <HeaderGroup caption={"mode"} style={{padding: 0, width: 310}}>
                    <Column nameProperty={'lastName'} style={{width: 200}}>Last Name</Column>
                    <Column nameProperty={'age'} style={{width: "50px"}}>Age</Column>
                </HeaderGroup>
                <Column nameProperty={'email'}>Email</Column>
            </Table>

            <Table
                style={{marginTop: 20, width: "50%"}}
                rowItems={fill(3)}>
                <Column nameProperty={'firstName'}>First Name</Column>
                <HeaderGroup caption={"mode"} style={{padding: 0, width: 310}}>
                    <Column nameProperty={'lastName'} style={{width: 200}}>Last Name</Column>
                    <ColumnGroup style={{textAlign: "center", fontWeight: "bold", color: "green"}}>
                        <Column nameProperty={'age'} style={{width: "50px", color: "green"}}>Age</Column>
                    </ColumnGroup>
                </HeaderGroup>
                <Column nameProperty={'email'}>Email</Column>
            </Table>
            <Table
                style={{marginTop: 20, width: "50%"}}
                rowItems={fill(3)}>
                <HeaderGroup style={{backgroundColor: "#037d9e", color: "white"}}>
                    <Column nameProperty={'firstName'}>First Name</Column>
                </HeaderGroup>
                <HeaderGroup caption={"mode"}
                             style={{padding: 0, width: 310, backgroundColor: "#037d9e", color: "white"}}>

                    <Column nameProperty={'lastName'} style={{width: 200}}>Last Name</Column>
                    <ColumnGroup style={{textAlign: "center", fontWeight: "bold", color: "green"}}>
                        <Column nameProperty={'age'} style={{width: "50px", color: "green"}}>Age</Column>
                    </ColumnGroup>
                </HeaderGroup>
                <HeaderGroup style={{backgroundColor: "#037d9e", color: "white"}}>
                    <Column nameProperty={'email'}>Email</Column>
                </HeaderGroup>
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

export default function P19_10() {
    return (
        <>
            <Table
                style={{marginTop: 20, width: "50%"}}
                rowItems={fill(3)}>
                <HeaderGroup caption={"names"} style={{padding: 0}}>
                    <Column nameProperty={'firstName'}>First Name</Column>
                    <Column nameProperty={'lastName'}>Last Name</Column>
                </HeaderGroup>
                <Column nameProperty={'age'} style={{width: "50px"}}>Age</Column>
                <Column nameProperty={'email'}>Email</Column>
            </Table>
            <Table
                style={{marginTop: 20, width: "50%"}}
                rowItems={fill(3)}>
                <Column nameProperty={'firstName'}>First Name</Column>
                <HeaderGroup caption={"mode"} style={{padding: 0, width: 310}}>
                    <Column nameProperty={'lastName'} style={{width: 200}}>Last Name</Column>
                    <Column nameProperty={'age'} style={{width: "50px"}}>Age</Column>
                </HeaderGroup>
                <Column nameProperty={'email'}>Email</Column>
            </Table>

            <Table
                style={{marginTop: 20, width: "50%"}}
                rowItems={fill(3)}>
                <Column nameProperty={'firstName'}>First Name</Column>
                <HeaderGroup caption={"mode"} style={{padding: 0, width: 310}}>
                    <Column nameProperty={'lastName'} style={{width: 200}}>Last Name</Column>
                    <ColumnGroup style={{textAlign: "center", fontWeight: "bold", color: "green"}}>
                        <Column nameProperty={'age'} style={{width: "50px", color: "green"}}>Age</Column>
                    </ColumnGroup>
                </HeaderGroup>
                <Column nameProperty={'email'}>Email</Column>
            </Table>
            <Table
                style={{marginTop: 20, width: "50%"}}
                rowItems={fill(3)}>
                <HeaderGroup style={{backgroundColor: "#037d9e", color: "white"}}>
                    <Column nameProperty={'firstName'}>First Name</Column>
                </HeaderGroup>
                <HeaderGroup caption={"mode"}
                             style={{padding: 0, width: 310, backgroundColor: "#037d9e", color: "white"}}>

                    <Column nameProperty={'lastName'} style={{width: 200}}>Last Name</Column>
                    <ColumnGroup style={{textAlign: "center", fontWeight: "bold", color: "green"}}>
                        <Column nameProperty={'age'} style={{width: "50px", color: "green"}}>Age</Column>
                    </ColumnGroup>
                </HeaderGroup>
                <HeaderGroup style={{backgroundColor: "#037d9e", color: "white"}}>
                    <Column nameProperty={'email'}>Email</Column>
                </HeaderGroup>
            </Table>
            <CodeSnippetJavaScript code={code}/>
        </>
    )
}