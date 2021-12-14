import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/Layout'

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return ({ paths, fallback: false })
}

export const getStaticProps = async ({ params }) => {
  console.log(params)
  const postData = getPostData(params.id)
  return ({ props: { postData } })
}

const Post = ({ postData }) => {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export default Post
