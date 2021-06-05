import {jsx} from '@emotion/core';
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/router';
import { createContext } from 'react';

import {useAuth} from '../../../utils/auth';
import { AuthContext } from './auth.context';



const AuthContent = ({register, errors, type, ...rest}) => {
    
}