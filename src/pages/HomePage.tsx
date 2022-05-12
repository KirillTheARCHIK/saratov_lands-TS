import { Box } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AuthFunctions } from '../redux/auth/functions';

export interface IHomePageProps {
}

export function HomePage(props: IHomePageProps) {
    var dispatch = useDispatch();
    useEffect(() => {
        AuthFunctions.login(dispatch, 'kirill', '12345');
    }, []);
    return (
        <Box sx={{
            backgroundColor: 'background.default',
            width: '100%',

        }}>

        </Box>
    );
}
