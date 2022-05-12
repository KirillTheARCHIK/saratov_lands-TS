import { Box, Button } from '@mui/material';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export interface IHeaderNavBarProps {
}

export function HeaderNavBar(props: IHeaderNavBarProps) {
    var location = useLocation();

    const routes = [
        { path: '/', text: 'Главная' },
        { path: '/catalog', text: 'Каталог' },
        { path: '/map', text: 'Карта' },
    ];

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
            }}>
                {routes.map((route) => (
                    <NavLink path={route.path} text={route.text} isSelected={location.pathname == route.path} />
                ))}
            </Box>
        </Box>
    );
}

export interface INavLinkProps {
    isSelected: boolean,
    path: string,
    text: string,
}

export function NavLink(props: INavLinkProps) {
    var navigator = useNavigate();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Button variant='text' disableRipple={true} sx={{
                color: props.isSelected ? '#000000' : null,
                padding: 0,
                minWidth: 0,
                margin: '0 10px',
            }} onClick={() => {
                navigator(props.path);
            }}>
                {props.text}
            </Button>
            {props.isSelected && <Box sx={{
                borderRadius: 100,
                height: 6,
                width: 6,
                backgroundColor: 'primary.main',
            }} />}
        </Box>
    );
}
