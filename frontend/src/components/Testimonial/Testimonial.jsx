import React from "react";
import "./testimonial.css";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import useTestimonials from "../../Hooks/useTestimonial";
import { Avatar,  useDisclosure } from "@chakra-ui/react";
import ReviewModal from "./ReviewModal";
function Testimonial() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { testimonials, loading, error } = useTestimonials();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section id="textimolial">
        <h5>Review Form Clients</h5>
        <h2>Testimonials</h2>
        <hr />
        <p
          className=" flex  justify-center mx-auto cursor-pointer text-blue-500 text-center text-bold  mb-2 hover:underline"
          onClick={onOpen}
        >
          Review
        </p>

        {/* Form to add a new testimonial */}
        <ReviewModal isOpen={isOpen} onClose={onClose} />
        {/* Display testimonials */}

        <Swiper
          id="main_container"
          className="container textimolials-container"
          modules={[Pagination, Navigation, Scrollbar]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className="textimolials" key={index}>
              <div className="client_avatar">
                <Avatar  src={testimonial.avatar} />
              </div>
              <h5 className="client_name">{testimonial.name}</h5>
              <small className="client_reviews">{testimonial.review}</small>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Testimonial;
