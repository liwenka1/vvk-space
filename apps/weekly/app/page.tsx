import { profile } from "@vvk/shared/profile";

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="mb-4 text-4xl font-bold">Weekly</h1>
      <p className="mb-8 text-gray-600">by {profile.name}</p>
      <p className="text-gray-500">技术周刊内容待添加...</p>
    </main>
  );
}
