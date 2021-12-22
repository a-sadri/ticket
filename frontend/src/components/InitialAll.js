import moment from 'moment';
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
  rowData,
  showURL,
}) => {
  const dataCreator = () => {
    const filtered = data.map((item) =>
      Object.keys(item)
        .filter((key) => rowData.includes(key))
        .reduce((obj, key) => {
          obj[key] = item[key];
          return obj;
        }, {})
    );
    return filtered;
  };

  const dataRowCreator = () => {
    const data = dataCreator();

    const result = data.map((item) => {
      return Object.values(item);
    });

    return result;
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
          dataRowCreator().map((row, index) => (
            <div
              key={index}
              className='relative group border p-3 m-2 rounded-lg col-start-1 col-end-5'
            >
              <div className='grid grid-cols-4 group-hover:blur-sm transition ease-in-out delay-75'>
                {row.slice(1).map((item, index) => (
                  <div key={index}>
                    {typeof item !== 'boolean' ? (
                      item
                    ) : item == true ? (
                      <span className='badge-success'>Published</span>
                    ) : (
                      <span className='badge-error'>Draft</span>
                    )}
                  </div>
                ))}
              </div>

              <ActionButtons showURL={`${row[0]}`} />
            </div>
          ))}
      </ContainerLayout>
    </>
  );
};

export default InitialAll;
