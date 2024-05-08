import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <section className="footer_section1">
        <p className="footer_section1_title">Newsletter</p>
        <p>
          Be the first one to know about discounts, offers, and events weekly in
          your mailbox. Unsubscribe whenever you like with one click.
        </p>
        <input
          type="text"
          placeholder="icon Enter your email"
        />
        <button className="footer_submit">Submit</button>
      </section>
      <section className="footer_section2">
        <div>
          <Image
            src="/img/sm-logo-no-bg.png"
            height={25}
            width={35}
            alt="logo"
          />
          {/* add fa register  */}
          <p className="footer_brand">teduhan </p>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est rem
          consequatur omnis sint ipsum, sequi laboriosam non aut atque dolore in
          consectetur saepe obcaecati ab, voluptatem provident molestias
          laboriosam veniam earum error, aliquam iusto nulla, minima fugit rerum
          quam et mollitia voluptatem vel...
          <span className="footer_read">Read More</span>
        </p>
        icon, icon, icon
      </section>
      <section className="footer_section3">
        <ul>
          <li> About</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Jobs</li>
          <li>In Press</li>
        </ul>
        <ul>
          <li>Support</li>
          <li>Contact Us</li>
          <li>Online Chat</li>
          <li>WhatsApp</li>
          <li>Telegram</li>
          <li>Ticketing</li>
        </ul>
        <ul>
          <li> FAQ</li>
          <li>Account</li>
          <li>Manage Deliveries</li>
          <li>Orders</li>
          <li>Payments</li>
          <li>Returns</li>
        </ul>
      </section>
      <section className="footer_section4">
        <p> &copy; 2000-2023 Firman Jabbar, All Rights Reserved</p>
      </section>
    </footer>
  );
}
