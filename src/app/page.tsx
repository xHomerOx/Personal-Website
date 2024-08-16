import PageContainer from "@/components/layout/PageContainer";
import Header from "@/components/layout/header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <Main />
      <Footer />
    </PageContainer>
  );
};

export default Home;