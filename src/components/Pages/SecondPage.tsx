import { forwardRef } from 'react';

const SecondPage = forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref}>
    <div className="button-container">
      <a href="#" className="button">
        button
      </a>
    </div>
  </section>
));

export default SecondPage;
