import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

export function Register(){
  return(
      <div>
          <div className="bg-cl">
              <RegisterApp/>
          </div>
      </div>
  )
}

function RegisterApp() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundColor:'blue'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an Account!</h2>
          <MDBInput wrapperClass='mb-4' style={{borderRadius:"30px"}} placeholder='First Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' style={{borderRadius:"30px"}} placeholder='Last Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' style={{borderRadius:"30px"}} placeholder='Email Address' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4' style={{borderRadius:"30px"}} placeholder='Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-4' style={{borderRadius:"30px"}} placeholder='Repeat your password' size='lg' id='form4' type='password'/>
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          </div>
          <MDBBtn href='/' className="mb-4 w-100" style={{borderRadius:"30px",backgroundColor:"#4e73df"}} size='lg'>Register Account</MDBBtn>
          
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>
          <MDBBtn href='/' className="mb-4 w-100" size="lg" style={{backgroundColor:'#ea4335',borderRadius:"30px"}}>
            <MDBIcon fab icon="google" className="mx-2"/>
           login with Google
          </MDBBtn>

          <MDBBtn href='/' className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998',borderRadius:"30px"}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            login with facebook
          </MDBBtn>

          
          <div>
          <a href="/">Forgot password?</a>
          </div>
          <div>
          <a href="/">Already have an account? Login!</a>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

