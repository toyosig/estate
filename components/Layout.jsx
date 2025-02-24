import Head from "next/head";
import { Box, layout } from "@chakra-ui/react";
import { Children } from "react/cjs/react.production.min";

import Navbar from "./Navbar";
import Endbar from "./Endbar";

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
                <Endbar />
            </footer>

        </Box>
    </>
)
export default Layout;