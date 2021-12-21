import ContainerLayout from './ContainerLayout';
import Alerts from './shared/Alerts';
import Spinner from './shared/Spinner';

const initial = ({ data, error, isLoading, isError, isSuccess, children }) => {
  return (
    <ContainerLayout>
      {isLoading && (
        <div>
          <div className='py-10'>
            <Spinner />
          </div>
        </div>
      )}

      {isError && (
        <div>
          <div className='py-10'>
            <Alerts alert='error' title={JSON.stringify(error.error)} />
          </div>
        </div>
      )}

      {isSuccess && data && children}
    </ContainerLayout>
  );
};

export default initial;
