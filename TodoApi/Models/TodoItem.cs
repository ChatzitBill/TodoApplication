namespace TodoApi.Models;

public class TodoItem{
    public long Id {get; set;}
    public required string  Name {get; set;}
    public bool IsCompleted {get; set;}
    public string? Secret {get; set;}
}