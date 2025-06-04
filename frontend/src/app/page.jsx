import Header from "./components/header";
import Footer from "./components/footer";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Orientalize Store
        </h1>
        <p className="text-lg text-gray-700">
          Your one-stop shop for all things oriental!
        </p>
        <ProductsPage />
      </main>
      <Footer />
    </>
  );
}
