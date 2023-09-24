"use client";

import React from 'react'
import NavBar from '../../components/NavBar'
import PostCard from '../../components/Postcard'
import Footer from '../../components/footer'

const Effctive = () => {
  return (
    <div >
        <div className='px-28 bg-blogHeadingBg'>
            <NavBar/>
            <h1 className='text-white font-extrabold text-6xl py-5'>Blog Post</h1>
        </div>
        <div className='text-center'>
          <h2 className='text-3xl pb-4 pt-14'>Effective Subtract Fill</h2>
          <p className='pb-8'>21/09/2023</p>
          <div className=' bg-red-400 px-2' style={{textAlign:"center", width:"84%", margin:"auto", height:"80vh"}}><h4>text</h4></div>
        </div>

        <div>
          <p className='px-80 py-14'>Design comps, layouts, wireframes—will your clients accept that you go about things the facile way?
            Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to
             forswear forever. <br/> <br/>

            Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely 
            the symptom of a worse problem to take into consideration.<br/> <br/>

            The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint 
            you may slap on your face to impress the new boss is your business. But what about your daily bread? 
          </p>
        </div>

        <div className=' bg-red-400 px-2' style={{textAlign:"center", width:"70%", margin:"auto", height:"80vh"}}><h4>text</h4></div>

        <div className='px-80 py-14'>
          <p>The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new 
            boss is your business. But what about your daily bread? Not so fast, 
            I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse
            problem to take into consideration.<br/> <br/>

            Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain
            terms that Lorem Ipsum is that huge, huge no no to forswear forever. 
          </p><b/> <br/>
          <p className='font-bold text-2xl border-l-8 border-gray-800 '>Design comps, layouts, wireframes—we believe that clients will surely 
             accept that you go about things the facile way. It’s a matter of time.
          </p><br/> <br/>

          <p>Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities
             in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. <br/> <br/>

            The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may 
            slap on your face to impress the new boss is your business. But what about your daily bread? Not so fast, I'd say, 
            there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to 
            take into consideration.<br/> <br/>

            Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom
             of a worse problem to take into consideration.<br/> <br/>

            Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities 
            in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. 
          </p>


        </div>
        <div>
          <div className="flex flex-col gap-2 my-20 px-20">
          <h4 className="text-lg font-bold">Related Posts</h4>
          <div className="grid grid-cols-3 gap-4 ">
          <PostCard
            title="cards"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <PostCard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <PostCard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <PostCard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <PostCard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <PostCard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          </div>

          </div>

          <div>
            <Footer/>
          </div>
         





        </div>

        
      





    </div>
  )
}

export default Effctive
