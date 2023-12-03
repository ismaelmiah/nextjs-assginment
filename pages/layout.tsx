export default function Layout({ children }: any) {
  return (
    <div>
        <h2 className="bg-gray-800 text-white h-16 w-full text-lg text-center">Next Js Assignments</h2>
        <main className="">{children}</main>
    </div>
  );
}
