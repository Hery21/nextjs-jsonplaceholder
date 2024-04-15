import PostsContents from './PostContents'

export default function PostsClients({ users, posts, handleClickEditPost, handleClickDeletePost, handleGetComments }) {
  const combinedData = posts.map((post) => {
    const user = users.find((user) => user.id === post.userId)
    return {
      ...post,
      user: user || {}
    }
  })

  return (
    <>
      {combinedData?.map((data) => (
        <PostsContents
          key={data.id}
          id={data.id}
          title={data.title}
          body={data.body}
          name={data.user.name}
          username={data.user.username}
          handleClickEditPost={handleClickEditPost}
          handleClickDeletePost={handleClickDeletePost}
          handleGetComments={handleGetComments}
        />
      ))}
    </>
  )
}
