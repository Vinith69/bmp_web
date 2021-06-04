import React, { useContext } from 'react';
import Link from 'next/link';
import { Input } from 'components/forms/input';
import {
  Button,
  IconWrapper,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  // Input,
  Divider,
  LinkButton,
} from './authentication-form.style';
import { Facebook } from 'assets/icons/Facebook';
import { Google } from 'assets/icons/Google';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage, useIntl } from 'react-intl';

interface Location{
  latitude;
  longitude;
}

export default function SignOutModal() {
  const intl = useIntl();
  const { authDispatch } = useContext<any>(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [contactNumber, setContactNumber] = React.useState('');
  const [address, setLocationAddress] = React.useState('');
  const [pincode, setPincode] = React.useState('');
  const [loc, setMapLocation] = React.useState('');
  const [lineId, setLineId] = React.useState('');

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN',
    });
  };

  // TODO: Implement firebase register using email and password.
  const userRegisterCallback = () => {
    console.log("Form register button clicked");
  }

  // TODO: Implement firebase google register.
  const googleRegisterCallback = () => {
    console.log("Google register button clicked");
  }

  // TODO: Format message for different languages.
  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
        </Heading>
        <SubHeading>
          <FormattedMessage
            id='signUpText'
            defaultMessage='Every fill is required in sign up'
          />
        </SubHeading>
        <form onSubmit={userRegisterCallback}>
        {/* Input Fields Start */}
        <Input
          type='text'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder={intl.formatMessage({
            id: ' ',
            defaultMessage: 'First Name',
          })}
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />
        <Input
          type='text'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder={intl.formatMessage({
            id: ' ',
            defaultMessage: 'Last Name',
          })}
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={intl.formatMessage({
            id: ' ',
            defaultMessage: 'Email Address (example@example.com)',
          })}
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />
        <Input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={intl.formatMessage({
            id: ' ',
            defaultMessage: 'Password (min 6 characters)',
          })}
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />
        <Input
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder={intl.formatMessage({
            id: ' ',
            defaultMessage: 'Confirm Password',
          })}
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />
        <Input
          type='number'
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder={intl.formatMessage({
            id: ' ',
            defaultMessage: 'Pincode',
          })}
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />
        <Input
          type='text'
          value={address}
          onChange={(e) => setLocationAddress(e.target.value)}
          placeholder={intl.formatMessage({
            id: ' ',
            defaultMessage: 'Type your address',
          })}
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />
        <Input 
          type='number' 
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          placeholder={intl.formatMessage({
            id: ' ',
            defaultMessage: 'Contact No.',
          })}
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />
        <Input 
          type='number' 
          value={lineId}
          onChange={(e) => setLineId(e.target.value)}
          placeholder={intl.formatMessage({
            id: ' ',
            defaultMessage: 'Select LineId',
          })}
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />
        {/* TODO: Change this input method to map */}
        <Input 
          type='text' 
          value={loc}
          onChange={(e) => setMapLocation(e.target.value)}
          placeholder={intl.formatMessage({
            id: ' ',
            defaultMessage: 'Select Map Location',
          })}
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />
        {/* Input Fields End */}


        <HelperText style={{ padding: '20px 0 30px' }}>
          <FormattedMessage
            id='signUpText'
            defaultMessage="By signing up, you agree to BMP's"
          />
          &nbsp;
          <Link href='/'>
            <a>
              <FormattedMessage
                id='termsConditionText'
                defaultMessage='Terms &amp; Condition'
              />
            </a>
          </Link>
        </HelperText>
        <Button variant='primary' size='big' width='100%' type='submit' >
          <FormattedMessage id='continueBtn' defaultMessage='Continue' />
        </Button>
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
          onclick={googleRegisterCallback}
        >
          <IconWrapper>
            <Google />
          </IconWrapper>
          <FormattedMessage
            id='continueGoogleBtn'
            defaultMessage='Continue with Google'
          />
        </Button>
        </form>
        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='alreadyHaveAccount'
            defaultMessage='Already have an account?'
          />{' '}
          <LinkButton onClick={toggleSignInForm}>
            <FormattedMessage id='loginBtnText' defaultMessage='Login' />
          </LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
