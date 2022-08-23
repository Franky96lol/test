import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar'

const UserAvatar = ({ label, color, children }) => (
	<Avatar alt={label} sx={{ bgcolor: color }}>
		{children}
	</Avatar>
)

UserAvatar.propTypes = {
	label: PropTypes.string,
	color: PropTypes.string,
	children: PropTypes.any,
}

export default UserAvatar
