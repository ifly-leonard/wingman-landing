'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 'testimonial-01',
    image: '/testimonial-01.jpg',
    text: 'This component is AWESOME. The hover feature is well-thought-out. Even the smaller details, like using colors, really helps everything stay organized. Cruip is amazing and I really enjoy using it.',
    name: 'Mary Smith',
    role: 'Software Engineer',
  },
  {
    id: 'testimonial-02',
    image: '/testimonial-02.jpg',
    text: 'This component is AWESOME. The hover feature is well-thought-out. Even the smaller details, like using colors, really helps everything stay organized. Cruip is amazing and I really enjoy using it.',
    name: 'Mary Smith',
    role: 'Software Engineer',
  },
  {
    id: 'testimonial-03',
    image: '/testimonial-03.jpg',
    text: 'This component is AWESOME. The hover feature is well-thought-out. Even the smaller details, like using colors, really helps everything stay organized. Cruip is amazing and I really enjoy using it.',
    name: 'Mary Smith',
    role: 'Software Engineer',
  },
];

export default function AirrosterProuductPromise() {
  return (
    <section className="text-center">
      <div className="font-nycd text-xl text-indigo-500 mb-4 relative inline-flex">
        <span>Our promise</span>
        <svg
          className="fill-indigo-500 absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          width="132"
          height="4"
        >
          <path
            fillOpacity=".4"
            fillRule="evenodd"
            d="M131.014 2.344s-39.52 1.318-64.973 1.593c-25.456.24-65.013-.282-65.013-.282C-.34 3.623-.332 1.732.987 1.656c0 0 39.52-1.32 64.973-1.593 25.455-.24 65.012.282 65.012.282 1.356.184 1.37 1.86.042 1.999"
          />
        </svg>
      </div>
      <div className="text-5xl leading-tight font-bold text-slate-900">
        <span>We'll help you boost your revenues</span>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} zIndex={50 - index * 10} />
        ))}
      </div>
    </section>
  );
}

function Testimonial({ testimonial, zIndex }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative inline-flex justify-center w-[52px] h-[52px] align-middle -translate-y-1 z-${zIndex}`}>
      <button
        className={`h-full w-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-[20px] transition duration-200 ease-in-out delay-100 ${open ? 'rotate-0' : 'rotate-[4deg]'}`}
        aria-labelledby={testimonial.id}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        <Image className="absolute top-1/2 -translate-y-1/2 rounded-[inherit]" src={testimonial.image} width={52} height={52} alt={testimonial.name} />
      </button>
      {open && (
        <div
          id={testimonial.id}
          role="tooltip"
          className="absolute top-full pt-5 w-80 bg-slate-900 p-5 rounded-3xl shadow-xl text-left text-sm text-slate-200 font-medium space-y-3"
        >
          <svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width="17" height="14" aria-hidden="true">
            <path
              fillRule="nonzero"
              d="M2.014 3.68c.276-1.267.82-2.198 1.629-2.79C4.453.295 5.627 0 7.167 0c.514 0 .908.02 1.185.061L5.035 10.49c-.75 2.494-2.429 3.66-5.035 3.496L2.014 3.68Zm8.648 0c.237-1.227.77-2.147 1.6-2.76C13.09.307 14.274 0 15.814 0c.514 0 .909.02 1.185.061L13.683 10.49c-.79 2.494-2.468 3.66-5.035 3.496L10.662 3.68Z"
            />
          </svg>
          <p>{testimonial.text}</p>
          <p>
            {testimonial.name} <span className="text-slate-600">-</span> <span className="text-slate-400">{testimonial.role}</span>
          </p>
        </div>
      )}
    </div>
  );
}
