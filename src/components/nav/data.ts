import Home from "../ui/icons/home/Home";
import Products from "../ui/icons/hits/Hits";
import Hits from "../ui/icons/hits/Hits";
import Promotion from "../ui/icons/promotion/Promotion";
import Categories from "../ui/icons/categorys/Categories";

interface INavItem {
  id: number;
  title: string;
  link: string;
  Icon: any;
}

export const navItems: INavItem[] = [
  {
    id: 1,
    title: "Главная страница",
    link: "home",
    Icon: Home,
  },
  {
    id: 2,
    title: "Продукты",
    link: "products",
    Icon: Products,
  },
  {
    id: 3,
    title: "Хиты",
    link: "hits",
    Icon: Hits,
  },
  {
    id: 4,
    title: "Акции",
    link: "promotions",
    Icon: Promotion,
  },
  {
    id: 5,
    title: "Категории",
    link: "categories",
    Icon: Categories,
  },
];
