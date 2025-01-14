import { NavLink } from "react-router-dom";
import points from "../assets/points.svg"
import tasks from "../assets/tasks.svg"
import shop from "../assets/shop.svg"
import friends from "../assets/friends.svg"
import profile from "../assets/profile.svg"

function Navbar() {
  const navItems = [
    { to: '/', icon: points, label: 'Баллы' },
    { to: '/tasks', icon: tasks, label: 'Задания' },
    { to: '/shop', icon: shop, label: 'Магазин' },
    { to: '/friends', icon: friends, label: 'Друзья' },
    { to: '/profile', icon: profile, label: 'Профиль' },
  ];

  return (
    <nav className="gradient_bg px-4 py-4 rounded-t-2xl">
      <ul className="flex justify-between items-center">
        {navItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${isActive ? 'navlink_active' : 'text-primary'
                }`
              }
            >
              <img src={item.icon} alt={item.label} className={`w-7 h-7 mb-3`} />
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar