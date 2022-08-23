import PropTypes from 'prop-types'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/system/Box'
import NextLink from 'next/link'
import { StyledMuiLink, StyledMuiToolbar, UserAvatarWrapper } from './styled'
import UserAvatar from 'components/others/UserAvatar'
import { HOME_URL } from 'constants/url'
import SearchInput from 'components/others/SearchInput'

const NavBar = () => (
	<MuiAppBar>
		<StyledMuiToolbar disableGutters>
			<NextLink href={HOME_URL} passHref>
				<StyledMuiLink underline="none">Inicio</StyledMuiLink>
			</NextLink>

			<Box display="flex">
				<SearchInput />
				<UserAvatarWrapper>
					<UserAvatar />
				</UserAvatarWrapper>
			</Box>
		</StyledMuiToolbar>
	</MuiAppBar>
)

export default NavBar
