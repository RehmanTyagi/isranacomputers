import CategoriesDirectory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
const Home = () => {
  const categories = [
    {
      id: 1,
      categoryTitle: "Graphic Cards",
      categoryImg:
        "https://dlcdnwebimgs.asus.com/gain/08557FA1-E6BB-4FB3-BF2B-D18ED0E0A57C/fwebp",
      pageURL: 'graphic cards'
    },
    {
      id: 2,
      categoryTitle: "Monitors",
      categoryImg:
        "https://media.wired.com/photos/625888ee92075cfd4c470fea/master/pass/How-to-Set-Up-Multiple-Monitors-Gear-1311350206.jpg",
      pageURL: 'monitors'

    },
    {
      id: 3,
      categoryTitle: "Laptops",
      categoryImg:
        "https://assets-prd.ignimgs.com/2022/06/22/ram-2-1655868000270.jpg",
      pageURL: 'laptops'
    },
    {
      id: 4,
      categoryTitle: "Keyboard & Mouse",
      categoryImg:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71aARXewm6L._SL1500_.jpg",
      pageURL: 'keyboard and mouse'
    },
    {
      id: 5,
      categoryTitle: "HDD & SSD",
      categoryImg:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71aARXewm6L._SL1500_.jpg",
      pageURL: 'ssd & hard drive'
    },
  ];
  return (
    <div>
      <Outlet />
      <CategoriesDirectory categories={categories} />
    </div>
  );
};

export default Home;
