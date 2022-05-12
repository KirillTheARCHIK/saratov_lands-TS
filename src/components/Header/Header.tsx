import { Box } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderNavBar } from './HeaderNavBar';

export interface IHeaderProps {
}

export function Header(props: IHeaderProps) {
    var location = useLocation();


    return (
        <Box sx={{
            height: 50,
            width: '100%',
            backgroundColor: 'background.default',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            {/* Logo */}
            <Box sx={{}}>

            </Box>
            {/* Nav */}
            <HeaderNavBar />
            {/* User */}
            <Box sx={{}}>

            </Box>
        </Box>
    );
}
