import React , { Component} from 'react';
//import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
//import { withStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button'

//const useStyles = withStyles({
const styles = theme => ({
  root : {
    width : '100%',
    //marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  }
})

//Hello WATO bro
const customers =
  [
    {
       'id'      : 1
      ,'image'   : 'https://placeimg.com/64/64/1'
      ,'name'    : '박근영'
      ,'birthday': '911115'
      ,'gender'  : '남자'
      ,'job'     : '와토'
    },
    {
       'id'      : 2
      ,'image'   : 'https://placeimg.com/64/64/2'
      ,'name'    : '박유라'
      ,'birthday': '941018'
      ,'gender'  : '여자'
      ,'job'     : 'Sexy Furniture Designer'
    },
    {
       'id'      : 3
      ,'image'   : 'https://placeimg.com/64/64/3'
      ,'name'    : '안종순'
      ,'birthday': '91xxxx'
      ,'gender'  : '남자'
      ,'job'     : '와토'
    },
  ]


function App(){
  const classes = styles();
  return (
    <Paper className={ classes.root }>
      <Table className={ classes.table }>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            customers.map(c => {
              return (
                <Customer
                  key      = {c.id}
                  image    = {c.image}
                  id       = {c.id}
                  name     = {c.name}
                  birthday = {c.birthday}
                  gender   = {c.gender}
                  job      = {c.job}
                />
              );
            })
          }
          </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
