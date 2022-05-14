import React from "react";
import Quote from "../../assets/icons/quote.svg";
import Testmonial from "./Testmonial";
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';


const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:'Winson Herry',
            review: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo aut asperiores totam quaerat unde, recusandae ea eius commodi veniam natus suscipit a, aliquid laudantium perferendis. Iusto voluptate modi reprehenderit!',
            location: 'california',
            img: people1
        },
        {
            _id:2,
            name:'Jerry Williams',
            review: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo aut asperiores totam quaerat unde, recusandae ea eius commodi veniam natus suscipit a, aliquid laudantium perferendis. Iusto voluptate modi reprehenderit!',
            location: 'california',
            img: people2
        },
        {
            _id:3,
            name:'Mary James',
            review: 'review 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo aut asperiores totam quaerat unde, recusandae ea eius commodi veniam natus suscipit a, aliquid laudantium perferendis. Iusto voluptate modi reprehenderit!',
            location: 'california',
            img: people3
        },
    ]
  return (
    <section>
      <div className="flex justify-between sm:">
        <div>
          <h3 className="text-primary text-2xl uppercase">Testemonials</h3>
          <h2 className="text-3xl uppercase">What Our Patients Says </h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={Quote} alt="" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16 " >
        {
            reviews.map(review => <Testmonial
            review = {review}
            ></Testmonial>)
        }
      </div>
    </section>
  );
};

export default Testimonials;
