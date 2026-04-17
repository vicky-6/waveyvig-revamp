import React from 'react'
import whyChoose from '../../data/whyChooseData'

const WhyChoose = () => {
  return (
    <section className="py-5 text-white" style={{ backgroundColor: "#1a1a4b", padding: "50px 0" }}>
          <div className="container">
            <h2 className="text-center fw-bold text-info mb-4">
              Why Choose WaveyvigTech?
            </h2>
            <div className="row">
              {whyChoose.map((item) => (
                <div key={item.id} className="col-md-3 mb-4">
                  <div className="card h-100 text-center p-3">
                    <div className="fs-2">{item.icon}</div>
                    <h5 className="mt-3 text-primary">{item.title}</h5>
                    <p className="text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4 p-3 border rounded">
              <h5 className="fw-bold">
                Ready to start your digital transformation journey?
              </h5>
              <button className="btn btn-primary me-2">Get in Touch</button>
              <button className="btn btn-outline-info">Learn More About Us</button>
            </div>
          </div>
        </section>
  )
}

export default WhyChoose