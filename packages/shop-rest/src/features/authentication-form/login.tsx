import React, { useContext } from 'react';
import {
  LinkButton,
  Button,
  IconWrapper,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  OfferSection,
  Offer,
  // Input,
  Divider,
} from './authentication-form.style';
import { Facebook } from 'assets/icons/Facebook';
import { Google } from 'assets/icons/Google';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage, useIntl } from 'react-intl';
import { closeModal } from '@redq/reuse-modal';
import { Input } from 'components/forms/input';

import firebase from "firebase/app";
import 'firebase/auth';

export default function SignInModal() {
  const intl = useIntl();
  const { auth, authDispatch } = useContext<any>(AuthContext);
  //const { auth } = useContext<any>(auth);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const toggleSignUpForm = () => {
    authDispatch({
      type: 'SIGNUP',
    });
  };

  const toggleForgotPassForm = () => {
    authDispatch({
      type: 'FORGOTPASS',
    });
  };

  /// Login using email and password.
  /// TODO: Implement firebase email and pass login.
  const loginCallback = () => {
    if (typeof window !== 'undefined') {
      console.log("Dare login?");
      auth.signin(email, password).then(() => {
          localStorage.setItem('access_token', `${email}.${password}`);
          authDispatch({ type: 'SIGNIN_SUCCESS' });
          //closeModal();
            //router.push('/deals');
        })
        .catch((error) => {
            /*toast({
                title: 'An error occurred.',
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true
            });*/
        });
      
      
        //authDispatch({ type: 'SIGNIN_SUCCESS' });
        closeModal();
      
    }
  };
  /// Google login.
  /// TODO: Implement firebase google login.
  const googleLoginCallback = () => {
    if (typeof window !== 'undefined') {
      //localStorage.setItem('access_token', `${email}.${password}`);
      authDispatch({ type: 'SIGNIN_SUCCESS' });
      closeModal();
    }
  };

  
  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='welcomeBack' defaultMessage='Welcome Back' />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id='loginText'
            defaultMessage='Login with your email &amp; password'
          />
        </SubHeading>
        <form onSubmit={loginCallback}>
          <Input
            type='email'
            placeholder={intl.formatMessage({
              id: ' ',
              defaultMessage: 'Email Address.',
            })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            height='48px'
            backgroundColor='#F7F7F7'
            mb='10px'
          />

          <Input
            type='password'
            placeholder={intl.formatMessage({
              id: ' ',
              defaultMessage: 'Password',
            })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            height='48px'
            backgroundColor='#F7F7F7'
            mb='10px'
          />

          <Button
            variant='primary'
            size='big'
            style={{ width: '100%' }}
            type='submit'
          >
            <FormattedMessage id='continueBtn' defaultMessage='Continue' />
          </Button>
        </form>
        <Divider>
          <span>
            <FormattedMessage id='orText' defaultMessage='or' />
          </span>
        </Divider>

        {/*<Button
          variant='primary'
          size='big'
          style={{
            width: '100%',
            backgroundColor: '#4267b2',
            marginBottom: 10,
          }}
          onClick={loginCallback}
        >
          <IconWrapper>
            <Facebook />
          </IconWrapper>
          <FormattedMessage
            id='continueFacebookBtn'
            defaultMessage='Continue with Facebook'
          />
        </Button>*/}

        <Button
          variant='primary'
          size='big'
          style={{ width: '100%', backgroundColor: '#4285f4' }}
          onClick={googleLoginCallback}
        >
          <IconWrapper>
            <Google />
          </IconWrapper>
          <FormattedMessage
            id='continueGoogleBtn'
            defaultMessage='Continue with Google'
          />
        </Button>

        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='dontHaveAccount'
            defaultMessage="Don't have any account?"
          />{' '}
          <LinkButton onClick={toggleSignUpForm}>
            <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
          </LinkButton>
        </Offer>
      </Container>

      <OfferSection>
        <Offer>
          <FormattedMessage
            id='forgotPasswordText'
            defaultMessage='Forgot your password?'
          />{' '}
          <LinkButton onClick={toggleForgotPassForm}>
            <FormattedMessage id='resetText' defaultMessage='Reset It' />
          </LinkButton>
        </Offer>
      </OfferSection>
    </Wrapper>
  );
}
