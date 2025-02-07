'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/ui/section-header';

const testimonialsData = [
  {
    id: 1,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=John+Doe',
    text: 'AirRoster has completely streamlined my flight scheduling. I no longer have to worry about overlaps or missed notifications. It\'s a lifesaver for pilots like me.',
    name: 'John Doe',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 2,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Jane+Smith',
    text: 'As a cabin crew member, keeping track of my roster used to be a hassle. AirRoster makes everything so much easier and more organized.',
    name: 'Jane Smith',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 3,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Alice+Johnson',
    text: 'The user-friendly interface and reliability of AirRoster have made it an essential tool in my daily workflow as a pilot.',
    name: 'Alice Johnson',
    role: 'Pilot',
    rating: 4
  },
  {
    id: 4,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=David+Kimball',
    text: 'AirRoster\'s real-time updates and seamless integration with my calendar have been a game-changer for managing my schedules.',
    name: 'David Kimball',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 5,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Sarah+Lee',
    text: 'The notification system on AirRoster ensures I never miss a schedule update. It has made my life so much easier!',
    name: 'Sarah Lee',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 6,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Mark+Taylor',
    text: 'As a frequent traveler, AirRoster helps me keep track of all my flights with precision. Highly recommend it to fellow pilots.',
    name: 'Mark Taylor',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 7,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Emily+Brown',
    text: 'AirRoster\'s intuitive design makes it easy to use, even for someone like me who isn\'t tech-savvy.',
    name: 'Emily Brown',
    role: 'Cabin Crew',
    rating: 4
  },
  {
    id: 8,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Michael+Scott',
    text: 'Scheduling has never been this simple and efficient. AirRoster takes care of everything.',
    name: 'Michael Scott',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 9,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Olivia+Smith',
    text: 'From notifications to schedule management, AirRoster has everything a cabin crew member needs.',
    name: 'Olivia Smith',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 10,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=James+Anderson',
    text: 'The automatic updates on AirRoster save so much time and ensure accuracy in my schedules.',
    name: 'James Anderson',
    role: 'Pilot',
    rating: 4
  },
  {
    id: 11,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Chloe+Morris',
    text: 'I love how AirRoster simplifies the complex process of managing rosters.',
    name: 'Chloe Morris',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 12,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Ethan+White',
    text: 'AirRoster ensures all my schedules are synced and updated across platforms. Brilliant!',
    name: 'Ethan White',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 13,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Lisa+Adams',
    text: 'The attention to detail in AirRoster is fantastic. It\'s a must-have for cabin crew.',
    name: 'Lisa Adams',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 14,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Robert+Williams',
    text: 'I\'ve been a pilot for years, and AirRoster is by far the most efficient scheduling tool I\'ve used.',
    name: 'Robert Williams',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 15,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Emma+Clark',
    text: 'AirRoster has transformed how I manage my shifts. It\'s incredibly easy to use.',
    name: 'Emma Clark',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 16,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Lucas+Miller',
    text: 'I appreciate the seamless synchronization AirRoster offers. It\'s perfect for my needs.',
    name: 'Lucas Miller',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 17,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Isabella+Turner',
    text: 'AirRoster keeps me updated with real-time notifications, which is a huge help.',
    name: 'Isabella Turner',
    role: 'Cabin Crew',
    rating: 4
  },
  {
    id: 18,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=David+Taylor',
    text: 'Managing flights has become so much easier since I started using AirRoster.',
    name: 'David Taylor',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 19,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Charlotte+Lewis',
    text: 'AirRoster\'s simplicity and efficiency are unparalleled. I recommend it to all my colleagues.',
    name: 'Charlotte Lewis',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 20,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Henry+Evans',
    text: 'The integration with other tools makes AirRoster an all-in-one solution for pilots.',
    name: 'Henry Evans',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 21,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Sophia+King',
    text: 'From schedules to notifications, AirRoster has everything a cabin crew needs.',
    name: 'Sophia King',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 22,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Jack+Hill',
    text: 'The automatic updates on AirRoster ensure I\'m always on time.',
    name: 'Jack Hill',
    role: 'Pilot',
    rating: 4
  },
  {
    id: 23,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Zoe+Scott',
    text: 'It\'s an intuitive tool that every cabin crew should try.',
    name: 'Zoe Scott',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 24,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Owen+Moore',
    text: 'AirRoster takes the stress out of managing multiple flights. Excellent tool.',
    name: 'Owen Moore',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 25,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Ella+White',
    text: 'I love how AirRoster simplifies shift management for cabin crew.',
    name: 'Ella White',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 26,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Ryan+Allen',
    text: 'It\'s a reliable and efficient tool that every pilot should use.',
    name: 'Ryan Allen',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 27,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Lily+Parker',
    text: 'Keeping track of my shifts has never been this easy.',
    name: 'Lily Parker',
    role: 'Cabin Crew',
    rating: 4
  },
  {
    id: 28,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Ethan+Reed',
    text: 'AirRoster\'s detailed notifications and seamless interface are outstanding.',
    name: 'Ethan Reed',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 29,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Scarlett+Bailey',
    text: 'AirRoster has become an essential part of my daily workflow.',
    name: 'Scarlett Bailey',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 30,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Leo+Brooks',
    text: 'Managing schedules with AirRoster is effortless and accurate.',
    name: 'Leo Brooks',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 31,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Mia+Kelly',
    text: 'I\'ve been recommending AirRoster to all my colleagues.',
    name: 'Mia Kelly',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 32,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Nathan+Edwards',
    text: 'It\'s a fantastic tool for pilots who want efficiency and simplicity.',
    name: 'Nathan Edwards',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 33,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Hannah+Gray',
    text: 'The app\'s features are well thought out and incredibly useful.',
    name: 'Hannah Gray',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 34,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Connor+Bennett',
    text: 'AirRoster saves me time and keeps me on track with my flights.',
    name: 'Connor Bennett',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 35,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Grace+Murphy',
    text: 'I\'m impressed by how seamless and efficient AirRoster is.',
    name: 'Grace Murphy',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 36,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Sebastian+Carter',
    text: 'Pilots need a tool like AirRoster. It\'s a real game-changer.',
    name: 'Sebastian Carter',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 37,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Eleanor+Cooper',
    text: 'AirRoster takes the stress out of schedule management.',
    name: 'Eleanor Cooper',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 38,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Oliver+Bell',
    text: 'The app is intuitive and very helpful for pilots like me.',
    name: 'Oliver Bell',
    role: 'Pilot',
    rating: 5
  },
  {
    id: 39,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Aria+James',
    text: 'I\'m glad I found AirRoster. It\'s simplified my job significantly.',
    name: 'Aria James',
    role: 'Cabin Crew',
    rating: 5
  },
  {
    id: 40,
    image: 'https://ui-avatars.com/api/?background=366fdd&color=fff&name=Matthew+Ross',
    text: 'AirRoster is the perfect tool for pilots to manage their schedules with ease.',
    name: 'Matthew Ross',
    role: 'Pilot',
    rating: 5
  }
];

export default function AirrosterProductTestimonials() {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <section className="p-6 max-w-5xl">

      <SectionHeader header="Testimonials" subheader="Why users love it" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {testimonialsData.slice(0, visibleCount).map((testimonial) => (
          <div key={testimonial.id} className="">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
      {visibleCount < testimonialsData.length && (
        <div className="bg-white/50 backdrop-blur-md opacity-90">
          <div className="text-center relative z-10 top-0 -mt-20 h-24">
            <Button onClick={showMore}>
              Show More
            </Button>
          </div>
        </div>
      )}
      {visibleCount < testimonialsData.length && (
        <div className="opacity-0"></div>
      )}
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-white p-6 hover:shadow-md transition cursor-pointer rounded-xl flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <Image className="rounded-full" src={testimonial.image} width={50} height={50} alt={testimonial.name} />
        <div className='text-left'>
          <p className="text-lg font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 text-left">{testimonial.text}</p>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.116 3.438c.14.433.543.722 1.002.722h3.614c.969 0 1.371 1.24.588 1.81l-2.924 2.125c-.372.27-.53.76-.4 1.208l1.116 3.438c.3.92-.755 1.687-1.541 1.208l-2.924-2.125a1 1 0 00-1.176 0l-2.924 2.125c-.786.479-1.84-.288-1.54-1.208l1.116-3.438a1 1 0 00-.4-1.208L2.13 8.897c-.783-.57-.38-1.81.588-1.81h3.614a1 1 0 001.002-.722l1.116-3.438z" />
          </svg>
        ))}
      </div>
    </div>
  );
}
