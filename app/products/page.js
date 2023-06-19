// Components
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Products() {
  return (
    <>
      {/* ========= Start Navigation ========= */}
      <Navbar />
      {/* ========= End Navigation ========= */}

      {/* ========= Start Main Content ========= */}
      <main>
        {/* ========= Start Carousel Section ========= */}
        <section className="section-container" id="carousel">
          <h1 className="text-5xl mt-24">Discover our works</h1>
          <p className="text-xl mt-12 w-1/2 text-soft">
            See how our expertise in web development has helped businesses like
            yours achieve online success through innovative and customized
            solutions
          </p>

          {/* Start Carousel */}
          <div>asd</div>
          {/* End Carousel */}
        </section>
        {/* ========= End Carousel Section ========= */}
      </main>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Footer ========= */}
      <Footer />
      {/* ========= End Footer ========= */}
    </>
  );
}
