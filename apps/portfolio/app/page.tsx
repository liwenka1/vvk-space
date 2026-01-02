import { profile } from "@vvk/shared/profile";

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="mb-8 text-4xl font-bold">Portfolio</h1>
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">{profile.name}</h2>
        <p className="text-gray-600">{profile.email}</p>
      </div>
      <p className="text-gray-500">作品集内容待添加...</p>
    </main>
  );
}
