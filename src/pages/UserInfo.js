import React, { Component } from 'react';
import axios from 'axios';
import {Table,Button,Row,Col,Container} from 'react-bootstrap'
import UserShowModal  from './showModal';

class  UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUserData:{user_id:'', user_nm:'',user_email:'',user_phone:'',chbot_key:'',user_typ:''},
            editUserData:{user_id:'', user_nm:'',user_email:'',user_phone:'',chbot_key:'',user_typ:''},
            modalShow:false,
            curWork:''
        };


        this.changeEditState = this.changeEditState.bind(this);
        this.changeNewState = this.changeNewState.bind(this);
        this._getUserData = this._getUserData.bind(this);
        
      }

    componentDidMount(){
        console.log("componentDidMount")
        this._getUserData();
    }

    _getUserData(){
        axios({
            method: 'post',
            url: 'http://169.56.96.101:18080/userList',
            params: {
                userId:'', userNm:''
            }
          })
          .then(response=> {
           console.log(response);

            this.setState({
                userList : response.data  
            });
  
            console.log("setState",this.state.userList);
          })
          .catch( error=>{
              console.log(error)
          });
    }

     editUser(user_id, user_nm,user_email,user_phone,chbot_key,user_typ) {
        this.setState({
            editUserData: {user_id, user_nm,user_email,user_phone,chbot_key,user_typ}, 
            modalShow: ! this.state.modalShow,
            curWork:'E'
        });
      }

      newUser() {
        console.log("newUser",this.state)
        this.setState({
            newUserData:{user_id:'', user_nm:'',user_email:'',user_phone:'',chbot_key:'',user_typ:''}, 
            modalShow: ! this.state.modalShow,
            curWork:'N'
        });
      }

      changeEditState(user){
        this.setState({
            editUserData:user
        });
      }

      changeNewState(user){
        this.setState({
            newUserData:user
        });
      }

     _userListShow(){
           let userListDom = this.state.userList.map( user =>{
            return (<tr key={user.user_id} ><td>{user.user_id}</td>
                                <td>{user.user_nm}</td>
                                <td>{user.user_email}</td>
                                <td>{user.user_phone}</td>
                                <td>{user.chbot_key}</td>
                                <td>{user.user_typ}</td>
                                <td><Button href="#" variant="secondary" size="sm"  
                                 onClick={this.editUser.bind(this, user.user_id, user.user_nm,user.user_email,user.user_phone,user.chbot_key,user.user_typ)}>편집</Button>
                                </td></tr>
                   )
          })
          return  (
              <tbody>
              {userListDom}
              </tbody>
              )
  
     }

    render(){
        return (
            <Container fluid>
                <h2>사용자목록</h2>
                  <Row>
                    <Col><Button variant="primary" size="sm" active onClick={this.newUser.bind(this)}  >신규등록</Button></Col>
                </Row>
                <UserShowModal  user={(this.state.curWork=='N')?this.state.newUserData:this.state.editUserData}
                    show={this.state.modalShow}
                    onHide={() =>  this.setState({ ...this.state,modalShow:false})}
                    changeState={(this.state.curWork=='N')?this.changeNewState:this.changeEditState}
                    curWork={this.state.curWork}
                    getUserData={this._getUserData}
                    
                />                 
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>전화</th>
                        <th>챗봇키</th> 
                        <th>구분</th> 
                        <th>{''}</th>                                  
                        </tr>
                    </thead> 
                    {!(this.state.userList)?'Loading':this._userListShow()}
                 </Table>
            </Container>
        );
    }
};

export default UserInfo;