// pages/example.tsx
import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/thread.actions";
import { currentUser } from "@clerk/nextjs";

export default async function Page() {
  const result = await fetchPosts(1, 30);
  const user = await currentUser();

  console.log(result.posts);

  return (
    <>
      <h1 className="head-text text-lef">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No thread found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ""}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
                parentId={post.parentId}
              />
            ))}
          </>
        )}
      </section>
    </>
  );
}
