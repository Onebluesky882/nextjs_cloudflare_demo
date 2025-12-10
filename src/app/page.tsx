import { headers } from "next/headers";

export default async function Home() {
  const headerList = await headers();

  return (
    <div className="flex flex-col items-center   border border-amber-50 py-50 rounded-2xl ">
      <h1>Hello world</h1>
      <p>build with cloudflare</p>
      <p>Welcome from {headerList.get("X-User-Country")}</p>
    </div>
  );
}
