import { forwardRef } from 'react';
import CustomForm from '../Form/Form';

const ThirdPage = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    style={{ display: 'flex', alignItems: 'center', marginTop: 150 }}
  >
    <CustomForm />
  </section>
));

export default ThirdPage;
