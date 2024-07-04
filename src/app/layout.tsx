import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "@/theme";
import NavBar from "@/componentes/navbar/Navbar";
import Footer from "@/componentes/footer/Footer";
import { RoomProvider } from "@/contextos/RoomContext";
import { FilterProvider } from "@/contextos/FilterContext";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import { mantineTheme } from "@/mantineTheme";
import FloatingWhatsAppIcon from "@/componentes/reusables/botones/FloatingWhatsAppIcon";
import Providers from "@/contextos/ProvidersAuth";
import { AuthProvider } from "@/contextos/AuthContex";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aqua Maris Hotels",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <ThemeProvider theme={theme}>
          <MantineProvider theme={mantineTheme}>
            <Providers>
            <AuthProvider>
              <FilterProvider>
                <RoomProvider>
                  <CssBaseline />
                  <NavBar />

                  <main className="flex-grow">{children}</main>

                  <Footer />
                  <FloatingWhatsAppIcon />
                </RoomProvider>
              </FilterProvider>
              </AuthProvider>
            </Providers>
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
