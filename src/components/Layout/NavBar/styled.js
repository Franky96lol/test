import styled from '@mui/system/styled'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/system/Box'

export const StyledMuiToolbar = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',

	[theme.breakpoints.up('lg')]: {
		padding: '15px 13%',
	},
	[theme.breakpoints.only('lg')]: {
		padding: '15px 10%',
	},
	[theme.breakpoints.down('lg')]: {
		padding: '15px 4%',
	},
}))

export const StyledMuiLink = styled(Link)(({ theme }) => ({
	textTransform: 'uppercase',
	color: theme.palette.white,
	position: 'relative',

	'&:hover::before': {
		transformOrigin: 'left',
		transform: 'scaleX(1)',
	},
	'&::before': {
		content: '""',
		position: 'absolute',
		width: '80%',
		height: '2px',
		borderRadius: '2px',
		backgroundColor: '#FFF',
		bottom: 0,
		left: 0,
		right: 0,
		margin: 'auto',
		transformOrigin: 'right',
		transform: 'scaleX(0)',
		transition: 'transform .3s ease-in-out',
	},
}))

export const UserAvatarWrapper = styled(Box)(({ theme }) => ({
	marginLeft: theme.spacing(1),
}))
