import React from 'react'
import Herosection from './Herosection'
import Prodect from './Prodect'
import "./Container.css"
import Usecases from './Usecases'
import Features from './Features'
import Frequently from './Frequently'
import Testimonials from './Testimonials'

function Container() {
  return (
    <main>
     <section>
     <Herosection/>
     </section>
  <section>
  <Prodect/>
  </section>
  <section>
    <Usecases/>
  </section>
  <section>
    <Features/>
  </section>
  <section>
    <Frequently/>
  </section>
  <section>
    <Testimonials/>
  </section>

    </main>
  )
}

export default Container
