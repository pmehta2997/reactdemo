"use client";

import Header from "@/components/Header";
import Slideshow from "@/components/Slideshow";
import ImageGrid from "@/components/Imagegrid";
import MainContent from "@/components/MainContent";
import styles from "@/styles/page.module.css";

const App = () => {
  return (
    <>


      <Header />
      <Slideshow />
      <ImageGrid />
      <MainContent />
    </>
  );
}
export default App;