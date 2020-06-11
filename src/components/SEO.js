/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import busyLogo from '../../static/busy-logo.png'

function SEO({
	description = ``,
	lang = 'en',
	meta = [],
	keywords = [],
	title = ``,
}) {
	const { site } = useStaticQuery(
		graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
	)

	const metaDescription = description || site.siteMetadata.description

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				{
					name: `og:image`,
					content: busyLogo
				}
			]
				.concat(
					keywords.length > 0
						? {
							name: `keywords`,
							content: keywords.join(`, `),
						}
						: []
				)
				.concat(meta)}
		>
			<link rel="preload" as="font" href="https://use.typekit.net/af/f3ba4f/00000000000000003b9b12fa/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3" type="font/woff2" crossorigin="anonymous" />
			<link rel="preload" as="font" href="https://use.typekit.net/af/3e64fb/00000000000000003b9b12fe/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3" type="font/woff2" crossorigin="anonymous" />
			<link rel="preload" as="font" href="https://use.typekit.net/af/4eabcf/00000000000000003b9b12fd/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3" type="font/woff2" crossorigin="anonymous" />
			<link rel="preload" as="font" href="https://use.typekit.net/af/9e2ed8/00000000000000003b9b2448/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3" type="font/woff2" crossorigin="anonymous" />

			<link rel="preload" as="font" href="https://use.typekit.net/af/f3ba4f/00000000000000003b9b12fa/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3" type="font/woff" crossorigin="anonymous" />
			<link rel="preload" as="font" href="https://use.typekit.net/af/3e64fb/00000000000000003b9b12fe/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3" type="font/woff" crossorigin="anonymous" />
			<link rel="preload" as="font" href="https://use.typekit.net/af/4eabcf/00000000000000003b9b12fd/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3" type="font/woff" crossorigin="anonymous" />
			<link rel="preload" as="font" href="https://use.typekit.net/af/9e2ed8/00000000000000003b9b2448/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3" type="font/woff" crossorigin="anonymous" />
		</Helmet>
	)
}

export default SEO
