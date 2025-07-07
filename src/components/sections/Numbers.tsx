import { Container } from '../shared/Container';

export const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="max-w-lg md:max-w-none md:flex justify-center items-center">
        <div
          className="lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg
				            		border border-box-border shadow-lg shadow-box-shadow divide-y md:divide-y-0 md:divide-x divide-box-border
												grid grid-cols-1 md:grid-cols-4 gap-y-4"
        >
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {' '}
              100+{' '}
            </h2>
            <p className="mt-2 text-heading-3 pb-5"> AI Models Implemented</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {' '}
              250+{' '}
            </h2>
            <p className="mt-2 text-heading-3 pb-5"> Enterprise Clients</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {' '}
              99.9%{' '}
            </h2>
            <p className="mt-2 text-heading-3 pb-5"> Uptime Guarantee</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {' '}
              10+{' '}
            </h2>
            <p className="mt-2 text-heading-3 pb-5"> Years of Innovation</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
