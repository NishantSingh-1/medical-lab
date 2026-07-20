import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AppButton } from "./common/AppButton";
import { AppContainer } from "./common/AppContainer";
import { AppInput } from "./common/AppInput";
import { useCart } from "./context/CartContext";
import NavbarCategories from "./NavbarCategories";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Dashboard", path: "/dashboard" },
];

const SEARCH_PLACEHOLDER = "Search For Lab Tests/Packages";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const textIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleTypingTick = () => {
      const currentLength = textIndexRef.current;

      if (!isDeletingRef.current) {
        setPlaceholderText(SEARCH_PLACEHOLDER.substring(0, currentLength + 1));
        textIndexRef.current += 1;

        if (textIndexRef.current === SEARCH_PLACEHOLDER.length) {
          timer = setTimeout(() => {
            isDeletingRef.current = true;
            handleTypingTick();
          }, 2000);
          return;
        }
      } else {
        setPlaceholderText("");
        textIndexRef.current = 0;
        isDeletingRef.current = false;
        timer = setTimeout(handleTypingTick, 500);
        return;
      }

      timer = setTimeout(handleTypingTick, 90);
    };

    timer = setTimeout(handleTypingTick, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchQuery.trim()) return;
    navigate("/tests");
  };

  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 flex w-full select-none flex-col border-b border-border bg-card/80 text-left backdrop-blur-lg">
        <AppContainer>
          <div className="flex h-20 items-center justify-between">
            <Link
              to="/"
              className="text-3xl font-extrabold tracking-tight text-primary no-underline"
            >
              MedLab
            </Link>

            <nav className="hidden items-center gap-10 lg:flex">
              {navLinks.map((item) => (
                <NavItem
                  key={item.path}
                  item={item}
                  isActive={location.pathname === item.path}
                />
              ))}
            </nav>

            <div className="hidden items-center gap-4 text-xs font-bold lg:flex">
              <SearchForm
                placeholderText={placeholderText}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSubmit={handleSearchSubmit}
              />

              <CartLink
                count={cartItems.length}
                isActive={location.pathname === "/cart"}
              />

              <AppButton
                type="button"
                variant="outline"
                onClick={() => navigate("/signin")}
              >
                Login
              </AppButton>

              <button
                type="button"
                aria-label="Toggle mobile menu"
                onClick={() => setOpen((current) => !current)}
                className="text-muted-foreground transition hover:text-primary lg:hidden"
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </AppContainer>

        <div className="hidden w-full lg:block">
          <NavbarCategories />
        </div>

        <div className="block w-full bg-card px-5 pb-5 lg:hidden">
          <MobileSearchForm
            placeholderText={placeholderText}
            onSubmit={handleSearchSubmit}
            onClick={() => navigate("/tests")}
          />
        </div>

        {open && (
          <div className="border-t border-border bg-card px-5 py-6 text-sm font-bold text-muted-foreground shadow-lg lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`py-1 no-underline transition ${location.pathname === item.path
                    ? "text-primary"
                    : "hover:text-primary"
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              <hr className="my-2 border-border" />

              <AppButton
                type="button"
                variant="outline"
                onClick={() => {
                  closeMobileMenu();
                  navigate("/signin");
                }}
                className="py-3 text-xs font-black"
              >
                Login
              </AppButton>
            </div>
          </div>
        )}
      </header>

    </>
  );
};

type NavItemProps = {
  item: {
    name: string;
    path: string;
  };
  isActive: boolean;
};

const NavItem = ({ item, isActive }: NavItemProps) => {
  return (
    <Link
      to={item.path}
      className={`relative text-sm font-bold no-underline transition duration-300 hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"
        }`}
    >
      {item.name}

      {isActive && (
        <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-primary" />
      )}
    </Link>
  );
};

type SearchFormProps = {
  placeholderText: string;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const SearchForm = ({
  placeholderText,
  searchQuery,
  setSearchQuery,
  onSubmit,
}: SearchFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex w-56 items-center rounded-xl border border-border bg-white px-3.5 py-2 transition-all focus-within:border-primary focus-within:bg-card focus-within:shadow-sm xl:w-72"
    >
      <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />

      <AppInput
        name="searchQuery"
        type="text"
        placeholder={placeholderText}
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="h-auto border-0 bg-transparent p-0 text-xs font-medium shadow-none focus-visible:ring-0"
      />
    </form>
  );
};

type MobileSearchFormProps = {
  placeholderText: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onClick: () => void;
};

const MobileSearchForm = ({
  placeholderText,
  onSubmit,
  onClick,
}: MobileSearchFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      onClick={onClick}
      className="flex w-full cursor-pointer items-center rounded-2xl border border-primary bg-white px-4 py-3.5 transition-all focus-within:border-primary"
    >
      <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />

      <AppInput
        type="text"
        readOnly
        placeholder={placeholderText}
        className="h-auto cursor-pointer border-0 bg-transparent p-0 text-xs font-bold shadow-none focus-visible:ring-0"
      />
    </form>
  );
};

type CartLinkProps = {
  count: number;
  isActive: boolean;
};

const CartLink = ({ count, isActive }: CartLinkProps) => {
  return (
    <Link
      to="/cart"
      className={`flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 no-underline transition duration-200 ${isActive
        ? "border-primary bg-primary-light text-primary"
        : "border-border text-foreground hover:border-primary hover:text-primary"
        }`}
    >
      <ShoppingCart size={16} />
      <span>Cart ({count})</span>
    </Link>
  );
};

export default Navbar;