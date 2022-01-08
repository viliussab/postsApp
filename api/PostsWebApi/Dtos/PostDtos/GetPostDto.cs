namespace PostsWebApi.Dtos.PostDtos
{
    public record GetPostDto
    {
        public int Id { get; init; }
        public string Title { get; init; }
        public string Body { get; init; }
    }
}
