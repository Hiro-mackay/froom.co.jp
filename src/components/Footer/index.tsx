import ExtLink from '../ext-link';
import { GlobalNavigationItems } from '../../constants/GlobalNavigationItems';
import { GlobalNavItem } from '../GlobalNavItem';
const Page = () => (
  <footer>
    <div className="container flex flex-wrap justify-between px-4 pb-2 mx-auto md:px-10 box-border">
      <div className="pb-10 lg:max-w-md">
        <nav className="w-full flex space-x-6 md:space-x-20">
          {GlobalNavigationItems.map((item) => (
            <span key={item.label} className="inline-block  hover:text-orange">
              <GlobalNavItem pathname="" {...item} />
            </span>
          ))}
        </nav>
      </div>
      <div className=" text-sm">© 2021 Froom, Inc. Make Interesting.</div>
    </div>
  </footer>
);
export default Page;
