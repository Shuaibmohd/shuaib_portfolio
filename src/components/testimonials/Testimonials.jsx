import './testimonials.scss'

const Testimonials = () => {
  const testimonials = [
    {
        id: '1',
        name: 'Vishal Singh',
        position: 'Software Developer',
        img: 'https://i.imgur.com/bv1acT2.jpg',
        desc: " This guy is an amazing frontend developer that delivered the task exactly how we need it, do  yourself a favour and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are with your project. i will surely work again with him.",
    },
    {
        id: '2',
        name: 'Umar Iftikhar',
        position: 'Marketing',
        img: 'https://i.imgur.com/kVGIFvG.jpg',
        desc: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancer. We'll definitely repeat with him.",
        featured:true,
    },
    {
        id: '3',
        name: 'Mohammad Haroon',
        position: 'Marketing',
        img: 'https://i.imgur.com/U04QzX3.jpeg',
        desc: " This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in HTML/CSS and JS technology, He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
    },
  ]


  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {testimonials.map((testimonial) => (
        <div key={testimonial.id} 
        className={testimonial.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/img/right-arrow.png" className='left' alt="" />
            <img src={testimonial.img} alt={testimonial.name} className='user' />
            <img src="assets/img/twitter.png" className='right' alt="" />
          </div>
          <div className="center">
            <small>
              {testimonial.desc}
            </small>
          </div>
          <div className="bottom">
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.position}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials