using System.ComponentModel.DataAnnotations;

namespace PostsWebApi.Dtos.PostDtos
{
    public record CreatePostDto
    {
        [Required]
        public string Title { get; init; }
        [Required]
        public string Body { get; init; }
    }
}
