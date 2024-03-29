import "./contact.scss";
import emailjs, { sendForm } from '@emailjs/browser';
import { useRef, useState } from "react";


const Contact = () => {
    const formRef = useRef();

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  let Timeout;
      emailjs.sendForm('service_10q7uhm', 'template_qunjbyb', formRef.current, 'Z5UGP84jvjlZKm1M_')
        .then((result) => {
            Timeout=setTimeout(() => {
  setSuccess(true)
}, 1000);
          }).catch( (error) => {
            Timeout=setTimeout(() => {
  setError(true)
}, 1000);
          
        }).finally(){
          clearTimeout(Timeout)
          
        }
    };
  return (
    <div
      className="contact"
    >
      <div className="textContainer" >
        <h1 >Let's work together</h1>
        <div className="item" >
          <h3>Name</h3>
          <span>Mohammed Rafi</span>
        </div>
        <div className="item" >
          <h3>Mail</h3>
          <span>mohammedrafits6@gmail.com</span>
        </div>
        <div className="item" >
          <h3>Address</h3>
          <span>Vellore, Tamilnadu, India</span>
        </div>
      </div>
      <div className="formContainer">
        <div
          className="svgContainer"
        >
          <svg  viewBox="0 0 603 519">
            <path
              strokeWidth={1.6}
              d="M600.618 382.658C598.284 370.004 593.398 358.661 586.395 348.527L586.672 348.97C582.934 343.691 576.742 339.961 569.502 338.939L569.364 338.922L391.946 314.669C390.838 314.516 389.572 314.448 388.286 314.448C381.402 314.448 375.151 316.798 370.582 320.63C358.614 331.002 348.941 343.35 342.314 357.077L341.998 357.827C272.645 331.036 218.326 284.269 188.001 226.192L187.23 224.54C204.024 218.562 218.365 210.251 230.392 199.93C234.863 196.081 237.632 190.75 237.632 184.857C237.632 183.682 237.513 182.524 237.296 181.383L237.316 181.502L209.167 28.7317C207.96 22.362 203.608 17.0142 197.555 13.8634L197.437 13.8123C186.636 8.24312 173.996 4.13859 160.525 2.16297L159.872 2.07781C152.968 0.749376 145.036 0 136.906 0C136.431 0 135.976 0 135.502 0H135.581H135.383C60.768 0.476875 0.454969 52.4733 0 116.681V116.715C0.296719 338.752 209.266 518.67 467.134 518.925C541.828 518.55 602.28 466.537 602.735 402.278V402.244C602.754 401.75 602.754 401.171 602.754 400.575C602.754 394.222 601.983 388.023 600.499 382.045L600.618 382.624V382.658ZM467.174 476.398C236.584 476.177 49.7301 315.299 49.4729 116.783C49.8487 75.9253 88.2639 42.8847 135.699 42.6122C135.897 42.6122 136.174 42.6122 136.412 42.6122C141.337 42.6122 146.144 43.072 150.773 43.9576L150.338 43.8895C154.947 44.5537 159.002 45.4734 162.899 46.6656L162.404 46.5294L186.339 176.546C176.132 183.001 163.888 187.633 150.595 189.626L150.08 189.694C138.39 191.516 129.646 200.219 129.646 210.677C129.646 213.163 130.141 215.547 131.051 217.762L130.991 217.608C167.072 306.46 246.89 375.181 347.616 405.599L350.089 406.246C352.482 406.979 355.251 407.387 358.14 407.387C362.768 407.387 367.081 406.314 370.8 404.424L370.681 404.475C376.833 401.341 381.204 396.096 382.49 389.93L382.51 389.794C384.904 377.906 390.284 367.364 397.939 358.354L397.761 358.559L548.752 379.184C550.097 382.471 551.303 386.422 552.114 390.475L552.194 390.918C552.925 393.933 553.321 397.407 553.321 400.95C553.321 401.358 553.321 401.767 553.301 402.193V402.125C553.044 443 514.649 476.091 467.213 476.364H467.174V476.398ZM342.156 94.2169C341.602 94.1828 340.969 94.1487 340.317 94.1487C327.261 94.1487 316.638 103.107 316.302 114.28V114.314C316.282 114.654 316.263 115.046 316.263 115.438C316.263 126.781 326.529 136.046 339.506 136.727H339.565C404.17 139.827 455.206 185.692 455.206 241.81C455.206 245.301 455.008 248.741 454.632 252.148L454.672 251.722C454.672 263.473 465.75 273.011 479.399 273.011C493.048 273.011 504.125 263.473 504.125 251.722C504.382 248.724 504.521 245.233 504.521 241.707C504.521 162.921 432.873 98.5428 342.611 94.2339L342.156 94.2169ZM339.684 45.0306C348.19 45.4053 547.842 56.2712 547.842 251.722C547.842 263.473 558.919 273.011 572.568 273.011C586.217 273.011 597.295 263.473 597.295 251.722C597.592 247.651 597.75 242.883 597.75 238.097C597.75 113.343 485.373 11.1725 343.007 2.57172L342.136 2.53766C341.583 2.50359 340.93 2.46953 340.277 2.46953C327.182 2.46953 316.52 11.4791 316.223 22.7027C316.203 23.0262 316.184 23.418 316.184 23.7927C316.184 35.1695 326.549 44.4516 339.604 45.0306H339.684Z"
              fill="none"
            />
          </svg>
        </div>
        <form onSubmit={sendEmail} ref={formRef}>
          <label htmlFor="name">Name:</label>
          <input type="text" required id="name" name="name" placeholder="Name" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required id="email" placeholder="Email" />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows={8}
            placeholder="Message"
          />
          <button>Submit</button>
          <div>{success && "Success"  || error && "Error"}</div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
