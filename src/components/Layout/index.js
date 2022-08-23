import PropTypes from 'prop-types'
import NavBar from './NavBar'

const Layout = ({ children }) => (
	<>
		<NavBar />
		{children}
	</>
)

Layout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.shape()]),
}

export default Layout
