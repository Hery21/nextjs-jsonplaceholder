import PostsContents from './PostContents'

export default function PostsClients({ posts, handleClickEditPost, handleClickDeletePost }) {
  return (
    <>
      {posts?.map((post) => (
        <PostsContents
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          handleClickEditPost={handleClickEditPost}
          handleClickDeletePost={handleClickDeletePost}
        />
      ))}
    </>
  )
}
