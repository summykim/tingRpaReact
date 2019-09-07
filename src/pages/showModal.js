import React ,{ Component}from 'react';
import { Button, Modal,Form } from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types';



export default class  UserShowModal extends Component  {
    constructor(props) {
        super(props);

      }

      PropTypes={
        user_id:PropTypes.string.isRequired,
        user_nm:PropTypes.string.isRequired,
        chbot_key:PropTypes.string,
        user_phone:PropTypes.string.isRequired,
        user_email:PropTypes.string.isRequired,
        user_typ:PropTypes.string.isRequired
    }
  
     toggleUpdateUser(){

        axios({
              method: 'post',
              url: 'http://169.56.96.101:18080/updateUser',
              params: {
                  userId:this.props.user.user_id,
                  userNm:this.props.user.user_nm,
                  chbotKey:this.props.user.chbot_key,
                  userPhone:this.props.user.user_phone,
                  userEmail:this.props.user.user_email,
                  userTyp:this.props.user.user_typ
              }
    
            })
            .then(response=> {
             console.log(response);
             

             this.props.onHide()
             this.props.getUserData()
            })
            .catch( error=>{
                console.log(error)
            });
    
      }
   
      toggleNewUser(){

        axios({
              method: 'post',
              url: 'http://169.56.96.101:18080/insertUser',
              params: {
                  userId:this.props.user.user_id,
                  userNm:this.props.user.user_nm,
                  chbotKey:this.props.user.chbot_key,
                  userPhone:this.props.user.user_phone,
                  userEmail:this.props.user.user_email,
                  userTyp:this.props.user.user_typ,
                  regUser:'244128'
              }
    
            })
            .then(response=> {
             console.log(response);
             this.props.onHide();
             this.props.getUserData()
            })
            .catch( error=>{
                console.log(error)
            });
    
      }
      
  
      toggleDeleteUser(){

        axios({
              method: 'post',
              url: 'http://169.56.96.101:18080/deleteUser',
              params: {
                  userId:this.props.user.user_id
              }
    
            })
            .then(response=> {
             console.log(response);
             this.props.onHide();
             this.props.getUserData()
            })
            .catch( error=>{
                console.log(error)
            });
    
      }


 render(){

    return (<Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {(this.props.user==undefined ||this.props.user.user_id=='' )?'신규사용자등록':this.props.user.user_nm+ '님 편집'}
              </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>ID</Form.Label>
                <Form.Control type="input" placeholder="사번"  value={this.props.user.user_id}
                 onChange={(e)=>{                    
                        var newUser=this.props.user;
                        newUser.user_id=e.target.value;
                        this.props.changeState(newUser);  
                }}
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>이름</Form.Label>
                <Form.Control type="input" placeholder="이름"   value={this.props.user.user_nm}
                 onChange={(e)=>{
                    var newUser=this.props.user;
                    newUser.user_nm=e.target.value;
                    this.props.changeState(newUser);  
           
                }}
                            
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email" placeholder="이메일주소"   value={this.props.user.user_email}
                                onChange={(e)=>{
                                    var newUser=this.props.user;
                                    newUser.user_email=e.target.value;
                                    this.props.changeState(newUser);  
                           
                                }}
                />

            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>휴대전화</Form.Label>
                <Form.Control type="input" placeholder="휴대전화번호"   value={this.props.user.user_phone}
                  onChange={(e)=>{
                    var newUser=this.props.user;
                    newUser.user_phone=e.target.value;
                    this.props.changeState(newUser);  
                }}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>챗봇키</Form.Label>
                <Form.Control type="input" placeholder="챗봇연동키"   value={this.props.user.chbot_key} readOnly/>
            </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>사용자구분</Form.Label>
                <Form.Control as="select"  value={this.props.user.user_typ}    
                 onChange={(e)=>{
                    var newUser=this.props.user;
                    newUser.user_typ=e.target.value;
                    this.props.changeState(newUser);  
           
                }}>
                <option >USR</option>
                <option>ADM</option>
                </Form.Control>
            </Form.Group>

            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={(this.props.curWork=='E')?this.toggleUpdateUser.bind(this):this.toggleNewUser.bind(this)}>저장</Button>
        <Button variant="warning" onClick={this.toggleDeleteUser.bind(this)}>삭제</Button>
        <Button onClick={this.props.onHide}>닫기</Button>
        </Modal.Footer>
    </Modal>);
 }
}

