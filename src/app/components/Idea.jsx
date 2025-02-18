import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Idea() {



  return (
    <div className="bg-white w-full mt-5 flex justify-center items-center flex-col rounded-md p-6">
      <h3 className="font-semibold text-xl text-center text-black mb-4">
        Have an idea? Let's build together
      </h3>
<a href='/contact' className='rounded-full px-4 py-3 bg-black'>Let's build!</a>
    </div>
  );
}
