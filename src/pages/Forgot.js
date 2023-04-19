import React from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBInput,
  MDBCardBody,
  MDBCard,
}
from 'mdb-react-ui-kit';


export function Forgot() {
  return (
    <div style={{ height: '100vh'}} className="bg-cl">
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundColor:'blue'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Forgot Your Password?</h2>
          <p>We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
          <MDBInput wrapperClass='mb-4' style={{borderRadius:"30px"}} placeholder='Enter Email Address' size='lg' id='form2' type='email'/>

          <MDBBtn className='mb-4 w-100 ' href='/' style={{borderRadius:"30px",backgroundColor:"#4e73df"}} size='lg'>Reset Password</MDBBtn>
          
          <div>
          <a href="/">Create an Account!</a>
          </div>
          <div>
          <a href="/">Already have an account? Login!</a>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
  );
}
