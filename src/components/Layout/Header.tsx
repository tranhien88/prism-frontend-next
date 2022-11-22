import { Menu } from "antd";
import Logo from "../../../public/images/logo/logo_login_beta.png";
import Image from "next/image";
import Link from "next/link";
interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}
const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `../../../public/images/${src}?w=${width}&q=${quality || 75}`;
};
export default function Header() {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
      <Menu.Item key="home">
        <Link href={"/"}>
          <Image src={Logo} alt='Logo'/>
        </Link>
      </Menu.Item>
      <Menu.Item key="horse">
        <Link href={"/horse"}>
          {/* <Image
            loader={myLoader}
            src="svg-sprite.svg"
            alt="Picture of the author"
            width={25}
            height={20}
          /> */}
          Horse
        </Link>
      </Menu.Item>
      <Menu.Item key="staff">
        <Link href={"/staff"}>Staff</Link>
      </Menu.Item>
    </Menu>
  );
}
