import {Table, Column, ColumnGroup, HeaderGroup, DataRow, RowFooter, CellFooter} from 'bsr-table-extension'
import 'bsr-table-extension/dist/index.css'
import './index.css'

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

export default function P19_1() {

    return (

        <div id={'t12'} >

            <Table rowItems={fid(5)} style={{width: "50%"}} caption={'table1 simple'}>
                <Column nameProperty={'firstName'}>First Name:</Column>
                <Column nameProperty={'lastName'}>Last Name:</Column>
                <Column style={{width: 50}} nameProperty={'age'}>Age:</Column>
                <Column nameProperty={'email'}>Email:</Column>
            </Table>
            <Table rowItems={fid(5)} style={{width: "50%"}} caption={'table2 footer static'}>
                <Column nameProperty={'firstName'}>First Name:</Column>
                <Column nameProperty={'lastName'}>Last Name:</Column>
                <Column style={{width: 50}} nameProperty={'age'}>Age:</Column>
                <Column nameProperty={'email'}>Email:</Column>
                <RowFooter>
                    <CellFooter colspan={3}>total:</CellFooter>
                    <CellFooter>5</CellFooter>
                </RowFooter>
            </Table>
            <Table rowItems={fid(5)} style={{width: "50%"}} caption={'table3 header group'}>
                <HeaderGroup caption={'user names'} style={{fontSize:16,paddingTop:3,paddingBottom:3}}>
                    <Column nameProperty={'firstName'}>First Name:</Column>
                    <Column nameProperty={'lastName'}>Last Name:</Column>
                </HeaderGroup>

                <Column style={{width: 50}} nameProperty={'age'}>Age:</Column>
                <Column nameProperty={'email'}>Email:</Column>
                <RowFooter>
                    <CellFooter colspan={3}>total:</CellFooter>
                    <CellFooter>5</CellFooter>
                </RowFooter>
            </Table>

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
            <Table rowItems={fid(100)} style={{width: "50%"}} caption={'table5 Ctr - up down enter, multi select'} height={400} useRowSelection>
                <Column nameProperty={'firstName'}>First Name:</Column>
                <Column nameProperty={'lastName'}>Last Name:</Column>
                <Column style={{width: 50}} nameProperty={'age'}>Age:</Column>
                <Column nameProperty={'email'}>Email:</Column>
                <RowFooter>
                    <CellFooter colspan={3}>total:</CellFooter>
                    <CellFooter>100</CellFooter>
                </RowFooter>
            </Table>
            <Table rowItems={fid(100)} style={{width: "50%"}} caption={'table6 footer scroll '} height={400} >
                <Column nameProperty={'firstName'}>First Name:</Column>
                <Column nameProperty={'lastName'}>Last Name:</Column>
                <Column style={{width: 50}} nameProperty={'age'}>Age:</Column>
                <Column nameProperty={'email'}>Email:</Column>
                <RowFooter useScrollContent style={{backgroundColor:"green",color:"white"}}>
                    <CellFooter colspan={3}>total:</CellFooter>
                    <CellFooter>100</CellFooter>
                </RowFooter>
            </Table>

            <Table rowItems={fid(30)} style={{width: "50%"}} caption={'table7 not scroll'}  >
                <Column nameProperty={'firstName'}>First Name:</Column>
                <Column nameProperty={'lastName'}>Last Name:</Column>
                <Column style={{width: 50}} nameProperty={'age'}>Age:</Column>
                <Column nameProperty={'email'}>Email:</Column>
                <RowFooter useScrollContent style={{backgroundColor:"green",color:"white"}}>
                    <CellFooter colspan={3}>total:</CellFooter>
                    <CellFooter>30</CellFooter>
                </RowFooter>
            </Table>
        </div>


    )
}