import { Link } from "@tanstack/react-router";

function NavBar() {
  return (
    <div>
      <div className="w-full flex gap-4 py-2 justify-center">
        <Link to="/" className="[&.active]:font-bold">
          Rooms
        </Link>
        <Link to="/bookings" className="[&.active]:font-bold">
          Bookings
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default NavBar;
