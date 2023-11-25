import { forwardRef } from 'react';

const SecondPage = forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} style={{ backgroundImage: 'url(./wp.jpg)' }}>
    <div className="button-container">
      <a href="#" className="button">
        button
      </a>
    </div>
  </section>
));

export default SecondPage;
