using ElementsWebApi.Entities;
using PostsWebApi.Helpers;

namespace ElementsWebApi.Repositories.PostRepository
{
    public class InMemoryPostRepository : IPostRepository
    {
        private readonly List<Post> posts = new(JsonPosts.GetPosts());

        public IEnumerable<Post> GetPosts()
        {
            return posts;
        }

        public Post GetPost(int id)
        {
            return posts.Where(item => item.Id == id).SingleOrDefault();
        }

        public void CreatePost(Post post)
        {
            posts.Add(post);
        }
    }
}
