import type { Metadata } from "next";
import Container from "@/app/ui/container";
import "@/app/globals.css";

export const metadata: Metadata = {
  // title: "AK Phones - The biggest range at the best prices guaranteed!!",
  title: "AK Phones",
  // description:
  //   "AK Phones - All of your phone needs at the best prices guaranteed!! Extensive range of the latest and best phones.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
