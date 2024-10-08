import { Header } from "@/app/components/header";
import { RoomList } from "@/app/components/sidebar/roomList";

export default async function Room() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/room/select",{
    cache: "no-store",
  });
  const allRoomData = await response.json();

  return (
    <>
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
    </button>

    <RoomList allRoomData={allRoomData}/>
    
    <main className="flex min-h-screen flex-col bg-neutral-900">
        <Header />
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div className="grid grid-cols-1 gap-4 mb-4 text-white">
                    <div>
                        <span>
                            Welcome to Clone.<br />
                            Your complete platform for the communication.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  );
}
