import withHoc from 'components/hocs/withHoc'
import { stringToColor } from './helpers'
import UserAvatar from './UserAvatar'

const withContainer = withHoc(({ user }) => {
	const { name } = user || ''

	return {
		label: name,
		children: name ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}` : null,
		color: name ? stringToColor(name) : '',
	}
})

export default withContainer(UserAvatar)
