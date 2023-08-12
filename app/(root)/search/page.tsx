import UserCard from "@/components/cards/UserCard";
import { fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";

const Page = async ({ params }: { params: { id: string } }) => {
  // if (!params?.id) return null;

  const user = await currentUser();
  if (!user) return null;

  // fetch users
  const result = await fetchUsers({
    userId: user?.id,
    searchString: "",
    pageNumber: 1,
    pageSize: 25,
  });

  return (
    <section>
      <h1 className="head-text mb-10">Search</h1>

      {/* Search Bar */}

      <div className="mt-14 flex flex-col gap-9">
        {result.users.length === 0 ? (
          <p className="no-result"> No Users</p>
        ) : (
          <>
            {result.users.map((person) => (
              <UserCard
                key={person.id}
                id={person.id}
                name={person.name}
                username={person.username}
                imgUrl={person.image}
                personType="User"
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Page;
