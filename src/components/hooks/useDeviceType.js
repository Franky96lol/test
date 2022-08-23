import { useTheme } from '@mui/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// eslint-disable-next-line react/display-name
const useDeviceType = () => {
	const theme = useTheme()
	const isPhone = useMediaQuery(theme.breakpoints.down('sm'))
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
	const isNotDesktop = useMediaQuery(theme.breakpoints.down('md'))
	const isTablet = useMediaQuery(theme.breakpoints.only('md'))

	return { isDesktop, isTablet, isPhone, isNotDesktop }
}

export default useDeviceType
