import { HelloUniverseLabel } from "@/components/hello-universe-label";
import { env } from "@/env";
import { getUsers } from "@/server/user";

export default async function Home() {
  const url = env.DEBUG_URL;
  const users = await getUsers();

  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <HelloUniverseLabel />
          <p className="text-sm text-gray-500">{url}</p>
          <br />
          {users.map((user) => (
            <div key={user.id} className="text-sm text-gray-500">
              {user.name},{user.email}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
