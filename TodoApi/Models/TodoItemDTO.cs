namespace TodoApi.Models;

public class TodoItemDTO
{
    public long Id { get; set; }
    public required string  Name  { get; set; }
    public bool IsCompleted { get; set; }
}