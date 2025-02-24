import Head from "next/head";
import { Box, layout } from "@chakra-ui/react";
import { Children } from "react/cjs/react.production.min";

import Navbar from "./Navbar";
import Footer from "./footer";

const Layout = ({children}) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box maxWidth={"1280px"} m={"auto"}>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>

        </Box>
    </>
)
export default Layout;