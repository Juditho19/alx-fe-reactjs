import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,       // background fetching indicator
    refetch,          // manual refetch
    dataUpdatedAt,    // last successful fetch timestamp
  } = useQuery("posts", fetchPosts);

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p style={{ color: "crimson" }}>Error: {error.message}</p>;

  return (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      <div>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? "Refreshing…" : "Refetch posts"}
        </button>
        <small style={{ marginLeft: "0.75rem" }}>
          Last updated: {new Date(dataUpdatedAt).toLocaleTimeString()}
          {isFetching ? " (background fetching…)" : ""}
        </small>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              padding: "0.75rem",
              border: "1px solid #ddd",
              borderRadius: "0.5rem",
            }}
          >
            <strong>#{post.id} {post.title}</strong>
            <p style={{ margin: "0.5rem 0 0" }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
