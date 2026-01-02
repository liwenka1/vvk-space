import { profile } from "@vvk/shared/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{profile.name}</h1>
        <p className="mb-2 text-xl text-gray-600">{profile.title}</p>
        <p className="mb-8 text-gray-500">{profile.bio}</p>

        <div className="flex justify-center gap-4">
          {profile.social.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
