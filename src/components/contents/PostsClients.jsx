import PostsContents from './PostContents'

export default function PostsClients({ posts }) {
  return (
    <>
      {posts?.map((post) => (
        <PostsContents key={post.id} title={post.title} body={post.body} />
      ))}
    </>
  )
}
