using Newtonsoft.Json;

namespace ElementsWebApi.Entities
{
    public record Post
    {
        [JsonProperty("userId")]
        public int UserId { get; init; }

        [JsonProperty("id")]
        public int Id { get; init; }

        [JsonProperty("title")]
        public string Title { get; init; }

        [JsonProperty("body")]
        public string Body { get; init; }
    }
}
