import React from 'react';
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        html
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const posts = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {posts.map(post =>
                    <li key={post.node.fields.slug}>
                        <Link to={`/blog/${post.node.fields.slug}`}>
                            <h2>{post.node.frontmatter.title}</h2>
                            <p>{post.node.frontmatter.date}</p>
                        </Link>
                    </li>
                )}
            </ol>
        </Layout >
    )
}

export default BlogPage;