export function Tags({ tags }: { tags: string[] }) {
  return (
    <div>
      {tags.map((tag, i) => (
        <span
          key={i}
          className="bg-secondary inline-block text-muted-foreground text-xs font-medium me-2 px-2.5 py-0.5 rounded"
        >
          <span>{tag}</span>
        </span>
      ))}
    </div>
  );
}
