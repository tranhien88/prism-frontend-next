import Head from 'next/head'
import Header from "./Header";
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children } : LayoutProps) {
  return (
    <>
        <Head>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1, maximum-scale=1'
            />
            <meta
                content={`width=device-width,
                height=device-height,
                initial-scale=1.0,
                user-scalable=no;user-scalable=0;
                maximum-scale=1`}
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>{children}</main>
    </>
  );
}
