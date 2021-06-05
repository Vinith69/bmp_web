import React, { useContext } from 'react';
import { ProfileContext } from 'contexts/profile/profile.context';
import {
  SettingsForm,
  SettingsFormContent,
  HeadingSection,
  Title,
  Row,
  Col,
} from './settings.style';
import { Button } from 'components/button/button';
import { Input } from 'components/forms/input';
import { FormattedMessage } from 'react-intl';
import { Label } from 'components/forms/label';
import Contact from 'features/contact/contact';
import Address from 'features/address/address';
import Payment from 'features/payment/payment';

type SettingsContentProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const SettingsContent: React.FC<SettingsContentProps> = ({ deviceType }) => {
  const { state, dispatch } = useContext(ProfileContext);

  // console.log(state);

  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch({
      type: 'HANDLE_ON_INPUT_CHANGE',
      payload: { value, field: name },
    });
  };

  const handleSave = async () => {
    const { firstName, lastName, email } = state;
    console.log(firstName, lastName, email, 'firstName,lastName, email');
  };

  const handlePasswordReset = async () => {

  };

  return (
    <SettingsForm>
      <SettingsFormContent>
        <HeadingSection>
          <Title>
            <FormattedMessage
              id='profilePageTitle'
              defaultMessage='Your Profile'
            />
          </Title>
        </HeadingSection>
        <Row style={{ alignItems: 'flex-end', marginBottom: '50px' }}>
          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              <FormattedMessage
                id='profileFirstNameField'
                defaultMessage='First Name'
              />
            </Label>
            <Input
              type='text'
              label='firstName'
              placeholder="Enter Your Firstname"
              name='firstName'
              value={state.firstName}
              onChange={handleChange}
              backgroundColor='#F7F7F7'
              height='48px'
            />
          </Col>

          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              <FormattedMessage
                id='profileLastNameField'
                defaultMessage='Last Name'
              />
            </Label>
            <Input
              type='text'
              label='lastName'
              placeholder="Enter Your Lastname"
              name='lastName'
              value={state.lastName}
              onChange={handleChange}
              backgroundColor='#F7F7F7'
              height='48px'
            />
          </Col>

          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              <FormattedMessage
                id='profileEmailField'
                defaultMessage='Your Email'
              />
            </Label>
            <Input
              type='email'
              name='email'
              label='Email Address'
              placeholder="Enter Your Email"
              value={state.email}
              onChange={handleChange}
              backgroundColor='#F7F7F7'
            />
          </Col>

          {/* Padding right */}
          <Col xs={12} sm={2} md={2} lg={5}>

          </Col>

          <Col xs={12} sm={2} md={2} lg={3}>
            <Button size='big' style={{ width: '100%' }} onClick={handleSave}>
              <FormattedMessage id='profileSaveBtn' defaultMessage='Save' />
            </Button>
          </Col>

          {/* Padding right */}
          <Col xs={12} sm={2} md={2} lg={5}>

          </Col>



          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              <FormattedMessage
                id='profileNewPasswordField'
                defaultMessage='New Password'
              />
            </Label>
            <Input
              type='password'
              label='password'
              placeholder="Enter New Password"
              name='password'
              value={state.password}
              onChange={handleChange}
              backgroundColor='#F7F7F7'
              height='48px'
            />
          </Col>

          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              <FormattedMessage
                id='profileConfirmPasswordField'
                defaultMessage='Confirm Password'
              />
            </Label>
            <Input
              type='password'
              label='confirmPassword'
              placeholder="Enter New Password"
              name='ConfirmPassword'
              value={state.confirmPassword}
              onChange={handleChange}
              backgroundColor='#F7F7F7'
              height='48px'
            />
          </Col>

          <Col xs={12} sm={2} md={3} lg={3}>
            <Button size='big' style={{ width: '100%' }} onClick={handlePasswordReset}>
              <FormattedMessage id='profileResetBtn' defaultMessage='Reset Password' />
            </Button>
          </Col>
        </Row>
        {/* <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <Contact />
            </SettingsFormContent>
          </Col>
        </Row> */}
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} style={{ position: 'relative' }}>
            <SettingsFormContent>
              <Address />
            </SettingsFormContent>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <Payment deviceType={deviceType} />
            </SettingsFormContent>
          </Col>
        </Row>
      </SettingsFormContent>
    </SettingsForm>
  );
};

export default SettingsContent;
