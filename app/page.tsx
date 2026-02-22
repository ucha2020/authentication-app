import { SignIn, SignOut } from "@/components/auth-components";
import { auth } from "@/lib/auth";

const Page = async () => {
  const session = await auth();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-neutral-800 rounded-lg p-6 max-w-xl w-full">
        <h1 className="text-white text-xl mb-4 text-center">
          Auth.js + Prisma
        </h1>
      </div>
    </div>
  );
};

export default Page;
