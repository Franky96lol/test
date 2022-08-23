import PropTypes from 'prop-types'
import styled from '@mui/system/styled'
import Box from '@mui/material/Box'
import Head from 'next/head'

const Page = ({
	pageTitle,
	metaDescription,
	pageHead,
	children,
	disablePadding = false,
}) => {
	return (
		<>
			<Head>
				<title>Intranet - {pageTitle}</title>
				{metaDescription && (
					<meta name="description" content={metaDescription}></meta>
				)}
				{pageHead}
			</Head>
			<main>
				<PageContentWrapper disablePadding={disablePadding}>
					{children}
				</PageContentWrapper>
			</main>
		</>
	)
}

Page.propTypes = {
	pageTitle: PropTypes.string.isRequired,
	pageHead: PropTypes.element,
	metaDescription: PropTypes.string,
	children: PropTypes.any,
}

export default Page

const PageContentWrapper = styled(({ disablePadding, ...props }) => (
	<Box {...props} />
))(({ disablePadding, theme }) => ({
	marginTop: theme.spacing(8),
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',

	[theme.breakpoints.up('lg')]: {
		padding: disablePadding ? 0 : '15px 13%',
	},
	[theme.breakpoints.only('lg')]: {
		padding: disablePadding ? 0 : '15px 10%',
	},
	[theme.breakpoints.down('lg')]: {
		padding: disablePadding ? 0 : '15px 4%',
	},
}))
