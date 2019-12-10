import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ContactForm = () => {
  return (
    <form method="post" action="#">
      <div className="row gtr-uniform">
        <div className="col-6 col-12-xsmall">
          <input
            type="text"
            name="demo-name"
            id="demo-name"
            placeholder="Name"
          />
        </div>
        <div className="col-6 col-12-xsmall">
          <input
            type="email"
            name="demo-email"
            id="demo-email"
            placeholder="Email"
          />
        </div>
        {/* Break */}
        <div className="col-6 col-12-small">
          <input type="checkbox" id="demo-copy" name="demo-copy" />
          <label htmlFor="demo-copy">Email me a copy</label>
        </div>
        <div className="col-6 col-12-small">
          <input type="checkbox" id="demo-human" name="demo-human" />
          <label htmlFor="demo-human">I am a human</label>
        </div>
        {/* Break */}
        <div className="col-12">
          <textarea
            name="demo-message"
            id="demo-message"
            placeholder="Enter your message"
            rows={6}
            defaultValue={""}
          />
        </div>
        {/* Break */}
        <div className="col-12">
          <ul className="actions">
            <li>
              <input
                type="submit"
                defaultValue="Send Message"
                className="primary"
              />
            </li>
            <li>
              <input type="reset" defaultValue="Reset" />
            </li>
          </ul>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
