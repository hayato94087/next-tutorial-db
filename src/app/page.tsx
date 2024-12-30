import { HelloUniverseLabel } from "@/components/hello-universe-label";
import { env } from "@/env";
import { db } from "@/server/db";

export default async function Home() {
  const url = env.DEBUG_URL;
  const users = await db.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
    },
  });

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
