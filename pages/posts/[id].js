import { getAllPostIds } from '../../lib/posts'
import Layout from '../../components/Layout'

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return ({ paths, fallback: false })
}

const Post = () => {
  return <Layout></Layout>
}

export default Post
