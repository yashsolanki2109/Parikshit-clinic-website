import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-surface text-center">
      <h1 className="font-serif text-4xl text-primary font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-on-surface-variant mb-6 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-container transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
}
