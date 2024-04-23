import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ZkLoginSessionProvider } from "@shinami/nextjs-zklogin/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react"
import Head from "next/head";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false
    }
  } 
});

export default function MyApp({ Component, pageProps : { session, ...pageProps } }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <ZkLoginSessionProvider>
        <SessionProvider session={session}>
          <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>Mypost</title>
          <meta name="description" content="Moneitize your any content in any social media more" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="mask-icon" href="/icons/mask-icon.svg" color="#FFFFFF" />
          <meta name="theme-color" content="#ffffff" />
          {/* <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/touch-icon-ipad.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/touch-icon-iphone-retina.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/touch-icon-ipad-retina.png"
          /> */}
          <link rel="manifest" href="/manifest.json" />
          <meta name="twitter:card" content="Moneitize your any content in any social media more" />
          <meta name="twitter:url" content="https://mypost.money" />
          <meta name="twitter:title" content="MyPost" />
          <meta name="twitter:description" content="Moneitize your any content in any social media more" />
          <meta name="twitter:image" content="/images/logo.png" />
          <meta name="twitter:creator" content="@Mypost" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Mypost" />
          <meta property="og:description" content="Moneitize your any content in any social media more" />
          <meta property="og:site_name" content="Mypost" />
          <meta property="og:url" content="https://mypost.money" />
          <meta property="og:image" content="/images/logo.png" />
          {/* add the following only if you want to add a startup image for Apple devices. */}
          {/* <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_2048.png"
            sizes="2048x2732"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_1668.png"
            sizes="1668x2224"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_1536.png"
            sizes="1536x2048"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_1125.png"
            sizes="1125x2436"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_1242.png"
            sizes="1242x2208"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_750.png"
            sizes="750x1334"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_640.png"
            sizes="640x1136"
          /> */}
          </Head>
          <Component {...pageProps} />
        </SessionProvider>
      </ZkLoginSessionProvider>
    </QueryClientProvider>
  );
}
