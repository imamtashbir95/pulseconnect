import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import LeftSidebar from "@components/layout/LeftSidebar.jsx";
import MainContainer from "@components/layout/MainContainer";
import RightSidebar from "@components/layout/RightSidebar.jsx";
import BottomBar from "@components/layout/BottomBar.jsx";

export const metadata = {
  title: "PulseConnect",
  description: "Connecting Moments, Sharing Lives",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
	    <ClerkProvider>
      		<html lang="en">
        		<body className={`${inter.className} bg-purple-2 text-light-1`}>
          			<main className="flex flex-row">
            			<LeftSidebar />
            			<MainContainer>
              				{children}
            			</MainContainer>
            			<RightSidebar />
          			</main>
          			<BottomBar />
        		</body>
			</html>
		</ClerkProvider>
	);
}