using ElementsWebApi.Entities;
using ElementsWebApi.Repositories;
using ElementsWebApi.Repositories.PostRepository;
using Microsoft.AspNetCore.Mvc;
using PostsWebApi;
using PostsWebApi.Dtos.PostDtos;

namespace ElementsWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostsController : Controller
    {
        private readonly IPostRepository repository;
        public PostsController(IPostRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<GetPostDto>> GetPosts()
        {
            var posts = repository.GetPosts().Reverse();
            
            if (posts is null)
            {
                return NotFound();
            }

            var postsDto = posts.Select(item => new GetPostDto
            {
                Id = item.Id,
                Title = item.Title,
                Body = item.Body,
            });

            return Ok(postsDto);
        }

        [HttpGet("{id}")]
        public ActionResult<GetPostDto> GetPost(int id)
        {
            var post = repository.GetPost(id);

            if (post is null)
            {
                return NotFound();
            }

            return Ok(post.AsDto());
        }

        [HttpPost]
        public ActionResult<GetPostDto> CreatePost(CreatePostDto postDto)
        {
            Random random = new Random();
            Post post = new()
            {
                Id = random.Next(101, int.MaxValue), // Must be changed after the integration with a proper database
                UserId = 1, // Same as above
                Title = postDto.Title,
                Body = postDto.Body,
            };

            repository.CreatePost(post);

            return CreatedAtAction(nameof(GetPost), new { Id = post.Id }, post.AsDto());
        }
    }
}
