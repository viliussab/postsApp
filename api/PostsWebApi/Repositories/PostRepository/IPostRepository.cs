using ElementsWebApi.Entities;

namespace ElementsWebApi.Repositories.PostRepository
{
    public interface IPostRepository
    {
        public IEnumerable<Post> GetPosts();
        public Post GetPost(int id);
        public void CreatePost(Post post);
    }
}
