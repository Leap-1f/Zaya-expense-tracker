import { Vector } from "../utils/IconGeld";
import { AddRecord } from "../Modal";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-white py-4">
      <div className="max-w-screen-xl navbar m-auto ">
        <div className="flex-1 items-center gap-6">
          <Vector />
          <Link href="/dashboard" className="active:scale-95 transition">
            Dashboard
          </Link>
          <Link href="/records" className="active:scale-95 transition">
            Records
          </Link>
        </div>
        <div className="flex-none items-center gap-6">
          <label
            htmlFor="my_modal_6"
            className="btn btn-primary btn-sm rounded-full"
          >
            + Record
          </label>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <AddRecord></AddRecord>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
