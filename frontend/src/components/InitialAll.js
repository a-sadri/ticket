// custom component
import ActionLine from './ActionLine';
import ContainerLayout from './ContainerLayout';
import Spinner from './shared/Spinner';
import Alerts from './shared/Alerts';

import ActionButtons from './shared/ActionButtons';

const InitialAll = ({
  actionline,
  rowHeadungs,
  data,
  error,
  isLoading,
  isSuccess,
  isError,
  children,
  setData,
  showURL,
}) => {
  const dataRowCreator = () => {
    const data = setData();

    const result = data.map((item) => {
      return Object.values(item);
    });

    return result;
  };

  const renderSwitch = (item) => {
    switch (item) {
      case true:
        return <span className='badge-success'>Published</span>;
      case false:
        return <span className='badge-error'>Draft</span>;
      case 'answered':
        return <span className='badge-success'>Answered</span>;
      case 'pending':
        return <span className='badge-warning'>Pending</span>;
      case 'completed':
        return <span className='badge-info'>Completed</span>;
      default:
        return <span>{item}</span>;
    }
  };

  return (
    <>
      <ActionLine
        title={actionline[0]}
        buttonText={actionline[1]}
        url={actionline[2]}
      />

      <ContainerLayout>
        <div className='grid grid-cols-4 text-center font-bold border divide-x p-3 m-2 rounded-lg col-start-1 col-end-5'>
          {rowHeadungs.map((heading) => (
            <div key={heading}>
              <h2>{heading}</h2>
            </div>
          ))}
        </div>

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

        {isSuccess &&
          data &&
          dataRowCreator().map((item, index) => (
            <div
              key={index}
              className='relative group border p-3 m-2 rounded-lg col-start-1 col-end-5'
            >
              <div className='grid grid-cols-4 text-center group-hover:blur-sm transition ease-in-out delay-75'>
                {item.slice(1).map((row, index) => (
                  <div className='first:text-left' key={index}>
                    {renderSwitch(row)}
                  </div>
                ))}
              </div>

              <ActionButtons showURL={item[0]} />
            </div>
          ))}
      </ContainerLayout>
    </>
  );
};

export default InitialAll;
