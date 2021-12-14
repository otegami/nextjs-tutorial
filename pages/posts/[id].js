import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Date from '../../components/Date'

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return ({ paths, fallback: false })
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return ({ props: { postData } })
}

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export default Post
