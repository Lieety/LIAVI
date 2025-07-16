import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirigeix o mostra missatge
    return <p>No tens accés</p>;
  }

  return (
    <div>
      <h1>Benvingut {session.user?.email}!</h1>
    </div>
  );
}
