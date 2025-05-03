export default function Main({ children }) {
  return (
    <main className="flex flex-col py-16 min-h-[calc(100vh-4rem-3rem)] bg-gray-100 text-black">
      <div className="flex-grow  mx-4 sm:mx-8 md:mx-16 h-full">{children}</div>
    </main>
  );
}
