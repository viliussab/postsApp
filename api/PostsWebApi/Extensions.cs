using ElementsWebApi.Entities;
using PostsWebApi.Dtos.PostDtos;

namespace PostsWebApi
{
    public static class Extensions
    {
        public static GetPostDto AsDto(this Post post)
        {
            return new GetPostDto
            {
                Id = post.Id,
                Title = post.Title,
                Body = post.Body
            };
        }
    }
}
